import Logo from '../assets/logo.png';
import Visual from '../assets/Visual.png';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { FilePdf } from '@phosphor-icons/react'
import './ResellerPage.css';
import axios from 'axios';

export default function HomePage() {

    const [formType, setFormType] = useState('privato');

    // Stati per tutti i campi
    const [privateData, setPrivateData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const [commercialData, setCommercialData] = useState({
        activityName: '',
        activityRepresentative: '',
        activityType: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });


    async function handleSubmit(e) {
        e.preventDefault();

        let data;

        if (formType === 'privato') {
            // Validazione campi obbligatori per privato
            if (!privateData.name || !privateData.email || !privateData.phone || !privateData.address) {
                alert('Compila tutti i campi obbligatori (Nome, Email, Telefono, Indirizzo)');
                return;
            }
            data = {
                type: formType,
                ...privateData
            };
        } else {
            // Validazione campi obbligatori per azienda
            if (!commercialData.activityRepresentative || !commercialData.email ||
                !commercialData.phone || !commercialData.address) {
                alert('Compila tutti i campi obbligatori (Referente, Email, Telefono, Indirizzo)');
                return;
            }
            // Per attività commerciali, mappiamo activityRepresentative a name
            data = {
                type: formType,
                name: commercialData.activityRepresentative,
                email: commercialData.email,
                phone: commercialData.phone,
                address: commercialData.address,
                message: commercialData.message,
                activityName: commercialData.activityName,
                activityType: commercialData.activityType
            };
        }

        console.log('Invio dati:', data);

        try {
            const response = await axios.post(
                'http://localhost:5000/send-email',
                data,
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log('Risposta server:', response);

            // Status 204 = successo senza contenuto, oppure success: true
            if (response.status === 204 || response.data?.success) {
                alert('Email inviata con successo!');
                // Reset del form
                if (formType === 'privato') {
                    setPrivateData({
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        message: ''
                    });
                } else {
                    setCommercialData({
                        activityName: '',
                        activityRepresentative: '',
                        activityType: '',
                        email: '',
                        phone: '',
                        address: '',
                        message: ''
                    });
                }
            } else {
                alert('Errore: ' + response.data.error);
            }

        } catch (err) {
            console.error('Errore completo:', err);
            console.error('Risposta errore:', err.response);

            if (err.response) {
                // Errore dal server
                const errorMsg = err.response.data?.error || err.response.data?.details || 'Errore sconosciuto';
                alert('Errore server: ' + errorMsg);
                console.log('Dettagli errore server:', err.response.data);
            } else if (err.request) {
                // Nessuna risposta dal server
                alert('Nessuna risposta dal server. Assicurati che il backend sia avviato su http://localhost:5000');
                console.log('Nessuna risposta ricevuta');
            } else {
                // Altro errore
                alert('Errore: ' + err.message);
            }
        }
    }



    return (
        <>
            <section className="herospace" id='reseller'>

                <div className="container d-flex j-c-between a-i-center">

                    <div className="hero-slogan">
                        <h1 className='slogan'>Diventa Rivenditore Sobrio30</h1>
                        <p className='phrase'>Se sei il proprietario di un ristorante, bar, pub o locale notturno e stai cercando un prodotto innovativo da proporre ai tuoi clienti, Sobrio30 è la soluzione ideale</p>
                        <p className="phrase">Un pratico stick da bere al bisogno direttamente dalla bustina o diluito in poca acqua</p>
                        <br />
                        <br />
                        <span>Sobrio30 è un integratore alimentare pensato per accompagnare il consumo di alcol, offrendo un supporto mirato al metabolismo dopo la serata. Un prodotto sempre più richiesto da chi desidera vivere la serata in modo responsabile e pensare al rientro
                        </span>
                    </div>

                    <div className="visual">
                        <img src={Visual} alt="visual" />
                    </div>

                </div>

            </section>



            <section className="becoming-reseller">

                <div className="container">

                    <h2 className="section-title">
                        Perché diventare rivenditore Sobrio30?
                    </h2>

                    <div className="resell-scheda-text">
                        <p>Entrare nella rete dei rivenditori Sobrio30 significa: <br />
                            - ampliare la tua offerta con un prodotto ad alto valore percepito <br />
                            - distinguerti come locale attento alla sicurezza e al benessere dei clienti <br />
                            - aumentare le opportunità di vendita con un prodotto facile da proporre <br />
                            - ricevere materiale espositivo dedicato per il punto vendita <br />
                            Sobrio30 è adatto a ristoranti, bar, lounge bar, discoteche, wine bar e locali serali
                        </p>
                    </div>

                    <h2 className='section-title'>
                        Scarica la brochure rivenditori Sobrio30
                    </h2>
                    <div className="resell-scheda-text">
                        <p>Scaricando la brochure per rivenditori Sobrio30 potrai approfondire:
                            le caratteristiche del prodotto,
                            i vantaggi per il tuo locale,
                            le modalità di esposizione e vendita,
                            le opportunità di collaborazione
                        </p>

                        <div className="downloader">
                            <a href="/files/Sobrio30_Brochure.pdf" download>
                                <FilePdf />
                                Scarica la nostra brochure
                            </a>
                        </div>
                    </div>

                    <h2 className='section-title'>
                        Come diventare rivenditore Sobrio30?
                    </h2>
                    <div className="resell-scheda-text">
                        <p>Compila il form di contatto presente in questa pagina.
                            Un nostro rappresentante commerciale ti ricontatterà per illustrarti: <br />
                            - le modalità di fornitura <br />
                            - le condizioni riservate ai rivenditori <br />
                            - le soluzioni espositive disponibili <br />
                            - il supporto commerciale dedicato <br />
                        </p>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="type-choice">

                                <span>Sei un:</span>

                                <div className="type-choice-module-col">
                                    <input
                                        type="radio"
                                        name="type"
                                        id="privato"
                                        value={'privato'}
                                        checked={formType === 'privato'}
                                        onChange={() => setFormType('privato')} />
                                    <label htmlFor='privato'>Privato</label>
                                </div>

                                <div className="type-choice-module-col">
                                    <input
                                        type="radio"
                                        name="type"
                                        id="azienda"
                                        value={'azienda'}
                                        checked={formType === 'azienda'}
                                        onChange={() => setFormType('azienda')} />
                                    <label htmlFor='azienda'>Attività commerciale</label>
                                </div>
                            </div>

                            {
                                formType === 'privato' &&
                                <div className="private-module">
                                    <div className="module-col">
                                        <label htmlFor="name-surname">Nome e Cognome</label>
                                        <input
                                            type="text"
                                            id="name-surname"
                                            value={privateData.name}
                                            onChange={(e) => setPrivateData({ ...privateData, name: e.target.value })} />
                                    </div>

                                    <div className="module-col">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={privateData.email}
                                            onChange={(e) => setPrivateData({ ...privateData, email: e.target.value })} />
                                    </div>


                                    <div className="module-col">
                                        <label htmlFor="phone">Telefono</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={privateData.phone}
                                            onChange={(e) => setPrivateData({ ...privateData, phone: e.target.value })} />
                                    </div>


                                    <div className="module-col">
                                        <label htmlFor="address">Indirizzo</label>
                                        <input
                                            type="text"
                                            id="address"
                                            value={privateData.address}
                                            onChange={(e) => setPrivateData({ ...privateData, address: e.target.value })} />
                                    </div>

                                    <div className="module-col-100">
                                        <label htmlFor="message">Scrivi il tuo messaggio</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder='Scrivi qui il tuo messaggio...'
                                            value={privateData.message}
                                            onChange={(e) => setPrivateData({ ...privateData, message: e.target.value })}>
                                        </textarea>
                                    </div>

                                </div>
                            }

                            {
                                formType === 'azienda' &&
                                <div className="commercial-module">
                                    <div className="module-col">
                                        <label htmlFor="activity-name">Nome attività</label>
                                        <input
                                            type="text"
                                            id="activity-name"
                                            value={commercialData.activityName}
                                            onChange={(e) => setCommercialData({ ...commercialData, activityName: e.target.value })}
                                        />
                                    </div>

                                    <div className="module-col">
                                        <label htmlFor="activity-representative">Nome e Cognome del referente</label>
                                        <input
                                            type="text"
                                            id="activity-representative"
                                            value={commercialData.activityRepresentative}
                                            onChange={(e) => setCommercialData({ ...commercialData, activityRepresentative: e.target.value })}
                                        />
                                    </div>

                                    <div className="module-col">
                                        <label htmlFor="activity-type">Tipo di attività</label>
                                        <input
                                            type="text"
                                            id="activity-type"
                                            value={commercialData.activityType}
                                            onChange={(e) => setCommercialData({ ...commercialData, activityType: e.target.value })}
                                        />
                                    </div>


                                    <div className="module-col">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={commercialData.email}
                                            onChange={(e) => setCommercialData({ ...commercialData, email: e.target.value })}
                                        />
                                    </div>


                                    <div className="module-col">
                                        <label htmlFor="phone">Telefono</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={commercialData.phone}
                                            onChange={(e) => setCommercialData({ ...commercialData, phone: e.target.value })}
                                        />
                                    </div>

                                    <div className="module-col">
                                        <label htmlFor="address">Indirizzo</label>
                                        <input
                                            type="text"
                                            id="address"
                                            value={commercialData.address}
                                            onChange={(e) => setCommercialData({ ...commercialData, address: e.target.value })}
                                        />
                                    </div>

                                    <div className="module-col-100">
                                        <label htmlFor="message">Scrivi il tuo messaggio</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder='Scrivi qui il tuo messaggio...'
                                            value={commercialData.message}
                                            onChange={(e) => setCommercialData({ ...commercialData, message: e.target.value })}>
                                        </textarea>
                                    </div>
                                </div>
                            }

                            <button type="submit">Invia</button>
                        </form>
                    </div>
                </div>

            </section>


        </>
    )
}