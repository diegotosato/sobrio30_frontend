import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    return (
        <section className="privacy-policy">
            <div className="container">
                <h1 className="section-title">Privacy Policy – Sobrio30</h1>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Titolare del trattamento</h2>
                    <p><strong>Cortitech Srl</strong></p>
                    <p>Sede legale: Via Primo Maggio, 5/A – 31059 Zero Branco (TV)</p>
                    <p>Email: <a href="mailto:info@sobrio30.com">info@sobrio30.com</a></p>
                    <p>Telefono: <a href="tel:+393517093135">+39 3517093135</a></p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Tipologia di dati trattati</h2>
                    <p>Il sito sobrio30.com raccoglie esclusivamente dati personali forniti volontariamente dall'utente tramite il form "Diventa Rivenditore", quali:</p>
                    <ul className="privacy-list">
                        <li>nome e cognome</li>
                        <li>indirizzo email</li>
                        <li>numero di telefono</li>
                        <li>eventuali informazioni inserite nel campo note</li>
                    </ul>
                    <p>Non vengono raccolti dati tramite cookie di profilazione o sistemi di tracciamento.</p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Finalità del trattamento</h2>
                    <p>I dati sono trattati esclusivamente per:</p>
                    <ul className="privacy-list">
                        <li>ricontattare l'utente che ha manifestato interesse a diventare rivenditore Sobrio30</li>
                        <li>fornire informazioni commerciali richieste</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Base giuridica del trattamento</h2>
                    <p>La base giuridica è l'esecuzione di misure precontrattuali richieste dall'interessato (art. 6, par. 1, lett. b GDPR).</p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Modalità del trattamento</h2>
                    <p>Il trattamento dei dati avviene con strumenti elettronici e nel rispetto delle misure di sicurezza previste dalla normativa vigente.</p>
                    <p>I dati vengono trasmessi al titolare del sito tramite comunicazioni elettroniche e trattati senza utilizzo di piattaforme di marketing, CRM o sistemi di profilazione.</p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Responsabili del trattamento</h2>
                    <p>Il titolare si avvale di fornitori di servizi tecnici per l'hosting del sito e per l'invio delle comunicazioni email.</p>
                    <p>Tali soggetti trattano i dati personali esclusivamente per conto del titolare e nel rispetto della normativa vigente.</p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Conservazione dei dati</h2>
                    <p>I dati vengono conservati per il tempo strettamente necessario a gestire la richiesta e comunque non oltre 24 mesi, salvo obblighi di legge.</p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Comunicazione dei dati</h2>
                    <p>I dati non vengono diffusi.</p>
                    <p>Il trattamento dei dati può avvenire tramite fornitori di servizi tecnici e infrastrutturali (es. servizi di hosting e invio email) nominati responsabili del trattamento ai sensi dell'art. 28 GDPR, esclusivamente per le finalità indicate nella presente informativa.</p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-subtitle">Diritti dell'interessato</h2>
                    <p>L'utente può esercitare i diritti previsti dagli artt. 15-22 del GDPR (accesso, rettifica, cancellazione, limitazione, opposizione, portabilità dei dati) scrivendo a <a href="mailto:info@sobrio30.com">info@sobrio30.com</a>.</p>
                    <p>Per maggiori informazioni sui diritti dell'interessato, consultare: <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer">https://gdpr.eu/</a></p>
                </div>
            </div>
        </section>
    );
}
