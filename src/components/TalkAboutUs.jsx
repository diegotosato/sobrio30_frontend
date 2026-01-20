import './TalkAboutUs.css';

export default function TalkAboutUs() {

    const gazzettino = 'https://www.ilgazzettino.it/nordest/venezia/sobrio30_integratore_salva_patente_contro_alcol_come_funziona_dove_trovarlo-9211845.html';
    const enordest = 'https://www.enordest.it/2025/11/02/arriva-sobrio30-un-aiuto-per-non-incorrere-nel-nuovo-codice-della-strada/';
    const polesine24 = 'https://www.polesine24.it/cronaca/2025/11/26/news/lo-bevi-e-torni-sobrio-scacco-all-alcoltest-383195/';

    return (
        <>
            <section className="talk-about-us">

                <div className="container">

                    <h2 className="section-title">
                        Parlano di noi:
                    </h2>

                </div>

                <div className="container d-flex j-c-between a-i-center">


                    <div className="talk-link">
                        <a href={gazzettino} target="_blank" rel="noopener noreferrer">
                            <div className="link-preview">
                                G
                            </div>
                            Gazzettino
                        </a>
                    </div>

                    <div className="talk-link">
                        <a href={enordest} target="_blank" rel="noopener noreferrer">
                            <div className="link-preview">
                                è
                            </div>
                            èNordEst
                        </a>
                    </div>

                    <div className="talk-link">
                        <a href={polesine24} target="_blank" rel="noopener noreferrer">
                            <div className="link-preview">
                                P
                            </div>
                            Polesine24
                        </a>
                    </div>

                    {/* <div className="talk-link">
                        <div className="link-preview"></div>
                        <a href="#">
                            Gazzettino
                        </a>
                    </div> */}

                </div>

            </section>
        </>
    );
}