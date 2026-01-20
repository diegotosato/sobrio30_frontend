import Etilometro from "../assets/etilometro.png";
import './Breathalyzer.css';

export default function Breathalyzer() {
    return (
        <>
            <section className="breathalyzer">

                <div className="container">

                    <h2 className="section-title">
                        Osservazioni strumentali: un dato di coerenza
                    </h2>

                    <div className="breathalyzer-row">

                        <div className="breathalyzer-img">
                            <img src={Etilometro} alt="Breathalyzer Sobrio30" />
                        </div>

                        <div className="breathalyzer-text">
                            <p>
                                In un sottogruppo di partecipanti, le misurazioni con etilometro
                                a 30-35 minuti dall'ultima assunzione di alcool hanno rilevato valori medi
                                compresi tra <strong>0.3 e 0.4 mg/L</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="breathalyzer-banner">
                        <h3>
                            Nota regolatoria fondamentale
                        </h3>
                        <p>
                            Queste misurazioni non costituiscono studio clinico e non rappresentano
                            un claim di riduzione dell'alcolemia
                        </p>
                        <p>
                            Non hanno valore medico-legale e non garantiscono l'idonità alla guida
                        </p>
                        <p>
                            Sobrio30 favorisce il ritorno entro i limiti di legge,
                            ma la responsabilità resta sempre individuale
                        </p>
                    </div>

                </div>

            </section>
        </>
    )
}