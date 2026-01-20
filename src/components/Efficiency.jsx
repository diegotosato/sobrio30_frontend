import { AddressBook, UsersThree, CalendarDots, ClockUser, Globe } from "@phosphor-icons/react";
import './Efficiency.css';

export default function Efficiency() {
    return (
        <>
            <section className="efficiency">

                <div className="container">

                    <h2 className="section-title">
                        L'efficacia di Sobrio30: la parola ai dati
                    </h2>
                    <p className="section-desc">Risultati delle nostra valutazione funzionale interna</p>

                    <div className="efficiency-scheda">

                        <div className="scheda-row">
                            <div className="icona-scheda">
                                <AddressBook />
                            </div>
                            <div className="testo-scheda">
                                <h3>Tipo:</h3>
                                <p>
                                    Studio osservazione interno, non clinico
                                </p>
                            </div>
                        </div>

                        <div className="scheda-row">
                            <div className="icona-scheda">
                                <UsersThree />
                            </div>
                            <div className="testo-scheda">
                                <h3>Campione:</h3>
                                <p>
                                    62 volontari: (36 uomini, 26 donne)
                                </p>
                            </div>
                        </div>

                        <div className="scheda-row">
                            <div className="icona-scheda">
                                <CalendarDots />
                            </div>
                            <div className="testo-scheda">
                                <h3>Periodo di osservazione:</h3>
                                <p>
                                    120 giorni
                                </p>
                            </div>
                        </div>

                        <div className="scheda-row">
                            <div className="icona-scheda">
                                <ClockUser />
                            </div>
                            <div className="testo-scheda">
                                <h3>Età media:</h3>
                                <p>
                                    41.8 anni
                                </p>
                            </div>
                        </div>

                        <div className="scheda-row">
                            <div className="icona-scheda">
                                <Globe />
                            </div>
                            <div className="testo-scheda">
                                <h3>Contesto:</h3>
                                <p>
                                    Utilizzo in condizioni reali di vita reale
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="banner-results">
                        <h3>
                            Questa analisi interna non costituisce uno studio clinico
                            e non attribuisce proprietà terapeutiche. <br />
                            I risultati si basano in gran parte sulla percezione soggettiva
                            dei volontari e lo studio è stato condotto senza gruppo placebo
                        </h3>

                    </div>

                </div>

            </section>
        </>
    );
}