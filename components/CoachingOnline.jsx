"use client";
import React, { useEffect, useState } from "react";
import {
  Menu, X, ArrowRight, ArrowUpRight, Plus, Minus, Check,
  ChevronRight
} from "lucide-react";

const RED = "#E62B00";
const WA = "https://wa.me/393427705891";


function Logo() {
  return (
    <a href="/" className="logo">
      <span className="mono">VG</span>
      <span className="lock"><b>PERSONAL TRAINING</b><i>STUDIO</i></span>
    </a>
  );
}
function Eyebrow({ children, muted }) {
  return (<span className={"eyebrow" + (muted ? " muted" : "")}><span className="bar" />{children}</span>);
}

const NAVC = [
  ["Cosa ricevi", "#cosa"],
  ["Come funziona", "#come"],
  ["Per chi è", "#perchi"],
  ["Investimento", "#investimento"],
];

const RECEIVE = [
  ["Analisi iniziale approfondita", "Foto, circonferenze e questionario: si parte dalla tua reale struttura, non da un modello."],
  ["Programma di allenamento personalizzato", "Costruito sui tuoi obiettivi, sul tuo livello e sulla tua anatomia. Mai una scheda standard."],
  ["Monitoraggio costante dei progressi", "Verifica regolare dei dati e dei progressi, seguita da vicino dal coach."],
  ["Adattamenti continui del piano", "Il programma evolve settimana dopo settimana, in base ai tuoi risultati."],
  ["Supporto diretto con il coach", "Contatto quotidiano via WhatsApp ed email: ogni dubbio risolto subito."],
  ["Playlist video tutorial esclusiva", "Accesso alla libreria privata di tutorial: nessun esercizio eseguito male."],
  ["Consulenza alimentare", "Nessuna dieta scritta, ma l'approccio giusto da capire e applicare passo dopo passo."],
];

const HOW = [
  ["01", "Analisi iniziale", "Obiettivi, livello di partenza e stile di vita: definiamo insieme il punto da cui parti."],
  ["02", "Creazione del programma", "Un piano personalizzato, cucito sulla tua struttura e sulle tue giornate reali."],
  ["03", "Avvio del percorso", "Si parte, con video tutorial e indicazioni chiare per eseguire tutto senza errori."],
  ["04", "Monitoraggio settimanale", "Controllo costante dei dati: niente è lasciato al caso, nulla all'improvvisazione."],
  ["05", "Adattamenti continui", "Il programma si evolve sui tuoi progressi, fino al risultato e oltre."],
];

const FIT = [
  "Persone che vivono lontano dallo studio",
  "Professionisti con poco tempo",
  "Chi non può allenarsi in presenza",
  "Chi vuole una guida costante e reale",
];
const NOFIT = [
  "Chi cerca schede senza impegno",
  "Chi vuole programmi automatici",
  "Chi non è disposto a seguire un percorso serio",
];

const PLAN_FEATS = [
  "Programmazione personalizzata",
  "Supporto quotidiano (WhatsApp ed email)",
  "Playlist video tutorial esclusiva",
  "Consulenza alimentare",
];

// IL NUMERO DI TRANCHE È UN DATO DEL PIANO, non un testo fisso: l'annuale si
// dilaziona in tre, il semestrale in due. Prima il «2» era scritto a mano in
// due punti diversi — la riga sotto il prezzo e l'elenco dei vantaggi — e
// quello dell'elenco valeva per tutti i piani rateizzabili. Bastava cambiarne
// uno solo perché la stessa scheda dicesse due cose diverse.
const PLANS = [
  { tag: "", name: "Trimestrale", desc: "Coaching individuale seguito direttamente, su tre mesi.", price: "350", perMonth: "~€117/mese", tranche: 0 },
  { tag: "Più scelto", name: "Semestrale", desc: "Percorso completo con monitoraggio costante nel tempo.", price: "600", perMonth: "~€100/mese", tranche: 2, featured: true },
  { tag: "", name: "Annuale", desc: "Accesso completo al metodo VG Personal Training.", price: "990", perMonth: "~€83/mese", tranche: 3 },
];

// Le due frasi nascono dallo stesso numero: non possono piu' discordare.
const rateizzo = (n) => `${n} tranche a 4 settimane`;


const CO_TR_ITEMS = [
  { img: "/co1.jpg", label: "Coaching online · Trasformazione" },
  { img: "/tr1.jpg", label: "Coaching online · Trasformazione" },
  { img: "/co2.jpg", label: "Coaching online · Trasformazione" },
  { img: "/tr2.jpg", label: "Coaching online · Trasformazione" },
  { img: "/co3.jpg", label: "Coaching online · Trasformazione" },
  { img: "/tr3.jpg", label: "Coaching online · Trasformazione" },
  { img: "/co4.jpg", label: "Coaching online · Trasformazione" },
  { img: "/tr5.jpg", label: "Coaching online · Trasformazione" },
  { img: "/co5.jpg", label: "Coaching online · Trasformazione" },
  { img: "/co6.jpg", label: "Coaching online · Trasformazione" },
];

function CoMarquee() {
  const trackRef = React.useRef(null);
  const xRef     = React.useRef(0);
  const dragRef  = React.useRef(null);
  React.useEffect(() => {
    const total = CO_TR_ITEMS.length * 316;
    const tick  = () => {
      if (!dragRef.current) {
        xRef.current -= 0.5;
        if (Math.abs(xRef.current) >= total) xRef.current = 0;
        if (trackRef.current)
          trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      }
      requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
  const sd = (x) => { dragRef.current = { sx: x, sv: xRef.current }; };
  const md = (x) => {
    if (!dragRef.current) return;
    const total = CO_TR_ITEMS.length * 316;
    let nx = dragRef.current.sv + (x - dragRef.current.sx);
    if (nx > 0) nx -= total; if (nx < -total) nx += total;
    xRef.current = nx;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${nx}px)`;
  };
  const ed = () => { dragRef.current = null; };
  return (
    <div className="marquee-wrap"
      style={{ cursor:"grab", touchAction:"pan-y" }}
      onMouseDown={(e)=>sd(e.clientX)} onMouseMove={(e)=>md(e.clientX)}
      onMouseUp={ed} onMouseLeave={ed}
      onTouchStart={(e)=>sd(e.touches[0].clientX)}
      onTouchMove={(e)=>md(e.touches[0].clientX)}
      onTouchEnd={ed}>
      <div ref={trackRef} className="marquee-track"
        style={{animation:"none", willChange:"transform"}}>
        {[...CO_TR_ITEMS,...CO_TR_ITEMS].map(({img,label},i)=>(
          <div className="m-card" key={i}>
            <img src={img} alt={label} loading="lazy" draggable="false" />
            <div className="m-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoachingOnline() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (e, href) => { e.preventDefault(); setMenu(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="vg" id="top">

      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="wrap nav-in">
          <Logo />
          <div className="nav-links">
            <a href="/">Studio in presenza</a>
            {NAVC.map(([t, h]) => <a key={h} href={h} onClick={(e) => go(e, h)}>{t}</a>)}
            <a href={WA} target="_blank" rel="noreferrer">
              <span className="btn btn-primary" style={{ padding: "12px 20px" }}>Inizia il tuo percorso</span>
            </a>
          </div>
          <button className="burger" aria-label="Menu" onClick={() => setMenu(true)}><Menu size={28} /></button>
        </div>
      </nav>

      <div className={"mobile" + (menu ? " open" : "")}>
        <button className="burger" style={{ display: "block", position: "absolute", top: 26, right: 28 }}
          aria-label="Chiudi" onClick={() => setMenu(false)}><X size={30} /></button>
        <a href="/">Studio<span> ←</span></a>
        {NAVC.map(([t, h]) => <a key={h} href={h} onClick={(e) => go(e, h)}>{t}<ChevronRight size={20} color={RED} /></a>)}
        <a href={WA}>WhatsApp<span> ↗</span></a>
      </div>

      {/* HERO */}
      <header className="subhero">
        <div style={{position:"absolute",inset:0,backgroundImage:"url(/tr3.jpg)",backgroundSize:"cover",backgroundPosition:"center",opacity:.12,zIndex:0}} />
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="wrap hero-in">
          <div data-reveal><Eyebrow>Coaching Online · Italia</Eyebrow></div>
          <h1 className="disp h-xxl" data-reveal data-d="1">
            Allenamento<br />personalizzato,<br /><span style={{ color: RED }}>ovunque tu sia.</span>
          </h1>
          <p className="lede" data-reveal data-d="2">
            Un percorso costruito su di te, seguito passo dopo passo, con la stessa qualità e
            attenzione dello studio fisico.
          </p>
          <div className="hero-cta" data-reveal data-d="3">
            <a className="btn btn-primary" href="#investimento" onClick={(e) => go(e, "#investimento")}>
              Inizia il tuo percorso <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href={WA} target="_blank" rel="noreferrer">
              Contattami su WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </header>

      {/* COSA RICEVI */}
      <section className="sec carbon" id="cosa">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Cosa ricevi</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Tutto ciò che serve<br />per arrivare al risultato</h2>
          </div>
          <div className="checklist" data-reveal data-d="1">
            {RECEIVE.map(([t, d]) => (
              <div className="row" key={t}>
                <span className="ck"><Check size={13} /></span>
                <div><b>{t}</b><br /><span>{d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="sec" id="come">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Come funziona</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Un percorso chiaro,<br />dal primo giorno</h2>
          </div>
          <div className="steps">
            {HOW.map(([n, t, d], i) => (
              <div className="step" data-reveal data-d={(i % 4) + 1} key={n}>
                <div className="num">{n}</div>
                <div><div className="t">{t}</div><div className="d">{d}</div></div>
                <ArrowRight className="ar" size={26} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREAKING BELIEF */}
      <section className="sec carbon">
        <div className="wrap statement" data-reveal>
          <div style={{ marginBottom: 28 }}><Eyebrow>La verità</Eyebrow></div>
          <div className="big">La maggior parte dei coaching online fallisce perché è <em>standardizzato.</em></div>
          <p>
            Qui non esistono schede uguali per tutti. Ogni persona ha un percorso costruito sul
            proprio corpo e sulla propria vita — e seguito, davvero, nel tempo.
          </p>
        </div>
      </section>

      {/* PER CHI È / NON È */}
      <section className="sec" id="perchi">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>A chi si rivolge</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Per chi è,<br />e per chi non è</h2>
          </div>
          <div className="aud">
            <div className="aud-col fit" data-reveal data-d="1">
              <h3>È ideale per</h3>
              <div className="sub">Chi vuole un percorso reale</div>
              {FIT.map((t) => <div className="aud-li" key={t}><Check className="m" size={16} />{t}</div>)}
            </div>
            <div className="aud-col nofit" data-reveal data-d="2">
              <h3>Non è adatto a</h3>
              <div className="sub">Chi cerca una scorciatoia</div>
              {NOFIT.map((t) => <div className="aud-li" key={t}><Minus className="m" size={16} />{t}</div>)}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="sec carbon">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Il confronto</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Coaching Online<br />vs schede standard</h2>
          </div>
          <div className="vs" data-reveal data-d="1">
            <div className="vs-col bad">
              <div className="vs-tag">Schede standard</div>
              <div className="vs-sub">Il prodotto digitale che trovi ovunque</div>
              {["Uguali per tutti","Nessun feedback","Nessun adattamento nel tempo","Ti lasciano solo dopo l'acquisto"].map((t) => (
                <div className="vs-li" key={t}><span className="dot"><Minus size={11} /></span>{t}</div>
              ))}
            </div>
            <div className="vs-mid"><span>VS</span></div>
            <div className="vs-col good">
              <div className="vs-tag">VG Coaching Online</div>
              <div className="vs-sub">Un servizio seguito direttamente</div>
              {["Personalizzato sul tuo corpo","Monitorato di continuo","Evolutivo, si adatta a te","Contatto diretto con il coach"].map((t) => (
                <div className="vs-li" key={t}><span className="dot"><Check size={11} /></span>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRASFORMAZIONI COACHING */}
      <section className="sec carbon">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Risultati reali</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Percorsi reali,<br />risultati misurabili</h2>
            <p className="lede" data-reveal data-d="2">Ognuno di questi cambiamenti è il risultato di un percorso di Coaching online costruito da zero, monitorato nel tempo.</p>
          </div>
        </div>
        <div data-reveal data-d="2" style={{marginTop:40}}>
          <p style={{color:"var(--mut2)",fontSize:11,letterSpacing:".18em",textTransform:"uppercase",fontFamily:"var(--disp)",fontWeight:700,marginBottom:22,paddingLeft:"clamp(28px,4vw,calc((100vw - 1240px)/2 + 28px))"}}>
            <span className="m-dot" />Scorri per vedere tutti i risultati
          </p>
          <CoMarquee />
        </div>
      </section>

      {/* VALORE */}
      <section className="sec">
        <div className="wrap statement" data-reveal>
          <div style={{ marginBottom: 28 }}><Eyebrow>Il valore</Eyebrow></div>
          <div className="big">Non un prodotto digitale. <em>Un'estensione dello studio.</em></div>
          <p>
            Il Coaching Online è seguito direttamente dal coach, con lo stesso metodo e la stessa
            attenzione del lavoro in presenza. La distanza cambia il luogo, non la qualità.
          </p>
        </div>
      </section>

      {/* INVESTIMENTO / PREZZI */}
      <section className="sec carbon" id="investimento">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Investimento</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Accesso al coaching</h2>
          </div>

          <div className="price-intro" data-reveal data-d="1">
            <div className="lead">Il coaching non è un programma standard.</div>
            <p>
              È un percorso seguito direttamente, adattato nel tempo e costruito sul tuo obiettivo.
              <span className="hl"> Il valore non è nel numero di schede: è nel risultato che ottieni
              seguendo il percorso.</span>
            </p>
          </div>

          <div className="posti-banner" data-reveal data-d="1">
            <span className="posti-num">30</span>
            <div className="posti-text">
              <strong>Posti limitati.</strong>
              <span>Seguo personalmente un massimo di 30 persone, per garantire a ciascuno la stessa cura. Quando i posti sono pieni, si entra in lista d'attesa.</span>
            </div>
          </div>

          <div className="plans">
            {PLANS.map((p, i) => (
              <div className={"plan" + (p.featured ? " featured" : "")} data-reveal data-d={i + 1} key={p.name}>
                <div className="tag">{p.tag}</div>
                <div className="pname">{p.name}</div>
                <div className="pdesc">{p.desc}</div>
                <div className="pricev"><span className="cur">€</span>{p.price}</div>
                <div className="pnote" style={{ color: "var(--mut)", fontSize: 13, marginBottom: 4 }}>{p.perMonth}</div>
                <div className="pnote">{p.tranche ? `Dilazionabile in ${rateizzo(p.tranche)}` : "Pagamento in un'unica soluzione"}</div>
                <ul className="pfeats">
                  {PLAN_FEATS.map((f) => <li key={f}><Check size={15} />{f}</li>)}
                  {p.tranche > 0 && <li><Check size={15} />Pagamento in {rateizzo(p.tranche)}</li>}
                </ul>
                <div className="pcta">
                  <a className={"btn " + (p.featured ? "btn-primary" : "btn-ghost")} href={WA} target="_blank" rel="noreferrer">
                    Inizia il tuo percorso <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="value-note" data-reveal>
            <div className="vbig">Non stai pagando delle schede. <em>Stai accedendo a un sistema che si adatta a te nel tempo.</em></div>
            <div className="urgency"><span className="pulse" />Per mantenere qualità e attenzione, il numero di persone seguite contemporaneamente è limitato.</div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="band">
        <div className="wrap">
          <div data-reveal><Eyebrow>Inizia ora</Eyebrow></div>
          <h2 className="disp h-xl" data-reveal data-d="1">Inizia ora<br />il tuo percorso</h2>
          <div className="hero-cta" style={{ justifyContent: "center" }} data-reveal data-d="2">
            <a className="btn btn-primary" href="#investimento" onClick={(e) => go(e, "#investimento")}>
              Inizia il tuo percorso <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href={WA} target="_blank" rel="noreferrer">
              Parla direttamente con me su WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-top">
            <Logo />
            <div className="foot-nav">
              <a href="/">Studio in presenza</a>
              {NAVC.map(([t, h]) => <a key={h} href={h} onClick={(e) => go(e, h)}>{t}</a>)}
              <a href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="https://instagram.com/vincenzo_garofano" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div className="foot-bot">
            <span>© {new Date().getFullYear()} VG Personal Training Studio · P.IVA 09477361217</span>
            <span>Personal trainer online · Italia — <a href="#top" onClick={(e) => go(e, "#top")}>Torna su ↑</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
