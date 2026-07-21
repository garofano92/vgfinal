export const metadata = {
  title: "Privacy Policy | VG Personal Training Studio",
  description: "Informativa sul trattamento dei dati personali di VG Personal Training Studio, Frattamaggiore (NA).",
  robots: { index: false },
};

export default function Privacy() {
  const SECTIONS = [
    ["1. Titolare del trattamento",
     "Vincenzo Garofano — VG Personal Training Studio\nCorso Durante 170, Frattamaggiore (NA)\nP.IVA 09477361217\nWhatsApp: +39 342 770 5891"],
    ["2. Dati raccolti",
     "Attraverso il modulo di contatto raccogliamo: nome, recapito (telefono o email) e messaggio. Non raccogliamo dati sensibili né dati di minori. Non utilizziamo cookie di profilazione o pubblicitari."],
    ["3. Finalità e base giuridica",
     "I dati sono raccolti esclusivamente per rispondere alle richieste di contatto e consulenza (base giuridica: esecuzione di misure precontrattuali su richiesta dell'interessato, art. 6 par. 1 lett. b GDPR)."],
    ["4. Conservazione",
     "I dati vengono conservati per il tempo strettamente necessario a gestire la richiesta e, in caso di avvio di un rapporto professionale, per gli obblighi di legge (max 10 anni)."],
    ["5. Comunicazione a terzi",
     "I dati non vengono venduti né ceduti a terzi. Possono essere trattati da fornitori tecnici (hosting, email) che agiscono come responsabili del trattamento ai sensi dell'art. 28 GDPR."],
    ["6. Diritti dell'interessato",
     "Hai diritto di accedere, rettificare, cancellare i tuoi dati e opporti al trattamento. Puoi esercitare questi diritti scrivendo via WhatsApp. Hai inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it)."],
    ["7. Cookie",
     "Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non vengono installati cookie di profilazione, tracker o cookie pubblicitari senza il tuo consenso esplicito."],
    ["8. Aggiornamenti",
     "Questa informativa può essere aggiornata. La versione vigente è sempre disponibile su questa pagina. Ultimo aggiornamento: giugno 2025."],
  ];

  return (
    <div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"'Inter',sans-serif",padding:"120px 28px 80px"}}>
      <div style={{maxWidth:760,margin:"0 auto",lineHeight:1.8}}>
        <p style={{fontSize:12,letterSpacing:".2em",textTransform:"uppercase",color:"#E62B00",fontFamily:"'Montserrat',sans-serif",fontWeight:700,marginBottom:16}}>
          Privacy &amp; Cookie Policy
        </p>
        <h1 style={{fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"clamp(28px,4vw,48px)",textTransform:"uppercase",letterSpacing:"-.01em",marginBottom:48,lineHeight:1}}>
          Informativa sulla<br />Privacy
        </h1>
        {SECTIONS.map(([title, body]) => (
          <div key={title} style={{marginBottom:36}}>
            <h2 style={{fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:16,textTransform:"uppercase",letterSpacing:".1em",color:"#E62B00",marginBottom:10}}>
              {title}
            </h2>
            <p style={{color:"rgba(255,255,255,.6)",fontSize:15,whiteSpace:"pre-line"}}>{body}</p>
          </div>
        ))}
        <div style={{marginTop:60,paddingTop:30,borderTop:"1px solid rgba(255,255,255,.1)"}}>
          <a href="/" style={{color:"#E62B00",fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:12,letterSpacing:".2em",textTransform:"uppercase",textDecoration:"none"}}>
            ← Torna alla homepage
          </a>
        </div>
      </div>
    </div>
  );
}
