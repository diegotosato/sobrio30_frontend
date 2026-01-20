import { FirstAid, Brain, Feather, ShieldCheck, Note } from "@phosphor-icons/react";

export default function Results() {
    return (
        <>
            <section className="results">

                <div className="container">

                    <h2 className="section-title">
                        Risultati chiari, benefici percepiti
                    </h2>

                    <div className="cards">

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title-number">90%</div>
                                <div className="card-text">
                                    Ha percepito un miglioramento della digestione (71% evidente, 19% moderato)
                                </div>
                            </div>
                            <div className="card-img">
                                <FirstAid />
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title-number">76%</div>
                                <div className="card-text">
                                    Ha percepito un tempo di recupero della lucidità più rapido
                                </div>
                            </div>
                            <div className="card-img">
                                <Brain />
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title-number">89%</div>
                                <div className="card-text">
                                    Ha riscontrato una riduzione della sensazione di pesantezza post-pasto
                                </div>
                            </div>
                            <div className="card-img">
                                <Feather />
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-title-number">95%</div>
                                <div className="card-text">
                                    Tollerabilità eccellente, <br />
                                    senza effetti indesiderati
                                </div>
                            </div>
                            <div className="card-img">
                                <ShieldCheck />
                            </div>
                        </div>

                    </div>

                    <div className="banner-results">
                        <div className="card-img">
                            <Note />
                        </div>
                        <h3>
                            Dati basati su percezione soggettiva dei partecipanti alla
                            valutazione funzionale interna
                        </h3>

                    </div>

                </div>

            </section>
        </>
    );
}