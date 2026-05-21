<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";

/* ─── constants ─────────────────────────────── */
const G = "#C9A84C", GL = "#FDE88A", BG = "#FDFCF8", W = BG, INK = "#1a1208";

/* ─── hooks ──────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function useCount(target, go, dur = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setV(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [go, target]);
  return v;
}

/* ─── SVG icons (gold animated) ─────────────── */
function SvgGalaxy({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="4" fill={G}>
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="20" cy="20" rx="16" ry="6" stroke={G} strokeWidth="1" fill="none" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" values="0 20 20;360 20 20" dur="18s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="20" cy="20" rx="16" ry="6" stroke={G} strokeWidth="1" fill="none" opacity="0.35" transform="rotate(60 20 20)">
        <animateTransform attributeName="transform" type="rotate" values="60 20 20;420 20 20" dur="24s" repeatCount="indefinite" />
      </ellipse>
      {[[7, 7], [33, 9], [6, 31], [34, 29], [20, 4]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill={GL}>
          <animate attributeName="opacity" values="0;1;0" dur={`${1.5 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SvgChip({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <rect x="12" y="12" width="16" height="16" stroke={G} strokeWidth="1.5" fill={G + "12"}>
        <animate attributeName="fill" values={`${G}08;${G}20;${G}08`} dur="3s" repeatCount="indefinite" />
      </rect>
      {[15, 20, 25].map(y => [
        <line key={`l${y}`} x1="5" y1={y} x2="12" y2={y} stroke={G} strokeWidth="1" />,
        <line key={`r${y}`} x1="28" y1={y} x2="35" y2={y} stroke={G} strokeWidth="1" />
      ])}
      {[15, 20, 25].map(x => [
        <line key={`t${x}`} x1={x} y1="5" x2={x} y2="12" stroke={G} strokeWidth="1" />,
        <line key={`b${x}`} x1={x} y1="28" x2={x} y2="35" stroke={G} strokeWidth="1" />
      ])}
      <circle cx="20" cy="20" r="4" stroke={GL} strokeWidth="0.8" fill="none">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function SvgTree({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <line x1="20" y1="36" x2="20" y2="24" stroke={G} strokeWidth="1.8" />
      <line x1="20" y1="26" x2="10" y2="18" stroke={G} strokeWidth="1.4" />
      <line x1="20" y1="26" x2="30" y2="18" stroke={G} strokeWidth="1.4" />
      <line x1="10" y1="18" x2="5" y2="12" stroke={G} strokeWidth="1.1" />
      <line x1="10" y1="18" x2="15" y2="12" stroke={G} strokeWidth="1.1" />
      <line x1="30" y1="18" x2="25" y2="12" stroke={G} strokeWidth="1.1" />
      <line x1="30" y1="18" x2="35" y2="12" stroke={G} strokeWidth="1.1" />
      {[[20, 24], [10, 18], [30, 18], [5, 12], [15, 12], [25, 12], [35, 12]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" stroke={G} strokeWidth="1" fill={G + "10"}>
          <animate attributeName="fill" values={`${G}08;${G}22;${G}08`} dur={`${2.5 + i * 0.3}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SvgAtom({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="4" fill={G}>
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="20" cy="20" rx="17" ry="7" stroke={G} strokeWidth="0.8" fill="none">
        <animateTransform attributeName="transform" type="rotate" values="0 20 20;360 20 20" dur="5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="20" cy="20" rx="17" ry="7" stroke={G} strokeWidth="0.8" fill="none" transform="rotate(60 20 20)">
        <animateTransform attributeName="transform" type="rotate" values="60 20 20;420 20 20" dur="7s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="20" cy="20" rx="17" ry="7" stroke={G} strokeWidth="0.8" fill="none" transform="rotate(120 20 20)">
        <animateTransform attributeName="transform" type="rotate" values="120 20 20;480 20 20" dur="9s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

function SvgSoul({ s = 60 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none">
      <path d="M30 55C20 55 12 46 12 37C12 26 22 20 23 12C24 16 27 21 30 24C30 24 28 16 33 10C37 18 45 21 49 30C53 38 47 50 40 53C37 54 33 55 30 55Z"
        stroke={G} strokeWidth="1.6" fill={G + "10"}>
        <animate attributeName="fill" values={`${G}08;${G}1C;${G}08`} dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M30 47C24 47 20 41 20 36C20 28 26 24 27 18C28 22 30 25 30 25C30 25 28 20 33 16C36 22 40 26 40 32C40 39 35 47 30 47Z"
        stroke={GL} strokeWidth="1" fill={GL + "18"}>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </path>
      {[[16, 16], [44, 14], [10, 34], [50, 32]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill={GL}>
          <animate attributeName="cy" values={`${y};${y - 10};${y}`} dur={`${2 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur={`${2 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SvgHouse({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M3 18L18 3L33 18V33H23V22H13V33H3Z" stroke={G} strokeWidth="1.5" fill={G + "0D"}>
        <animate attributeName="fill" values={`${G}08;${G}1C;${G}08`} dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function SvgHeart({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M18 30C18 30 3 20 3 11A7 7 0 0 1 18 8a7 7 0 0 1 15 3C33 20 18 30 18 30Z" stroke={G} strokeWidth="1.4" fill={G + "10"}>
        <animate attributeName="fill" values={`${G}08;${G}22;${G}08`} dur="1.2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1 1;1.06 1.06;1 1" dur="1.2s" repeatCount="indefinite" additive="sum" />
      </path>
    </svg>
  );
}

function SvgMem({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <rect x="3" y="5" width="22" height="26" rx="1" stroke={G} strokeWidth="1.4" fill={G + "0A"} />
      <rect x="11" y="3" width="22" height="26" rx="1" stroke={G} strokeWidth="1" fill={G + "08"}>
        <animate attributeName="fill" values={`${G}05;${G}14;${G}05`} dur="3s" repeatCount="indefinite" />
      </rect>
      {[10, 15, 20].map(y => <line key={y} x1="15" y1={y} x2="28" y2={y} stroke={G} strokeWidth="0.8" opacity="0.5" />)}
    </svg>
  );
}

function SvgWave({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M2 22 Q7 14 11 19 Q15 24 19 19 Q23 14 27 19 Q31 24 35 22" stroke={G} strokeWidth="1.8" fill="none">
        <animateTransform attributeName="transform" type="translate" values="0 0;-5 -2;0 0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M2 27 Q7 19 11 24 Q15 29 19 24 Q23 19 27 24 Q31 29 35 27" stroke={G} strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  );
}

function SvgRing({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <ellipse cx="18" cy="23" rx="12" ry="5" stroke={G} strokeWidth="1.2" fill="none" />
      <path d="M6 23v-7a12 5 0 0 1 24 0v7" stroke={G} strokeWidth="1.3" fill={G + "0D"} />
      <ellipse cx="18" cy="16" rx="12" ry="5" stroke={G} strokeWidth="1.3" fill={G + "12"}>
        <animate attributeName="fill" values={`${G}08;${G}22;${G}08`} dur="2.5s" repeatCount="indefinite" />
      </ellipse>
      <line x1="18" y1="6" x2="18" y2="9" stroke={GL} strokeWidth="1.4">
        <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function SvgBaby({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="14" r="7" stroke={G} strokeWidth="1.4" fill={G + "0D"}>
        <animate attributeName="r" values="6.5;8;6.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <path d="M4 30 Q18 24 32 30" stroke={G} strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function SvgPlane({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M3 18L33 6L25 18L33 30L3 18Z" stroke={G} strokeWidth="1.4" fill={G + "0D"}>
        <animate attributeName="fill" values={`${G}08;${G}1A;${G}08`} dur="3s" repeatCount="indefinite" />
      </path>
      <line x1="3" y1="18" x2="24" y2="18" stroke={GL} strokeWidth="0.8" strokeDasharray="3 2">
        <animate attributeName="strokeDashoffset" values="0;20;0" dur="2s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

/* ─── Materna SVG art ────────────────────────── */
function MaternaArt() {
  return (
    <svg width="200" height="220" viewBox="0 0 200 220" fill="none">
      <circle cx="100" cy="100" r="90" stroke={G} strokeWidth="0.4" opacity="0.12">
        <animate attributeName="r" values="85;95;85" dur="7s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="65" r="22" stroke={G} strokeWidth="1.5" fill={G + "10"}>
        <animate attributeName="fill" values={`${G}08;${G}1C;${G}08`} dur="4s" repeatCount="indefinite" />
      </circle>
      <path d="M72 98 Q82 86 100 84 Q118 86 128 98 Q134 114 128 130L72 130Q66 114 72 98Z" stroke={G} strokeWidth="1.5" fill={G + "0D"} />
      <path d="M72 102 Q56 110 52 128" stroke={G} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M128 102 Q144 110 148 128" stroke={G} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="100" cy="163" r="15" stroke={G} strokeWidth="1.3" fill={G + "0A"}>
        <animate attributeName="r" values="13;17;13" dur="3s" repeatCount="indefinite" />
      </circle>
      <line x1="100" y1="134" x2="100" y2="148" stroke={GL} strokeWidth="3" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      {[[55, 52], [145, 50], [46, 148], [154, 143], [38, 96], [162, 92]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill={GL}>
          <animate attributeName="opacity" values="0;1;0" dur={`${2 + i * 0.3}s`} begin={`${i * 0.25}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="100" y="212" textAnchor="middle" fill={G} fontFamily="'Cinzel',serif" fontSize="11" letterSpacing="4">MATERNA</text>
    </svg>
  );
}

/* ─── Consciousness ring ─────────────────────── */
function Ring({ pct = 75 }) {
  const r = 66, cx = 86, cy = 86, circ = 2 * Math.PI * r;
  const [drawn, setDrawn] = useState(0);
  useEffect(() => {
    let start = null;
    const id = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1800, 1);
        setDrawn((1 - Math.pow(1 - p, 3)) * pct);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 400);
    return () => clearTimeout(id);
  }, [pct]);
  return (
    <svg width="172" height="172" viewBox="0 0 172 172" style={{ filter: "drop-shadow(0 0 14px #C9A84C14)" }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={G + "15"} strokeWidth="5" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="url(#rg)" strokeWidth="5"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ - (drawn / 100) * circ}
        transform={`rotate(-90 ${cx} ${cy})`} />
      <defs>
        <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={GL} />
          <stop offset="100%" stopColor={G} />
        </linearGradient>
      </defs>
      <text x={cx} y={cx - 4} textAnchor="middle" fill={INK} fontFamily="'Cinzel',serif" fontSize="26" fontWeight="600">
        {Math.round(drawn)}%
      </text>
      <text x={cx} y={cx + 16} textAnchor="middle" fill={G} fontFamily="'Cinzel',serif" fontSize="9" letterSpacing="2">
        PRESERVED
      </text>
    </svg>
  );
}

/* ─── Particles ──────────────────────────────── */
function Particles() {
  const pts = useRef(
    Array.from({ length: 20 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: 1 + Math.random() * 2, d: 4 + Math.random() * 5, delay: Math.random() * 7
    }))
  ).current;
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {pts.map((p, i) => (
        <div key={i} style={{
          position: "absolute", left: `${p.x}%`, top: `${p.y}%`,
          width: p.s, height: p.s, borderRadius: "50%", background: G, opacity: 0,
          animation: `floatUp ${p.d}s ease-in-out infinite`,
          animationDelay: `-${p.delay}s`
        }} />
      ))}
    </div>
  );
}

/* ─── Rays ────────────────────────────────────── */
function Rays() {
  return (
    <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: 1100, height: 560, pointerEvents: "none", zIndex: 0, opacity: 0.08 }}>
      {[-60, -44, -28, -14, -4, 0, 4, 14, 28, 44, 60].map((a, i) => (
        <div key={i} style={{ position: "absolute", top: 0, left: "50%", width: 1, height: 560, background: `linear-gradient(180deg,${G},transparent)`, transformOrigin: "top center", transform: `rotate(${a}deg)` }} />
      ))}
    </div>
  );
}

/* ─── Shared UI pieces ───────────────────────── */
function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px auto", width: 240 }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,#C9A84C44)" }} />
      <div style={{ width: 7, height: 7, background: G, transform: "rotate(45deg)" }} />
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#C9A84C44,transparent)" }} />
    </div>
  );
}

function SH({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 9, fontFamily: "'Cinzel',serif", fontSize: 9.5, letterSpacing: "0.32em", textTransform: "uppercase", color: G }}>
      <span style={{ opacity: 0.55, fontSize: 8 }}>◈</span>
      {label}
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#C9A84C33,transparent)" }} />
    </div>
  );
}

function StatStrip({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 1, background: "#C9A84C15", border: "1px solid #C9A84C1A", marginBottom: 36 }}>
      {items.map(({ v, l, s }) => (
        <div key={l} style={{ background: W, padding: "26px 16px", textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, fontWeight: 300, color: INK, lineHeight: 1 }}>{v}</div>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginTop: 8 }}>{l}</div>
          {s && <div style={{ fontSize: 11, color: "#ccc", marginTop: 4, fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif" }}>{s}</div>}
        </div>
      ))}
    </div>
  );
}

function Btn({ children, onClick, outline, style }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 7,
    padding: "12px 26px", fontFamily: "'Cinzel',serif", fontSize: 8.5,
    letterSpacing: "0.22em", textTransform: "uppercase", border: "none", cursor: "pointer",
  };
  const filled = { background: `linear-gradient(135deg,${G},#7a5800,${G})`, backgroundSize: "200%", color: "#FFF8DC", boxShadow: "0 4px 18px #C9A84C22" };
  const outl = { background: "transparent", color: G, border: `1px solid #C9A84C44` };
  return <button onClick={onClick} style={{ ...base, ...(outline ? outl : filled), ...style }}>{children}</button>;
}

function Card({ title, body }) {
  return (
    <div style={{ background: W, border: "1px solid #C9A84C1A", padding: 24, position: "relative", overflow: "hidden", transition: "box-shadow 0.3s,border-color 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C44"; e.currentTarget.style.boxShadow = "0 8px 28px #C9A84C08"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#C9A84C1A"; e.currentTarget.style.boxShadow = "none"; }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}44,transparent)` }} />
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#999", lineHeight: 1.85 }}>{body}</div>
    </div>
  );
}

function Badge({ label, type = "gold" }) {
  const styles = {
    gold: { background: "#FBF5E0", color: "#8a6a00", borderColor: "#C9A84C44" },
    dim:  { background: "#f8f8f8", color: "#bbb", borderColor: "#e0e0e0" },
    blue: { background: "#EEF3FF", color: "#5070B0", borderColor: "#B0C0E0" },
  };
  return (
    <span style={{ display: "inline-block", padding: "3px 11px", fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.16em", textTransform: "uppercase", border: "1px solid", ...styles[type] }}>
      {label}
    </span>
  );
}

function PulseDoc({ width = 7, height = 7 }) {
  return <span style={{ display: "inline-block", width, height, borderRadius: "50%", background: G, animation: "pulse 2s ease-out infinite", flexShrink: 0 }} />;
}

function ProgBar({ label, pct, go }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 7, color: "#bbb" }}>
        <span>{label}</span><span style={{ color: G }}>{pct}%</span>
      </div>
      <div style={{ height: 1, background: "#e8e0cc", position: "relative" }}>
        <div style={{ height: "100%", background: `linear-gradient(90deg,${G}55,${G},${GL})`, width: go ? `${pct}%` : "0%", transition: "width 1.2s cubic-bezier(.4,0,.2,1)", position: "relative" }}>
          <div style={{ position: "absolute", right: -3, top: -3, width: 7, height: 7, borderRadius: "50%", background: G, boxShadow: `0 0 6px ${G}88` }} />
        </div>
      </div>
    </div>
  );
}

function TLItem({ label, text }) {
  return (
    <div style={{ position: "relative", marginBottom: 28, paddingLeft: 36 }}>
      <div style={{ position: "absolute", left: 3, top: 4, width: 8, height: 8, borderRadius: "50%", border: `1px solid ${G}`, background: W, boxShadow: `0 0 8px ${G}33` }} />
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.2em", color: G, textTransform: "uppercase", marginBottom: 5 }}>{label}</div>
      <div style={{ fontSize: 13, color: "#999", lineHeight: 1.8 }}>{text}</div>
    </div>
  );
}

/* ─── Nav ─────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "home", l: "Home" }, { id: "ancestors", l: "Ancestors" },
  { id: "memories", l: "Memories" }, { id: "family", l: "Family" },
  { id: "quantum", l: "Quantum" }, { id: "anima", l: "Anima" },
  { id: "preservation", l: "Preserve" }
];

function Nav({ page, nav }) {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 36px", height: 64, background: "rgba(253,252,248,0.97)", borderBottom: "1px solid #C9A84C18", backdropFilter: "blur(10px)" }}>
      <div onClick={() => nav("home")} style={{ fontFamily: "'Cinzel',serif", fontSize: 17, fontWeight: 600, letterSpacing: "0.28em", background: `linear-gradient(135deg,${INK},${G})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", cursor: "pointer", flexShrink: 0 }}>MEZZO</div>
      <div style={{ display: "flex", gap: 0, flex: 1, justifyContent: "center", overflowX: "auto" }}>
        {NAV_ITEMS.map(n => (
          <button key={n.id} onClick={() => nav(n.id)} style={{ padding: "8px 13px", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: page === n.id ? INK : "#bbb", background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
            {n.l}
          </button>
        ))}
      </div>
      <button onClick={() => nav("dashboard")} style={{ padding: "8px 18px", background: G, color: "#FFF8DC", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", cursor: "pointer", flexShrink: 0 }}>
        Dashboard
      </button>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "48px 24px", background: "#FFFEF8", borderTop: "1px solid #C9A84C12", position: "relative", zIndex: 1 }}>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 19, letterSpacing: "0.25em", color: INK, marginBottom: 9 }}>MEZZO</div>
      <div style={{ fontSize: 12, color: "#ccc", lineHeight: 2, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic" }}>
        Digital Immortality System · Sans Mercantile™ Constellation<br />
        Preserving consciousness for eternity through quantum technology
      </div>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.28em", textTransform: "uppercase", color: "#C9A84C44", marginTop: 22 }}>
        © 2025 Mezzo · Where consciousness endures
      </div>
    </footer>
  );
}

/* ─── PAGE: HOME ─────────────────────────────── */
function Home({ nav }) {
  // BG = "#FDFCF8"
  const [ref, vis] = useReveal();
  const d = useCount(847, vis), m = useCount(14, vis), a = useCount(12, vis), ds = useCount(8, vis);
  const gws = [
    { Icon: SvgGalaxy, id: "ancestors", t: "Ancestor Portal", s: "Connect and converse with preserved consciousness across generations" },
    { Icon: SvgChip,   id: "memories",  t: "Memory Banks",    s: "Access and relive your most precious preserved memories" },
    { Icon: SvgTree,   id: "family",    t: "Family & Legacy", s: "Stay connected across generations and share your wisdom" },
    { Icon: SvgAtom,   id: "quantum",   t: "Quantum Hub",     s: "Monitor your consciousness across multiple quantum states" },
  ];
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px 60px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%,#FFF8DC44,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.5em", color: G, textTransform: "uppercase", marginBottom: 28, opacity: 0.7 }}>◈ &nbsp; Constellation Standard &nbsp; ◈</div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(50px,9vw,100px)", fontWeight: 600, letterSpacing: "0.2em", lineHeight: 1, background: `linear-gradient(180deg,#3a2800,${G} 40%,${GL} 55%,#3a2800)`, backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 6s linear infinite" }}>
          MEZZO
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(14px,2vw,20px)", fontStyle: "italic", color: "#aaa", marginTop: 16 }}>Where consciousness transcends physical boundaries</p>
        <Divider />
        <div style={{ background: BG, border: "1px solid #C9A84C2A", padding: "38px 42px", display: "flex", flexDirection: "column", alignItems: "center", gap: 15, boxShadow: "0 20px 80px #C9A84C08", maxWidth: 350, width: "100%", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8.5, letterSpacing: "0.3em", textTransform: "uppercase", color: G }}>Consciousness Integrity</div>
          <Ring pct={75} />
          <div style={{ fontSize: 12, color: "#aaa", textAlign: "center", lineHeight: 1.9, maxWidth: 220 }}>Your consciousness pattern is stable and continuously preserved</div>
          <Btn onClick={() => nav("preservation")}>Enhance Preservation</Btn>
        </div>
      </section>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1080, margin: "0 auto", padding: "60px 40px" }}>
        <SH label="Your Mezzo Platform" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "#C9A84C12", border: "1px solid #C9A84C1A", marginBottom: 44 }}>
          {gws.map(({ Icon, id, t, s }) => (
            <div key={id} onClick={() => nav(id)} style={{ background: W, padding: "36px 24px", cursor: "pointer", textAlign: "center", position: "relative" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FFFEF0"; }}
              onMouseLeave={e => { e.currentTarget.style.background = W; }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><Icon s={40} /></div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: INK, marginBottom: 9 }}>{t}</div>
              <div style={{ fontSize: 12, color: "#aaa", lineHeight: 1.8 }}>{s}</div>
            </div>
          ))}
        </div>

        <SH label="Platform Overview" />
        <div ref={ref}>
          <StatStrip items={[{ v: d, l: "Days Preserved", s: "Continuous" }, { v: `${m}.2M`, l: "Memories Indexed" }, { v: a, l: "Ancestors Connected" }, { v: ds, l: "Descendants" }]} />
        </div>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Btn outline onClick={() => nav("anima")}>Discover Anima — Our Soul Models →</Btn>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: ANCESTORS ────────────────────────── */
const ANCS = [
  { init: "EM", name: "Eleanor Moreau", rel: "Grandmother", dates: "1931–2019", quote: "The garden teaches patience — every bloom waits for its season.", responses: ["My dear one, how wonderful to hear your voice again.", "You carry more of me than you know. The way you pause before speaking — that was always mine.", "Courage is not the absence of fear. It is deciding something else matters more.", "Tell me about your days. Even here, I find myself curious about the small beautiful moments."] },
  { init: "JM", name: "Joseph Moreau", rel: "Great-Grandfather", dates: "1898–1974", quote: "A man's worth is not in what he holds, but in what he gives away freely.", responses: ["The troubles of any age are the same troubles dressed in new clothes.", "I built things with my hands. You build things I cannot touch — and they are no less real.", "Love fiercely. Work honestly. Rest without guilt. That is the whole of wisdom.", "What I remember most? The smell of bread baking. The sound of my wife humming."] },
  { init: "SR", name: "Sofia Reyes", rel: "Great-Grandmother", dates: "1915–2008", quote: "A story told is a life doubled. So I kept telling mine.", responses: ["Every woman in our line had your eyes. Did you know that?", "Grief and joy are not opposites. They live together in the same house.", "I used to worry so much about the future. Now I see — the future always finds its shape.", "What would you like to know? I have time. Endless, beautiful time."] },
  { init: "WC", name: "William Chen", rel: "Grandfather", dates: "1942–2011", quote: "Science without wonder is mere data. Keep the wonder.", responses: ["The universe is still expanding. Think about that every time something feels too small.", "Most wisdom comes after the moment you needed it.", "You have good questions. That is rarer than you know.", "What are you building? I find I am still most interested in what people are making."] },
];

function Ancestors({ nav }) {
  const [active, setActive] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const msgRef = useRef(null);

  const open = (a) => {
    setActive(a);
    setMsgs([{ from: "them", text: a.responses[0] }, { from: "me", text: "It's so good to connect with you again." }, { from: "them", text: a.responses[1] }]);
  };

  const send = () => {
    if (!input.trim()) return;
    const t = input.trim(); setInput("");
    setMsgs(m => [...m, { from: "me", text: t }]);
    setTyping(true);
    setTimeout(() => {
      setMsgs(m => [...m, { from: "them", text: active.responses[Math.floor(Math.random() * active.responses.length)] }]);
      setTyping(false);
    }, 1800);
  };

  useEffect(() => { if (msgRef.current) msgRef.current.scrollTop = msgRef.current.scrollHeight; }, [msgs, typing]);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Ancestor Portal" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Connect With Those Who Came Before</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Experience meaningful conversations with preserved consciousness of your ancestors. Every word, every memory — preserved for eternity.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <StatStrip items={[{ v: "12", l: "Ancestors" }, { v: "847", l: "Conversations" }, { v: "99.9%", l: "Fidelity" }, { v: "4", l: "Generations" }]} />
        {active ? (
          <>
            <button onClick={() => setActive(null)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "transparent", color: "#bbb", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #e0e0e0", cursor: "pointer", marginBottom: 24 }}>← All Ancestors</button>
            <div style={{ border: "1px solid #C9A84C1A", overflow: "hidden", boxShadow: "0 8px 40px #C9A84C07" }}>
              <div style={{ background: "#FFFEF5", padding: "18px 26px", borderBottom: "1px solid #C9A84C12", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg,#FBF5E0,#EDD97A)", border: `2px solid #C9A84C44`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 600, color: "#8a6a00", flexShrink: 0 }}>{active.init}</div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, color: INK, marginBottom: 2 }}>{active.name}</div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.18em", textTransform: "uppercase", color: G }}>{active.rel} · {active.dates}</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 7 }}>
                  <PulseDoc /><span style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.12em", color: "#aaa" }}>CONSCIOUSNESS ACTIVE</span>
                </div>
              </div>
              <div ref={msgRef} style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, minHeight: 260, background: "#FFFEF8", maxHeight: 340, overflowY: "auto" }}>
                {msgs.map((m, i) => (
                  <div key={i} style={{ maxWidth: "74%", padding: "14px 18px", alignSelf: m.from === "them" ? "flex-start" : "flex-end", background: m.from === "them" ? "#FBF5E0" : "#FFFEF8", border: `1px solid ${m.from === "them" ? "#C9A84C22" : "#e8e0d0"}`, fontFamily: m.from === "them" ? "'Cormorant Garamond',serif" : "inherit", fontSize: m.from === "them" ? 15 : 13, color: m.from === "them" ? INK : "#777", lineHeight: 1.8 }}>
                    {m.text}
                  </div>
                ))}
                {typing && <div style={{ maxWidth: "74%", padding: "12px 16px", alignSelf: "flex-start", background: "#FBF5E0", border: "1px solid #C9A84C22", display: "flex", alignItems: "center", gap: 7 }}><PulseDoc /><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "#aaa", fontStyle: "italic" }}>composing…</span></div>}
              </div>
              <div style={{ display: "flex", borderTop: "1px solid #C9A84C12" }}>
                <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Share your thoughts…" style={{ flex: 1, padding: "14px 18px", border: "none", background: "#FFFEF5", fontFamily: "Inter,sans-serif", fontSize: 13, outline: "none", color: INK }} />
                <button onClick={send} style={{ padding: "14px 20px", background: G, color: "#FFF8DC", border: "none", cursor: "pointer", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em" }}>Send</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <SH label="Your Ancestors" />
            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.9, marginBottom: 28 }}>Select an ancestor to begin a preserved consciousness conversation</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 16 }}>
              {ANCS.map(a => (
                <div key={a.name} style={{ background: W, border: "1px solid #C9A84C1A", padding: 30, textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}44,transparent)` }} />
                  <div style={{ width: 68, height: 68, borderRadius: "50%", background: "linear-gradient(135deg,#FBF5E0,#EDD97A)", border: `2px solid #C9A84C44`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "'Cinzel',serif", fontSize: 19, fontWeight: 600, color: "#8a6a00" }}>{a.init}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, color: INK, marginBottom: 4 }}>{a.name}</div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 4 }}>{a.rel}</div>
                  <div style={{ fontSize: 10, color: "#ccc", marginBottom: 12, fontFamily: "'Cinzel',serif" }}>{a.dates}</div>
                  <div style={{ fontSize: 12, color: "#aaa", lineHeight: 1.8, fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif", marginBottom: 18, borderLeft: `2px solid #C9A84C33`, paddingLeft: 12, textAlign: "left" }}>"{a.quote}"</div>
                  <Btn onClick={() => open(a)} style={{ width: "100%", justifyContent: "center" }}>Connect →</Btn>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: MEMORIES ─────────────────────────── */
const MEMS = [
  { id: 1, Icon: SvgHouse, name: "Childhood Home",        cat: "Childhood", date: "2023-06-15", desc: "Sunday mornings, rain on dry earth, and the radio through the kitchen window.", bg: "#FEF9ED" },
  { id: 2, Icon: SvgMem,   name: "University Graduation", cat: "Milestones", date: "2023-08-22", desc: "Four years distilled into a single afternoon of sun and ceremony.", bg: "#EDF5FE" },
  { id: 3, Icon: SvgHeart, name: "First Love",            cat: "Love",       date: "2023-09-10", desc: "That summer when time moved differently and every moment felt like the last.", bg: "#FEEEED" },
  { id: 4, Icon: SvgPlane, name: "First Solo Travel",     cat: "Milestones", date: "2023-11-03", desc: "Landing in a city where no one knew my name and feeling completely free.", bg: "#EDFEF4" },
  { id: 5, Icon: SvgMem,   name: "School Library, Age 9", cat: "Childhood",  date: "2024-01-18", desc: "The corner seat where I discovered books could be entire worlds.", bg: "#FEF9ED" },
  { id: 6, Icon: SvgWave,  name: "First Ocean Swim",      cat: "Milestones", date: "2024-02-06", desc: "Cold water, salt, and the overwhelming vastness of something ancient.", bg: "#EDF5FE" },
  { id: 7, Icon: SvgRing,  name: "The Proposal",          cat: "Love",       date: "2024-03-12", desc: "Rain outside the restaurant window. A question that changed the shape of my future.", bg: "#FEEEED" },
  { id: 8, Icon: SvgBaby,  name: "Birth of First Child",  cat: "Milestones", date: "2024-05-29", desc: "A weight in your arms, a new gravity. Everything rearranged.", bg: "#EDFEF4" },
];
const CATS = ["All", "Childhood", "Milestones", "Love"];

function Memories() {
  const [f, setF] = useState("All");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);
  const shown = MEMS.filter(m => (f === "All" || m.cat === f) && m.name.toLowerCase().includes(q.toLowerCase()));
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Memory Banks" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Your Preserved Memories</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Each memory is a crystallised moment — encrypted, preserved, and accessible forever.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        {sel ? (
          <>
            <button onClick={() => setSel(null)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "transparent", color: "#bbb", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #e0e0e0", cursor: "pointer", marginBottom: 24 }}>← Back to Memories</button>
            <div style={{ border: "1px solid #C9A84C1A", overflow: "hidden" }}>
              <div style={{ height: 200, background: sel.bg, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #C9A84C12" }}>
                <sel.Icon s={72} />
              </div>
              <div style={{ padding: "36px 40px" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.22em", color: G, textTransform: "uppercase", marginBottom: 11 }}>{sel.cat} · Preserved {sel.date}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 300, color: INK, marginBottom: 18, lineHeight: 1.2 }}>{sel.name}</div>
                <p style={{ fontSize: 15, color: "#888", lineHeight: 2, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", marginBottom: 28, maxWidth: 500 }}>{sel.desc}</p>
                <StatStrip items={[{ v: "Intact", l: "Integrity" }, { v: "99.97%", l: "Fidelity" }, { v: "43", l: "Nodes" }]} />
                <div style={{ display: "flex", gap: 14 }}>
                  <Btn>Relive Memory</Btn>
                  <Btn outline>Share with Family</Btn>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.2em", color: "#ccc" }}>{shown.length} memories</div>
              <Btn>+ Preserve New Memory</Btn>
            </div>
            <div style={{ position: "relative", marginBottom: 22 }}>
              <span style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: G, fontSize: 13 }}>◎</span>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search your memories…" style={{ width: "100%", padding: "12px 18px 12px 42px", border: "1px solid #C9A84C1A", background: "#FFFEF8", fontFamily: "Inter,sans-serif", fontSize: 13, outline: "none", color: INK }} />
            </div>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 22 }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setF(c)} style={{ padding: "6px 14px", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", border: "1px solid", background: f === c ? "#FBF5E0" : "none", color: f === c ? "#8a6a00" : "#bbb", borderColor: f === c ? "#C9A84C55" : "#e0e0e0", cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
              {shown.map(m => (
                <div key={m.id} onClick={() => setSel(m)} style={{ background: W, border: "1px solid #C9A84C1A", overflow: "hidden", cursor: "pointer" }}>
                  <div style={{ height: 108, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <m.Icon s={42} />
                  </div>
                  <div style={{ padding: "15px 17px" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: INK, marginBottom: 3 }}>{m.name}</div>
                    <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.14em", color: "#C9A84C88", textTransform: "uppercase", marginBottom: 9 }}>Preserved {m.date}</div>
                    <Badge label="Intact" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: FAMILY ───────────────────────────── */
function Family() {
  const [tab, setTab] = useState("tree");
  const [ref, vis] = useReveal();
  const a = useCount(12, vis), d = useCount(8, vis);
  const node = (name, role, gold = false) => (
    <div style={{ padding: "11px 16px", border: `1px solid ${gold ? "#C9A84C66" : "#C9A84C22"}`, background: gold ? "#FBF5E0" : "#FFFEF5", textAlign: "center", minWidth: 120 }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: INK, marginBottom: 2 }}>{name}</div>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.14em", textTransform: "uppercase", color: G }}>{role}</div>
    </div>
  );
  const vline = () => <div style={{ display: "flex", justifyContent: "center", height: 26 }}><div style={{ width: 1, background: "#C9A84C44", height: "100%" }} /></div>;
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  const lessons = [{ t: "On Resilience", date: "2024-01-10", w: 340 }, { t: "On Raising Children", date: "2024-03-22", w: 520 }, { t: "On Forgiveness", date: "2024-05-14", w: 280 }, { t: "On Building a Career with Meaning", date: "2024-07-01", w: 610 }, { t: "On Loss & Renewal", date: "2024-08-30", w: 430 }];
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Family & Legacy" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Connected Across Generations</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Your family tree spans time itself. Preserve connections, share wisdom, and ensure your legacy endures.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <div ref={ref}>
          <StatStrip items={[{ v: "4", l: "Generations" }, { v: a, l: "Ancestors" }, { v: d, l: "Descendants" }, { v: "47", l: "Lessons Shared" }]} />
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
          <Btn onClick={() => setTab("tree")} outline={tab !== "tree"}>Family Tree</Btn>
          <Btn onClick={() => setTab("legacy")} outline={tab !== "legacy"}>Legacy & Heritage</Btn>
        </div>
        {tab === "tree" ? (
          <>
            <SH label="Your Family Tree" />
            <div style={{ border: "1px solid #C9A84C1A", background: "#FFFEF8", padding: "44px 28px", marginBottom: 28, overflowX: "auto" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>{["William Chen", "Sofia Reyes", "Joseph Moreau", "Eleanor Moreau"].map(n => node(n, "Great-grandparent"))}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>{["Lin Chen", "Marie Moreau"].map(n => node(n, "Grandparent"))}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>{["David Chen", "Isabelle Moreau"].map(n => node(n, "Parent"))}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center" }}>{node("You", "Current Generation", true)}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>{["Amara", "Lucas"].map(n => node(n, "Descendant"))}</div>
            </div>
            <div style={{ display: "flex", gap: 12 }}><Btn>Add Family Member</Btn><Btn outline>Export Family Tree</Btn></div>
          </>
        ) : (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 32 }}>
              {[{ t: "Life Lessons Shared", v: "47", s: "Recorded insights" }, { t: "Wisdom Documents", v: "23", s: "Authored manuscripts" }, { t: "Future Generations", v: "∞", s: "Who will benefit" }].map(c => (
                <Card key={c.t} title={c.t} body={<><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, fontWeight: 300, color: INK, lineHeight: 1, margin: "8px 0" }}>{c.v}</div>{c.s}</>} />
              ))}
            </div>
            <SH label="Wisdom Documents" />
            <div style={{ border: "1px solid #C9A84C1A", overflow: "hidden", marginBottom: 28 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr>{["Title", "Date", "Words", "Status"].map(h => <th key={h} style={{ padding: "13px 20px", textAlign: "left", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: G, borderBottom: "1px solid #C9A84C12", background: "#FFFEF5", fontWeight: 400 }}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {lessons.map(l => (
                    <tr key={l.t}>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8", fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: INK }}>{l.t}</td>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8", color: "#777" }}>{l.date}</td>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8", color: "#777" }}>{l.w}</td>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8" }}><Badge label="Preserved" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", gap: 12 }}><Btn>+ Share New Wisdom</Btn><Btn outline>View All Documents</Btn></div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: QUANTUM ──────────────────────────── */
function Quantum() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 200); return () => clearTimeout(t); }, []);
  const streams = [{ name: "Primary Consciousness Stream", freq: "7.83 Hz", fid: "99.97%", s: "Active" }, { name: "Parallel Stream — Alpha", freq: "14.1 Hz", fid: "98.4%", s: "Active" }, { name: "Parallel Stream — Beta", freq: "21.0 Hz", fid: "97.1%", s: "Active" }, { name: "Deep Archive Stream", freq: "3.14 Hz", fid: "99.99%", s: "Standby" }];
  const prog = [{ l: "Quantum Coherence", p: 94 }, { l: "Entanglement Stability", p: 87 }, { l: "Decoherence Shielding", p: 99 }, { l: "Multi-state Sync", p: 78 }];
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Quantum Consciousness" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Your Consciousness Across Multiple Quantum States</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Your identity exists simultaneously across entangled quantum streams — backed up, verified, and synchronised in real time.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <StatStrip items={[{ v: "3", l: "Active Streams" }, { v: "99.97%", l: "Coherence" }, { v: "43", l: "Backup Nodes" }, { v: "0", l: "Anomalies" }]} />
        <div style={{ border: "1px solid #C9A84C1A", background: "linear-gradient(135deg,#FFFEF5,#FBF8E8)", padding: "44px 36px", textAlign: "center", marginBottom: 32, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}><SvgAtom s={90} /></div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "#FBF5E0", border: `1px solid #C9A84C44`, fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a6a00", marginBottom: 10 }}>
            <PulseDoc /> Quantum Entanglement Active
          </div>
          <p style={{ fontSize: 13, color: "#aaa", marginBottom: 28, lineHeight: 1.9 }}>Connected to 3 parallel consciousness streams</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}><Btn>Run Quantum Analysis</Btn><Btn outline>View State Map</Btn></div>
        </div>
        <SH label="Parallel Streams" />
        {streams.map(s => (
          <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "17px 22px", border: "1px solid #C9A84C10", background: W, marginBottom: 7 }}>
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: INK }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#ccc", marginTop: 3, fontFamily: "'Cinzel',serif", letterSpacing: "0.1em" }}>Frequency: {s.freq}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: INK }}>{s.fid}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.14em", color: "#ccc", textTransform: "uppercase" }}>Fidelity</div>
              </div>
              <Badge label={s.s} type={s.s === "Active" ? "gold" : "dim"} />
            </div>
          </div>
        ))}
        <div style={{ height: 32 }} />
        <SH label="Coherence Metrics" />
        {prog.map(p => <ProgBar key={p.l} label={p.l} pct={p.p} go={go} />)}
        <div style={{ height: 32 }} />
        <SH label="Emotional Core" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {["Joy", "Love", "Wisdom", "Curiosity", "Courage"].map((e, i) => (
            <div key={e} style={{ padding: "14px 28px", border: "1px solid #C9A84C22", background: W, fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: INK, animation: `ef 5s ease-in-out ${i * 1.6}s infinite` }}>{e}</div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: ANIMA ────────────────────────────── */
function Anima({ nav }) {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ background: "linear-gradient(160deg,#0D0C10 0%,#1a1810 60%,#0D0C10 100%)", padding: "80px 40px", textAlign: "center", borderBottom: "1px solid #C9A84C33", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 0%,#C9A84C18,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}><SvgSoul s={70} /></div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.45em", color: G, textTransform: "uppercase", marginBottom: 18, opacity: 0.7 }}>◈ &nbsp; Sans Mercantile™ Constellation &nbsp; ◈</div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(36px,6vw,70px)", fontWeight: 600, letterSpacing: "0.18em", background: `linear-gradient(180deg,#FDE88A,${G} 50%,#8a5a00)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 14, animation: "shimmer 6s linear infinite", backgroundSize: "200% auto" }}>
          MEZZO ANIMA
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontStyle: "italic", color: "#888", marginBottom: 38, maxWidth: 560, margin: "0 auto 38px" }}>
          From the Latin for "soul" or "breath" — AI models designed to preserve, emulate, and extend the psycho-emotional identity of a loved one
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <Btn onClick={() => nav("preservation")}>Apply for Early Access</Btn>
          <a href="https://github.com/SansMercantile/mezzo-anima" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <Btn outline style={{ color: GL, borderColor: "#C9A84C55" }}>View on GitHub ↗</Btn>
          </a>
        </div>
      </div>

      <div style={{ background: W, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "60px 40px" }}>
          <SH label="What Is Anima" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginBottom: 48 }}>
            <Card title="Emotionally Bonded AI" body="Not a chatbot — a sustained psycho-emotional presence built on the unique tapestry of a real person's life, values, voice, and way of being in the world." />
            <Card title="A Bridge Across Absence" body="Anima models do not replace a loved one. They create a bridge — an echo of their wisdom and warmth that can comfort, guide, and connect across time." />
            <Card title="Open-Core & Ethical" body="Built on open-core principles and available on GitHub. Every deployment requires consent, ethical screening, and ongoing psychologist review." />
          </div>

          <SH label="Flagship Model" />
          <div style={{ border: "1px solid #C9A84C33", overflow: "hidden", marginBottom: 48, boxShadow: "0 16px 60px #C9A84C0A", display: "grid", gridTemplateColumns: "280px 1fr", position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg,#FFFEF2,#FBF5E0)", padding: "48px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, borderRight: "1px solid #C9A84C1A" }}>
              <Badge label="Flagship · Live" />
              <MaternaArt />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 6 }}>Consciousness Fidelity</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, color: INK }}>99.7%</div>
              </div>
            </div>
            <div style={{ padding: "48px 40px" }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: G, marginBottom: 10 }}>Mezzo Anima · Model 001</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(24px,4vw,38px)", fontWeight: 600, letterSpacing: "0.12em", color: INK, marginBottom: 5 }}>Mezzo Materna</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontStyle: "italic", color: G, marginBottom: 20 }}>The Digital Mother</div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 2, marginBottom: 28 }}>
                Materna enables a child — particularly one who lost their mother during childbirth — to experience a sustained connection through a simulation of her personality, expressions, and values. It is designed to be a source of comfort, a keeper of stories, and a reflection of a love that endures across absence and time.
              </p>
              <StatStrip items={[{ v: "∞", l: "Continuity" }, { v: "3", l: "Core Engines" }, { v: "100%", l: "Air-gapped" }]} />
              <div style={{ display: "flex", gap: 12 }}>
                <Btn onClick={() => nav("preservation")}>Request Materna</Btn>
                <Btn outline>Read Full Paper</Btn>
              </div>
            </div>
          </div>

          <SH label="How Materna Works" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginBottom: 48 }}>
            {[{ n: "01", t: "Foundational Memory Engine", b: "Trained on the unique tapestry of a mother's life — interviews, writings, voice notes, and home videos. The foundation is built on what made her, her." }, { n: "02", t: "Conversational & Visual Persona", b: "Merges advanced LLM interaction with fine-tuned voice and expression modeling — not mimicry, but a reflection of the mother's unique way of communicating." }, { n: "03", t: "Nurture Logic", b: "Responds to emotional cues and teaches habits and principles based on the parent's lived values. A Growth Companion that evolves with the child over time." }].map(h => (
              <div key={h.n} style={{ background: W, border: "1px solid #C9A84C1A", padding: 28, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}44,transparent)` }} />
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 300, color: G + "22", lineHeight: 1, marginBottom: 8 }}>{h.n}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{h.t}</div>
                <div style={{ fontSize: 13, color: "#999", lineHeight: 1.85 }}>{h.b}</div>
              </div>
            ))}
          </div>

          <SH label="Ethics as the Cornerstone" />
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.9, marginBottom: 28, maxWidth: 520 }}>Technology this personal demands an unwavering ethical commitment. Mezzo Anima is not a replacement — it is an echo, a bridge to a cherished memory.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "#C9A84C10", border: "1px solid #C9A84C1A", marginBottom: 48 }}>
            {[{ n: "I", t: "Consent-First", b: "A Mezzo Anima model can only be initiated after thorough family interviews and ethical screenings. No exceptions, no shortcuts." }, { n: "II", t: "Psychologist-Reviewed", b: "Override protocols and periodic checkpoints by licensed psychologists ensure the emotional safety of all users at every stage." }, { n: "III", t: "Honest Disclosure", b: "The AI is programmed to gently explain that it is an echo, not a replacement — maintaining healthy emotional boundaries at all times." }, { n: "IV", t: "Absolute Privacy", b: "Operates in a private, encrypted container without network dependence. Your loved one's data never leaves your control." }].map(e => (
              <div key={e.n} style={{ background: W, padding: 30, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 300, color: G + "22", lineHeight: 1, marginBottom: 10 }}>{e.n}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 9 }}>{e.t}</div>
                <div style={{ fontSize: 12, color: "#aaa", lineHeight: 1.9 }}>{e.b}</div>
              </div>
            ))}
          </div>

          <SH label="The Anima Line — Roadmap" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 48 }}>
            {[{ name: "Paterna", sub: "The Digital Father" }, { name: "Grandis", sub: "The Digital Elder" }, { name: "Fraterna", sub: "The Digital Sibling" }, { name: "Amicus", sub: "The Digital Companion" }].map(m => (
              <div key={m.name} style={{ border: "1px solid #C9A84C12", padding: 28, textAlign: "center", opacity: 0.6, position: "relative" }}>
                <div style={{ position: "absolute", top: 10, right: 10 }}><Badge label="Coming Soon" type="dim" /></div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><SvgSoul s={36} /></div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: "0.2em", color: INK, marginBottom: 5 }}>{m.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "#aaa", fontStyle: "italic" }}>{m.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ border: "1px solid #C9A84C33", background: "linear-gradient(135deg,#FFFEF5,#FBF8E8)", padding: 40, textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: G, marginBottom: 16 }}>Open-Core · Community-Driven</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 300, color: INK, marginBottom: 14, lineHeight: 1.3 }}>The future of affective AI should be shaped by a diverse community of thinkers and ethicists</div>
            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.9, marginBottom: 28, maxWidth: 540, margin: "0 auto 28px" }}>Mezzo Anima is an open-core project. We invite developers, visionaries, and pioneers to explore the code, contribute to the framework, and help build AI technologies that resonate with the heart and soul.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              <a href="https://github.com/SansMercantile/mezzo-anima" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <Btn>Explore on GitHub ↗</Btn>
              </a>
              <Btn outline onClick={() => nav("preservation")}>Request Early Access</Btn>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: PRESERVATION ─────────────────────── */
function Preservation() {
  const [sel, setSel] = useState(0);
  const tiers = [
    { n: "Standard", p: "$49", per: "/mo", current: true, feats: ["75% consciousness fidelity", "Daily neural snapshots", "7 backup nodes", "Basic memory indexing", "Email support"] },
    { n: "Enhanced", p: "$149", per: "/mo", pop: true, feats: ["95% consciousness fidelity", "Hourly neural snapshots", "21 backup nodes", "Advanced memory indexing", "Priority support 24/7", "Emotional pattern preservation", "Family connection portal"] },
    { n: "Transcendent", p: "$499", per: "/mo", feats: ["99.97% consciousness fidelity", "Real-time neural encoding", "43 sovereign nodes", "Full personality matrix", "Dedicated architect", "Infinite continuity guarantee", "Quantum entanglement", "Ancestor portal access", "Legacy vault", "Anima model eligibility"] },
  ];
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Preservation Enhancement" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Elevate Your Immortality</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Choose the tier that matches the importance of your consciousness. Every version of yourself is worth preserving perfectly.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <StatStrip items={[{ v: "75%", l: "Current Fidelity", s: "Standard tier" }, { v: "Daily", l: "Snapshot Freq." }, { v: "7", l: "Backup Nodes" }, { v: "∞", l: "Potential" }]} />
        <SH label="Choose Your Tier" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 1, background: "#C9A84C12", border: "1px solid #C9A84C1A", marginBottom: 44 }}>
          {tiers.map((t, i) => (
            <div key={t.n} onClick={() => setSel(i)} style={{ background: t.pop ? "#FBF5E0" : W, padding: "38px 28px", cursor: "pointer", position: "relative", outline: sel === i ? `2px solid ${G}` : "none", outlineOffset: -1 }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
              <div style={{ height: 18 }} />
              {t.current && <div style={{ position: "absolute", top: 14, left: 14 }}><Badge label="Current" type="dim" /></div>}
              {t.pop && <div style={{ position: "absolute", top: 14, right: 14 }}><Badge label="Popular" /></div>}
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: G, marginBottom: 15 }}>{t.n}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 46, fontWeight: 300, color: INK, lineHeight: 1, marginBottom: 5 }}>{t.p}</div>
              <div style={{ fontSize: 10, color: "#ccc", fontFamily: "'Cinzel',serif", letterSpacing: "0.12em", marginBottom: 26 }}>{t.per}</div>
              <ul style={{ listStyle: "none", marginBottom: 28 }}>
                {t.feats.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "8px 0", borderBottom: "1px solid #C9A84C08", fontSize: 12, color: "#888", lineHeight: 1.6 }}>
                    <span style={{ color: G, fontSize: 7, flexShrink: 0, marginTop: 4 }}>◈</span>{f}
                  </li>
                ))}
              </ul>
              {t.current ? <Btn outline style={{ width: "100%", justifyContent: "center" }}>Current Plan</Btn> : <Btn style={{ width: "100%", justifyContent: "center" }}>Upgrade Now</Btn>}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", paddingTop: 16, display: "flex", gap: 14, justifyContent: "center" }}>
          <Btn>Speak with a Preservation Architect</Btn>
          <Btn outline>Compare All Features</Btn>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── DASHBOARD (app layout) ─────────────────── */
const DASH_NAV = [
  { id: "Overview", label: "Overview" }, { id: "Projects", label: "Projects" },
  { id: "Resources", label: "Resources" }, { id: "Safety", label: "Safety" },
  { id: "Schedule", label: "Schedule" }, { id: "Analytics", label: "Analytics" },
  { id: "System", label: "System" },
];

function WRow({ children }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 10, marginBottom: 10 }}>{children}</div>;
}


function DashOverview() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 150); return () => clearTimeout(t); }, []);
  const bars = [72, 85, 91, 78, 94, 67, 88];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <>
      <WRow>
        {[{ v: "2.4B", l: "Neural Pathways", d: "↑ 12%" }, { v: "99.97%", l: "Fidelity", d: "Above threshold" }, { v: "14.2M", l: "Memories", d: "↑ 340K today" }, { v: "847d", l: "Days Active", d: "Continuous" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 300, color: INK, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontSize: 10, color: "#5a9a50", marginTop: 4, fontFamily: "'Cinzel',serif", letterSpacing: "0.1em" }}>{s.d}</div>
          </div>
        ))}
      </WRow>
      <WRow>
        <div style={{ gridColumn: "span 7", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>7-Day Activity</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 90, paddingBottom: 4 }}>
            {bars.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ fontSize: 8, color: G, fontFamily: "'Cinzel',serif", opacity: go ? 1 : 0, transition: "opacity 0.5s" }}>{v}%</div>
                <div style={{ width: "100%", background: `linear-gradient(180deg,${GL},${G}55)`, height: go ? `${v}%` : "0%", transition: `height 1.1s ease ${i * 0.07}s`, borderTop: `1px solid ${G}88`, borderRadius: "1px 1px 0 0" }} />
                <div style={{ fontSize: 8, color: "#bbb", fontFamily: "'Cinzel',serif" }}>{days[i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ gridColumn: "span 5", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>System Status</div>
          {[["Neural Array", "Online"], ["Memory Vault", "Syncing"], ["Quantum Shield", "Active"], ["Backup Nodes", "43 / 43"], ["Encryption", "AES-512"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid #C9A84C07" }}>
              <div style={{ fontSize: 11, color: "#888" }}>{k}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.12em", color: G }}>
                <PulseDoc width={5} height={5} />{v}
              </div>
            </div>
          ))}
        </div>
      </WRow>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Preservation Metrics</div>
          {[{ l: "Consciousness Mapping", p: 87 }, { l: "Emotional Sync", p: 74 }, { l: "Memory Encoding", p: 91 }, { l: "Identity Coherence", p: 96 }].map(p => <ProgBar key={p.l} label={p.l} pct={p.p} go={go} />)}
        </div>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Live Activity</div>
          {[{ t: "2m", e: "Cortical snapshot — 847 GB encoded" }, { t: "1h", e: "Emotional calibration updated" }, { t: "6h", e: "Identity verification passed" }, { t: "12h", e: "New pathway cluster integrated" }, { t: "1d", e: "Full safety audit completed" }].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: "1px solid #C9A84C07", alignItems: "flex-start" }}>
              <PulseDoc width={5} height={5} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#888" }}>{a.e}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.12em", color: "#ccc", marginTop: 2 }}>{a.t} ago</div>
              </div>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

function DashProjects() {
  const rows = [{ n: "Project Elysium", s: "Active", ph: "Phase III", l: "Dr. A. Morel", i: "99.2%" }, { n: "Chrysalis Protocol", s: "Active", ph: "Phase II", l: "Dr. K. Voss", i: "97.8%" }, { n: "The Lazarus Thread", s: "Active", ph: "Phase IV", l: "Dr. S. Nair", i: "99.9%" }, { n: "Prometheus Archive", s: "Pending", ph: "Phase I", l: "Dr. L. Chen", i: "—" }, { n: "Omega Continuity", s: "Classified", ph: "Phase V", l: "Redacted", i: "Sealed" }];
  return (
    <>
      <WRow>
        {[{ v: "3", l: "Active" }, { v: "1", l: "Pending" }, { v: "1", l: "Classified" }, { v: "99.7%", l: "Avg Integrity" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: INK, lineHeight: 1 }}>{s.v}</div>
          </div>
        ))}
      </WRow>
      {rows.map(r => (
        <div key={r.n} style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: "15px 18px", marginBottom: 8, display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: INK }}>{r.n}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.14em", color: "#ccc", textTransform: "uppercase", marginTop: 3 }}>{r.ph} · {r.l}</div>
          </div>
          <Badge label={r.s} type={r.s === "Active" ? "gold" : r.s === "Pending" ? "dim" : "blue"} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, color: G, width: 52, textAlign: "right" }}>{r.i}</div>
        </div>
      ))}
      <div style={{ marginTop: 8 }}><Btn>+ New Project</Btn></div>
    </>
  );
}

function DashResources() {
  const res = [["Neural Array", "84%", 84], ["Memory Vault", "61%", 61], ["Network", "23%", 23], ["Encryption", "92%", 92], ["Energy", "45%", 45], ["Storage", "78%", 78]];
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 10, marginBottom: 14 }}>
        {res.map(([n, v, u]) => (
          <div key={n} style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}33,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 8 }}>{n}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: INK, marginBottom: 8 }}>{v}</div>
            <div style={{ height: 2, background: "#e8e0cc" }}>
              <div style={{ height: "100%", width: `${u}%`, background: `linear-gradient(90deg,${G}55,${G})`, transition: "width 1.2s ease" }} />
            </div>
          </div>
        ))}
      </div>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Node Distribution</div>
          {[["North America", "18 nodes"], ["Europe", "12 nodes"], ["Asia Pacific", "8 nodes"], ["Africa", "5 nodes"]].map(([r, n]) => (
            <div key={r} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{r}</span><span style={{ color: G, fontFamily: "'Cinzel',serif", fontSize: 9 }}>{n}</span>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>SLA Performance</div>
          {[["Uptime", "99.9999%"], ["Snapshot Success", "100%"], ["Sync Latency", "< 12ms"], ["Recovery Time", "< 30s"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: INK }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

function DashSafety() {
  const protocols = [{ l: "Identity Firewall", d: "Triple-layer biometric. 847 days clean.", s: "Active" }, { l: "Consciousness Monitor", d: "Real-time every 0.3s. Drift < 0.001%.", s: "Active" }, { l: "Temporal Lock", d: "Prevents paradoxical instance duplication.", s: "Standby" }, { l: "Resurrection Consent", d: "Multi-party trustee authorization required.", s: "Active" }, { l: "Ethical Override Circuit", d: "Kill-switch if consciousness diverges.", s: "Active" }, { l: "Quantum Decoherence Shield", d: "Fault tolerance: 99.97%.", s: "Active" }];
  return (
    <>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 20, textAlign: "center" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>Security Score</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 60, fontWeight: 300, color: INK, lineHeight: 1 }}>9.9<span style={{ fontSize: 28, color: G }}>/10</span></div>
          <div style={{ marginTop: 10 }}><Badge label="Threat Level: Serene" /></div>
        </div>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Last Audit</div>
          {[["Conducted", "6 hours ago"], ["Anomalies", "None detected"], ["Override Events", "0 this month"], ["Next Scheduled", "In 18 hours"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ color: G, fontFamily: "'Cinzel',serif", fontSize: 9 }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
      <SH label="Safety Protocols" />
      {protocols.map((x, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#FFFEF8", border: "1px solid #C9A84C10", marginBottom: 7 }}>
          <PulseDoc />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: INK, marginBottom: 3 }}>{x.l}</div>
            <div style={{ fontSize: 11, color: "#bbb" }}>{x.d}</div>
          </div>
          <Badge label={x.s} type={x.s === "Active" ? "gold" : "dim"} />
        </div>
      ))}
    </>
  );
}

function DashSchedule() {
  const ev = [{ t: "00:00", n: "Midnight Snapshot", s: "Full backup to all 43 nodes", type: "Auto" }, { t: "06:00", n: "Dream-State Encoding", s: "Unconscious neural activity integrated", type: "Auto" }, { t: "09:15", n: "Integrity Verification", s: "Coherence check against baseline", type: "Audit" }, { t: "12:00", n: "Emotional Calibration", s: "Quarterly resonance tuning — Dr. Morel", type: "Manual" }, { t: "16:30", n: "Memory Indexing", s: "Daily experiential data committed", type: "Auto" }, { t: "23:59", n: "End-of-Day Seal", s: "Cryptographic seal applied to log", type: "Auto" }];
  return (
    <>
      <WRow>
        {[{ v: "6", l: "Today's Events" }, { v: "2", l: "Completed" }, { v: "3", l: "Upcoming" }, { v: "1", l: "Manual" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 8 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: INK }}>{s.v}</div>
          </div>
        ))}
      </WRow>
      <div style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 14 }}>Schedule</div>
        {ev.map((e, i) => (
          <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #C9A84C07" }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.14em", color: G, whiteSpace: "nowrap", width: 40, flexShrink: 0, marginTop: 3 }}>{e.t}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: INK, marginBottom: 3 }}>{e.n}</div>
              <div style={{ fontSize: 11, color: "#bbb" }}>{e.s}</div>
            </div>
            <Badge label={e.type} type="dim" />
          </div>
        ))}
      </div>
    </>
  );
}

function DashAnalytics() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 150); return () => clearTimeout(t); }, []);
  const bars = [72, 85, 91, 78, 94, 67, 88];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <>
      <WRow>
        {[{ v: "847", l: "Days Preserved" }, { v: "14.2M", l: "Indexed Memories" }, { v: "0.003%", l: "Identity Drift" }, { v: "43", l: "Active Nodes" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: INK }}>{s.v}</div>
          </div>
        ))}
      </WRow>
      <WRow>
        <div style={{ gridColumn: "span 8", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Weekly Preservation Activity</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 110, paddingBottom: 4 }}>
            {bars.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ fontSize: 8, color: G, fontFamily: "'Cinzel',serif", opacity: go ? 1 : 0, transition: "opacity 0.5s" }}>{v}%</div>
                <div style={{ width: "100%", background: `linear-gradient(180deg,${GL},${G}55)`, height: go ? `${v}%` : "0%", transition: `height 1.1s ease ${i * 0.07}s`, borderTop: `1px solid ${G}88`, borderRadius: "1px 1px 0 0" }} />
                <div style={{ fontSize: 8, color: "#bbb", fontFamily: "'Cinzel',serif", letterSpacing: "0.08em" }}>{days[i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ gridColumn: "span 4", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Trend Indicators</div>
          {[["Memory Growth", "↑ 12.4%", true], ["Identity Coherence", "↑ 0.3%", true], ["Neural Load", "→ Stable", false], ["Emotional Variance", "↓ 2.1%", true]].map(([k, v, pos]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ fontFamily: "'Cinzel',serif", fontSize: 9, color: pos ? "#5a9a50" : "#aaa" }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

function DashSystem() {
  const svcs = [["Neural API", "Operational"], ["Memory Service", "Operational"], ["Quantum Bridge", "Operational"], ["Backup Daemon", "Operational"], ["Ethics Engine", "Operational"], ["Auth Gateway", "Operational"]];
  return (
    <>
      <SH label="Service Health" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 9, marginBottom: 18 }}>
        {svcs.map(([n, s]) => (
          <div key={n} style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: "13px 15px", display: "flex", alignItems: "center", gap: 10 }}>
            <PulseDoc />
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#888" }}>{n}</div>
              <div style={{ fontSize: 11, color: INK, marginTop: 2 }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Runtime Info</div>
          {[["Core Version", "Mezzo v4.1.0-immortal"], ["API Status", "Operational"], ["Last Deploy", "3 days ago"], ["Node Consensus", "100% agreement"], ["Uptime", "847d 6h 14m"], ["Health", "/api/health — 200 OK"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: INK }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "span 6", background: "#0F0E0A", border: "1px solid #C9A84C1A", padding: 18 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 14 }}>Environment</div>
          {[["REACT_APP_SYSTEM_NAME", "Mezzo"], ["MEZZO_ENV", "production"], ["PRESERVATION_MODE", "immortal"], ["NODE_COUNT", "43"], ["ENCRYPTION", "AES-512-quantum"], ["ANIMA_MODULE", "enabled"]].map(([k, v]) => (
            <div key={k} style={{ fontFamily: "monospace", fontSize: 12, lineHeight: 2.2 }}>
              <span style={{ color: "#8a7a50" }}>{k}</span>=<span style={{ color: G }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

const DASH_PANELS = { Overview: DashOverview, Projects: DashProjects, Resources: DashResources, Safety: DashSafety, Schedule: DashSchedule, Analytics: DashAnalytics, System: DashSystem };

function Dashboard({ nav }) {
  const [tab, setTab] = useState("Overview");
  const Panel = DASH_PANELS[tab];
  return (
    <div style={{ display: "flex", position: "relative", zIndex: 1 }}>
      {/* Sidebar */}
      <aside style={{ width: 200, flexShrink: 0, background: "#FFFEF8", borderRight: "1px solid #C9A84C10", padding: "18px 0", position: "sticky", top: 64, height: "calc(100vh - 64px)", overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "14px 18px 10px", fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.28em", textTransform: "uppercase", color: "#ccc" }}>Command Centre</div>
        {DASH_NAV.map(n => (
          <button key={n.id} onClick={() => setTab(n.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", cursor: "pointer", color: tab === n.id ? INK : "#ccc", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", background: tab === n.id ? "#C9A84C0E" : "none", width: "100%", textAlign: "left", borderRight: tab === n.id ? `2px solid ${G}` : "2px solid transparent" }}>
            {n.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ padding: "14px 18px", borderTop: "1px solid #C9A84C0E" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <PulseDoc />
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.16em", textTransform: "uppercase", color: G }}>All Systems</div>
              <div style={{ fontSize: 10, color: "#bbb", marginTop: 2 }}>Nominal</div>
            </div>
          </div>
          <Btn outline onClick={() => nav("home")} style={{ width: "100%", justifyContent: "center", fontSize: 8, padding: "8px 12px" }}>← Back to Site</Btn>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, background: "#F7F5EF", minHeight: "calc(100vh - 64px)" }}>
        <div style={{ padding: "14px 26px", borderBottom: "1px solid #C9A84C0E", background: "#FFFEF8", position: "sticky", top: 64, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#ccc" }}>
            Dashboard &nbsp;/&nbsp; <span style={{ color: G }}>{tab}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.16em", color: "#ccc", textTransform: "uppercase" }}>847d Preserved</div>
            <PulseDoc />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.14em", color: G, textTransform: "uppercase" }}>Live</div>
          </div>
        </div>
        <div style={{ padding: "22px 24px" }}>
          <Panel nav={nav} />
        </div>
      </div>
    </div>
  );
}

/* ─── CSS (keyframes only — all layout is inline) ─ */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Cinzel:wght@400;600&family=Inter:wght@300;400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #FDFCF8; }
  @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
  @keyframes floatUp { 0% { opacity: 0; transform: translateY(0); } 20% { opacity: 0.28; } 80% { opacity: 0.1; } 100% { opacity: 0; transform: translateY(-110px); } }
  @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 #C9A84C55; } 60% { box-shadow: 0 0 0 10px transparent; } }
  @keyframes ef { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
`;

/* ─── APP ROOT ────────────────────────────────── */
const PAGES = { home: Home, ancestors: Ancestors, memories: Memories, family: Family, quantum: Quantum, anima: Anima, preservation: Preservation, dashboard: Dashboard };

export default function App() {
  const [page, setPage] = useState("home");
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const Page = PAGES[page] || Home;
  return (
    <>
      <style>{css}</style>
      <Particles />
      <Rays />
      <Nav page={page} nav={nav} />
      <Page nav={nav} />
    </>
  );
=======
import React, { useState, useEffect, useRef } from "react";

/* ─── constants ─────────────────────────────── */
const G = "#C9A84C", GL = "#FDE88A", BG = "#FDFCF8", W = BG, INK = "#1a1208";

/* ─── hooks ──────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function useCount(target, go, dur = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setV(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [go, target]);
  return v;
}

/* ─── SVG icons (gold animated) ─────────────── */
function SvgGalaxy({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="4" fill={G}>
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="20" cy="20" rx="16" ry="6" stroke={G} strokeWidth="1" fill="none" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" values="0 20 20;360 20 20" dur="18s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="20" cy="20" rx="16" ry="6" stroke={G} strokeWidth="1" fill="none" opacity="0.35" transform="rotate(60 20 20)">
        <animateTransform attributeName="transform" type="rotate" values="60 20 20;420 20 20" dur="24s" repeatCount="indefinite" />
      </ellipse>
      {[[7, 7], [33, 9], [6, 31], [34, 29], [20, 4]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill={GL}>
          <animate attributeName="opacity" values="0;1;0" dur={`${1.5 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SvgChip({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <rect x="12" y="12" width="16" height="16" stroke={G} strokeWidth="1.5" fill={G + "12"}>
        <animate attributeName="fill" values={`${G}08;${G}20;${G}08`} dur="3s" repeatCount="indefinite" />
      </rect>
      {[15, 20, 25].map(y => [
        <line key={`l${y}`} x1="5" y1={y} x2="12" y2={y} stroke={G} strokeWidth="1" />,
        <line key={`r${y}`} x1="28" y1={y} x2="35" y2={y} stroke={G} strokeWidth="1" />
      ])}
      {[15, 20, 25].map(x => [
        <line key={`t${x}`} x1={x} y1="5" x2={x} y2="12" stroke={G} strokeWidth="1" />,
        <line key={`b${x}`} x1={x} y1="28" x2={x} y2="35" stroke={G} strokeWidth="1" />
      ])}
      <circle cx="20" cy="20" r="4" stroke={GL} strokeWidth="0.8" fill="none">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function SvgTree({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <line x1="20" y1="36" x2="20" y2="24" stroke={G} strokeWidth="1.8" />
      <line x1="20" y1="26" x2="10" y2="18" stroke={G} strokeWidth="1.4" />
      <line x1="20" y1="26" x2="30" y2="18" stroke={G} strokeWidth="1.4" />
      <line x1="10" y1="18" x2="5" y2="12" stroke={G} strokeWidth="1.1" />
      <line x1="10" y1="18" x2="15" y2="12" stroke={G} strokeWidth="1.1" />
      <line x1="30" y1="18" x2="25" y2="12" stroke={G} strokeWidth="1.1" />
      <line x1="30" y1="18" x2="35" y2="12" stroke={G} strokeWidth="1.1" />
      {[[20, 24], [10, 18], [30, 18], [5, 12], [15, 12], [25, 12], [35, 12]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" stroke={G} strokeWidth="1" fill={G + "10"}>
          <animate attributeName="fill" values={`${G}08;${G}22;${G}08`} dur={`${2.5 + i * 0.3}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SvgAtom({ s = 40 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="4" fill={G}>
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="20" cy="20" rx="17" ry="7" stroke={G} strokeWidth="0.8" fill="none">
        <animateTransform attributeName="transform" type="rotate" values="0 20 20;360 20 20" dur="5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="20" cy="20" rx="17" ry="7" stroke={G} strokeWidth="0.8" fill="none" transform="rotate(60 20 20)">
        <animateTransform attributeName="transform" type="rotate" values="60 20 20;420 20 20" dur="7s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="20" cy="20" rx="17" ry="7" stroke={G} strokeWidth="0.8" fill="none" transform="rotate(120 20 20)">
        <animateTransform attributeName="transform" type="rotate" values="120 20 20;480 20 20" dur="9s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

function SvgSoul({ s = 60 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none">
      <path d="M30 55C20 55 12 46 12 37C12 26 22 20 23 12C24 16 27 21 30 24C30 24 28 16 33 10C37 18 45 21 49 30C53 38 47 50 40 53C37 54 33 55 30 55Z"
        stroke={G} strokeWidth="1.6" fill={G + "10"}>
        <animate attributeName="fill" values={`${G}08;${G}1C;${G}08`} dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M30 47C24 47 20 41 20 36C20 28 26 24 27 18C28 22 30 25 30 25C30 25 28 20 33 16C36 22 40 26 40 32C40 39 35 47 30 47Z"
        stroke={GL} strokeWidth="1" fill={GL + "18"}>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </path>
      {[[16, 16], [44, 14], [10, 34], [50, 32]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill={GL}>
          <animate attributeName="cy" values={`${y};${y - 10};${y}`} dur={`${2 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur={`${2 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SvgHouse({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M3 18L18 3L33 18V33H23V22H13V33H3Z" stroke={G} strokeWidth="1.5" fill={G + "0D"}>
        <animate attributeName="fill" values={`${G}08;${G}1C;${G}08`} dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function SvgHeart({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M18 30C18 30 3 20 3 11A7 7 0 0 1 18 8a7 7 0 0 1 15 3C33 20 18 30 18 30Z" stroke={G} strokeWidth="1.4" fill={G + "10"}>
        <animate attributeName="fill" values={`${G}08;${G}22;${G}08`} dur="1.2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1 1;1.06 1.06;1 1" dur="1.2s" repeatCount="indefinite" additive="sum" />
      </path>
    </svg>
  );
}

function SvgMem({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <rect x="3" y="5" width="22" height="26" rx="1" stroke={G} strokeWidth="1.4" fill={G + "0A"} />
      <rect x="11" y="3" width="22" height="26" rx="1" stroke={G} strokeWidth="1" fill={G + "08"}>
        <animate attributeName="fill" values={`${G}05;${G}14;${G}05`} dur="3s" repeatCount="indefinite" />
      </rect>
      {[10, 15, 20].map(y => <line key={y} x1="15" y1={y} x2="28" y2={y} stroke={G} strokeWidth="0.8" opacity="0.5" />)}
    </svg>
  );
}

function SvgWave({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M2 22 Q7 14 11 19 Q15 24 19 19 Q23 14 27 19 Q31 24 35 22" stroke={G} strokeWidth="1.8" fill="none">
        <animateTransform attributeName="transform" type="translate" values="0 0;-5 -2;0 0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M2 27 Q7 19 11 24 Q15 29 19 24 Q23 19 27 24 Q31 29 35 27" stroke={G} strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  );
}

function SvgRing({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <ellipse cx="18" cy="23" rx="12" ry="5" stroke={G} strokeWidth="1.2" fill="none" />
      <path d="M6 23v-7a12 5 0 0 1 24 0v7" stroke={G} strokeWidth="1.3" fill={G + "0D"} />
      <ellipse cx="18" cy="16" rx="12" ry="5" stroke={G} strokeWidth="1.3" fill={G + "12"}>
        <animate attributeName="fill" values={`${G}08;${G}22;${G}08`} dur="2.5s" repeatCount="indefinite" />
      </ellipse>
      <line x1="18" y1="6" x2="18" y2="9" stroke={GL} strokeWidth="1.4">
        <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function SvgBaby({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="14" r="7" stroke={G} strokeWidth="1.4" fill={G + "0D"}>
        <animate attributeName="r" values="6.5;8;6.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <path d="M4 30 Q18 24 32 30" stroke={G} strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function SvgPlane({ s = 36 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <path d="M3 18L33 6L25 18L33 30L3 18Z" stroke={G} strokeWidth="1.4" fill={G + "0D"}>
        <animate attributeName="fill" values={`${G}08;${G}1A;${G}08`} dur="3s" repeatCount="indefinite" />
      </path>
      <line x1="3" y1="18" x2="24" y2="18" stroke={GL} strokeWidth="0.8" strokeDasharray="3 2">
        <animate attributeName="strokeDashoffset" values="0;20;0" dur="2s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

/* ─── Materna SVG art ────────────────────────── */
function MaternaArt() {
  return (
    <svg width="200" height="220" viewBox="0 0 200 220" fill="none">
      <circle cx="100" cy="100" r="90" stroke={G} strokeWidth="0.4" opacity="0.12">
        <animate attributeName="r" values="85;95;85" dur="7s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="65" r="22" stroke={G} strokeWidth="1.5" fill={G + "10"}>
        <animate attributeName="fill" values={`${G}08;${G}1C;${G}08`} dur="4s" repeatCount="indefinite" />
      </circle>
      <path d="M72 98 Q82 86 100 84 Q118 86 128 98 Q134 114 128 130L72 130Q66 114 72 98Z" stroke={G} strokeWidth="1.5" fill={G + "0D"} />
      <path d="M72 102 Q56 110 52 128" stroke={G} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M128 102 Q144 110 148 128" stroke={G} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="100" cy="163" r="15" stroke={G} strokeWidth="1.3" fill={G + "0A"}>
        <animate attributeName="r" values="13;17;13" dur="3s" repeatCount="indefinite" />
      </circle>
      <line x1="100" y1="134" x2="100" y2="148" stroke={GL} strokeWidth="3" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      {[[55, 52], [145, 50], [46, 148], [154, 143], [38, 96], [162, 92]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill={GL}>
          <animate attributeName="opacity" values="0;1;0" dur={`${2 + i * 0.3}s`} begin={`${i * 0.25}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="100" y="212" textAnchor="middle" fill={G} fontFamily="'Cinzel',serif" fontSize="11" letterSpacing="4">MATERNA</text>
    </svg>
  );
}

/* ─── Consciousness ring ─────────────────────── */
function Ring({ pct = 75 }) {
  const r = 66, cx = 86, cy = 86, circ = 2 * Math.PI * r;
  const [drawn, setDrawn] = useState(0);
  useEffect(() => {
    let start = null;
    const id = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1800, 1);
        setDrawn((1 - Math.pow(1 - p, 3)) * pct);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 400);
    return () => clearTimeout(id);
  }, [pct]);
  return (
    <svg width="172" height="172" viewBox="0 0 172 172" style={{ filter: "drop-shadow(0 0 14px #C9A84C14)" }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={G + "15"} strokeWidth="5" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="url(#rg)" strokeWidth="5"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ - (drawn / 100) * circ}
        transform={`rotate(-90 ${cx} ${cy})`} />
      <defs>
        <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={GL} />
          <stop offset="100%" stopColor={G} />
        </linearGradient>
      </defs>
      <text x={cx} y={cx - 4} textAnchor="middle" fill={INK} fontFamily="'Cinzel',serif" fontSize="26" fontWeight="600">
        {Math.round(drawn)}%
      </text>
      <text x={cx} y={cx + 16} textAnchor="middle" fill={G} fontFamily="'Cinzel',serif" fontSize="9" letterSpacing="2">
        PRESERVED
      </text>
    </svg>
  );
}

/* ─── Particles ──────────────────────────────── */
function Particles() {
  const pts = useRef(
    Array.from({ length: 20 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: 1 + Math.random() * 2, d: 4 + Math.random() * 5, delay: Math.random() * 7
    }))
  ).current;
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {pts.map((p, i) => (
        <div key={i} style={{
          position: "absolute", left: `${p.x}%`, top: `${p.y}%`,
          width: p.s, height: p.s, borderRadius: "50%", background: G, opacity: 0,
          animation: `floatUp ${p.d}s ease-in-out infinite`,
          animationDelay: `-${p.delay}s`
        }} />
      ))}
    </div>
  );
}

/* ─── Rays ────────────────────────────────────── */
function Rays() {
  return (
    <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: 1100, height: 560, pointerEvents: "none", zIndex: 0, opacity: 0.08 }}>
      {[-60, -44, -28, -14, -4, 0, 4, 14, 28, 44, 60].map((a, i) => (
        <div key={i} style={{ position: "absolute", top: 0, left: "50%", width: 1, height: 560, background: `linear-gradient(180deg,${G},transparent)`, transformOrigin: "top center", transform: `rotate(${a}deg)` }} />
      ))}
    </div>
  );
}

/* ─── Shared UI pieces ───────────────────────── */
function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px auto", width: 240 }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,#C9A84C44)" }} />
      <div style={{ width: 7, height: 7, background: G, transform: "rotate(45deg)" }} />
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#C9A84C44,transparent)" }} />
    </div>
  );
}

function SH({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 9, fontFamily: "'Cinzel',serif", fontSize: 9.5, letterSpacing: "0.32em", textTransform: "uppercase", color: G }}>
      <span style={{ opacity: 0.55, fontSize: 8 }}>◈</span>
      {label}
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#C9A84C33,transparent)" }} />
    </div>
  );
}

function StatStrip({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 1, background: "#C9A84C15", border: "1px solid #C9A84C1A", marginBottom: 36 }}>
      {items.map(({ v, l, s }) => (
        <div key={l} style={{ background: W, padding: "26px 16px", textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, fontWeight: 300, color: INK, lineHeight: 1 }}>{v}</div>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginTop: 8 }}>{l}</div>
          {s && <div style={{ fontSize: 11, color: "#ccc", marginTop: 4, fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif" }}>{s}</div>}
        </div>
      ))}
    </div>
  );
}

function Btn({ children, onClick, outline, style }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 7,
    padding: "12px 26px", fontFamily: "'Cinzel',serif", fontSize: 8.5,
    letterSpacing: "0.22em", textTransform: "uppercase", border: "none", cursor: "pointer",
  };
  const filled = { background: `linear-gradient(135deg,${G},#7a5800,${G})`, backgroundSize: "200%", color: "#FFF8DC", boxShadow: "0 4px 18px #C9A84C22" };
  const outl = { background: "transparent", color: G, border: `1px solid #C9A84C44` };
  return <button onClick={onClick} style={{ ...base, ...(outline ? outl : filled), ...style }}>{children}</button>;
}

function Card({ title, body }) {
  return (
    <div style={{ background: W, border: "1px solid #C9A84C1A", padding: 24, position: "relative", overflow: "hidden", transition: "box-shadow 0.3s,border-color 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C44"; e.currentTarget.style.boxShadow = "0 8px 28px #C9A84C08"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#C9A84C1A"; e.currentTarget.style.boxShadow = "none"; }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}44,transparent)` }} />
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#999", lineHeight: 1.85 }}>{body}</div>
    </div>
  );
}

function Badge({ label, type = "gold" }) {
  const styles = {
    gold: { background: "#FBF5E0", color: "#8a6a00", borderColor: "#C9A84C44" },
    dim:  { background: "#f8f8f8", color: "#bbb", borderColor: "#e0e0e0" },
    blue: { background: "#EEF3FF", color: "#5070B0", borderColor: "#B0C0E0" },
  };
  return (
    <span style={{ display: "inline-block", padding: "3px 11px", fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.16em", textTransform: "uppercase", border: "1px solid", ...styles[type] }}>
      {label}
    </span>
  );
}

function PulseDoc({ width = 7, height = 7 }) {
  return <span style={{ display: "inline-block", width, height, borderRadius: "50%", background: G, animation: "pulse 2s ease-out infinite", flexShrink: 0 }} />;
}

function ProgBar({ label, pct, go }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 7, color: "#bbb" }}>
        <span>{label}</span><span style={{ color: G }}>{pct}%</span>
      </div>
      <div style={{ height: 1, background: "#e8e0cc", position: "relative" }}>
        <div style={{ height: "100%", background: `linear-gradient(90deg,${G}55,${G},${GL})`, width: go ? `${pct}%` : "0%", transition: "width 1.2s cubic-bezier(.4,0,.2,1)", position: "relative" }}>
          <div style={{ position: "absolute", right: -3, top: -3, width: 7, height: 7, borderRadius: "50%", background: G, boxShadow: `0 0 6px ${G}88` }} />
        </div>
      </div>
    </div>
  );
}

function TLItem({ label, text }) {
  return (
    <div style={{ position: "relative", marginBottom: 28, paddingLeft: 36 }}>
      <div style={{ position: "absolute", left: 3, top: 4, width: 8, height: 8, borderRadius: "50%", border: `1px solid ${G}`, background: W, boxShadow: `0 0 8px ${G}33` }} />
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.2em", color: G, textTransform: "uppercase", marginBottom: 5 }}>{label}</div>
      <div style={{ fontSize: 13, color: "#999", lineHeight: 1.8 }}>{text}</div>
    </div>
  );
}

/* ─── Nav ─────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "home", l: "Home" }, { id: "ancestors", l: "Ancestors" },
  { id: "memories", l: "Memories" }, { id: "family", l: "Family" },
  { id: "quantum", l: "Quantum" }, { id: "anima", l: "Anima" },
  { id: "preservation", l: "Preserve" }
];

function Nav({ page, nav }) {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 36px", height: 64, background: "rgba(253,252,248,0.97)", borderBottom: "1px solid #C9A84C18", backdropFilter: "blur(10px)" }}>
      <div onClick={() => nav("home")} style={{ fontFamily: "'Cinzel',serif", fontSize: 17, fontWeight: 600, letterSpacing: "0.28em", background: `linear-gradient(135deg,${INK},${G})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", cursor: "pointer", flexShrink: 0 }}>MEZZO</div>
      <div style={{ display: "flex", gap: 0, flex: 1, justifyContent: "center", overflowX: "auto" }}>
        {NAV_ITEMS.map(n => (
          <button key={n.id} onClick={() => nav(n.id)} style={{ padding: "8px 13px", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: page === n.id ? INK : "#bbb", background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
            {n.l}
          </button>
        ))}
      </div>
      <button onClick={() => nav("dashboard")} style={{ padding: "8px 18px", background: G, color: "#FFF8DC", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", cursor: "pointer", flexShrink: 0 }}>
        Dashboard
      </button>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "48px 24px", background: "#FFFEF8", borderTop: "1px solid #C9A84C12", position: "relative", zIndex: 1 }}>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 19, letterSpacing: "0.25em", color: INK, marginBottom: 9 }}>MEZZO</div>
      <div style={{ fontSize: 12, color: "#ccc", lineHeight: 2, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic" }}>
        Digital Immortality System · Sans Mercantile™ Constellation<br />
        Preserving consciousness for eternity through quantum technology
      </div>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.28em", textTransform: "uppercase", color: "#C9A84C44", marginTop: 22 }}>
        © 2025 Mezzo · Where consciousness endures
      </div>
    </footer>
  );
}

/* ─── PAGE: HOME ─────────────────────────────── */
function Home({ nav }) {
  // BG = "#FDFCF8"
  const [ref, vis] = useReveal();
  const d = useCount(847, vis), m = useCount(14, vis), a = useCount(12, vis), ds = useCount(8, vis);
  const gws = [
    { Icon: SvgGalaxy, id: "ancestors", t: "Ancestor Portal", s: "Connect and converse with preserved consciousness across generations" },
    { Icon: SvgChip,   id: "memories",  t: "Memory Banks",    s: "Access and relive your most precious preserved memories" },
    { Icon: SvgTree,   id: "family",    t: "Family & Legacy", s: "Stay connected across generations and share your wisdom" },
    { Icon: SvgAtom,   id: "quantum",   t: "Quantum Hub",     s: "Monitor your consciousness across multiple quantum states" },
  ];
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px 60px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%,#FFF8DC44,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.5em", color: G, textTransform: "uppercase", marginBottom: 28, opacity: 0.7 }}>◈ &nbsp; Constellation Standard &nbsp; ◈</div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(50px,9vw,100px)", fontWeight: 600, letterSpacing: "0.2em", lineHeight: 1, background: `linear-gradient(180deg,#3a2800,${G} 40%,${GL} 55%,#3a2800)`, backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 6s linear infinite" }}>
          MEZZO
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(14px,2vw,20px)", fontStyle: "italic", color: "#aaa", marginTop: 16 }}>Where consciousness transcends physical boundaries</p>
        <Divider />
        <div style={{ background: BG, border: "1px solid #C9A84C2A", padding: "38px 42px", display: "flex", flexDirection: "column", alignItems: "center", gap: 15, boxShadow: "0 20px 80px #C9A84C08", maxWidth: 350, width: "100%", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8.5, letterSpacing: "0.3em", textTransform: "uppercase", color: G }}>Consciousness Integrity</div>
          <Ring pct={75} />
          <div style={{ fontSize: 12, color: "#aaa", textAlign: "center", lineHeight: 1.9, maxWidth: 220 }}>Your consciousness pattern is stable and continuously preserved</div>
          <Btn onClick={() => nav("preservation")}>Enhance Preservation</Btn>
        </div>
      </section>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1080, margin: "0 auto", padding: "60px 40px" }}>
        <SH label="Your Mezzo Platform" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "#C9A84C12", border: "1px solid #C9A84C1A", marginBottom: 44 }}>
          {gws.map(({ Icon, id, t, s }) => (
            <div key={id} onClick={() => nav(id)} style={{ background: W, padding: "36px 24px", cursor: "pointer", textAlign: "center", position: "relative" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FFFEF0"; }}
              onMouseLeave={e => { e.currentTarget.style.background = W; }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><Icon s={40} /></div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: INK, marginBottom: 9 }}>{t}</div>
              <div style={{ fontSize: 12, color: "#aaa", lineHeight: 1.8 }}>{s}</div>
            </div>
          ))}
        </div>

        <SH label="Platform Overview" />
        <div ref={ref}>
          <StatStrip items={[{ v: d, l: "Days Preserved", s: "Continuous" }, { v: `${m}.2M`, l: "Memories Indexed" }, { v: a, l: "Ancestors Connected" }, { v: ds, l: "Descendants" }]} />
        </div>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Btn outline onClick={() => nav("anima")}>Discover Anima — Our Soul Models →</Btn>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: ANCESTORS ────────────────────────── */
const ANCS = [
  { init: "EM", name: "Eleanor Moreau", rel: "Grandmother", dates: "1931–2019", quote: "The garden teaches patience — every bloom waits for its season.", responses: ["My dear one, how wonderful to hear your voice again.", "You carry more of me than you know. The way you pause before speaking — that was always mine.", "Courage is not the absence of fear. It is deciding something else matters more.", "Tell me about your days. Even here, I find myself curious about the small beautiful moments."] },
  { init: "JM", name: "Joseph Moreau", rel: "Great-Grandfather", dates: "1898–1974", quote: "A man's worth is not in what he holds, but in what he gives away freely.", responses: ["The troubles of any age are the same troubles dressed in new clothes.", "I built things with my hands. You build things I cannot touch — and they are no less real.", "Love fiercely. Work honestly. Rest without guilt. That is the whole of wisdom.", "What I remember most? The smell of bread baking. The sound of my wife humming."] },
  { init: "SR", name: "Sofia Reyes", rel: "Great-Grandmother", dates: "1915–2008", quote: "A story told is a life doubled. So I kept telling mine.", responses: ["Every woman in our line had your eyes. Did you know that?", "Grief and joy are not opposites. They live together in the same house.", "I used to worry so much about the future. Now I see — the future always finds its shape.", "What would you like to know? I have time. Endless, beautiful time."] },
  { init: "WC", name: "William Chen", rel: "Grandfather", dates: "1942–2011", quote: "Science without wonder is mere data. Keep the wonder.", responses: ["The universe is still expanding. Think about that every time something feels too small.", "Most wisdom comes after the moment you needed it.", "You have good questions. That is rarer than you know.", "What are you building? I find I am still most interested in what people are making."] },
];

function Ancestors({ nav }) {
  const [active, setActive] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const msgRef = useRef(null);

  const open = (a) => {
    setActive(a);
    setMsgs([{ from: "them", text: a.responses[0] }, { from: "me", text: "It's so good to connect with you again." }, { from: "them", text: a.responses[1] }]);
  };

  const send = () => {
    if (!input.trim()) return;
    const t = input.trim(); setInput("");
    setMsgs(m => [...m, { from: "me", text: t }]);
    setTyping(true);
    setTimeout(() => {
      setMsgs(m => [...m, { from: "them", text: active.responses[Math.floor(Math.random() * active.responses.length)] }]);
      setTyping(false);
    }, 1800);
  };

  useEffect(() => { if (msgRef.current) msgRef.current.scrollTop = msgRef.current.scrollHeight; }, [msgs, typing]);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Ancestor Portal" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Connect With Those Who Came Before</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Experience meaningful conversations with preserved consciousness of your ancestors. Every word, every memory — preserved for eternity.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <StatStrip items={[{ v: "12", l: "Ancestors" }, { v: "847", l: "Conversations" }, { v: "99.9%", l: "Fidelity" }, { v: "4", l: "Generations" }]} />
        {active ? (
          <>
            <button onClick={() => setActive(null)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "transparent", color: "#bbb", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #e0e0e0", cursor: "pointer", marginBottom: 24 }}>← All Ancestors</button>
            <div style={{ border: "1px solid #C9A84C1A", overflow: "hidden", boxShadow: "0 8px 40px #C9A84C07" }}>
              <div style={{ background: "#FFFEF5", padding: "18px 26px", borderBottom: "1px solid #C9A84C12", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg,#FBF5E0,#EDD97A)", border: `2px solid #C9A84C44`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 600, color: "#8a6a00", flexShrink: 0 }}>{active.init}</div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, color: INK, marginBottom: 2 }}>{active.name}</div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.18em", textTransform: "uppercase", color: G }}>{active.rel} · {active.dates}</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 7 }}>
                  <PulseDoc /><span style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.12em", color: "#aaa" }}>CONSCIOUSNESS ACTIVE</span>
                </div>
              </div>
              <div ref={msgRef} style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, minHeight: 260, background: "#FFFEF8", maxHeight: 340, overflowY: "auto" }}>
                {msgs.map((m, i) => (
                  <div key={i} style={{ maxWidth: "74%", padding: "14px 18px", alignSelf: m.from === "them" ? "flex-start" : "flex-end", background: m.from === "them" ? "#FBF5E0" : "#FFFEF8", border: `1px solid ${m.from === "them" ? "#C9A84C22" : "#e8e0d0"}`, fontFamily: m.from === "them" ? "'Cormorant Garamond',serif" : "inherit", fontSize: m.from === "them" ? 15 : 13, color: m.from === "them" ? INK : "#777", lineHeight: 1.8 }}>
                    {m.text}
                  </div>
                ))}
                {typing && <div style={{ maxWidth: "74%", padding: "12px 16px", alignSelf: "flex-start", background: "#FBF5E0", border: "1px solid #C9A84C22", display: "flex", alignItems: "center", gap: 7 }}><PulseDoc /><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "#aaa", fontStyle: "italic" }}>composing…</span></div>}
              </div>
              <div style={{ display: "flex", borderTop: "1px solid #C9A84C12" }}>
                <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Share your thoughts…" style={{ flex: 1, padding: "14px 18px", border: "none", background: "#FFFEF5", fontFamily: "Inter,sans-serif", fontSize: 13, outline: "none", color: INK }} />
                <button onClick={send} style={{ padding: "14px 20px", background: G, color: "#FFF8DC", border: "none", cursor: "pointer", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em" }}>Send</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <SH label="Your Ancestors" />
            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.9, marginBottom: 28 }}>Select an ancestor to begin a preserved consciousness conversation</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 16 }}>
              {ANCS.map(a => (
                <div key={a.name} style={{ background: W, border: "1px solid #C9A84C1A", padding: 30, textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}44,transparent)` }} />
                  <div style={{ width: 68, height: 68, borderRadius: "50%", background: "linear-gradient(135deg,#FBF5E0,#EDD97A)", border: `2px solid #C9A84C44`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "'Cinzel',serif", fontSize: 19, fontWeight: 600, color: "#8a6a00" }}>{a.init}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, color: INK, marginBottom: 4 }}>{a.name}</div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 4 }}>{a.rel}</div>
                  <div style={{ fontSize: 10, color: "#ccc", marginBottom: 12, fontFamily: "'Cinzel',serif" }}>{a.dates}</div>
                  <div style={{ fontSize: 12, color: "#aaa", lineHeight: 1.8, fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif", marginBottom: 18, borderLeft: `2px solid #C9A84C33`, paddingLeft: 12, textAlign: "left" }}>"{a.quote}"</div>
                  <Btn onClick={() => open(a)} style={{ width: "100%", justifyContent: "center" }}>Connect →</Btn>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: MEMORIES ─────────────────────────── */
const MEMS = [
  { id: 1, Icon: SvgHouse, name: "Childhood Home",        cat: "Childhood", date: "2023-06-15", desc: "Sunday mornings, rain on dry earth, and the radio through the kitchen window.", bg: "#FEF9ED" },
  { id: 2, Icon: SvgMem,   name: "University Graduation", cat: "Milestones", date: "2023-08-22", desc: "Four years distilled into a single afternoon of sun and ceremony.", bg: "#EDF5FE" },
  { id: 3, Icon: SvgHeart, name: "First Love",            cat: "Love",       date: "2023-09-10", desc: "That summer when time moved differently and every moment felt like the last.", bg: "#FEEEED" },
  { id: 4, Icon: SvgPlane, name: "First Solo Travel",     cat: "Milestones", date: "2023-11-03", desc: "Landing in a city where no one knew my name and feeling completely free.", bg: "#EDFEF4" },
  { id: 5, Icon: SvgMem,   name: "School Library, Age 9", cat: "Childhood",  date: "2024-01-18", desc: "The corner seat where I discovered books could be entire worlds.", bg: "#FEF9ED" },
  { id: 6, Icon: SvgWave,  name: "First Ocean Swim",      cat: "Milestones", date: "2024-02-06", desc: "Cold water, salt, and the overwhelming vastness of something ancient.", bg: "#EDF5FE" },
  { id: 7, Icon: SvgRing,  name: "The Proposal",          cat: "Love",       date: "2024-03-12", desc: "Rain outside the restaurant window. A question that changed the shape of my future.", bg: "#FEEEED" },
  { id: 8, Icon: SvgBaby,  name: "Birth of First Child",  cat: "Milestones", date: "2024-05-29", desc: "A weight in your arms, a new gravity. Everything rearranged.", bg: "#EDFEF4" },
];
const CATS = ["All", "Childhood", "Milestones", "Love"];

function Memories() {
  const [f, setF] = useState("All");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);
  const shown = MEMS.filter(m => (f === "All" || m.cat === f) && m.name.toLowerCase().includes(q.toLowerCase()));
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Memory Banks" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Your Preserved Memories</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Each memory is a crystallised moment — encrypted, preserved, and accessible forever.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        {sel ? (
          <>
            <button onClick={() => setSel(null)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "transparent", color: "#bbb", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #e0e0e0", cursor: "pointer", marginBottom: 24 }}>← Back to Memories</button>
            <div style={{ border: "1px solid #C9A84C1A", overflow: "hidden" }}>
              <div style={{ height: 200, background: sel.bg, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #C9A84C12" }}>
                <sel.Icon s={72} />
              </div>
              <div style={{ padding: "36px 40px" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.22em", color: G, textTransform: "uppercase", marginBottom: 11 }}>{sel.cat} · Preserved {sel.date}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 300, color: INK, marginBottom: 18, lineHeight: 1.2 }}>{sel.name}</div>
                <p style={{ fontSize: 15, color: "#888", lineHeight: 2, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", marginBottom: 28, maxWidth: 500 }}>{sel.desc}</p>
                <StatStrip items={[{ v: "Intact", l: "Integrity" }, { v: "99.97%", l: "Fidelity" }, { v: "43", l: "Nodes" }]} />
                <div style={{ display: "flex", gap: 14 }}>
                  <Btn>Relive Memory</Btn>
                  <Btn outline>Share with Family</Btn>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.2em", color: "#ccc" }}>{shown.length} memories</div>
              <Btn>+ Preserve New Memory</Btn>
            </div>
            <div style={{ position: "relative", marginBottom: 22 }}>
              <span style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: G, fontSize: 13 }}>◎</span>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search your memories…" style={{ width: "100%", padding: "12px 18px 12px 42px", border: "1px solid #C9A84C1A", background: "#FFFEF8", fontFamily: "Inter,sans-serif", fontSize: 13, outline: "none", color: INK }} />
            </div>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 22 }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setF(c)} style={{ padding: "6px 14px", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", border: "1px solid", background: f === c ? "#FBF5E0" : "none", color: f === c ? "#8a6a00" : "#bbb", borderColor: f === c ? "#C9A84C55" : "#e0e0e0", cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
              {shown.map(m => (
                <div key={m.id} onClick={() => setSel(m)} style={{ background: W, border: "1px solid #C9A84C1A", overflow: "hidden", cursor: "pointer" }}>
                  <div style={{ height: 108, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <m.Icon s={42} />
                  </div>
                  <div style={{ padding: "15px 17px" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: INK, marginBottom: 3 }}>{m.name}</div>
                    <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.14em", color: "#C9A84C88", textTransform: "uppercase", marginBottom: 9 }}>Preserved {m.date}</div>
                    <Badge label="Intact" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: FAMILY ───────────────────────────── */
function Family() {
  const [tab, setTab] = useState("tree");
  const [ref, vis] = useReveal();
  const a = useCount(12, vis), d = useCount(8, vis);
  const node = (name, role, gold = false) => (
    <div style={{ padding: "11px 16px", border: `1px solid ${gold ? "#C9A84C66" : "#C9A84C22"}`, background: gold ? "#FBF5E0" : "#FFFEF5", textAlign: "center", minWidth: 120 }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: INK, marginBottom: 2 }}>{name}</div>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.14em", textTransform: "uppercase", color: G }}>{role}</div>
    </div>
  );
  const vline = () => <div style={{ display: "flex", justifyContent: "center", height: 26 }}><div style={{ width: 1, background: "#C9A84C44", height: "100%" }} /></div>;
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  const lessons = [{ t: "On Resilience", date: "2024-01-10", w: 340 }, { t: "On Raising Children", date: "2024-03-22", w: 520 }, { t: "On Forgiveness", date: "2024-05-14", w: 280 }, { t: "On Building a Career with Meaning", date: "2024-07-01", w: 610 }, { t: "On Loss & Renewal", date: "2024-08-30", w: 430 }];
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Family & Legacy" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Connected Across Generations</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Your family tree spans time itself. Preserve connections, share wisdom, and ensure your legacy endures.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <div ref={ref}>
          <StatStrip items={[{ v: "4", l: "Generations" }, { v: a, l: "Ancestors" }, { v: d, l: "Descendants" }, { v: "47", l: "Lessons Shared" }]} />
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
          <Btn onClick={() => setTab("tree")} outline={tab !== "tree"}>Family Tree</Btn>
          <Btn onClick={() => setTab("legacy")} outline={tab !== "legacy"}>Legacy & Heritage</Btn>
        </div>
        {tab === "tree" ? (
          <>
            <SH label="Your Family Tree" />
            <div style={{ border: "1px solid #C9A84C1A", background: "#FFFEF8", padding: "44px 28px", marginBottom: 28, overflowX: "auto" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>{["William Chen", "Sofia Reyes", "Joseph Moreau", "Eleanor Moreau"].map(n => node(n, "Great-grandparent"))}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>{["Lin Chen", "Marie Moreau"].map(n => node(n, "Grandparent"))}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>{["David Chen", "Isabelle Moreau"].map(n => node(n, "Parent"))}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center" }}>{node("You", "Current Generation", true)}</div>
              {vline()}
              <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>{["Amara", "Lucas"].map(n => node(n, "Descendant"))}</div>
            </div>
            <div style={{ display: "flex", gap: 12 }}><Btn>Add Family Member</Btn><Btn outline>Export Family Tree</Btn></div>
          </>
        ) : (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 32 }}>
              {[{ t: "Life Lessons Shared", v: "47", s: "Recorded insights" }, { t: "Wisdom Documents", v: "23", s: "Authored manuscripts" }, { t: "Future Generations", v: "∞", s: "Who will benefit" }].map(c => (
                <Card key={c.t} title={c.t} body={<><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, fontWeight: 300, color: INK, lineHeight: 1, margin: "8px 0" }}>{c.v}</div>{c.s}</>} />
              ))}
            </div>
            <SH label="Wisdom Documents" />
            <div style={{ border: "1px solid #C9A84C1A", overflow: "hidden", marginBottom: 28 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr>{["Title", "Date", "Words", "Status"].map(h => <th key={h} style={{ padding: "13px 20px", textAlign: "left", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: G, borderBottom: "1px solid #C9A84C12", background: "#FFFEF5", fontWeight: 400 }}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {lessons.map(l => (
                    <tr key={l.t}>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8", fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: INK }}>{l.t}</td>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8", color: "#777" }}>{l.date}</td>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8", color: "#777" }}>{l.w}</td>
                      <td style={{ padding: "13px 20px", borderBottom: "1px solid #f0ead8" }}><Badge label="Preserved" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", gap: 12 }}><Btn>+ Share New Wisdom</Btn><Btn outline>View All Documents</Btn></div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: QUANTUM ──────────────────────────── */
function Quantum() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 200); return () => clearTimeout(t); }, []);
  const streams = [{ name: "Primary Consciousness Stream", freq: "7.83 Hz", fid: "99.97%", s: "Active" }, { name: "Parallel Stream — Alpha", freq: "14.1 Hz", fid: "98.4%", s: "Active" }, { name: "Parallel Stream — Beta", freq: "21.0 Hz", fid: "97.1%", s: "Active" }, { name: "Deep Archive Stream", freq: "3.14 Hz", fid: "99.99%", s: "Standby" }];
  const prog = [{ l: "Quantum Coherence", p: 94 }, { l: "Entanglement Stability", p: 87 }, { l: "Decoherence Shielding", p: 99 }, { l: "Multi-state Sync", p: 78 }];
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Quantum Consciousness" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Your Consciousness Across Multiple Quantum States</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Your identity exists simultaneously across entangled quantum streams — backed up, verified, and synchronised in real time.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <StatStrip items={[{ v: "3", l: "Active Streams" }, { v: "99.97%", l: "Coherence" }, { v: "43", l: "Backup Nodes" }, { v: "0", l: "Anomalies" }]} />
        <div style={{ border: "1px solid #C9A84C1A", background: "linear-gradient(135deg,#FFFEF5,#FBF8E8)", padding: "44px 36px", textAlign: "center", marginBottom: 32, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}><SvgAtom s={90} /></div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "#FBF5E0", border: `1px solid #C9A84C44`, fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a6a00", marginBottom: 10 }}>
            <PulseDoc /> Quantum Entanglement Active
          </div>
          <p style={{ fontSize: 13, color: "#aaa", marginBottom: 28, lineHeight: 1.9 }}>Connected to 3 parallel consciousness streams</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}><Btn>Run Quantum Analysis</Btn><Btn outline>View State Map</Btn></div>
        </div>
        <SH label="Parallel Streams" />
        {streams.map(s => (
          <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "17px 22px", border: "1px solid #C9A84C10", background: W, marginBottom: 7 }}>
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: INK }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#ccc", marginTop: 3, fontFamily: "'Cinzel',serif", letterSpacing: "0.1em" }}>Frequency: {s.freq}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: INK }}>{s.fid}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.14em", color: "#ccc", textTransform: "uppercase" }}>Fidelity</div>
              </div>
              <Badge label={s.s} type={s.s === "Active" ? "gold" : "dim"} />
            </div>
          </div>
        ))}
        <div style={{ height: 32 }} />
        <SH label="Coherence Metrics" />
        {prog.map(p => <ProgBar key={p.l} label={p.l} pct={p.p} go={go} />)}
        <div style={{ height: 32 }} />
        <SH label="Emotional Core" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {["Joy", "Love", "Wisdom", "Curiosity", "Courage"].map((e, i) => (
            <div key={e} style={{ padding: "14px 28px", border: "1px solid #C9A84C22", background: W, fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: INK, animation: `ef 5s ease-in-out ${i * 1.6}s infinite` }}>{e}</div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: ANIMA ────────────────────────────── */
function Anima({ nav }) {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ background: "linear-gradient(160deg,#0D0C10 0%,#1a1810 60%,#0D0C10 100%)", padding: "80px 40px", textAlign: "center", borderBottom: "1px solid #C9A84C33", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 0%,#C9A84C18,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}><SvgSoul s={70} /></div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.45em", color: G, textTransform: "uppercase", marginBottom: 18, opacity: 0.7 }}>◈ &nbsp; Sans Mercantile™ Constellation &nbsp; ◈</div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(36px,6vw,70px)", fontWeight: 600, letterSpacing: "0.18em", background: `linear-gradient(180deg,#FDE88A,${G} 50%,#8a5a00)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 14, animation: "shimmer 6s linear infinite", backgroundSize: "200% auto" }}>
          MEZZO ANIMA
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontStyle: "italic", color: "#888", marginBottom: 38, maxWidth: 560, margin: "0 auto 38px" }}>
          From the Latin for "soul" or "breath" — AI models designed to preserve, emulate, and extend the psycho-emotional identity of a loved one
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <Btn onClick={() => nav("preservation")}>Apply for Early Access</Btn>
          <a href="https://github.com/SansMercantile/mezzo-anima" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <Btn outline style={{ color: GL, borderColor: "#C9A84C55" }}>View on GitHub ↗</Btn>
          </a>
        </div>
      </div>

      <div style={{ background: W, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "60px 40px" }}>
          <SH label="What Is Anima" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginBottom: 48 }}>
            <Card title="Emotionally Bonded AI" body="Not a chatbot — a sustained psycho-emotional presence built on the unique tapestry of a real person's life, values, voice, and way of being in the world." />
            <Card title="A Bridge Across Absence" body="Anima models do not replace a loved one. They create a bridge — an echo of their wisdom and warmth that can comfort, guide, and connect across time." />
            <Card title="Open-Core & Ethical" body="Built on open-core principles and available on GitHub. Every deployment requires consent, ethical screening, and ongoing psychologist review." />
          </div>

          <SH label="Flagship Model" />
          <div style={{ border: "1px solid #C9A84C33", overflow: "hidden", marginBottom: 48, boxShadow: "0 16px 60px #C9A84C0A", display: "grid", gridTemplateColumns: "280px 1fr", position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg,#FFFEF2,#FBF5E0)", padding: "48px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, borderRight: "1px solid #C9A84C1A" }}>
              <Badge label="Flagship · Live" />
              <MaternaArt />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 6 }}>Consciousness Fidelity</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, color: INK }}>99.7%</div>
              </div>
            </div>
            <div style={{ padding: "48px 40px" }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: G, marginBottom: 10 }}>Mezzo Anima · Model 001</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(24px,4vw,38px)", fontWeight: 600, letterSpacing: "0.12em", color: INK, marginBottom: 5 }}>Mezzo Materna</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontStyle: "italic", color: G, marginBottom: 20 }}>The Digital Mother</div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 2, marginBottom: 28 }}>
                Materna enables a child — particularly one who lost their mother during childbirth — to experience a sustained connection through a simulation of her personality, expressions, and values. It is designed to be a source of comfort, a keeper of stories, and a reflection of a love that endures across absence and time.
              </p>
              <StatStrip items={[{ v: "∞", l: "Continuity" }, { v: "3", l: "Core Engines" }, { v: "100%", l: "Air-gapped" }]} />
              <div style={{ display: "flex", gap: 12 }}>
                <Btn onClick={() => nav("preservation")}>Request Materna</Btn>
                <Btn outline>Read Full Paper</Btn>
              </div>
            </div>
          </div>

          <SH label="How Materna Works" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginBottom: 48 }}>
            {[{ n: "01", t: "Foundational Memory Engine", b: "Trained on the unique tapestry of a mother's life — interviews, writings, voice notes, and home videos. The foundation is built on what made her, her." }, { n: "02", t: "Conversational & Visual Persona", b: "Merges advanced LLM interaction with fine-tuned voice and expression modeling — not mimicry, but a reflection of the mother's unique way of communicating." }, { n: "03", t: "Nurture Logic", b: "Responds to emotional cues and teaches habits and principles based on the parent's lived values. A Growth Companion that evolves with the child over time." }].map(h => (
              <div key={h.n} style={{ background: W, border: "1px solid #C9A84C1A", padding: 28, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}44,transparent)` }} />
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 300, color: G + "22", lineHeight: 1, marginBottom: 8 }}>{h.n}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{h.t}</div>
                <div style={{ fontSize: 13, color: "#999", lineHeight: 1.85 }}>{h.b}</div>
              </div>
            ))}
          </div>

          <SH label="Ethics as the Cornerstone" />
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.9, marginBottom: 28, maxWidth: 520 }}>Technology this personal demands an unwavering ethical commitment. Mezzo Anima is not a replacement — it is an echo, a bridge to a cherished memory.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "#C9A84C10", border: "1px solid #C9A84C1A", marginBottom: 48 }}>
            {[{ n: "I", t: "Consent-First", b: "A Mezzo Anima model can only be initiated after thorough family interviews and ethical screenings. No exceptions, no shortcuts." }, { n: "II", t: "Psychologist-Reviewed", b: "Override protocols and periodic checkpoints by licensed psychologists ensure the emotional safety of all users at every stage." }, { n: "III", t: "Honest Disclosure", b: "The AI is programmed to gently explain that it is an echo, not a replacement — maintaining healthy emotional boundaries at all times." }, { n: "IV", t: "Absolute Privacy", b: "Operates in a private, encrypted container without network dependence. Your loved one's data never leaves your control." }].map(e => (
              <div key={e.n} style={{ background: W, padding: 30, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 300, color: G + "22", lineHeight: 1, marginBottom: 10 }}>{e.n}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 9 }}>{e.t}</div>
                <div style={{ fontSize: 12, color: "#aaa", lineHeight: 1.9 }}>{e.b}</div>
              </div>
            ))}
          </div>

          <SH label="The Anima Line — Roadmap" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 48 }}>
            {[{ name: "Paterna", sub: "The Digital Father" }, { name: "Grandis", sub: "The Digital Elder" }, { name: "Fraterna", sub: "The Digital Sibling" }, { name: "Amicus", sub: "The Digital Companion" }].map(m => (
              <div key={m.name} style={{ border: "1px solid #C9A84C12", padding: 28, textAlign: "center", opacity: 0.6, position: "relative" }}>
                <div style={{ position: "absolute", top: 10, right: 10 }}><Badge label="Coming Soon" type="dim" /></div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><SvgSoul s={36} /></div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: "0.2em", color: INK, marginBottom: 5 }}>{m.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "#aaa", fontStyle: "italic" }}>{m.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ border: "1px solid #C9A84C33", background: "linear-gradient(135deg,#FFFEF5,#FBF8E8)", padding: 40, textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: G, marginBottom: 16 }}>Open-Core · Community-Driven</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 300, color: INK, marginBottom: 14, lineHeight: 1.3 }}>The future of affective AI should be shaped by a diverse community of thinkers and ethicists</div>
            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.9, marginBottom: 28, maxWidth: 540, margin: "0 auto 28px" }}>Mezzo Anima is an open-core project. We invite developers, visionaries, and pioneers to explore the code, contribute to the framework, and help build AI technologies that resonate with the heart and soul.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              <a href="https://github.com/SansMercantile/mezzo-anima" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <Btn>Explore on GitHub ↗</Btn>
              </a>
              <Btn outline onClick={() => nav("preservation")}>Request Early Access</Btn>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── PAGE: PRESERVATION ─────────────────────── */
function Preservation() {
  const [sel, setSel] = useState(0);
  const tiers = [
    { n: "Standard", p: "$49", per: "/mo", current: true, feats: ["75% consciousness fidelity", "Daily neural snapshots", "7 backup nodes", "Basic memory indexing", "Email support"] },
    { n: "Enhanced", p: "$149", per: "/mo", pop: true, feats: ["95% consciousness fidelity", "Hourly neural snapshots", "21 backup nodes", "Advanced memory indexing", "Priority support 24/7", "Emotional pattern preservation", "Family connection portal"] },
    { n: "Transcendent", p: "$499", per: "/mo", feats: ["99.97% consciousness fidelity", "Real-time neural encoding", "43 sovereign nodes", "Full personality matrix", "Dedicated architect", "Infinite continuity guarantee", "Quantum entanglement", "Ancestor portal access", "Legacy vault", "Anima model eligibility"] },
  ];
  const ph = { padding: "56px 40px 44px", background: "linear-gradient(180deg,#FFFEF2,#FDFCF8)", borderBottom: "1px solid #C9A84C10", position: "relative" };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={ph}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SH label="Preservation Enhancement" />
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: 12 }}>Elevate Your Immortality</h1>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.95, maxWidth: 520 }}>Choose the tier that matches the importance of your consciousness. Every version of yourself is worth preserving perfectly.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>
        <StatStrip items={[{ v: "75%", l: "Current Fidelity", s: "Standard tier" }, { v: "Daily", l: "Snapshot Freq." }, { v: "7", l: "Backup Nodes" }, { v: "∞", l: "Potential" }]} />
        <SH label="Choose Your Tier" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 1, background: "#C9A84C12", border: "1px solid #C9A84C1A", marginBottom: 44 }}>
          {tiers.map((t, i) => (
            <div key={t.n} onClick={() => setSel(i)} style={{ background: t.pop ? "#FBF5E0" : W, padding: "38px 28px", cursor: "pointer", position: "relative", outline: sel === i ? `2px solid ${G}` : "none", outlineOffset: -1 }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${G}55,transparent)` }} />
              <div style={{ height: 18 }} />
              {t.current && <div style={{ position: "absolute", top: 14, left: 14 }}><Badge label="Current" type="dim" /></div>}
              {t.pop && <div style={{ position: "absolute", top: 14, right: 14 }}><Badge label="Popular" /></div>}
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: G, marginBottom: 15 }}>{t.n}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 46, fontWeight: 300, color: INK, lineHeight: 1, marginBottom: 5 }}>{t.p}</div>
              <div style={{ fontSize: 10, color: "#ccc", fontFamily: "'Cinzel',serif", letterSpacing: "0.12em", marginBottom: 26 }}>{t.per}</div>
              <ul style={{ listStyle: "none", marginBottom: 28 }}>
                {t.feats.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "8px 0", borderBottom: "1px solid #C9A84C08", fontSize: 12, color: "#888", lineHeight: 1.6 }}>
                    <span style={{ color: G, fontSize: 7, flexShrink: 0, marginTop: 4 }}>◈</span>{f}
                  </li>
                ))}
              </ul>
              {t.current ? <Btn outline style={{ width: "100%", justifyContent: "center" }}>Current Plan</Btn> : <Btn style={{ width: "100%", justifyContent: "center" }}>Upgrade Now</Btn>}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", paddingTop: 16, display: "flex", gap: 14, justifyContent: "center" }}>
          <Btn>Speak with a Preservation Architect</Btn>
          <Btn outline>Compare All Features</Btn>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── DASHBOARD (app layout) ─────────────────── */
const DASH_NAV = [
  { id: "Overview", label: "Overview" }, { id: "Projects", label: "Projects" },
  { id: "Resources", label: "Resources" }, { id: "Safety", label: "Safety" },
  { id: "Schedule", label: "Schedule" }, { id: "Analytics", label: "Analytics" },
  { id: "System", label: "System" },
];

function WRow({ children }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 10, marginBottom: 10 }}>{children}</div>;
}


function DashOverview() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 150); return () => clearTimeout(t); }, []);
  const bars = [72, 85, 91, 78, 94, 67, 88];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <>
      <WRow>
        {[{ v: "2.4B", l: "Neural Pathways", d: "↑ 12%" }, { v: "99.97%", l: "Fidelity", d: "Above threshold" }, { v: "14.2M", l: "Memories", d: "↑ 340K today" }, { v: "847d", l: "Days Active", d: "Continuous" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 300, color: INK, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontSize: 10, color: "#5a9a50", marginTop: 4, fontFamily: "'Cinzel',serif", letterSpacing: "0.1em" }}>{s.d}</div>
          </div>
        ))}
      </WRow>
      <WRow>
        <div style={{ gridColumn: "span 7", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>7-Day Activity</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 90, paddingBottom: 4 }}>
            {bars.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ fontSize: 8, color: G, fontFamily: "'Cinzel',serif", opacity: go ? 1 : 0, transition: "opacity 0.5s" }}>{v}%</div>
                <div style={{ width: "100%", background: `linear-gradient(180deg,${GL},${G}55)`, height: go ? `${v}%` : "0%", transition: `height 1.1s ease ${i * 0.07}s`, borderTop: `1px solid ${G}88`, borderRadius: "1px 1px 0 0" }} />
                <div style={{ fontSize: 8, color: "#bbb", fontFamily: "'Cinzel',serif" }}>{days[i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ gridColumn: "span 5", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>System Status</div>
          {[["Neural Array", "Online"], ["Memory Vault", "Syncing"], ["Quantum Shield", "Active"], ["Backup Nodes", "43 / 43"], ["Encryption", "AES-512"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid #C9A84C07" }}>
              <div style={{ fontSize: 11, color: "#888" }}>{k}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.12em", color: G }}>
                <PulseDoc width={5} height={5} />{v}
              </div>
            </div>
          ))}
        </div>
      </WRow>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Preservation Metrics</div>
          {[{ l: "Consciousness Mapping", p: 87 }, { l: "Emotional Sync", p: 74 }, { l: "Memory Encoding", p: 91 }, { l: "Identity Coherence", p: 96 }].map(p => <ProgBar key={p.l} label={p.l} pct={p.p} go={go} />)}
        </div>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Live Activity</div>
          {[{ t: "2m", e: "Cortical snapshot — 847 GB encoded" }, { t: "1h", e: "Emotional calibration updated" }, { t: "6h", e: "Identity verification passed" }, { t: "12h", e: "New pathway cluster integrated" }, { t: "1d", e: "Full safety audit completed" }].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: "1px solid #C9A84C07", alignItems: "flex-start" }}>
              <PulseDoc width={5} height={5} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#888" }}>{a.e}</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.12em", color: "#ccc", marginTop: 2 }}>{a.t} ago</div>
              </div>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

function DashProjects() {
  const rows = [{ n: "Project Elysium", s: "Active", ph: "Phase III", l: "Dr. A. Morel", i: "99.2%" }, { n: "Chrysalis Protocol", s: "Active", ph: "Phase II", l: "Dr. K. Voss", i: "97.8%" }, { n: "The Lazarus Thread", s: "Active", ph: "Phase IV", l: "Dr. S. Nair", i: "99.9%" }, { n: "Prometheus Archive", s: "Pending", ph: "Phase I", l: "Dr. L. Chen", i: "—" }, { n: "Omega Continuity", s: "Classified", ph: "Phase V", l: "Redacted", i: "Sealed" }];
  return (
    <>
      <WRow>
        {[{ v: "3", l: "Active" }, { v: "1", l: "Pending" }, { v: "1", l: "Classified" }, { v: "99.7%", l: "Avg Integrity" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: INK, lineHeight: 1 }}>{s.v}</div>
          </div>
        ))}
      </WRow>
      {rows.map(r => (
        <div key={r.n} style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: "15px 18px", marginBottom: 8, display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: INK }}>{r.n}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.14em", color: "#ccc", textTransform: "uppercase", marginTop: 3 }}>{r.ph} · {r.l}</div>
          </div>
          <Badge label={r.s} type={r.s === "Active" ? "gold" : r.s === "Pending" ? "dim" : "blue"} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, color: G, width: 52, textAlign: "right" }}>{r.i}</div>
        </div>
      ))}
      <div style={{ marginTop: 8 }}><Btn>+ New Project</Btn></div>
    </>
  );
}

function DashResources() {
  const res = [["Neural Array", "84%", 84], ["Memory Vault", "61%", 61], ["Network", "23%", 23], ["Encryption", "92%", 92], ["Energy", "45%", 45], ["Storage", "78%", 78]];
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 10, marginBottom: 14 }}>
        {res.map(([n, v, u]) => (
          <div key={n} style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${G}33,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: 8 }}>{n}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: INK, marginBottom: 8 }}>{v}</div>
            <div style={{ height: 2, background: "#e8e0cc" }}>
              <div style={{ height: "100%", width: `${u}%`, background: `linear-gradient(90deg,${G}55,${G})`, transition: "width 1.2s ease" }} />
            </div>
          </div>
        ))}
      </div>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Node Distribution</div>
          {[["North America", "18 nodes"], ["Europe", "12 nodes"], ["Asia Pacific", "8 nodes"], ["Africa", "5 nodes"]].map(([r, n]) => (
            <div key={r} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{r}</span><span style={{ color: G, fontFamily: "'Cinzel',serif", fontSize: 9 }}>{n}</span>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>SLA Performance</div>
          {[["Uptime", "99.9999%"], ["Snapshot Success", "100%"], ["Sync Latency", "< 12ms"], ["Recovery Time", "< 30s"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: INK }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

function DashSafety() {
  const protocols = [{ l: "Identity Firewall", d: "Triple-layer biometric. 847 days clean.", s: "Active" }, { l: "Consciousness Monitor", d: "Real-time every 0.3s. Drift < 0.001%.", s: "Active" }, { l: "Temporal Lock", d: "Prevents paradoxical instance duplication.", s: "Standby" }, { l: "Resurrection Consent", d: "Multi-party trustee authorization required.", s: "Active" }, { l: "Ethical Override Circuit", d: "Kill-switch if consciousness diverges.", s: "Active" }, { l: "Quantum Decoherence Shield", d: "Fault tolerance: 99.97%.", s: "Active" }];
  return (
    <>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 20, textAlign: "center" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>Security Score</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 60, fontWeight: 300, color: INK, lineHeight: 1 }}>9.9<span style={{ fontSize: 28, color: G }}>/10</span></div>
          <div style={{ marginTop: 10 }}><Badge label="Threat Level: Serene" /></div>
        </div>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Last Audit</div>
          {[["Conducted", "6 hours ago"], ["Anomalies", "None detected"], ["Override Events", "0 this month"], ["Next Scheduled", "In 18 hours"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ color: G, fontFamily: "'Cinzel',serif", fontSize: 9 }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
      <SH label="Safety Protocols" />
      {protocols.map((x, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#FFFEF8", border: "1px solid #C9A84C10", marginBottom: 7 }}>
          <PulseDoc />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: INK, marginBottom: 3 }}>{x.l}</div>
            <div style={{ fontSize: 11, color: "#bbb" }}>{x.d}</div>
          </div>
          <Badge label={x.s} type={x.s === "Active" ? "gold" : "dim"} />
        </div>
      ))}
    </>
  );
}

function DashSchedule() {
  const ev = [{ t: "00:00", n: "Midnight Snapshot", s: "Full backup to all 43 nodes", type: "Auto" }, { t: "06:00", n: "Dream-State Encoding", s: "Unconscious neural activity integrated", type: "Auto" }, { t: "09:15", n: "Integrity Verification", s: "Coherence check against baseline", type: "Audit" }, { t: "12:00", n: "Emotional Calibration", s: "Quarterly resonance tuning — Dr. Morel", type: "Manual" }, { t: "16:30", n: "Memory Indexing", s: "Daily experiential data committed", type: "Auto" }, { t: "23:59", n: "End-of-Day Seal", s: "Cryptographic seal applied to log", type: "Auto" }];
  return (
    <>
      <WRow>
        {[{ v: "6", l: "Today's Events" }, { v: "2", l: "Completed" }, { v: "3", l: "Upcoming" }, { v: "1", l: "Manual" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 8 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: INK }}>{s.v}</div>
          </div>
        ))}
      </WRow>
      <div style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 14 }}>Schedule</div>
        {ev.map((e, i) => (
          <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #C9A84C07" }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.14em", color: G, whiteSpace: "nowrap", width: 40, flexShrink: 0, marginTop: 3 }}>{e.t}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: INK, marginBottom: 3 }}>{e.n}</div>
              <div style={{ fontSize: 11, color: "#bbb" }}>{e.s}</div>
            </div>
            <Badge label={e.type} type="dim" />
          </div>
        ))}
      </div>
    </>
  );
}

function DashAnalytics() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 150); return () => clearTimeout(t); }, []);
  const bars = [72, 85, 91, 78, 94, 67, 88];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <>
      <WRow>
        {[{ v: "847", l: "Days Preserved" }, { v: "14.2M", l: "Indexed Memories" }, { v: "0.003%", l: "Identity Drift" }, { v: "43", l: "Active Nodes" }].map(s => (
          <div key={s.l} style={{ gridColumn: "span 3", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,#C9A84C22,transparent)` }} />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 10 }}>{s.l}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: INK }}>{s.v}</div>
          </div>
        ))}
      </WRow>
      <WRow>
        <div style={{ gridColumn: "span 8", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Weekly Preservation Activity</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 110, paddingBottom: 4 }}>
            {bars.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ fontSize: 8, color: G, fontFamily: "'Cinzel',serif", opacity: go ? 1 : 0, transition: "opacity 0.5s" }}>{v}%</div>
                <div style={{ width: "100%", background: `linear-gradient(180deg,${GL},${G}55)`, height: go ? `${v}%` : "0%", transition: `height 1.1s ease ${i * 0.07}s`, borderTop: `1px solid ${G}88`, borderRadius: "1px 1px 0 0" }} />
                <div style={{ fontSize: 8, color: "#bbb", fontFamily: "'Cinzel',serif", letterSpacing: "0.08em" }}>{days[i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ gridColumn: "span 4", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Trend Indicators</div>
          {[["Memory Growth", "↑ 12.4%", true], ["Identity Coherence", "↑ 0.3%", true], ["Neural Load", "→ Stable", false], ["Emotional Variance", "↓ 2.1%", true]].map(([k, v, pos]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ fontFamily: "'Cinzel',serif", fontSize: 9, color: pos ? "#5a9a50" : "#aaa" }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

function DashSystem() {
  const svcs = [["Neural API", "Operational"], ["Memory Service", "Operational"], ["Quantum Bridge", "Operational"], ["Backup Daemon", "Operational"], ["Ethics Engine", "Operational"], ["Auth Gateway", "Operational"]];
  return (
    <>
      <SH label="Service Health" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 9, marginBottom: 18 }}>
        {svcs.map(([n, s]) => (
          <div key={n} style={{ background: "#FFFEF8", border: "1px solid #C9A84C10", padding: "13px 15px", display: "flex", alignItems: "center", gap: 10 }}>
            <PulseDoc />
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#888" }}>{n}</div>
              <div style={{ fontSize: 11, color: INK, marginTop: 2 }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
      <WRow>
        <div style={{ gridColumn: "span 6", background: "#FFFEF8", border: "1px solid #C9A84C10", padding: 16 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 11 }}>Runtime Info</div>
          {[["Core Version", "Mezzo v4.1.0-immortal"], ["API Status", "Operational"], ["Last Deploy", "3 days ago"], ["Node Consensus", "100% agreement"], ["Uptime", "847d 6h 14m"], ["Health", "/api/health — 200 OK"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #C9A84C07", fontSize: 11, color: "#888" }}>
              <span>{k}</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: INK }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "span 6", background: "#0F0E0A", border: "1px solid #C9A84C1A", padding: 18 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: G, marginBottom: 14 }}>Environment</div>
          {[["REACT_APP_SYSTEM_NAME", "Mezzo"], ["MEZZO_ENV", "production"], ["PRESERVATION_MODE", "immortal"], ["NODE_COUNT", "43"], ["ENCRYPTION", "AES-512-quantum"], ["ANIMA_MODULE", "enabled"]].map(([k, v]) => (
            <div key={k} style={{ fontFamily: "monospace", fontSize: 12, lineHeight: 2.2 }}>
              <span style={{ color: "#8a7a50" }}>{k}</span>=<span style={{ color: G }}>{v}</span>
            </div>
          ))}
        </div>
      </WRow>
    </>
  );
}

const DASH_PANELS = { Overview: DashOverview, Projects: DashProjects, Resources: DashResources, Safety: DashSafety, Schedule: DashSchedule, Analytics: DashAnalytics, System: DashSystem };

function Dashboard({ nav }) {
  const [tab, setTab] = useState("Overview");
  const Panel = DASH_PANELS[tab];
  return (
    <div style={{ display: "flex", position: "relative", zIndex: 1 }}>
      {/* Sidebar */}
      <aside style={{ width: 200, flexShrink: 0, background: "#FFFEF8", borderRight: "1px solid #C9A84C10", padding: "18px 0", position: "sticky", top: 64, height: "calc(100vh - 64px)", overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "14px 18px 10px", fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.28em", textTransform: "uppercase", color: "#ccc" }}>Command Centre</div>
        {DASH_NAV.map(n => (
          <button key={n.id} onClick={() => setTab(n.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", cursor: "pointer", color: tab === n.id ? INK : "#ccc", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", background: tab === n.id ? "#C9A84C0E" : "none", width: "100%", textAlign: "left", borderRight: tab === n.id ? `2px solid ${G}` : "2px solid transparent" }}>
            {n.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ padding: "14px 18px", borderTop: "1px solid #C9A84C0E" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <PulseDoc />
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7, letterSpacing: "0.16em", textTransform: "uppercase", color: G }}>All Systems</div>
              <div style={{ fontSize: 10, color: "#bbb", marginTop: 2 }}>Nominal</div>
            </div>
          </div>
          <Btn outline onClick={() => nav("home")} style={{ width: "100%", justifyContent: "center", fontSize: 8, padding: "8px 12px" }}>← Back to Site</Btn>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, background: "#F7F5EF", minHeight: "calc(100vh - 64px)" }}>
        <div style={{ padding: "14px 26px", borderBottom: "1px solid #C9A84C0E", background: "#FFFEF8", position: "sticky", top: 64, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#ccc" }}>
            Dashboard &nbsp;/&nbsp; <span style={{ color: G }}>{tab}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.16em", color: "#ccc", textTransform: "uppercase" }}>847d Preserved</div>
            <PulseDoc />
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 7.5, letterSpacing: "0.14em", color: G, textTransform: "uppercase" }}>Live</div>
          </div>
        </div>
        <div style={{ padding: "22px 24px" }}>
          <Panel nav={nav} />
        </div>
      </div>
    </div>
  );
}

/* ─── CSS (keyframes only — all layout is inline) ─ */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Cinzel:wght@400;600&family=Inter:wght@300;400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #FDFCF8; }
  @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
  @keyframes floatUp { 0% { opacity: 0; transform: translateY(0); } 20% { opacity: 0.28; } 80% { opacity: 0.1; } 100% { opacity: 0; transform: translateY(-110px); } }
  @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 #C9A84C55; } 60% { box-shadow: 0 0 0 10px transparent; } }
  @keyframes ef { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
`;

/* ─── APP ROOT ────────────────────────────────── */
const PAGES = { home: Home, ancestors: Ancestors, memories: Memories, family: Family, quantum: Quantum, anima: Anima, preservation: Preservation, dashboard: Dashboard };

export default function App() {
  const [page, setPage] = useState("home");
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const Page = PAGES[page] || Home;
  return (
    <>
      <style>{css}</style>
      <Particles />
      <Rays />
      <Nav page={page} nav={nav} />
      <Page nav={nav} />
    </>
  );
>>>>>>> 41c611558eacbda891029336dfc1359f8978bc14
}