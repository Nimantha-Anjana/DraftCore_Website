import { useEffect, useRef } from "react";

const LABELS = [[".card", "View"], [".svc-row", "Open"], [".tlink", "Go"], [".btn,.nav-cta", ""]];

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);
  const glow = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (!fine || reduce) {
      return () => window.removeEventListener("scroll", onScroll);
    }

    const root = document.documentElement;
    root.classList.add("has-cursor");
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y, gx = x, gy = y, raf = 0, mag = null;

    const resetMag = () => { if (mag) { mag.style.transform = ""; mag = null; } };

    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      const t = e.target instanceof Element ? e.target : null;
      const field = t?.closest("input,textarea,select");
      ring.current?.classList.toggle("hide", !!field);
      dot.current?.classList.toggle("hide", !!field);
      const hot = t?.closest("a,button,label,[data-cursor]");
      ring.current?.classList.toggle("hover", !!hot);
      let txt = "";
      for (const [sel, name] of LABELS) if (t?.closest(sel)) { txt = name; break; }
      if (label.current && label.current.textContent !== txt) label.current.textContent = txt;
      ring.current?.classList.toggle("has-label", !!txt);

      const card = t?.closest(".card,.why,.ind-item,.pcard");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${x - r.left}px`);
        card.style.setProperty("--my", `${y - r.top}px`);
      }
      const m = t?.closest(".btn,.nav-cta");
      if (m !== mag) resetMag();
      if (m) {
        const r = m.getBoundingClientRect();
        m.style.transform = `translate(${(x - r.left - r.width / 2) * 0.22}px,${(y - r.top - r.height / 2) * 0.32}px)`;
        mag = m;
      }
    };
    const down = () => ring.current?.classList.add("down");
    const up = () => ring.current?.classList.remove("down");
    const leave = () => { ring.current?.classList.add("out"); dot.current?.classList.add("out"); resetMag(); };
    const enter = () => { ring.current?.classList.remove("out"); dot.current?.classList.remove("out"); };

    const tick = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      gx += (x - gx) * 0.07; gy += (y - gy) * 0.07;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      if (glow.current) glow.current.style.transform = `translate3d(${gx}px,${gy}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      root.classList.remove("has-cursor");
      resetMag();
    };
  }, []);

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <div className="cur-glow" ref={glow} aria-hidden="true" />
      <div className="cur-ring" ref={ring} aria-hidden="true"><span ref={label} /></div>
      <div className="cur-dot" ref={dot} aria-hidden="true" />
    </>
  );
}
