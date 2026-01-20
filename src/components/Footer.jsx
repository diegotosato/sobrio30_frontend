import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo } from "@phosphor-icons/react";
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container">

                <div className="warnings">

                    <h4>Avvertenze e conformità</h4>
                    <strong>Natura del Prodotto e Inquadramento Regolatorio</strong>
                    <span>Sobrio30 è considerato esclusivamente un integratore alimentare funzionale a base naturale e non come un medicinale.</span>
                    <span>Sobrio30 non attribuisce proprietà terapeutiche e non deve essere configurato come un medicinale.</span>
                    <span>Sobrio30 è conforme alla Direttiva 2002/46/CE e al DL 169/2004.</span>

                    <br />

                    <strong>Responsabilità Individuale e Guida</strong>
                    <span>
                        Responsabilità del conducente: Sebbene il prodotto supporti rapidamente il metabolismo dopo l’assunzione di alcool,
                        la responsabilità della guida resta sempre individuale e si invita a verificare sempre il proprio stato con un etilometro
                        prima di mettersi al volante.
                    </span>
                    <span>Le informazioni fornite (inclusi i test strumentali osservativi) non garantiscono l'idoneità alla guida né hanno valore medico-legale.</span>

                    <br />

                    <strong>Variabilità dei Risultati</strong>
                    <span>I risultati e le tempistiche di efficacia possono variare significativamente in base a età, sesso, costituzione fisica e peso del soggetto.</span>
                    <span>L'efficacia può essere annullata se, dopo l'assunzione dello stick, si continua a bere alcol o liquori (come l'ammazzacaffè).</span>

                </div>

                <div className="separator"></div>

                <div className="contacts" id='contacts'>
                    <div className="company-contacts">
                        <strong>Cortitech Srl</strong>
                        <p><strong>Sede legale:</strong> Via Primo Maggio, 5/A - 31059 Zero Branco (TV)</p>
                        <p><strong>Sede operativa:</strong> Via Enzo Ferrari, 15 - 30037 Scorzè (VE)</p>
                        <p className="company-contacts-email">
                            <a href="mailto:info@sobrio30.com"><strong>Email:</strong> info@sobrio30.com</a>
                        </p>
                        <p className="company-contacts-phone">
                            <a href="tel:+393517093135"><strong>Telefono/Whatsapp:</strong> +39 3517093135</a>
                        </p>
                    </div>
                    <div className="socials">
                        <div className="social-icon">
                            <a href="#">
                                <FacebookLogo />
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="#">
                                <InstagramLogo />
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="#">
                                <LinkedinLogo />
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="#">
                                <TiktokLogo />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}