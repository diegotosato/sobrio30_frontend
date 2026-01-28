import NewVisual from '../assets/NewVisual.png';
import './HeroSpace.css';

export default function HeroSpace() {
    return (
        <>
            <div className="herospace" id='home'>

                <div className="container">

                    <div className="d-flex j-c-between a-i-center hero-wrapper">

                        <div className="hero-slogan">
                            <h1 className='slogan'>VIVI LA SERATA, PENSA AL RITORNO</h1>
                            <p className='phrase'>
                                Il tuo partner intelligente per la sicurezza e il benessere.
                            </p>
                            <p className="phrase">
                                Sobrio30® è un integratore alimentare funzionale, 100% naturale, studiato per supportare il metabolismo prima e dopo
                                il consumo di cibo e alcool durante i momenti di maggiore stress digestivo.
                            </p>
                            <span>Quando assumerlo:
                                preferibilmente prima del pasto o prima del consumo di alcool.
                            </span>
                        </div>

                        <div className="visual">
                            <img src={NewVisual} alt="visual" />
                            <strong>
                                Prodotto incluso nel registro degli integratori
                                del Ministero della Salute Italiana; codice 204836
                            </strong>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}