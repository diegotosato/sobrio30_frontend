import Visual from '../assets/Visual.png';
import './HeroSpace.css';

export default function HeroSpace() {
    return (
        <>
            {/* Il tuo partner intelligente per la sicurezza e il benessere
Sobrio30® è un integratore alimentare funzionale a base naturale, studiato per supportare l’organismo prima e dopo il consumo di alcool e durante i momenti di maggiore stress digestivo.
Un pratico stick liquido, da assumere direttamente dalla bustina o diluito in poca acqua, ideale anche fuori casa.
👉 Quando assumerlo:
preferibilmente prima del pasto o prima del consumo di alcool.
 */}
            <div className="herospace" id='home'>

                <div className="container">

                    <div className="d-flex j-c-between a-i-center hero-wrapper">

                        <div className="hero-slogan">
                            <h1 className='slogan'>VIVI LA SERATA, PENSA AL RITORNO</h1>
                            <p className='phrase'>
                                Il tuo partner intelligente per la sicurezza e il benessere.
                            </p>
                            <p className="phrase">
                                Sobrio30® è un integratore alimentare funzionale a base naturale, studiato per supportare l’organismo prima e dopo
                                il consumo di alcool e durante i momenti di maggiore stress digestivo.
                            </p>
                            <span>Quando assumerlo:
                                preferibilmente prima del pasto o prima del consumo di alcool.
                            </span>
                        </div>

                        <div className="visual">
                            <img src={Visual} alt="visual" />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}