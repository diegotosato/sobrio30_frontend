import Visual from '../assets/Visual.png';
import './HeroSpace.css';

export default function HeroSpace() {
    return (
        <>
            <div className="herospace" id='home'>

                <div className="container">

                    <div className="d-flex j-c-between a-i-center hero-wrapper">

                        <div className="hero-slogan">
                            <h1 className='slogan'>VIVI LA SERATA, PENSA AL RITORNO</h1>
                            <p className='phrase'>Il tuo partner intelligente per la sicurezza e il benessere.</p>
                            <p className="phrase">Un pratico stick da bere al bisogno direttamente dalla bustina o diluito in poca acqua</p>
                            <div className="small">Da consumare preferibilmente prima del pasto o del consumo di alcool</div>
                            <span>Dove puoi trovarmi? <br />
                                Supermercati, Locali affiliati, Farmacie
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