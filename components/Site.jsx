"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Menu, X, ArrowRight, ArrowUpRight, Plus, Minus, Check,
  Instagram, MapPin, Phone, ChevronRight
} from "lucide-react";

/* =========================================================================
   VG PERSONAL TRAINING STUDIO — Frattamaggiore (Napoli)
   Premium one-page site. Self-contained: all styles injected below.
   Palette: #000000 / #111111 / #E62B00 / #FFFFFF / #F5F5F5
   Type: Montserrat ExtraBold (display) · Inter (body)
   ========================================================================= */

const RED = "#E62B00";


/* ---------- small components ---------- */
function Logo({ onClick }) {
  return (
    <a href="#top" className="logo" onClick={onClick}>
      <span className="mono">VG</span>
      <span className="lock">
        <b>PERSONAL TRAINING</b>
        <i>STUDIO</i>
      </span>
    </a>
  );
}

function Eyebrow({ children, muted }) {
  return (
    <span className={"eyebrow" + (muted ? " muted" : "")}>
      <span className="bar" />
      {children}
    </span>
  );
}

const NAV = [
  ["Studio privato", "#privato"],
  ["Il metodo", "#metodo"],
  ["Trasformazioni", "#trasformazioni"],
  ["Coaching Online", "#coaching"],
  ["Chi sono", "#chi-sono"],
  ["FAQ", "#faq"],
];

const FAQS = [
  ["Quanto costano i percorsi in studio?",
    "I percorsi in presenza sono costruiti su misura: durata, frequenza e obiettivi vengono definiti insieme durante la visita iniziale (60€). Il costo varia in base al programma scelto — contattaci per un preventivo personalizzato."],
  ["Devo già avere esperienza per iniziare?",
    "No. Lo studio nasce proprio per chi parte da zero o ha avuto esperienze negative in palestra. La prima consulenza serve a capire il tuo punto di partenza, e ogni programma viene costruito sul tuo livello reale, senza giudizio."],
  ["In quante persone ci si allena?",
    "Massimo due alla volta. È il cuore del nostro metodo: niente sale affollate, niente attese ai macchinari. Tu, eventualmente una persona di fiducia, e il trainer concentrato sul tuo allenamento."],
  ["Serve un abbonamento mensile?",
    "No. Non vendiamo abbonamenti, vendiamo percorsi. Insieme definiamo un obiettivo, una durata e una frequenza realistici: paghi il valore del lavoro, non l'accesso a una struttura."],
  ["Seguite anche l'alimentazione?",
    "L'allenamento da solo non basta. Coordiniamo il lavoro in studio con indicazioni alimentari sostenibili e, dove serve, con la collaborazione di professionisti dedicati. L'obiettivo è la ricomposizione corporea, non la dieta-lampo."],
  ["Dove si trova lo studio?",
    "A Frattamaggiore, in provincia di Napoli. Uno spazio privato e riservato, accessibile esclusivamente su appuntamento."],
  ["Quanto costa la visita iniziale e cosa include?",
    "La visita iniziale ha un costo di 60€ e comprende un'anamnesi articolare ed estetica accurata, una valutazione posturale e una panoramica completa a 360° per capire insieme il percorso più adatto a te. È il punto di partenza di ogni percorso personalizzato."],
  ["Come prenoto la prima visita?",
    "Compila il modulo qui sotto oppure scrivici direttamente su WhatsApp al 342 770 5891. Ti ricontattiamo per fissare l'appuntamento presso lo studio di Corso Durante 170, Frattamaggiore."],
];

const METHOD = [
  ["01", "Analisi iniziale", "Valutazione posturale, composizione corporea, storia di allenamento e stile di vita. Prima di programmare qualsiasi cosa, capiamo da dove parti davvero."],
  ["02", "Pianificazione", "Costruiamo un programma cucito su di te: obiettivi, frequenza sostenibile e strategia alimentare coordinata. Niente schede preconfezionate."],
  ["03", "Allenamento personalizzato", "Sessioni seguite passo dopo passo, massimo due persone in studio. Tecnica curata, carichi corretti, intensità calibrata su di te."],
  ["04", "Mentalità e motivazione", "Allenarsi è anche una questione di testa. Ti aiutiamo a costruire la giusta mentalità: costanza, fiducia nel processo e la capacità di superare i momenti difficili. Perché i risultati durano solo se cambia anche il modo in cui ti vedi."],
  ["05", "Monitoraggio costante", "Controlli periodici, dati alla mano. Ogni settimana il programma si adatta ai tuoi progressi: nulla è lasciato al caso."],
  ["06", "Trasformazione", "Risultati che durano nel tempo, perché costruiti su abitudini reali. Non un traguardo, ma un nuovo equilibrio."],
];


const TR_ITEMS = [
  { img: "/alex_front_comp.jpg", label: "In studio · Alex Garini" },
  { img: "/alex_back_comp.jpg",  label: "In studio · Alex Garini" },
  { img: "/new1.jpg", label: "In studio · Trasformazione" },
  { img: "/new2.jpg", label: "In studio · Trasformazione" },
  { img: "/new3.jpg", label: "In studio · Trasformazione" },
  { img: "/new4.jpg", label: "In studio · Trasformazione" },
  { img: "/new5.jpg", label: "In studio · Trasformazione" },
  { img: "/new6.jpg", label: "In studio · Trasformazione" },
  { img: "/new7.jpg", label: "In studio · Trasformazione" },
  { img: "/tr1.jpg",  label: "Coaching Online · Trasformazione" },
  { img: "/tr2.jpg",  label: "Coaching Online · Trasformazione" },
  { img: "/tr3.jpg",  label: "Coaching Online · Trasformazione" },
  { img: "/tr4.jpg",  label: "Coaching Online · Trasformazione" },
  { img: "/tr5.jpg",  label: "Coaching Online · Trasformazione" },
];

function MarqueeTransformations({ title = true }) {
  const trackRef = useRef(null);
  const xRef     = useRef(0);
  const dragRef  = useRef(null);
  const rafRef   = useRef(null);
  const SPEED    = 0.5;
  const CARD_W   = 316;

  useEffect(() => {
    const total = TR_ITEMS.length * CARD_W;
    const tick  = () => {
      if (!dragRef.current) {
        xRef.current -= SPEED;
        if (Math.abs(xRef.current) >= total) xRef.current = 0;
        if (trackRef.current)
          trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const startDrag = (clientX) => {
    dragRef.current = { startX: clientX, startVal: xRef.current };
  };
  const moveDrag = (clientX) => {
    if (!dragRef.current) return;
    const total = TR_ITEMS.length * CARD_W;
    let newX = dragRef.current.startVal + (clientX - dragRef.current.startX);
    if (newX > 0) newX -= total;
    if (newX < -total) newX += total;
    xRef.current = newX;
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(${newX}px)`;
  };
  const endDrag = () => { dragRef.current = null; };

  const doubled = [...(TR_ITEMS || []), ...(TR_ITEMS || [])];

  return (
    <div style={{ marginTop: 48 }}>
      {title && (
        <p style={{ color:"var(--mut2)", fontSize:11, letterSpacing:".18em",
          textTransform:"uppercase", fontFamily:"var(--disp)", fontWeight:700,
          marginBottom:22, paddingLeft:4 }}>
          <span className="m-dot" />Scorri per vedere alcuni risultati
        </p>
      )}
      <div className="marquee-wrap"
        style={{ cursor:"grab", touchAction:"pan-y" }}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => { if (dragRef.current) moveDrag(e.clientX); }}
        onMouseUp={endDrag} onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        <div ref={trackRef} className="marquee-track"
          style={{ animation:"none", willChange:"transform" }}>
          {doubled.map(({ img, label }, i) => (
            <div className="m-card" key={i}>
              <img src={img} alt={label} loading="lazy" draggable="false" />
              <div className="m-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function VGPersonalTrainingStudio() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [pos, setPos] = useState(55);
  const [sent, setSent] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem('vg_cookie')) setTimeout(() => setCookieVisible(true), 1200); } catch(e) { setCookieVisible(true); }
  }, []);
  const acceptCookie = () => { try { localStorage.setItem('vg_cookie','1'); } catch(e){} setCookieVisible(false); };
  const rejectCookie = () => { try { localStorage.setItem('vg_cookie','0'); } catch(e){} setCookieVisible(false); };
  const baRef = useRef(null);
  const dragging = useRef(false);

  /* nav scroll state */
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  /* reveal observer */
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* before/after drag */
  useEffect(() => {
    const move = (clientX) => {
      const el = baRef.current; if (!el) return;
      const r = el.getBoundingClientRect();
      let p = ((clientX - r.left) / r.width) * 100;
      p = Math.max(2, Math.min(98, p)); setPos(p);
    };
    const mm = (e) => { if (dragging.current) move(e.clientX); };
    const tm = (e) => { if (dragging.current && e.touches[0]) move(e.touches[0].clientX); };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", mm); window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", tm, { passive: true }); window.addEventListener("touchend", up);
    return () => { window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", tm); window.removeEventListener("touchend", up); };
  }, []);

  const go = (e, href) => { e.preventDefault(); setMenu(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="vg" id="top">

      {/* NAV */}
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="wrap nav-in">
          <Logo onClick={(e) => go(e, "#top")} />
          <div className="nav-links">
            {NAV.map(([t, h]) => <a key={h} href={h} onClick={(e) => go(e, h)}>{t}</a>)}
            <a href="#contatti" onClick={(e) => go(e, "#contatti")}>
              <span className="btn btn-primary" style={{ padding: "12px 20px" }}>Prenota una consulenza</span>
            </a>
          </div>
          <button className="burger" aria-label="Menu" onClick={() => setMenu(true)}><Menu size={28} /></button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={"mobile" + (menu ? " open" : "")}>
        <button className="burger" style={{ display: "block", position: "absolute", top: 26, right: 28 }}
          aria-label="Chiudi" onClick={() => setMenu(false)}><X size={30} /></button>
        {NAV.map(([t, h]) => <a key={h} href={h} onClick={(e) => go(e, h)}>{t}<ChevronRight size={20} color={RED} /></a>)}
        <a href="#contatti" onClick={(e) => go(e, "#contatti")}>Prenota<span> ↗</span></a>
      </div>

      {/* HERO */}
      <header className="hero">
        <video autoPlay muted loop playsInline
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.28,zIndex:0}}
          poster="/studio1.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-glow" />
        <div className="hero-spark" />
        <div className="wrap hero-in">
          <div data-reveal><Eyebrow>Studio privato · Frattamaggiore · Napoli</Eyebrow></div>
          <h1 className="disp h-xxl" data-reveal data-d="1">
            Non una palestra.<br />Uno <span className="accent">studio privato.</span>
          </h1>
          <p className="lede" data-reveal data-d="2">
            Uno spazio riservato dove segui un percorso costruito su di te, con
            <strong style={{ color: "#fff" }}> massimo due persone alla volta</strong>.
            Nessuna sala affollata, nessuna attesa ai macchinari: solo attenzione
            individuale, su appuntamento, fino al risultato.
          </p>
          <div className="hero-cta" data-reveal data-d="3">
            <a className="btn btn-primary" href="#contatti" onClick={(e) => go(e, "#contatti")}>
              Prenota una consulenza <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href="#metodo" onClick={(e) => go(e, "#metodo")}>
              Scopri il metodo <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-strip" data-reveal data-d="4">
            <div className="it"><div className="n">02</div><div className="l">Persone max per sessione</div></div>
            <div className="it"><div className="n">100%</div><div className="l">Programmi su misura</div></div>
            <div className="it"><div className="n">1:1</div><div className="l">Seguito su appuntamento</div></div>
            <div className="it"><div className="n">8+</div><div className="l">Anni di esperienza</div></div>
          </div>
        </div>
      </header>

      {/* DIFFERENZE */}
      <section className="sec carbon" id="differenze">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>La differenza</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Perché non<br />siamo una palestra</h2>
            <p className="lede" data-reveal data-d="2">
              La palestra ti vende l'accesso. Noi ti diamo attenzione. È una distanza che si sente
              dalla prima sessione.
            </p>
          </div>
          <div className="vs" data-reveal data-d="2">
            <div className="vs-col bad">
              <div className="vs-tag">Palestra tradizionale</div>
              <div className="vs-sub">L'esperienza che probabilmente conosci già</div>
              {["Sale affollate e attese ai macchinari","Schede standard, uguali per tutti","Nessun controllo reale sui progressi","Ti arrangi da solo dopo il primo mese","Paghi l'abbonamento, non il risultato"].map((t) => (
                <div className="vs-li" key={t}><span className="dot"><Minus size={11} /></span>{t}</div>
              ))}
            </div>
            <div className="vs-mid"><span>VS</span></div>
            <div className="vs-col good">
              <div className="vs-tag">VG Personal Training Studio</div>
              <div className="vs-sub">L'esperienza che meriti davvero</div>
              {["Massimo due persone, spazio riservato","Programma costruito sul tuo corpo e obiettivo","Monitoraggio costante, dati alla mano","Seguito a ogni ripetizione, sempre","Trasmissione della giusta mentalità e motivazione","Un percorso verso il risultato, non un abbonamento"].map((t) => (
                <div className="vs-li" key={t}><span className="dot"><Check size={11} /></span>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* STUDIO PRIVATO — PILASTRO (PUNTO 1) */}
      <section className="sec privato-hero" id="privato">
        <div className="wrap">
          <div className="priv-statement" data-reveal>
            <div className="priv-big-n">02</div>
            <div className="priv-statement-body">
              <div><Eyebrow>Il principio dello studio</Eyebrow></div>
              <h2 className="disp h-xl" data-d="1" style={{margin:"16px 0 0"}}>
                Mai più di <span className="accent">due persone</span><br />nello studio, insieme
              </h2>
            </div>
          </div>
          <p className="lede priv-lede" data-reveal data-d="2">
            Non è un limite: è una scelta. Due persone al massimo significa attenzione continua,
            nessuna attesa ai macchinari, nessuna confusione. Uno spazio professionale e tranquillo,
            dove la tua privacy e i tuoi risultati vengono prima di tutto.
          </p>
          <div className="priv-grid" data-reveal data-d="2">
            <div className="priv-card">
              <div className="priv-n">01</div>
              <h3>Attenzione continua</h3>
              <p>Sei seguito di persona a ogni ripetizione, dall'inizio alla fine della sessione. Mai lasciato solo.</p>
            </div>
            <div className="priv-card">
              <div className="priv-n">02</div>
              <h3>Nessuna attesa</h3>
              <p>Le attrezzature sono sempre disponibili. Niente code, niente tempi morti: solo il tuo allenamento.</p>
            </div>
            <div className="priv-card">
              <div className="priv-n">03</div>
              <h3>Privacy reale</h3>
              <p>Uno spazio riservato e discreto, su appuntamento, dove allenarti lontano da occhi e folla.</p>
            </div>
            <div className="priv-card">
              <div className="priv-n">04</div>
              <h3>Ambiente professionale</h3>
              <p>Tranquillo, curato in ogni dettaglio, pensato per farti lavorare con concentrazione e serietà.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FA PER TE — PUNTO 4 */}
      <section className="sec carbon" id="fa-per-te">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Compatibilità</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Questo studio<br />fa per te?</h2>
            <p className="lede" data-reveal data-d="2">
              Lavorare con poche persone significa anche essere onesti su chi può trovare davvero
              valore in questo percorso. Ecco come capirlo.
            </p>
          </div>
          <div className="fit-grid" data-reveal data-d="2">
            <div className="fit-col yes">
              <div className="fit-h">Fa per te se...</div>
              {[
                "Cerchi attenzione reale e un percorso costruito su di te",
                "Vuoi risultati concreti e misurabili, non una tessera in più",
                "Preferisci un ambiente riservato a una sala affollata",
                "Sei pronto a impegnarti con costanza, seguito passo dopo passo",
                "Vuoi essere guidato non solo fisicamente, ma anche mentalmente",
                "Dai valore alla qualità e alla professionalità",
              ].map((t) => (
                <div className="fit-li" key={t}><span className="fic"><Check size={12} /></span>{t}</div>
              ))}
            </div>
            <div className="fit-col no">
              <div className="fit-h">Probabilmente non fa per te se...</div>
              {[
                "Cerchi solo un posto dove allenarti da solo quando capita",
                "Preferisci una palestra h24 con tante macchine e nessuna guida",
                "Non sei interessato a un percorso personalizzato e seguito",
                "Cerchi la soluzione più economica più che il risultato",
                "Non vuoi un confronto costante con un professionista",
              ].map((t) => (
                <div className="fit-li" key={t}><span className="fic no"><Minus size={12} /></span>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* AUTOREVOLEZZA */}
      <section className="sec" id="autorevolezza">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Autorevolezza</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Scelto da chi considera il proprio fisico<br />parte della propria immagine</h2>
            <p className="lede" data-reveal data-d="2">
              Chi cura la propria immagine per professione sceglie con attenzione a chi affidare il
              proprio corpo. Creator e volti noti del territorio si allenano qui per la stessa ragione
              di tutti gli altri: riservatezza assoluta e un lavoro fatto davvero su misura.
            </p>
          </div>

          <div className="proof-v2">

            {/* Alex Garini — composita prima/dopo intera */}
            <div className="proof-alex" data-reveal data-d="1">
              <div className="comp-single">
                <img src="/alex_front_comp.jpg" alt="Alex Garini — trasformazione prima e dopo"
                  style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block"}} />
                <span className="hl-tag aft">Prima / Dopo</span>
              </div>
              <div className="proof-body">
                <div className="kicker">Riflettori</div>
                <div style={{fontFamily:"var(--disp)",fontWeight:800,textTransform:"uppercase",fontSize:"clamp(20px,2.2vw,28px)",letterSpacing:".02em",margin:"10px 0 6px"}}>Alex Garini</div>
                <div style={{fontSize:12,color:"var(--red)",letterSpacing:".16em",textTransform:"uppercase",marginBottom:14,fontFamily:"var(--disp)",fontWeight:700}}>Creator digitale</div>
                <div className="proof-badges">
                  <span className="pbadge"><strong>-28&thinsp;kg</strong> in 9 mesi</span>
                  <span className="pbadge"><strong>5 anni</strong> nello studio</span>
                </div>
                <div className="quote">
                  Vincenzo mi ha cambiato la vita, la mia mentalità, il mio fisico.
                  <span className="note">Alex Garini — Creator digitale</span>
                </div>
              </div>
            </div>

            {/* Luca Corrini — composita prima/dopo, stesso trattamento di Alex.
                NIENTE CITAZIONE finché non arrivano le sue parole vere: quella
                che stava qui era un testo di riempimento, e la riga grigia che
                lo diceva era finita online. */}
            <div className="proof-luca" data-reveal data-d="2">
              <div className="comp-single">
                <img src="/luca_front_comp.jpg" alt="Luca Corrini — trasformazione prima e dopo"
                  style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block"}} />
                <span className="hl-tag aft">Prima / Dopo</span>
              </div>
              <div className="proof-body">
                <div className="kicker">Riflettori</div>
                <div style={{fontFamily:"var(--disp)",fontWeight:800,textTransform:"uppercase",fontSize:"clamp(18px,2vw,24px)",letterSpacing:".02em",margin:"10px 0 6px"}}>Luca Corrini</div>
                <div style={{fontSize:12,color:"var(--red)",letterSpacing:".16em",textTransform:"uppercase",fontFamily:"var(--disp)",fontWeight:700}}>Creator digitale · In percorso da gennaio 2026</div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* METODO (con onboarding integrato) */}
      <section className="sec carbon" id="metodo">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Il metodo</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Come si inizia,<br />come si lavora.</h2>
            <p className="lede" data-reveal data-d="2">
              Un processo chiaro e ripetibile, dal primo incontro al risultato. Prima capiamo da dove
              parti, poi costruiamo insieme un percorso misurabile, senza improvvisazione.
            </p>
          </div>

          <div className="flow" data-reveal data-d="2">
            <div className="flow-step">
              <div className="flow-n">01</div>
              <h3>Consulenza iniziale</h3>
              <p>Un primo incontro conoscitivo per ascoltare i tuoi obiettivi e capire se il percorso è adatto a te.</p>
            </div>
            <div className="flow-line" />
            <div className="flow-step">
              <div className="flow-n">02</div>
              <h3>Valutazione e percorso</h3>
              <p>Analisi posturale, composizione corporea e definizione insieme di un programma su misura.</p>
            </div>
            <div className="flow-line" />
            <div className="flow-step">
              <div className="flow-n">03</div>
              <h3>Inizio del programma</h3>
              <p>Parti seguito passo dopo passo, con monitoraggio costante e aggiustamenti nel tempo.</p>
            </div>
          </div>

          <div className="metodo-sub" data-reveal data-d="2">
            <span className="m-dot" />Le cinque fasi del lavoro
          </div>
          <div className="steps">
            {METHOD.map(([n, t, d], i) => (
              <div className="step" data-reveal data-d={(i % 4) + 1} key={n}>
                <div className="num">{n}</div>
                <div>
                  <div className="t">{t}</div>
                  <div className="d">{d}</div>
                </div>
                <ArrowRight className="ar" size={26} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRASFORMAZIONI */}
      <section className="sec" id="trasformazioni">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Trasformazioni reali</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Non un prima e dopo.<br />Un cambiamento.</h2>
            <p className="lede" data-reveal data-d="2">
              Dietro ogni foto c'è un percorso seguito nel tempo, fatto di costanza e di un metodo
              che si adatta alla persona. Quello che cambia non è solo il fisico: è il rapporto con
              se stessi. Trascina il cursore per vedere la differenza.
            </p>
          </div>
          <div className="ba" ref={baRef} data-reveal data-d="2"
            onMouseDown={() => (dragging.current = true)}
            onTouchStart={() => (dragging.current = true)}>
            <div className="ba-layer ba-before">
              <img src="/slider_before.jpg" alt="Prima" />
              <span className="ba-tag">Prima</span>
            </div>
            <div className="ba-layer ba-after" style={{ clipPath:`inset(0 0 0 ${pos}%)` }}>
              <img src="/slider_after.jpg" alt="Dopo" />
              <span className="ba-tag">Dopo</span>
            </div>
            <div className="ba-handle" style={{ left: `${pos}%` }}>
              <div className="ba-knob"><ChevronRight size={16} style={{ marginLeft: -8 }} /><ChevronRight size={16} style={{ marginLeft: -8 }} transform="rotate(180)" /></div>
            </div>
          </div>
          <MarqueeTransformations />
        </div>
      </section>

      {/* STUDIO */}
      <section className="sec carbon" id="studio">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>Lo studio</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Uno spazio<br />pensato per te</h2>
            <p className="lede" data-reveal data-d="2">
              Privacy, pulizia e attrezzature selezionate. Un ambiente curato in ogni dettaglio,
              dove allenarsi è un momento solo tuo.
            </p>
          </div>
          <div className="gal gal-2" data-reveal data-d="1">
            <div className="ph"><img src="/studio1.jpg" alt="Sala allenamento VG Studio" className="gal-img" /></div>
            <div className="ph"><img src="/studio2.jpg" alt="Area pesi e manubri" className="gal-img" /></div>
          </div>
          <div className="focus-row" data-reveal data-d="2">
            {["Privacy assoluta","Pulizia impeccabile","Esclusività","Attrezzature premium"].map((t) => (
              <div className="it" key={t}><span className="c" />{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING ONLINE TEASER */}
      <section className="sec online-teaser" id="coaching">
        <div className="wrap ot-grid">
          <div>
            <div data-reveal><Eyebrow>Coaching Online</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Il tuo percorso,<br />senza confini</h2>
            <p className="lede" data-reveal data-d="2">
              Vivi lontano dallo studio o hai poco tempo? Il Coaching Online ti segue ovunque con
              la stessa cura del lavoro in presenza: programma su misura, monitoraggio costante e
              contatto diretto con il coach. Mai una scheda standard.
            </p>
            <div className="hero-cta" data-reveal data-d="3">
              <a className="btn btn-primary" href="/coaching-online">
                Scopri il Coaching Online <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="ot-media ph" data-reveal data-d="2" style={{backgroundImage:"url(/coaching_teaser.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}>
            <span className="badge">Online</span>
          </div>
        </div>
      </section>

      {/* CHI SONO */}
      <section className="sec" id="chi-sono">
        <div className="wrap about">
          <div className="ph portrait" data-reveal style={{backgroundImage:"url(/vincenzo.jpg)",backgroundSize:"cover",backgroundPosition:"center top"}} />
          <div>
            <div data-reveal><Eyebrow>Chi sono</Eyebrow></div>
            <h2 className="disp h-l" data-reveal data-d="1">Vincenzo Garofano</h2>
            <p data-reveal data-d="1">
              Ho fondato VG Personal Training Studio con un'idea precisa: restituire all'allenamento
              la cura e l'attenzione che merita. Troppe persone passano dalle palestre tradizionali
              senza essere mai davvero seguite — e si arrendono.
            </p>
            <p data-reveal data-d="2">
              Per questo ho scelto la strada opposta: pochi clienti, seguiti realmente, in uno spazio
              privato dove ogni dettaglio è pensato per il loro percorso. Niente folla, niente schede
              fotocopia. Solo lavoro serio, costante e misurabile.
            </p>
            <p data-reveal data-d="2">
              La mia missione è semplice: portarti a un risultato concreto e insegnarti a mantenerlo
              nel tempo. Perché un fisico migliore è solo l'inizio — quello che resta è la fiducia in
              te stesso.
            </p>
            <div className="creds" data-reveal data-d="2">
              <div className="creds-head">Formazione e competenze</div>
              <ul className="creds-list">
                <li>Laureato e Personal Trainer di <strong>3° livello</strong> — il massimo riconoscimento in Italia</li>
                <li>Formazioni con <strong>Invictus Academy</strong>, <strong>FIPE</strong>, <strong>AIF</strong> e <strong>Natural Peaking</strong></li>
                <li>Percorsi di studio con riferimenti di spessore internazionale come <strong>Dr. Joe Klemczewski</strong>, <strong>Layne Norton</strong> ed <strong>Eric Helms</strong></li>
              </ul>
            </div>
            <div className="philo" data-reveal data-d="2">
              "Non vendo allenamenti. Costruisco percorsi su persone vere, una alla volta."
            </div>
            <div className="sig" data-reveal data-d="3">Vincenzo Garofano<small>Founder · VG Personal Training Studio</small></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec carbon" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <div data-reveal><Eyebrow>FAQ</Eyebrow></div>
            <h2 className="disp h-xl" data-reveal data-d="1">Le domande<br />più frequenti</h2>
          </div>
          <div className="faq" data-reveal data-d="1">
            {FAQS.map(([q, a], i) => (
              <div className={"faq-item" + (openFaq === i ? " open" : "")} key={q}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {q}<span className="ic">{openFaq === i ? <Minus size={20} /> : <Plus size={20} />}</span>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaq === i ? 240 : 0 }}><p>{a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section className="sec" id="contatti">
        <div className="wrap contact">
          <div>
            <div data-reveal><Eyebrow>Contatti</Eyebrow></div>
            <h2 className="disp h-l" data-reveal data-d="1" style={{ margin: "18px 0 14px" }}>Prenota la tua<br />prima consulenza</h2>
            <p className="lede" data-reveal data-d="1" style={{ marginBottom: 34 }}>
              Raccontaci il tuo obiettivo. Ti ricontattiamo per un primo incontro conoscitivo, senza impegno.
            </p>
            <form data-reveal data-d="2" onSubmit={async (e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.target));
              try {
                const res = await fetch("https://ulnppltmpvqgwihfmjtw.functions.supabase.co/site-contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                if (res.ok) setSent(true);
              } catch (_) { /* eventuali errori di rete non bloccano la UI */ }
            }}>
              {sent ? (
                <div className="sent"><Check size={20} color={RED} /> Richiesta inviata. Ti ricontattiamo a breve.</div>
              ) : (
                <>
                  {/* Campo trappola anti-spam: invisibile agli utenti, i bot lo compilano. */}
                  <input type="text" name="azienda" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                  <div className="field"><label>Nome e cognome *</label><input required name="nome" placeholder="Il tuo nome" /></div>
                  <div className="field"><label>Telefono / Email *</label><input required name="contatto" placeholder="Come possiamo ricontattarti" /></div>
                  <div className="field"><label>Il tuo obiettivo</label>
                    <select name="obiettivo" defaultValue="">
                      <option value="" disabled>Seleziona…</option>
                      <option>Ricomposizione corporea</option>
                      <option>Perdita di peso</option>
                      <option>Aumento massa / tono</option>
                      <option>Rimettermi in forma da zero</option>
                      <option>Altro</option>
                    </select>
                  </div>
                  <div className="field"><label>Messaggio *</label><textarea required name="messaggio" placeholder="Come posso aiutarti?" /></div>
                  <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                    Invia richiesta <ArrowRight size={17} />
                  </button>
                </>
              )}
            </form>
          </div>
          <div className="contact-side" data-reveal data-d="2">
            <a className="ci" href="https://wa.me/393427705891" target="_blank" rel="noreferrer">
              <span className="ico"><Phone size={18} /></span>
              <span><span className="lbl">WhatsApp</span><span className="val">Scrivici diretto</span></span>
            </a>
            <a className="ci" href="https://instagram.com/vincenzo_garofano" target="_blank" rel="noreferrer">
              <span className="ico"><Instagram size={18} /></span>
              <span><span className="lbl">Instagram</span><span className="val">@vincenzo_garofano</span></span>
            </a>
            <a className="ci" href="https://maps.google.com/?q=Corso+Durante+170,+Frattamaggiore+NA" target="_blank" rel="noreferrer">
              <span className="ico"><MapPin size={18} /></span>
              <span><span className="lbl">Dove siamo</span><span className="val">Corso Durante 170, Frattamaggiore (NA)</span></span>
            </a>
            <div className="ci" style={{cursor:"default"}}>
              <span className="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
              <span><span className="lbl">Orari</span><span className="val">Su appuntamento · Lun–Sab 8:00–20:00</span></span>
            </div>
            <div className="map">
              <div className="pin"><MapPin size={26} /><span>VG Studio · Frattamaggiore</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND — PUNTO 7 */}
      <section className="band">
        <div className="wrap">
          <div data-reveal><Eyebrow>Accesso selezionato</Eyebrow></div>
          <h2 className="disp h-xl" data-reveal data-d="1">Pochi clienti.<br />Seguiti davvero.</h2>
          <p className="lede" data-reveal data-d="2" style={{margin:"0 auto 8px"}}>
            Accettiamo un numero limitato di nuovi clienti per garantire la qualità dell'esperienza
            e dell'assistenza all'interno dello studio.
          </p>
          <a className="btn btn-primary" data-reveal data-d="3" href="#contatti" onClick={(e) => go(e, "#contatti")}>
            Richiedi una consulenza conoscitiva <ArrowRight size={17} />
          </a>
          <p className="band-note" data-reveal data-d="3">
            Valuteremo insieme se il percorso è realmente adatto alle tue esigenze e ai tuoi obiettivi.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-top">
            <Logo onClick={(e) => go(e, "#top")} />
            <div className="foot-nav">
              {NAV.map(([t, h]) => <a key={h} href={h} onClick={(e) => go(e, h)}>{t}</a>)}
              <a href="#contatti" onClick={(e) => go(e, "#contatti")}>Contatti</a>
            </div>
          </div>
          <div className="foot-bot">
            <span>© {new Date().getFullYear()} VG Personal Training Studio · Corso Durante 170, Frattamaggiore (NA) · P.IVA 09477361217</span>
            <span>Personal Trainer Frattamaggiore · Napoli — <a href="/privacy">Privacy Policy</a> · <a href="#top" onClick={(e) => go(e, "#top")}>Torna su ↑</a></span>
          </div>
        </div>
      </footer>
      {/* COOKIE BANNER */}
      <div className={`cookie-bar${cookieVisible ? " visible" : ""}`} role="dialog" aria-label="Cookie">
        <p>
          Questo sito utilizza cookie tecnici necessari al funzionamento. Nessun dato viene ceduto a terzi.{" "}
          <a href="/privacy">Leggi la Privacy Policy</a>.
        </p>
        <div className="cookie-btns">
          <button className="cookie-rej" onClick={rejectCookie}>Solo necessari</button>
          <button className="cookie-acc" onClick={acceptCookie}>Accetta</button>
        </div>
      </div>

      {/* WHATSAPP FLOATING */}
      <a className="wa-float" href="https://wa.me/393427705891"
        target="_blank" rel="noreferrer" aria-label="Contattaci su WhatsApp">
        <span className="wa-pulse" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.847L.057 23.882l6.198-1.437A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.032-1.386l-.361-.214-3.68.853.882-3.573-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
        </svg>
      </a>
    </div>
  );
}
