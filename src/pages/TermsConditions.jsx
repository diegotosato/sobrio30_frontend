import './TermsConditions.css';

export default function TermsConditions() {
    return (
        <section className="terms-conditions">
            <div className="container">
                <h1 className="section-title">Termini e Condizioni d'Uso – Sobrio30</h1>

                <div className="terms-section">
                    <p>Il presente sito ha finalità informativa e commerciale B2B.</p>
                    <p>Non è presente vendita diretta di prodotti online.</p>
                </div>

                <div className="terms-section">
                    <h2 className="terms-subtitle">Natura del prodotto</h2>
                    <p>Sobrio30® è un integratore alimentare a base naturale.</p>
                    <p>Non è un medicinale e non attribuisce proprietà terapeutiche.</p>
                    <p>Le informazioni presenti sul sito non sostituiscono il parere medico e non devono essere interpretate come indicazioni sanitarie.</p>
                </div>

                <div className="terms-section">
                    <h2 className="terms-subtitle">Uso responsabile</h2>
                    <p>Sobrio30 non garantisce:</p>
                    <ul className="terms-list">
                        <li>l'idoneità alla guida</li>
                        <li>la riduzione del tasso alcolemico</li>
                        <li>risultati certi o uniformi</li>
                    </ul>
                    <p>La responsabilità delle proprie azioni e decisioni resta sempre individuale.</p>
                </div>

                <div className="terms-section">
                    <h2 className="terms-subtitle">Studi e dati riportati</h2>
                    <p>Eventuali dati, valutazioni o test citati:</p>
                    <ul className="terms-list">
                        <li>non costituiscono studi clinici</li>
                        <li>non hanno valore medico-legale</li>
                        <li>si basano su valutazioni qualitative e sull'esperienza d'uso</li>
                    </ul>
                </div>

                <div className="terms-section">
                    <h2 className="terms-subtitle">Limitazione di responsabilità</h2>
                    <p>Il titolare del sito non è responsabile per:</p>
                    <ul className="terms-list">
                        <li>uso improprio del prodotto</li>
                        <li>interpretazioni errate delle informazioni</li>
                        <li>conseguenze derivanti da comportamenti non responsabili</li>
                    </ul>
                </div>

                <div className="terms-section">
                    <h2 className="terms-subtitle">Contatti commerciali</h2>
                    <p>Il form "Diventa Rivenditore" è destinato esclusivamente a richieste commerciali B2B.</p>
                    <p>L'invio del form non costituisce impegno contrattuale.</p>
                </div>

                <div className="terms-section">
                    <h2 className="terms-subtitle">Legge applicabile e foro competente</h2>
                    <p>Il presente sito è regolato dalla legge italiana.</p>
                    <p>Foro competente: Treviso.</p>
                    <p>Per informazioni sul trattamento dei dati personali raccolti tramite il sito, consultare la Privacy Policy.</p>
                </div>
            </div>
        </section>
    );
}
