import Boldo from "../assets/boldo.png";
import CardoMariano from "../assets/cardo_mariano.png";
import Clorofilla from "../assets/clorofilla.png";
import Genziana from "../assets/genziana.png";
import Malva from "../assets/malva.png";
import Rafano from "../assets/rafano.png";
import './Composition.css';

export default function Composition() {
    return (
        <>
            <section className="composition">

                <div className="container">

                    <table>
                        <thead>
                            <tr>
                                <th colSpan={3}>Una formula trasparente, solo estratti vegetali puri</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-bottom border-right">
                                    <div className="plant-img">
                                        <img src={Boldo} alt="Boldo" />
                                    </div>
                                    <div className="plant-desc">
                                        <h3>Boldo</h3>
                                        <p>Migliora le turbe dispeptiche di origine epato-biliare</p>
                                        <strong>Quantità:</strong> 0.77 mg
                                    </div>
                                </td>
                                <td className="border-bottom border-right">
                                    <div className="plant-img">
                                        <img src={CardoMariano} alt="Cardo Mariano" />
                                    </div>
                                    <div className="plant-desc">
                                        <h3>Cardo Mariano</h3>
                                        <p>Spiccata azione epatoprotettiva, antiossidante e rigenerante</p>
                                        <strong>Quantità:</strong> 0.77 mg
                                    </div>
                                </td>
                                <td className="border-bottom">
                                    <div className="plant-img">
                                        <img src={Genziana} alt="Genziana" />
                                    </div>
                                    <div className="plant-desc">
                                        <h3>Genziana</h3>
                                        <p>Il migliore amaro-tonico-digestivo, stimola le secrezioni gastriche e biliare</p>
                                        <strong>Quantità:</strong> 0.77 mg
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-right">
                                    <div className="plant-img">
                                        <img src={Malva} alt="Malva" />
                                    </div>
                                    <div className="plant-desc">
                                        <h3>Malva</h3>
                                        <p>Azione emolliente e protettiva della mucosa gastrica ed intestinale</p>
                                        <strong>Quantità:</strong> 0.77 mg
                                    </div>
                                </td>
                                <td className="border-right">
                                    <div className="plant-img">
                                        <img src={Rafano} alt="Rafano" />
                                    </div>
                                    <div className="plant-desc">
                                        <h3>Rafano</h3>
                                        <p>Stimola le funzioni enzimatiche e ha azione spasmolitica</p>
                                        <strong>Quantità:</strong> 0.77 mg
                                    </div>
                                </td>
                                <td>
                                    <div className="plant-img">
                                        <img src={Clorofilla} alt="Clorofilla" />
                                    </div>
                                    <div className="plant-desc">
                                        <h3>Clorofilla</h3>
                                        <p>Ossigena e purifica il sangue, azione antimicrobica</p>
                                        <strong>Quantità:</strong> 0.03 mg
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </section>
        </>
    );
}