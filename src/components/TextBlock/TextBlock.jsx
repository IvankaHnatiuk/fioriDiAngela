import './TextBlock.css';

export default function TextBlock({ id, title, text }) {
    return (
        <section id="about" className="text-block container">
            <h2 className="text-block-title">La mia storia</h2>
            <p className="text-block-text">Mi chiamo Angela e sono il cuore e l'anima dei miei fiori giganti. 
                 Ogni mia creazione nasce dall'incontro tra creativita e artigianato di alta qualita. 
                 Lavoro con cura in ogni dettaglio per offrire installazioni floreali che non siano semplici decorazioni, 
                 ma vere esperienze estetiche: capaci di sorprendere, emozionare e rendere un evento davvero indimenticabile.
                Con miei fiori porto nelle feste private e negli eventi esclusivi un tocco di eleganza senza tempo,
                 perché credo che la bellezza, quando è autentica, sappia parlare da sola. </p>
        </section>
    );
}
