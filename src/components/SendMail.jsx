import { useEffect, useState } from 'react';
import axios from 'axios';
import './SendMail.css';
import { Warning } from '@phosphor-icons/react';

const initialData = {
    type: 'privato',
    name: '',
    activityName: '',
    activityType: '',
    email: '',
    phone: '',
    address: '',
    message: '',
};

export default function SendMail() {
    const [formData, setFormData] = useState(initialData);
    const [validation, setValidation] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);
    const [sendError, setSendError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);



    const isAzienda = formData.type === 'azienda';

    const requiredFields = isAzienda
        ? ['activityName', 'name', 'activityType', 'email', 'phone', 'address']
        : ['name', 'email', 'phone', 'address'];

    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    useEffect(() => {
        setIsDisabled(!isFormValid);
    }, [formData, isFormValid]);

    function handleChange(field, value) {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSendError(false);
        setSendSuccess(false);

        if (!isFormValid) {
            setValidation(true);
            return;
        }

        setValidation(false);

        try {
            const payload = {
                type: formData.type,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                message: formData.message,
                activityName: isAzienda ? formData.activityName : undefined,
                activityType: isAzienda ? formData.activityType : undefined,
            };
            // const response = await axios.post(
            //     `${import.meta.env.VITE_API_URL}/send-emails`,
            //     payload,
            //     { headers: { 'Content-Type': 'application/json' } }
            // );

            const response = await axios.post(
                'http://localhost:5000/send-emails',
                payload,
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (response.status === 204 || response.data?.success) {
                setSendSuccess(true);
                setFormData(initialData);
            } else {
                setSendError(true);
            }
        } catch {
            setSendError(true);
        }
    }

    function renderInput(label, field, type = 'text') {
        return (
            <div className="module-col">
                <label>{label} (*)</label>
                <input
                    type={type}
                    value={formData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                />
                {validation && !formData[field] && (
                    <span className="warning-text">
                        <Warning /> Campo obbligatorio
                    </span>
                )}
            </div>
        );
    }


    return (
        <div className="contact-form">

            {
                sendSuccess &&
                <div className="send-alert">
                    <span className='send-success'>Email inviata con successo!</span>
                    <button
                        className='close-alert'
                        onClick={() => setSendSuccess(false)}>
                        OK
                    </button>
                </div>
            }

            {
                sendError &&
                <div className="send-alert">
                    <span className='send-error'>Errore nell'invio dell'email. Riprova più tardi.</span>
                    <button
                        className='close-alert'
                        onClick={() => setSendError(false)}>
                        OK
                    </button>
                </div>
            }

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="type-choice">

                    <span>Sei un:</span>

                    <div className="type-choice-module-col">
                        <input
                            type="radio"
                            name="type"
                            id="privato"
                            value={'privato'}
                            checked={formData.type === 'privato'}
                            onChange={() => handleChange('type', 'privato')} />
                        <label htmlFor='privato'>Privato</label>
                    </div>

                    <div className="type-choice-module-col">
                        <input
                            type="radio"
                            name="type"
                            id="azienda"
                            value={'azienda'}
                            checked={formData.type === 'azienda'}
                            onChange={() => handleChange('type', 'azienda')} />
                        <label htmlFor='azienda'>Attività commerciale</label>
                    </div>
                </div>

                <div className="module">
                    {
                        renderInput(formData.type === 'azienda' ? 'Nome e Cognome del referente' : 'Nome e Cognome', 'name')
                    }

                    {isAzienda && renderInput('Nome attività', 'activityName')}
                    {isAzienda && renderInput('Tipo di attività', 'activityType')}

                    {renderInput('Email', 'email', 'email')}
                    {renderInput('Telefono', 'phone', 'tel')}
                    {renderInput('Indirizzo', 'address')}

                    <div className="module-col-100">
                        <label htmlFor="message">Scrivi il tuo messaggio</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder='Scrivi qui il tuo messaggio...'
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}>
                        </textarea>
                    </div>

                    <span>(*) Campi obbligatori</span>
                </div>

                <button type="submit" disabled={!isFormValid}>Invia</button>
            </form >
        </div >
    )
}