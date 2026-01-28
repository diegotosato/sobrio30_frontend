import { Repeat, CaretCircleDoubleRight, ChefHat, UserCheck, ClockAfternoon, Leaf } from "@phosphor-icons/react";
import './WhatIsSobrio.css';

export default function WhatIsSobrio() {
    return (
        <>
            <section className="what-is-sobrio">

                <div className="container">

                    <h2 className="section-title">Cose'è Sobrio30?</h2>
                    <p className="section-desc">
                        Sobrio30® è un integratore naturale, non un medicinale.
                        La sua formula combina estratti vegetali selezionati, tradizionalmente utilizzati per il supporto digestivo ed epato-biliare,
                        in un formato pratico e immediato.
                        È pensato per chi desidera vivere la convivialità con maggiore consapevolezza, senza rinunciare al benessere.
                    </p>

                    <div className="cards">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Supporta il metabolismo</div>
                                <div className="card-text">
                                    nei processi coinvolti nel recupero dopo l’assunzione di alcool
                                </div>
                            </div>
                            <div className="card-img">
                                <Repeat />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Azione Detox</div>
                                <div className="card-text">
                                    Supporta le normali funzioni fisiologiche del fegato
                                </div>
                            </div>
                            <div className="card-img">
                                <CaretCircleDoubleRight />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Recupero Post-Pasto</div>
                                <div className="card-text">
                                    Contribuisce ad alleviare la sensazione di gonfiore e pesantezza dopo pasti abbondanti, sostenendo la funzione digestiva e la motilità gastrointestinale
                                </div>
                            </div>
                            <div className="card-img">
                                <ChefHat />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Lucidità</div>
                                <div className="card-text">
                                    Favorisce una sensazione di maggiore equilibrio e benessere dopo la serata
                                </div>
                            </div>
                            <div className="card-img">
                                <UserCheck />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">L’aiuto del giorno dopo </div>
                                <div className="card-text">
                                    Aiuta a contrastare la sensazione di affaticamento e malessere del giorno dopo
                                </div>
                            </div>
                            <div className="card-img">
                                <ClockAfternoon />
                            </div>
                        </div>
                    </div>

                    <div className="banner-natural">
                        <div className="card-img">
                            <Leaf />
                        </div>
                        <h3>
                            100% di derivazione naturale.
                            Nessuna sostanza chimica di sintesi.
                            Nessuna controindicazione.
                        </h3>

                    </div>

                </div>

            </section>
        </>
    );
}