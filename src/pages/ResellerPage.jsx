import Visual from '../assets/Visual.png';
import { FilePdf } from '@phosphor-icons/react'
import './ResellerPage.css';
import SendMail from '../components/SendMail';

export default function HomePage() {



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

                    <SendMail />
                </div>

            </section>


        </>
    )
}