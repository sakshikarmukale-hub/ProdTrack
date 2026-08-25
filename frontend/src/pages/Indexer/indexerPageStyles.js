// ============================================================
// Design tokens copied verbatim from databin.in/kavya CSS
// ============================================================

export const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

// -- colours --
export const C = {
  text:       "#1a2434",   // --text
  muted:      "#6a7585",   // --muted
  muted2:     "#8a94a4",   // --muted-2
  brand:      "#2f6df0",   // --brand
  brandInk:   "#1f57c9",   // --brand-ink
  green:      "#1f9d6b",   // --green
  greenBg:    "#e4f6ee",   // --green-bg
  amber:      "#d9962b",   // --amber
  amberBg:    "#fbf1dc",   // --amber-bg
  red:        "#d64545",   // --red
  redBg:      "#fce8e8",   // --red-bg
  violet:     "#7a51d6",   // --violet
  violetBg:   "#efe9fb",   // --violet-bg
  line:       "#dfe4ec",   // --line
  line2:      "#e8ecf3",   // --line-2
  card:       "#ffffff",   // --card
  bg:         "#eef1f6",   // --bg
  panel:      "#132338",   // --panel (sidebar/header)
};

// -- shadows --
export const SHADOW     = "0 1px 2px rgba(16,30,54,.06), 0 4px 16px rgba(16,30,54,.05)";
export const SHADOW_LG  = "0 12px 40px rgba(16,30,54,.18)";

// -- radii --
export const RADIUS    = "12px";
export const RADIUS_SM = "8px";

// ============================================================
// Re-usable style objects  (keep the same export names so that
// existing imports don't break, just with corrected values)
// ============================================================

/** Card container */
export const cardStyle = {
  border:       `1px solid ${C.line}`,
  borderRadius: RADIUS,
  boxShadow:    SHADOW,
  bgcolor:      C.card,
  overflow:     "hidden",
};

/** Card header row */
export const cardHeaderStyle = {
  minHeight: 46,
  px: 2,
  py: 1.75,
  display:        "flex",
  alignItems:     "center",
  justifyContent: "space-between",
  borderBottom:   `1px solid ${C.line2}`,
};

/** Card title  →  .card .ch h3  { font-size:14px; font-weight:700 } */
export const cardTitleStyle = {
  color:      C.text,
  fontSize:   14,
  fontWeight: 700,
  fontFamily: FONT,
};

/** .card .ch .link  { font-size:12.5px; color:var(--brand); font-weight:600 } */
export const cardLinkStyle = {
  color:      C.brand,
  fontSize:   12.5,
  fontWeight: 600,
  fontFamily: FONT,
};

/** .muted / secondary text  { font-size: (contextual); color: var(--muted) } */
export const smallText = {
  color:      C.muted,
  fontSize:   12.5,
  fontFamily: FONT,
};

/** .rowitem .ri-s  { font-size:12.5px; color:var(--muted) } */
export const paragraphStyle = {
  color:      C.muted,
  fontSize:   12.5,
  lineHeight: 1.5,
  fontFamily: FONT,
};

/** .tbl thead th  { font-size:11px; font-weight:700; color:var(--muted); text-transform:uppercase } */
export const headCell = {
  color:         C.muted,
  fontSize:      11,
  fontWeight:    700,
  fontFamily:    FONT,
  letterSpacing: "0.4px",
  textTransform: "uppercase",
  py:            1.375,  // 11px
  background:    "#f8fafc",
};

/** .tbl tbody td  { font-size:13px (from .tbl base) } */
export const bodyCell = {
  color:      C.text,
  fontSize:   13,
  fontFamily: FONT,
  py:         1.375,
};

/** .btn  { font-size:13px; font-weight:600; border-radius:8px } */
export const buttonStyle = {
  textTransform: "none",
  borderRadius:  RADIUS_SM,
  fontSize:      13,
  fontWeight:    600,
  fontFamily:    FONT,
  boxShadow:     "none",
};
