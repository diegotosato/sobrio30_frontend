import { Coins, Key, IdentificationCard, Gavel, Wine, SteeringWheel } from "@phosphor-icons/react";
import './StreetCode.css';

export default function StreetCode() {
    return (
        <>
            <section className="street-code">

                <div className="container">

                    <h2 className="section-title">
                        Il nuovo Codice della Strada ha cambiato le regole del gioco
                    </h2>

                    <div className="d-flex j-c-between">

                        <div className="scheda-sx">

                            <h3>Per chi guida</h3>

                            <div className="scheda-row">

                                <div className="icona-scheda">
                                    <Coins />
                                </div>
                                <div className="testo-scheda">
                                    <h3>Multa</h3>
                                </div>
                            </div>
                            <div className="scheda-row">

                                <div className="icona-scheda">
                                    <Key />
                                </div>
                                <div className="testo-scheda">
                                    <h3>Sequestro del veicolo</h3>
                                </div>
                            </div>
                            <div className="scheda-row">

                                <div className="icona-scheda">
                                    <IdentificationCard />
                                </div>
                                <div className="testo-scheda">
                                    <h3>Sospensione della patente (da 3 a 6 mesi, fino a 2 anni)</h3>
                                </div>
                            </div>
                            <div className="scheda-row">

                                <div className="icona-scheda">
                                    <Gavel />
                                </div>
                                <div className="testo-scheda">
                                    <h3>Processo Penale</h3>
                                    <p>
                                        Pene aggravate per neopatentati e conducenti professionali
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="scheda-dx">

                            <h3>Per i ristoratori</h3>

                            <div className="scheda-row">

                                <div className="icona-scheda">
                                    <Wine />
                                </div>
                                <div className="testo-scheda">
                                    <h3>
                                        I ristoratori hanno registrato un notevole calo delle vendite
                                        di vino e liquori
                                    </h3>
                                </div>
                            </div>

                            <div className="scheda-row">

                                <div className="icona-scheda">
                                    <SteeringWheel />
                                </div>
                                <div className="testo-scheda">
                                    <h3>
                                        I clienti vivono con l'ansia di mettersi al volante,
                                        limitando i consumi e la convivialità
                                    </h3>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}