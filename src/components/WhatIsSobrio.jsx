import { Repeat, CaretCircleDoubleRight, ChefHat, UserCheck, ClockAfternoon, Leaf } from "@phosphor-icons/react";
import './WhatIsSobrio.css';

export default function WhatIsSobrio() {
    return (
        <>
            <section className="what-is-sobrio">

                <div className="container">

                    <h2 className="section-title">Cose'è Sobrio30?</h2>
                    <p className="section-desc">
                        Sobrio30 è un integratore funzionale a base naturale,
                        non un medicinale. Una sapiente miscela di estratti vegetali
                        in un pratico stick da bere
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
                                    favorisce la disintossicazione del fegato e funge da epatoprotettore
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
                                    Elimina gonfiore, pesantezza, nausea e mal di testa post-abbuffata, sostenendo la funzione digestiva e la motilità gastrointestinale
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
                                    Aiuta a ritrovare rapidamente prontezza di riflessi e lucidità mentale
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