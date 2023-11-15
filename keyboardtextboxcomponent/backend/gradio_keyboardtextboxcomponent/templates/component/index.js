const {
  SvelteComponent: jl,
  assign: Pl,
  create_slot: Vl,
  detach: Bl,
  element: Ml,
  get_all_dirty_from_scope: Nl,
  get_slot_changes: El,
  get_spread_update: Dl,
  init: Tl,
  insert: Zl,
  safe_not_equal: Al,
  set_dynamic_element_data: Ze,
  set_style: B,
  toggle_class: W,
  transition_in: bl,
  transition_out: hl,
  update_slot_base: Il
} = window.__gradio__svelte__internal;
function Kl(o) {
  let e, l, t;
  const a = (
    /*#slots*/
    o[17].default
  ), n = Vl(
    a,
    o,
    /*$$scope*/
    o[16],
    null
  );
  let r = [
    { "data-testid": (
      /*test_id*/
      o[7]
    ) },
    { id: (
      /*elem_id*/
      o[2]
    ) },
    {
      class: l = "block " + /*elem_classes*/
      o[3].join(" ") + " svelte-1t38q2d"
    }
  ], i = {};
  for (let s = 0; s < r.length; s += 1)
    i = Pl(i, r[s]);
  return {
    c() {
      e = Ml(
        /*tag*/
        o[14]
      ), n && n.c(), Ze(
        /*tag*/
        o[14]
      )(e, i), W(
        e,
        "hidden",
        /*visible*/
        o[10] === !1
      ), W(
        e,
        "padded",
        /*padding*/
        o[6]
      ), W(
        e,
        "border_focus",
        /*border_mode*/
        o[5] === "focus"
      ), W(e, "hide-container", !/*explicit_call*/
      o[8] && !/*container*/
      o[9]), B(e, "height", typeof /*height*/
      o[0] == "number" ? (
        /*height*/
        o[0] + "px"
      ) : void 0), B(e, "width", typeof /*width*/
      o[1] == "number" ? `calc(min(${/*width*/
      o[1]}px, 100%))` : void 0), B(
        e,
        "border-style",
        /*variant*/
        o[4]
      ), B(
        e,
        "overflow",
        /*allow_overflow*/
        o[11] ? "visible" : "hidden"
      ), B(
        e,
        "flex-grow",
        /*scale*/
        o[12]
      ), B(e, "min-width", `calc(min(${/*min_width*/
      o[13]}px, 100%))`), B(e, "border-width", "var(--block-border-width)");
    },
    m(s, u) {
      Zl(s, e, u), n && n.m(e, null), t = !0;
    },
    p(s, u) {
      n && n.p && (!t || u & /*$$scope*/
      65536) && Il(
        n,
        a,
        s,
        /*$$scope*/
        s[16],
        t ? El(
          a,
          /*$$scope*/
          s[16],
          u,
          null
        ) : Nl(
          /*$$scope*/
          s[16]
        ),
        null
      ), Ze(
        /*tag*/
        s[14]
      )(e, i = Dl(r, [
        (!t || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          s[7]
        ) },
        (!t || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          s[2]
        ) },
        (!t || u & /*elem_classes*/
        8 && l !== (l = "block " + /*elem_classes*/
        s[3].join(" ") + " svelte-1t38q2d")) && { class: l }
      ])), W(
        e,
        "hidden",
        /*visible*/
        s[10] === !1
      ), W(
        e,
        "padded",
        /*padding*/
        s[6]
      ), W(
        e,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), W(e, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), u & /*height*/
      1 && B(e, "height", typeof /*height*/
      s[0] == "number" ? (
        /*height*/
        s[0] + "px"
      ) : void 0), u & /*width*/
      2 && B(e, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : void 0), u & /*variant*/
      16 && B(
        e,
        "border-style",
        /*variant*/
        s[4]
      ), u & /*allow_overflow*/
      2048 && B(
        e,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && B(
        e,
        "flex-grow",
        /*scale*/
        s[12]
      ), u & /*min_width*/
      8192 && B(e, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      t || (bl(n, s), t = !0);
    },
    o(s) {
      hl(n, s), t = !1;
    },
    d(s) {
      s && Bl(e), n && n.d(s);
    }
  };
}
function Gl(o) {
  let e, l = (
    /*tag*/
    o[14] && Kl(o)
  );
  return {
    c() {
      l && l.c();
    },
    m(t, a) {
      l && l.m(t, a), e = !0;
    },
    p(t, [a]) {
      /*tag*/
      t[14] && l.p(t, a);
    },
    i(t) {
      e || (bl(l, t), e = !0);
    },
    o(t) {
      hl(l, t), e = !1;
    },
    d(t) {
      l && l.d(t);
    }
  };
}
function Ul(o, e, l) {
  let { $$slots: t = {}, $$scope: a } = e, { height: n = void 0 } = e, { width: r = void 0 } = e, { elem_id: i = "" } = e, { elem_classes: s = [] } = e, { variant: u = "solid" } = e, { border_mode: f = "base" } = e, { padding: v = !0 } = e, { type: h = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: _ = !1 } = e, { container: b = !0 } = e, { visible: y = !0 } = e, { allow_overflow: F = !0 } = e, { scale: L = null } = e, { min_width: c = 0 } = e, z = h === "fieldset" ? "fieldset" : "div";
  return o.$$set = (m) => {
    "height" in m && l(0, n = m.height), "width" in m && l(1, r = m.width), "elem_id" in m && l(2, i = m.elem_id), "elem_classes" in m && l(3, s = m.elem_classes), "variant" in m && l(4, u = m.variant), "border_mode" in m && l(5, f = m.border_mode), "padding" in m && l(6, v = m.padding), "type" in m && l(15, h = m.type), "test_id" in m && l(7, d = m.test_id), "explicit_call" in m && l(8, _ = m.explicit_call), "container" in m && l(9, b = m.container), "visible" in m && l(10, y = m.visible), "allow_overflow" in m && l(11, F = m.allow_overflow), "scale" in m && l(12, L = m.scale), "min_width" in m && l(13, c = m.min_width), "$$scope" in m && l(16, a = m.$$scope);
  }, [
    n,
    r,
    i,
    s,
    u,
    f,
    v,
    d,
    _,
    b,
    y,
    F,
    L,
    c,
    z,
    h,
    a,
    t
  ];
}
class Hl extends jl {
  constructor(e) {
    super(), Tl(this, e, Ul, Gl, Al, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Wl,
  attr: Xl,
  create_slot: Yl,
  detach: Ol,
  element: Rl,
  get_all_dirty_from_scope: Jl,
  get_slot_changes: Ql,
  init: xl,
  insert: $l,
  safe_not_equal: et,
  transition_in: lt,
  transition_out: tt,
  update_slot_base: ot
} = window.__gradio__svelte__internal;
function at(o) {
  let e, l;
  const t = (
    /*#slots*/
    o[1].default
  ), a = Yl(
    t,
    o,
    /*$$scope*/
    o[0],
    null
  );
  return {
    c() {
      e = Rl("div"), a && a.c(), Xl(e, "class", "svelte-1hnfib2");
    },
    m(n, r) {
      $l(n, e, r), a && a.m(e, null), l = !0;
    },
    p(n, [r]) {
      a && a.p && (!l || r & /*$$scope*/
      1) && ot(
        a,
        t,
        n,
        /*$$scope*/
        n[0],
        l ? Ql(
          t,
          /*$$scope*/
          n[0],
          r,
          null
        ) : Jl(
          /*$$scope*/
          n[0]
        ),
        null
      );
    },
    i(n) {
      l || (lt(a, n), l = !0);
    },
    o(n) {
      tt(a, n), l = !1;
    },
    d(n) {
      n && Ol(e), a && a.d(n);
    }
  };
}
function nt(o, e, l) {
  let { $$slots: t = {}, $$scope: a } = e;
  return o.$$set = (n) => {
    "$$scope" in n && l(0, a = n.$$scope);
  }, [a, t];
}
class rt extends Wl {
  constructor(e) {
    super(), xl(this, e, nt, at, et, {});
  }
}
const {
  SvelteComponent: it,
  attr: Ae,
  check_outros: st,
  create_component: ut,
  create_slot: ft,
  destroy_component: _t,
  detach: me,
  element: ct,
  empty: dt,
  get_all_dirty_from_scope: wt,
  get_slot_changes: vt,
  group_outros: gt,
  init: mt,
  insert: pe,
  mount_component: pt,
  safe_not_equal: bt,
  set_data: ht,
  space: yt,
  text: kt,
  toggle_class: Q,
  transition_in: _e,
  transition_out: be,
  update_slot_base: qt
} = window.__gradio__svelte__internal;
function Ie(o) {
  let e, l;
  return e = new rt({
    props: {
      $$slots: { default: [St] },
      $$scope: { ctx: o }
    }
  }), {
    c() {
      ut(e.$$.fragment);
    },
    m(t, a) {
      pt(e, t, a), l = !0;
    },
    p(t, a) {
      const n = {};
      a & /*$$scope, info*/
      10 && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
    },
    i(t) {
      l || (_e(e.$$.fragment, t), l = !0);
    },
    o(t) {
      be(e.$$.fragment, t), l = !1;
    },
    d(t) {
      _t(e, t);
    }
  };
}
function St(o) {
  let e;
  return {
    c() {
      e = kt(
        /*info*/
        o[1]
      );
    },
    m(l, t) {
      pe(l, e, t);
    },
    p(l, t) {
      t & /*info*/
      2 && ht(
        e,
        /*info*/
        l[1]
      );
    },
    d(l) {
      l && me(e);
    }
  };
}
function Ct(o) {
  let e, l, t, a;
  const n = (
    /*#slots*/
    o[2].default
  ), r = ft(
    n,
    o,
    /*$$scope*/
    o[3],
    null
  );
  let i = (
    /*info*/
    o[1] && Ie(o)
  );
  return {
    c() {
      e = ct("span"), r && r.c(), l = yt(), i && i.c(), t = dt(), Ae(e, "data-testid", "block-info"), Ae(e, "class", "svelte-22c38v"), Q(e, "sr-only", !/*show_label*/
      o[0]), Q(e, "hide", !/*show_label*/
      o[0]), Q(
        e,
        "has-info",
        /*info*/
        o[1] != null
      );
    },
    m(s, u) {
      pe(s, e, u), r && r.m(e, null), pe(s, l, u), i && i.m(s, u), pe(s, t, u), a = !0;
    },
    p(s, [u]) {
      r && r.p && (!a || u & /*$$scope*/
      8) && qt(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        a ? vt(
          n,
          /*$$scope*/
          s[3],
          u,
          null
        ) : wt(
          /*$$scope*/
          s[3]
        ),
        null
      ), (!a || u & /*show_label*/
      1) && Q(e, "sr-only", !/*show_label*/
      s[0]), (!a || u & /*show_label*/
      1) && Q(e, "hide", !/*show_label*/
      s[0]), (!a || u & /*info*/
      2) && Q(
        e,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? i ? (i.p(s, u), u & /*info*/
      2 && _e(i, 1)) : (i = Ie(s), i.c(), _e(i, 1), i.m(t.parentNode, t)) : i && (gt(), be(i, 1, 1, () => {
        i = null;
      }), st());
    },
    i(s) {
      a || (_e(r, s), _e(i), a = !0);
    },
    o(s) {
      be(r, s), be(i), a = !1;
    },
    d(s) {
      s && (me(e), me(l), me(t)), r && r.d(s), i && i.d(s);
    }
  };
}
function zt(o, e, l) {
  let { $$slots: t = {}, $$scope: a } = e, { show_label: n = !0 } = e, { info: r = void 0 } = e;
  return o.$$set = (i) => {
    "show_label" in i && l(0, n = i.show_label), "info" in i && l(1, r = i.info), "$$scope" in i && l(3, a = i.$$scope);
  }, [n, r, t, a];
}
class Lt extends it {
  constructor(e) {
    super(), mt(this, e, zt, Ct, bt, { show_label: 0, info: 1 });
  }
}
const Ft = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Ke = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Ft.reduce(
  (o, { color: e, primary: l, secondary: t }) => ({
    ...o,
    [e]: {
      primary: Ke[e][l],
      secondary: Ke[e][t]
    }
  }),
  {}
);
function $(o) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], l = 0;
  for (; o > 1e3 && l < e.length - 1; )
    o /= 1e3, l++;
  let t = e[l];
  return (Number.isInteger(o) ? o : o.toFixed(1)) + t;
}
function he() {
}
function jt(o, e) {
  return o != o ? e == e : o !== e || o && typeof o == "object" || typeof o == "function";
}
const yl = typeof window < "u";
let Ge = yl ? () => window.performance.now() : () => Date.now(), kl = yl ? (o) => requestAnimationFrame(o) : he;
const te = /* @__PURE__ */ new Set();
function ql(o) {
  te.forEach((e) => {
    e.c(o) || (te.delete(e), e.f());
  }), te.size !== 0 && kl(ql);
}
function Pt(o) {
  let e;
  return te.size === 0 && kl(ql), {
    promise: new Promise((l) => {
      te.add(e = { c: o, f: l });
    }),
    abort() {
      te.delete(e);
    }
  };
}
const x = [];
function Vt(o, e = he) {
  let l;
  const t = /* @__PURE__ */ new Set();
  function a(i) {
    if (jt(o, i) && (o = i, l)) {
      const s = !x.length;
      for (const u of t)
        u[1](), x.push(u, o);
      if (s) {
        for (let u = 0; u < x.length; u += 2)
          x[u][0](x[u + 1]);
        x.length = 0;
      }
    }
  }
  function n(i) {
    a(i(o));
  }
  function r(i, s = he) {
    const u = [i, s];
    return t.add(u), t.size === 1 && (l = e(a, n) || he), i(o), () => {
      t.delete(u), t.size === 0 && l && (l(), l = null);
    };
  }
  return { set: a, update: n, subscribe: r };
}
function Ue(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}
function je(o, e, l, t) {
  if (typeof l == "number" || Ue(l)) {
    const a = t - l, n = (l - e) / (o.dt || 1 / 60), r = o.opts.stiffness * a, i = o.opts.damping * n, s = (r - i) * o.inv_mass, u = (n + s) * o.dt;
    return Math.abs(u) < o.opts.precision && Math.abs(a) < o.opts.precision ? t : (o.settled = !1, Ue(l) ? new Date(l.getTime() + u) : l + u);
  } else {
    if (Array.isArray(l))
      return l.map(
        (a, n) => je(o, e[n], l[n], t[n])
      );
    if (typeof l == "object") {
      const a = {};
      for (const n in l)
        a[n] = je(o, e[n], l[n], t[n]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof l} values`);
  }
}
function He(o, e = {}) {
  const l = Vt(o), { stiffness: t = 0.15, damping: a = 0.8, precision: n = 0.01 } = e;
  let r, i, s, u = o, f = o, v = 1, h = 0, d = !1;
  function _(y, F = {}) {
    f = y;
    const L = s = {};
    return o == null || F.hard || b.stiffness >= 1 && b.damping >= 1 ? (d = !0, r = Ge(), u = y, l.set(o = f), Promise.resolve()) : (F.soft && (h = 1 / ((F.soft === !0 ? 0.5 : +F.soft) * 60), v = 0), i || (r = Ge(), d = !1, i = Pt((c) => {
      if (d)
        return d = !1, i = null, !1;
      v = Math.min(v + h, 1);
      const z = {
        inv_mass: v,
        opts: b,
        settled: !0,
        dt: (c - r) * 60 / 1e3
      }, m = je(z, u, o, f);
      return r = c, u = o, l.set(o = m), z.settled && (i = null), !z.settled;
    })), new Promise((c) => {
      i.promise.then(() => {
        L === s && c();
      });
    }));
  }
  const b = {
    set: _,
    update: (y, F) => _(y(f, o), F),
    subscribe: l.subscribe,
    stiffness: t,
    damping: a,
    precision: n
  };
  return b;
}
const {
  SvelteComponent: Bt,
  append: E,
  attr: C,
  component_subscribe: We,
  detach: Mt,
  element: Nt,
  init: Et,
  insert: Dt,
  noop: Xe,
  safe_not_equal: Tt,
  set_style: de,
  svg_element: D,
  toggle_class: Ye
} = window.__gradio__svelte__internal, { onMount: Zt } = window.__gradio__svelte__internal;
function At(o) {
  let e, l, t, a, n, r, i, s, u, f, v, h;
  return {
    c() {
      e = Nt("div"), l = D("svg"), t = D("g"), a = D("path"), n = D("path"), r = D("path"), i = D("path"), s = D("g"), u = D("path"), f = D("path"), v = D("path"), h = D("path"), C(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), C(a, "fill", "#FF7C00"), C(a, "fill-opacity", "0.4"), C(a, "class", "svelte-43sxxs"), C(n, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), C(n, "fill", "#FF7C00"), C(n, "class", "svelte-43sxxs"), C(r, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), C(r, "fill", "#FF7C00"), C(r, "fill-opacity", "0.4"), C(r, "class", "svelte-43sxxs"), C(i, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), C(i, "fill", "#FF7C00"), C(i, "class", "svelte-43sxxs"), de(t, "transform", "translate(" + /*$top*/
      o[1][0] + "px, " + /*$top*/
      o[1][1] + "px)"), C(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), C(u, "fill", "#FF7C00"), C(u, "fill-opacity", "0.4"), C(u, "class", "svelte-43sxxs"), C(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), C(f, "fill", "#FF7C00"), C(f, "class", "svelte-43sxxs"), C(v, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), C(v, "fill", "#FF7C00"), C(v, "fill-opacity", "0.4"), C(v, "class", "svelte-43sxxs"), C(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), C(h, "fill", "#FF7C00"), C(h, "class", "svelte-43sxxs"), de(s, "transform", "translate(" + /*$bottom*/
      o[2][0] + "px, " + /*$bottom*/
      o[2][1] + "px)"), C(l, "viewBox", "-1200 -1200 3000 3000"), C(l, "fill", "none"), C(l, "xmlns", "http://www.w3.org/2000/svg"), C(l, "class", "svelte-43sxxs"), C(e, "class", "svelte-43sxxs"), Ye(
        e,
        "margin",
        /*margin*/
        o[0]
      );
    },
    m(d, _) {
      Dt(d, e, _), E(e, l), E(l, t), E(t, a), E(t, n), E(t, r), E(t, i), E(l, s), E(s, u), E(s, f), E(s, v), E(s, h);
    },
    p(d, [_]) {
      _ & /*$top*/
      2 && de(t, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), _ & /*$bottom*/
      4 && de(s, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), _ & /*margin*/
      1 && Ye(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Xe,
    o: Xe,
    d(d) {
      d && Mt(e);
    }
  };
}
function It(o, e, l) {
  let t, a, { margin: n = !0 } = e;
  const r = He([0, 0]);
  We(o, r, (h) => l(1, t = h));
  const i = He([0, 0]);
  We(o, i, (h) => l(2, a = h));
  let s;
  async function u() {
    await Promise.all([r.set([125, 140]), i.set([-125, -140])]), await Promise.all([r.set([-125, 140]), i.set([125, -140])]), await Promise.all([r.set([-125, 0]), i.set([125, -0])]), await Promise.all([r.set([125, 0]), i.set([-125, 0])]);
  }
  async function f() {
    await u(), s || f();
  }
  async function v() {
    await Promise.all([r.set([125, 0]), i.set([-125, 0])]), f();
  }
  return Zt(() => (v(), () => s = !0)), o.$$set = (h) => {
    "margin" in h && l(0, n = h.margin);
  }, [n, t, a, r, i];
}
class Kt extends Bt {
  constructor(e) {
    super(), Et(this, e, It, At, Tt, { margin: 0 });
  }
}
const {
  SvelteComponent: Gt,
  append: J,
  attr: Z,
  binding_callbacks: Oe,
  check_outros: Sl,
  create_component: Ut,
  create_slot: Ht,
  destroy_component: Wt,
  destroy_each: Cl,
  detach: k,
  element: U,
  empty: ie,
  ensure_array_like: ye,
  get_all_dirty_from_scope: Xt,
  get_slot_changes: Yt,
  group_outros: zl,
  init: Ot,
  insert: q,
  mount_component: Rt,
  noop: Pe,
  safe_not_equal: Jt,
  set_data: N,
  set_style: Y,
  space: A,
  text: j,
  toggle_class: M,
  transition_in: ae,
  transition_out: ne,
  update_slot_base: Qt
} = window.__gradio__svelte__internal, { tick: xt } = window.__gradio__svelte__internal, { onDestroy: $t } = window.__gradio__svelte__internal, eo = (o) => ({}), Re = (o) => ({});
function Je(o, e, l) {
  const t = o.slice();
  return t[38] = e[l], t[40] = l, t;
}
function Qe(o, e, l) {
  const t = o.slice();
  return t[38] = e[l], t;
}
function lo(o) {
  let e, l = (
    /*i18n*/
    o[1]("common.error") + ""
  ), t, a, n;
  const r = (
    /*#slots*/
    o[29].error
  ), i = Ht(
    r,
    o,
    /*$$scope*/
    o[28],
    Re
  );
  return {
    c() {
      e = U("span"), t = j(l), a = A(), i && i.c(), Z(e, "class", "error svelte-14miwb5");
    },
    m(s, u) {
      q(s, e, u), J(e, t), q(s, a, u), i && i.m(s, u), n = !0;
    },
    p(s, u) {
      (!n || u[0] & /*i18n*/
      2) && l !== (l = /*i18n*/
      s[1]("common.error") + "") && N(t, l), i && i.p && (!n || u[0] & /*$$scope*/
      268435456) && Qt(
        i,
        r,
        s,
        /*$$scope*/
        s[28],
        n ? Yt(
          r,
          /*$$scope*/
          s[28],
          u,
          eo
        ) : Xt(
          /*$$scope*/
          s[28]
        ),
        Re
      );
    },
    i(s) {
      n || (ae(i, s), n = !0);
    },
    o(s) {
      ne(i, s), n = !1;
    },
    d(s) {
      s && (k(e), k(a)), i && i.d(s);
    }
  };
}
function to(o) {
  let e, l, t, a, n, r, i, s, u, f = (
    /*variant*/
    o[8] === "default" && /*show_eta_bar*/
    o[18] && /*show_progress*/
    o[6] === "full" && xe(o)
  );
  function v(c, z) {
    if (
      /*progress*/
      c[7]
    )
      return no;
    if (
      /*queue_position*/
      c[2] !== null && /*queue_size*/
      c[3] !== void 0 && /*queue_position*/
      c[2] >= 0
    )
      return ao;
    if (
      /*queue_position*/
      c[2] === 0
    )
      return oo;
  }
  let h = v(o), d = h && h(o), _ = (
    /*timer*/
    o[5] && ll(o)
  );
  const b = [uo, so], y = [];
  function F(c, z) {
    return (
      /*last_progress_level*/
      c[15] != null ? 0 : (
        /*show_progress*/
        c[6] === "full" ? 1 : -1
      )
    );
  }
  ~(n = F(o)) && (r = y[n] = b[n](o));
  let L = !/*timer*/
  o[5] && sl(o);
  return {
    c() {
      f && f.c(), e = A(), l = U("div"), d && d.c(), t = A(), _ && _.c(), a = A(), r && r.c(), i = A(), L && L.c(), s = ie(), Z(l, "class", "progress-text svelte-14miwb5"), M(
        l,
        "meta-text-center",
        /*variant*/
        o[8] === "center"
      ), M(
        l,
        "meta-text",
        /*variant*/
        o[8] === "default"
      );
    },
    m(c, z) {
      f && f.m(c, z), q(c, e, z), q(c, l, z), d && d.m(l, null), J(l, t), _ && _.m(l, null), q(c, a, z), ~n && y[n].m(c, z), q(c, i, z), L && L.m(c, z), q(c, s, z), u = !0;
    },
    p(c, z) {
      /*variant*/
      c[8] === "default" && /*show_eta_bar*/
      c[18] && /*show_progress*/
      c[6] === "full" ? f ? f.p(c, z) : (f = xe(c), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), h === (h = v(c)) && d ? d.p(c, z) : (d && d.d(1), d = h && h(c), d && (d.c(), d.m(l, t))), /*timer*/
      c[5] ? _ ? _.p(c, z) : (_ = ll(c), _.c(), _.m(l, null)) : _ && (_.d(1), _ = null), (!u || z[0] & /*variant*/
      256) && M(
        l,
        "meta-text-center",
        /*variant*/
        c[8] === "center"
      ), (!u || z[0] & /*variant*/
      256) && M(
        l,
        "meta-text",
        /*variant*/
        c[8] === "default"
      );
      let m = n;
      n = F(c), n === m ? ~n && y[n].p(c, z) : (r && (zl(), ne(y[m], 1, 1, () => {
        y[m] = null;
      }), Sl()), ~n ? (r = y[n], r ? r.p(c, z) : (r = y[n] = b[n](c), r.c()), ae(r, 1), r.m(i.parentNode, i)) : r = null), /*timer*/
      c[5] ? L && (L.d(1), L = null) : L ? L.p(c, z) : (L = sl(c), L.c(), L.m(s.parentNode, s));
    },
    i(c) {
      u || (ae(r), u = !0);
    },
    o(c) {
      ne(r), u = !1;
    },
    d(c) {
      c && (k(e), k(l), k(a), k(i), k(s)), f && f.d(c), d && d.d(), _ && _.d(), ~n && y[n].d(c), L && L.d(c);
    }
  };
}
function xe(o) {
  let e, l = `translateX(${/*eta_level*/
  (o[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = U("div"), Z(e, "class", "eta-bar svelte-14miwb5"), Y(e, "transform", l);
    },
    m(t, a) {
      q(t, e, a);
    },
    p(t, a) {
      a[0] & /*eta_level*/
      131072 && l !== (l = `translateX(${/*eta_level*/
      (t[17] || 0) * 100 - 100}%)`) && Y(e, "transform", l);
    },
    d(t) {
      t && k(e);
    }
  };
}
function oo(o) {
  let e;
  return {
    c() {
      e = j("processing |");
    },
    m(l, t) {
      q(l, e, t);
    },
    p: Pe,
    d(l) {
      l && k(e);
    }
  };
}
function ao(o) {
  let e, l = (
    /*queue_position*/
    o[2] + 1 + ""
  ), t, a, n, r;
  return {
    c() {
      e = j("queue: "), t = j(l), a = j("/"), n = j(
        /*queue_size*/
        o[3]
      ), r = j(" |");
    },
    m(i, s) {
      q(i, e, s), q(i, t, s), q(i, a, s), q(i, n, s), q(i, r, s);
    },
    p(i, s) {
      s[0] & /*queue_position*/
      4 && l !== (l = /*queue_position*/
      i[2] + 1 + "") && N(t, l), s[0] & /*queue_size*/
      8 && N(
        n,
        /*queue_size*/
        i[3]
      );
    },
    d(i) {
      i && (k(e), k(t), k(a), k(n), k(r));
    }
  };
}
function no(o) {
  let e, l = ye(
    /*progress*/
    o[7]
  ), t = [];
  for (let a = 0; a < l.length; a += 1)
    t[a] = el(Qe(o, l, a));
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      e = ie();
    },
    m(a, n) {
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(a, n);
      q(a, e, n);
    },
    p(a, n) {
      if (n[0] & /*progress*/
      128) {
        l = ye(
          /*progress*/
          a[7]
        );
        let r;
        for (r = 0; r < l.length; r += 1) {
          const i = Qe(a, l, r);
          t[r] ? t[r].p(i, n) : (t[r] = el(i), t[r].c(), t[r].m(e.parentNode, e));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    d(a) {
      a && k(e), Cl(t, a);
    }
  };
}
function $e(o) {
  let e, l = (
    /*p*/
    o[38].unit + ""
  ), t, a, n = " ", r;
  function i(f, v) {
    return (
      /*p*/
      f[38].length != null ? io : ro
    );
  }
  let s = i(o), u = s(o);
  return {
    c() {
      u.c(), e = A(), t = j(l), a = j(" | "), r = j(n);
    },
    m(f, v) {
      u.m(f, v), q(f, e, v), q(f, t, v), q(f, a, v), q(f, r, v);
    },
    p(f, v) {
      s === (s = i(f)) && u ? u.p(f, v) : (u.d(1), u = s(f), u && (u.c(), u.m(e.parentNode, e))), v[0] & /*progress*/
      128 && l !== (l = /*p*/
      f[38].unit + "") && N(t, l);
    },
    d(f) {
      f && (k(e), k(t), k(a), k(r)), u.d(f);
    }
  };
}
function ro(o) {
  let e = $(
    /*p*/
    o[38].index || 0
  ) + "", l;
  return {
    c() {
      l = j(e);
    },
    m(t, a) {
      q(t, l, a);
    },
    p(t, a) {
      a[0] & /*progress*/
      128 && e !== (e = $(
        /*p*/
        t[38].index || 0
      ) + "") && N(l, e);
    },
    d(t) {
      t && k(l);
    }
  };
}
function io(o) {
  let e = $(
    /*p*/
    o[38].index || 0
  ) + "", l, t, a = $(
    /*p*/
    o[38].length
  ) + "", n;
  return {
    c() {
      l = j(e), t = j("/"), n = j(a);
    },
    m(r, i) {
      q(r, l, i), q(r, t, i), q(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && e !== (e = $(
        /*p*/
        r[38].index || 0
      ) + "") && N(l, e), i[0] & /*progress*/
      128 && a !== (a = $(
        /*p*/
        r[38].length
      ) + "") && N(n, a);
    },
    d(r) {
      r && (k(l), k(t), k(n));
    }
  };
}
function el(o) {
  let e, l = (
    /*p*/
    o[38].index != null && $e(o)
  );
  return {
    c() {
      l && l.c(), e = ie();
    },
    m(t, a) {
      l && l.m(t, a), q(t, e, a);
    },
    p(t, a) {
      /*p*/
      t[38].index != null ? l ? l.p(t, a) : (l = $e(t), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null);
    },
    d(t) {
      t && k(e), l && l.d(t);
    }
  };
}
function ll(o) {
  let e, l = (
    /*eta*/
    o[0] ? `/${/*formatted_eta*/
    o[19]}` : ""
  ), t, a;
  return {
    c() {
      e = j(
        /*formatted_timer*/
        o[20]
      ), t = j(l), a = j("s");
    },
    m(n, r) {
      q(n, e, r), q(n, t, r), q(n, a, r);
    },
    p(n, r) {
      r[0] & /*formatted_timer*/
      1048576 && N(
        e,
        /*formatted_timer*/
        n[20]
      ), r[0] & /*eta, formatted_eta*/
      524289 && l !== (l = /*eta*/
      n[0] ? `/${/*formatted_eta*/
      n[19]}` : "") && N(t, l);
    },
    d(n) {
      n && (k(e), k(t), k(a));
    }
  };
}
function so(o) {
  let e, l;
  return e = new Kt({
    props: { margin: (
      /*variant*/
      o[8] === "default"
    ) }
  }), {
    c() {
      Ut(e.$$.fragment);
    },
    m(t, a) {
      Rt(e, t, a), l = !0;
    },
    p(t, a) {
      const n = {};
      a[0] & /*variant*/
      256 && (n.margin = /*variant*/
      t[8] === "default"), e.$set(n);
    },
    i(t) {
      l || (ae(e.$$.fragment, t), l = !0);
    },
    o(t) {
      ne(e.$$.fragment, t), l = !1;
    },
    d(t) {
      Wt(e, t);
    }
  };
}
function uo(o) {
  let e, l, t, a, n, r = `${/*last_progress_level*/
  o[15] * 100}%`, i = (
    /*progress*/
    o[7] != null && tl(o)
  );
  return {
    c() {
      e = U("div"), l = U("div"), i && i.c(), t = A(), a = U("div"), n = U("div"), Z(l, "class", "progress-level-inner svelte-14miwb5"), Z(n, "class", "progress-bar svelte-14miwb5"), Y(n, "width", r), Z(a, "class", "progress-bar-wrap svelte-14miwb5"), Z(e, "class", "progress-level svelte-14miwb5");
    },
    m(s, u) {
      q(s, e, u), J(e, l), i && i.m(l, null), J(e, t), J(e, a), J(a, n), o[30](n);
    },
    p(s, u) {
      /*progress*/
      s[7] != null ? i ? i.p(s, u) : (i = tl(s), i.c(), i.m(l, null)) : i && (i.d(1), i = null), u[0] & /*last_progress_level*/
      32768 && r !== (r = `${/*last_progress_level*/
      s[15] * 100}%`) && Y(n, "width", r);
    },
    i: Pe,
    o: Pe,
    d(s) {
      s && k(e), i && i.d(), o[30](null);
    }
  };
}
function tl(o) {
  let e, l = ye(
    /*progress*/
    o[7]
  ), t = [];
  for (let a = 0; a < l.length; a += 1)
    t[a] = il(Je(o, l, a));
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      e = ie();
    },
    m(a, n) {
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(a, n);
      q(a, e, n);
    },
    p(a, n) {
      if (n[0] & /*progress_level, progress*/
      16512) {
        l = ye(
          /*progress*/
          a[7]
        );
        let r;
        for (r = 0; r < l.length; r += 1) {
          const i = Je(a, l, r);
          t[r] ? t[r].p(i, n) : (t[r] = il(i), t[r].c(), t[r].m(e.parentNode, e));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    d(a) {
      a && k(e), Cl(t, a);
    }
  };
}
function ol(o) {
  let e, l, t, a, n = (
    /*i*/
    o[40] !== 0 && fo()
  ), r = (
    /*p*/
    o[38].desc != null && al(o)
  ), i = (
    /*p*/
    o[38].desc != null && /*progress_level*/
    o[14] && /*progress_level*/
    o[14][
      /*i*/
      o[40]
    ] != null && nl()
  ), s = (
    /*progress_level*/
    o[14] != null && rl(o)
  );
  return {
    c() {
      n && n.c(), e = A(), r && r.c(), l = A(), i && i.c(), t = A(), s && s.c(), a = ie();
    },
    m(u, f) {
      n && n.m(u, f), q(u, e, f), r && r.m(u, f), q(u, l, f), i && i.m(u, f), q(u, t, f), s && s.m(u, f), q(u, a, f);
    },
    p(u, f) {
      /*p*/
      u[38].desc != null ? r ? r.p(u, f) : (r = al(u), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? i || (i = nl(), i.c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null), /*progress_level*/
      u[14] != null ? s ? s.p(u, f) : (s = rl(u), s.c(), s.m(a.parentNode, a)) : s && (s.d(1), s = null);
    },
    d(u) {
      u && (k(e), k(l), k(t), k(a)), n && n.d(u), r && r.d(u), i && i.d(u), s && s.d(u);
    }
  };
}
function fo(o) {
  let e;
  return {
    c() {
      e = j(" /");
    },
    m(l, t) {
      q(l, e, t);
    },
    d(l) {
      l && k(e);
    }
  };
}
function al(o) {
  let e = (
    /*p*/
    o[38].desc + ""
  ), l;
  return {
    c() {
      l = j(e);
    },
    m(t, a) {
      q(t, l, a);
    },
    p(t, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      t[38].desc + "") && N(l, e);
    },
    d(t) {
      t && k(l);
    }
  };
}
function nl(o) {
  let e;
  return {
    c() {
      e = j("-");
    },
    m(l, t) {
      q(l, e, t);
    },
    d(l) {
      l && k(e);
    }
  };
}
function rl(o) {
  let e = (100 * /*progress_level*/
  (o[14][
    /*i*/
    o[40]
  ] || 0)).toFixed(1) + "", l, t;
  return {
    c() {
      l = j(e), t = j("%");
    },
    m(a, n) {
      q(a, l, n), q(a, t, n);
    },
    p(a, n) {
      n[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[40]
      ] || 0)).toFixed(1) + "") && N(l, e);
    },
    d(a) {
      a && (k(l), k(t));
    }
  };
}
function il(o) {
  let e, l = (
    /*p*/
    (o[38].desc != null || /*progress_level*/
    o[14] && /*progress_level*/
    o[14][
      /*i*/
      o[40]
    ] != null) && ol(o)
  );
  return {
    c() {
      l && l.c(), e = ie();
    },
    m(t, a) {
      l && l.m(t, a), q(t, e, a);
    },
    p(t, a) {
      /*p*/
      t[38].desc != null || /*progress_level*/
      t[14] && /*progress_level*/
      t[14][
        /*i*/
        t[40]
      ] != null ? l ? l.p(t, a) : (l = ol(t), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null);
    },
    d(t) {
      t && k(e), l && l.d(t);
    }
  };
}
function sl(o) {
  let e, l;
  return {
    c() {
      e = U("p"), l = j(
        /*loading_text*/
        o[9]
      ), Z(e, "class", "loading svelte-14miwb5");
    },
    m(t, a) {
      q(t, e, a), J(e, l);
    },
    p(t, a) {
      a[0] & /*loading_text*/
      512 && N(
        l,
        /*loading_text*/
        t[9]
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function _o(o) {
  let e, l, t, a, n;
  const r = [to, lo], i = [];
  function s(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(l = s(o)) && (t = i[l] = r[l](o)), {
    c() {
      e = U("div"), t && t.c(), Z(e, "class", a = "wrap " + /*variant*/
      o[8] + " " + /*show_progress*/
      o[6] + " svelte-14miwb5"), M(e, "hide", !/*status*/
      o[4] || /*status*/
      o[4] === "complete" || /*show_progress*/
      o[6] === "hidden"), M(
        e,
        "translucent",
        /*variant*/
        o[8] === "center" && /*status*/
        (o[4] === "pending" || /*status*/
        o[4] === "error") || /*translucent*/
        o[11] || /*show_progress*/
        o[6] === "minimal"
      ), M(
        e,
        "generating",
        /*status*/
        o[4] === "generating"
      ), M(
        e,
        "border",
        /*border*/
        o[12]
      ), Y(
        e,
        "position",
        /*absolute*/
        o[10] ? "absolute" : "static"
      ), Y(
        e,
        "padding",
        /*absolute*/
        o[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      q(u, e, f), ~l && i[l].m(e, null), o[31](e), n = !0;
    },
    p(u, f) {
      let v = l;
      l = s(u), l === v ? ~l && i[l].p(u, f) : (t && (zl(), ne(i[v], 1, 1, () => {
        i[v] = null;
      }), Sl()), ~l ? (t = i[l], t ? t.p(u, f) : (t = i[l] = r[l](u), t.c()), ae(t, 1), t.m(e, null)) : t = null), (!n || f[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-14miwb5")) && Z(e, "class", a), (!n || f[0] & /*variant, show_progress, status, show_progress*/
      336) && M(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!n || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && M(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!n || f[0] & /*variant, show_progress, status*/
      336) && M(
        e,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!n || f[0] & /*variant, show_progress, border*/
      4416) && M(
        e,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && Y(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && Y(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      n || (ae(t), n = !0);
    },
    o(u) {
      ne(t), n = !1;
    },
    d(u) {
      u && k(e), ~l && i[l].d(), o[31](null);
    }
  };
}
let we = [], ze = !1;
async function co(o, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (we.push(o), !ze)
      ze = !0;
    else
      return;
    await xt(), requestAnimationFrame(() => {
      let l = [0, 0];
      for (let t = 0; t < we.length; t++) {
        const n = we[t].getBoundingClientRect();
        (t === 0 || n.top + window.scrollY <= l[0]) && (l[0] = n.top + window.scrollY, l[1] = t);
      }
      window.scrollTo({ top: l[0] - 20, behavior: "smooth" }), ze = !1, we = [];
    });
  }
}
function wo(o, e, l) {
  let t, { $$slots: a = {}, $$scope: n } = e, { i18n: r } = e, { eta: i = null } = e, { queue: s = !1 } = e, { queue_position: u } = e, { queue_size: f } = e, { status: v } = e, { scroll_to_output: h = !1 } = e, { timer: d = !0 } = e, { show_progress: _ = "full" } = e, { message: b = null } = e, { progress: y = null } = e, { variant: F = "default" } = e, { loading_text: L = "Loading..." } = e, { absolute: c = !0 } = e, { translucent: z = !1 } = e, { border: m = !1 } = e, { autoscroll: O } = e, p, I = !1, H = 0, K = 0, fe = null, ce = 0, G = null, w, S = null, T = !0;
  const Ne = () => {
    l(25, H = performance.now()), l(26, K = 0), I = !0, Ee();
  };
  function Ee() {
    requestAnimationFrame(() => {
      l(26, K = (performance.now() - H) / 1e3), I && Ee();
    });
  }
  function De() {
    l(26, K = 0), I && (I = !1);
  }
  $t(() => {
    I && De();
  });
  let Te = null;
  function Ll(g) {
    Oe[g ? "unshift" : "push"](() => {
      S = g, l(16, S), l(7, y), l(14, G), l(15, w);
    });
  }
  function Fl(g) {
    Oe[g ? "unshift" : "push"](() => {
      p = g, l(13, p);
    });
  }
  return o.$$set = (g) => {
    "i18n" in g && l(1, r = g.i18n), "eta" in g && l(0, i = g.eta), "queue" in g && l(21, s = g.queue), "queue_position" in g && l(2, u = g.queue_position), "queue_size" in g && l(3, f = g.queue_size), "status" in g && l(4, v = g.status), "scroll_to_output" in g && l(22, h = g.scroll_to_output), "timer" in g && l(5, d = g.timer), "show_progress" in g && l(6, _ = g.show_progress), "message" in g && l(23, b = g.message), "progress" in g && l(7, y = g.progress), "variant" in g && l(8, F = g.variant), "loading_text" in g && l(9, L = g.loading_text), "absolute" in g && l(10, c = g.absolute), "translucent" in g && l(11, z = g.translucent), "border" in g && l(12, m = g.border), "autoscroll" in g && l(24, O = g.autoscroll), "$$scope" in g && l(28, n = g.$$scope);
  }, o.$$.update = () => {
    o.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (i === null ? l(0, i = fe) : s && l(0, i = (performance.now() - H) / 1e3 + i), i != null && (l(19, Te = i.toFixed(1)), l(27, fe = i))), o.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && l(17, ce = i === null || i <= 0 || !K ? null : Math.min(K / i, 1)), o.$$.dirty[0] & /*progress*/
    128 && y != null && l(18, T = !1), o.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (y != null ? l(14, G = y.map((g) => {
      if (g.index != null && g.length != null)
        return g.index / g.length;
      if (g.progress != null)
        return g.progress;
    })) : l(14, G = null), G ? (l(15, w = G[G.length - 1]), S && (w === 0 ? l(16, S.style.transition = "0", S) : l(16, S.style.transition = "150ms", S))) : l(15, w = void 0)), o.$$.dirty[0] & /*status*/
    16 && (v === "pending" ? Ne() : De()), o.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && p && h && (v === "pending" || v === "complete") && co(p, O), o.$$.dirty[0] & /*status, message*/
    8388624, o.$$.dirty[0] & /*timer_diff*/
    67108864 && l(20, t = K.toFixed(1));
  }, [
    i,
    r,
    u,
    f,
    v,
    d,
    _,
    y,
    F,
    L,
    c,
    z,
    m,
    p,
    G,
    w,
    S,
    ce,
    T,
    Te,
    t,
    s,
    h,
    b,
    O,
    H,
    K,
    fe,
    n,
    a,
    Ll,
    Fl
  ];
}
class vo extends Gt {
  constructor(e) {
    super(), Ot(
      this,
      e,
      wo,
      _o,
      Jt,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const go = [{
  row: 0,
  value: "q"
}, {
  row: 0,
  value: "w"
}, {
  row: 0,
  value: "e"
}, {
  row: 0,
  value: "r"
}, {
  row: 0,
  value: "t"
}, {
  row: 0,
  value: "y"
}, {
  row: 0,
  value: "u"
}, {
  row: 0,
  value: "i"
}, {
  row: 0,
  value: "o"
}, {
  row: 0,
  value: "p"
}, {
  row: 1,
  value: "a"
}, {
  row: 1,
  value: "s"
}, {
  row: 1,
  value: "d"
}, {
  row: 1,
  value: "f"
}, {
  row: 1,
  value: "g"
}, {
  row: 1,
  value: "h"
}, {
  row: 1,
  value: "j"
}, {
  row: 1,
  value: "k"
}, {
  row: 1,
  value: "l"
}, {
  row: 2,
  value: "Shift"
}, {
  row: 2,
  value: "z"
}, {
  row: 2,
  value: "x"
}, {
  row: 2,
  value: "c"
}, {
  row: 2,
  value: "v"
}, {
  row: 2,
  value: "b"
}, {
  row: 2,
  value: "n"
}, {
  row: 2,
  value: "m"
}, {
  row: 2,
  value: "Backspace"
}, {
  row: 3,
  value: "Page1"
}, {
  row: 3,
  value: ","
}, {
  row: 3,
  value: "Space"
}, {
  row: 3,
  value: "."
}, {
  row: 3,
  value: "Enter"
}, {
  row: 0,
  value: "1",
  page: 1
}, {
  row: 0,
  value: "2",
  page: 1
}, {
  row: 0,
  value: "3",
  page: 1
}, {
  row: 0,
  value: "4",
  page: 1
}, {
  row: 0,
  value: "5",
  page: 1
}, {
  row: 0,
  value: "6",
  page: 1
}, {
  row: 0,
  value: "7",
  page: 1
}, {
  row: 0,
  value: "8",
  page: 1
}, {
  row: 0,
  value: "9",
  page: 1
}, {
  row: 0,
  value: "0",
  page: 1
}, {
  row: 1,
  value: "!",
  page: 1
}, {
  row: 1,
  value: "@",
  page: 1
}, {
  row: 1,
  value: "#",
  page: 1
}, {
  row: 1,
  value: "$",
  page: 1
}, {
  row: 1,
  value: "%",
  page: 1
}, {
  row: 1,
  value: "^",
  page: 1
}, {
  row: 1,
  value: "&",
  page: 1
}, {
  row: 1,
  value: "*",
  page: 1
}, {
  row: 1,
  value: "(",
  page: 1
}, {
  row: 1,
  value: ")",
  page: 1
}, {
  row: 2,
  value: "-",
  page: 1
}, {
  row: 2,
  value: "_",
  page: 1
}, {
  row: 2,
  value: "=",
  page: 1
}, {
  row: 2,
  value: "+",
  page: 1
}, {
  row: 2,
  value: ";",
  page: 1
}, {
  row: 2,
  value: ":",
  page: 1
}, {
  row: 2,
  value: "'",
  page: 1
}, {
  row: 2,
  value: '"',
  page: 1
}, {
  row: 2,
  value: "<",
  page: 1
}, {
  row: 2,
  value: ">",
  page: 1
}, {
  row: 3,
  value: "Page0",
  page: 1
}, {
  row: 3,
  value: "/",
  page: 1
}, {
  row: 3,
  value: "?",
  page: 1
}, {
  row: 3,
  value: "[",
  page: 1
}, {
  row: 3,
  value: "]",
  page: 1
}, {
  row: 3,
  value: "{",
  page: 1
}, {
  row: 3,
  value: "}",
  page: 1
}, {
  row: 3,
  value: "|",
  page: 1
}, {
  row: 3,
  value: "\\",
  page: 1
}, {
  row: 3,
  value: "~",
  page: 1
}], mo = [{
  row: 0,
  value: "q"
}, {
  row: 0,
  value: "w"
}, {
  row: 0,
  value: "e"
}, {
  row: 0,
  value: "r"
}, {
  row: 0,
  value: "t"
}, {
  row: 0,
  value: "y"
}, {
  row: 0,
  value: "u"
}, {
  row: 0,
  value: "i"
}, {
  row: 0,
  value: "o"
}, {
  row: 0,
  value: "p"
}, {
  row: 1,
  value: "a"
}, {
  row: 1,
  value: "s"
}, {
  row: 1,
  value: "d"
}, {
  row: 1,
  value: "f"
}, {
  row: 1,
  value: "g"
}, {
  row: 1,
  value: "h"
}, {
  row: 1,
  value: "j"
}, {
  row: 1,
  value: "k"
}, {
  row: 1,
  value: "l"
}, {
  row: 2,
  value: "z"
}, {
  row: 2,
  value: "x"
}, {
  row: 2,
  value: "c"
}, {
  row: 2,
  value: "v"
}, {
  row: 2,
  value: "b"
}, {
  row: 2,
  value: "n"
}, {
  row: 2,
  value: "m"
}, {
  row: 2,
  value: "Backspace"
}], po = [{
  row: 0,
  value: "q"
}, {
  row: 0,
  value: "w"
}, {
  row: 0,
  value: "e"
}, {
  row: 0,
  value: "r"
}, {
  row: 0,
  value: "t"
}, {
  row: 0,
  value: "y"
}, {
  row: 0,
  value: "u"
}, {
  row: 0,
  value: "i"
}, {
  row: 0,
  value: "o"
}, {
  row: 0,
  value: "p"
}, {
  row: 1,
  value: "a"
}, {
  row: 1,
  value: "s"
}, {
  row: 1,
  value: "d"
}, {
  row: 1,
  value: "f"
}, {
  row: 1,
  value: "g"
}, {
  row: 1,
  value: "h"
}, {
  row: 1,
  value: "j"
}, {
  row: 1,
  value: "k"
}, {
  row: 1,
  value: "l"
}, {
  row: 2,
  value: "Enter"
}, {
  row: 2,
  value: "z"
}, {
  row: 2,
  value: "x"
}, {
  row: 2,
  value: "c"
}, {
  row: 2,
  value: "v"
}, {
  row: 2,
  value: "b"
}, {
  row: 2,
  value: "n"
}, {
  row: 2,
  value: "m"
}, {
  row: 2,
  value: "Backspace"
}], bo = [{
  row: 0,
  value: "a"
}, {
  row: 0,
  value: "z"
}, {
  row: 0,
  value: "e"
}, {
  row: 0,
  value: "r"
}, {
  row: 0,
  value: "t"
}, {
  row: 0,
  value: "y"
}, {
  row: 0,
  value: "u"
}, {
  row: 0,
  value: "i"
}, {
  row: 0,
  value: "o"
}, {
  row: 0,
  value: "p"
}, {
  row: 1,
  value: "q"
}, {
  row: 1,
  value: "s"
}, {
  row: 1,
  value: "d"
}, {
  row: 1,
  value: "f"
}, {
  row: 1,
  value: "g"
}, {
  row: 1,
  value: "h"
}, {
  row: 1,
  value: "j"
}, {
  row: 1,
  value: "k"
}, {
  row: 1,
  value: "l"
}, {
  row: 1,
  value: "m"
}, {
  row: 2,
  value: "Shift"
}, {
  row: 2,
  value: "w"
}, {
  row: 2,
  value: "x"
}, {
  row: 2,
  value: "c"
}, {
  row: 2,
  value: "v"
}, {
  row: 2,
  value: "b"
}, {
  row: 2,
  value: "n"
}, {
  row: 2,
  value: "Backspace"
}, {
  row: 3,
  value: "Page1"
}, {
  row: 3,
  value: ","
}, {
  row: 3,
  value: "Space"
}, {
  row: 3,
  value: "."
}, {
  row: 3,
  value: "Enter"
}, {
  row: 0,
  value: "1",
  page: 1
}, {
  row: 0,
  value: "2",
  page: 1
}, {
  row: 0,
  value: "3",
  page: 1
}, {
  row: 0,
  value: "4",
  page: 1
}, {
  row: 0,
  value: "5",
  page: 1
}, {
  row: 0,
  value: "6",
  page: 1
}, {
  row: 0,
  value: "7",
  page: 1
}, {
  row: 0,
  value: "8",
  page: 1
}, {
  row: 0,
  value: "9",
  page: 1
}, {
  row: 0,
  value: "0",
  page: 1
}, {
  row: 1,
  value: "!",
  page: 1
}, {
  row: 1,
  value: "@",
  page: 1
}, {
  row: 1,
  value: "#",
  page: 1
}, {
  row: 1,
  value: "$",
  page: 1
}, {
  row: 1,
  value: "%",
  page: 1
}, {
  row: 1,
  value: "^",
  page: 1
}, {
  row: 1,
  value: "&",
  page: 1
}, {
  row: 1,
  value: "*",
  page: 1
}, {
  row: 1,
  value: "(",
  page: 1
}, {
  row: 1,
  value: ")",
  page: 1
}, {
  row: 2,
  value: "-",
  page: 1
}, {
  row: 2,
  value: "_",
  page: 1
}, {
  row: 2,
  value: "=",
  page: 1
}, {
  row: 2,
  value: "+",
  page: 1
}, {
  row: 2,
  value: ";",
  page: 1
}, {
  row: 2,
  value: ":",
  page: 1
}, {
  row: 2,
  value: "'",
  page: 1
}, {
  row: 2,
  value: '"',
  page: 1
}, {
  row: 2,
  value: "<",
  page: 1
}, {
  row: 2,
  value: ">",
  page: 1
}, {
  row: 3,
  value: "Page0",
  page: 1
}, {
  row: 3,
  value: "/",
  page: 1
}, {
  row: 3,
  value: "?",
  page: 1
}, {
  row: 3,
  value: "[",
  page: 1
}, {
  row: 3,
  value: "]",
  page: 1
}, {
  row: 3,
  value: "{",
  page: 1
}, {
  row: 3,
  value: "}",
  page: 1
}, {
  row: 3,
  value: "|",
  page: 1
}, {
  row: 3,
  value: "\\",
  page: 1
}, {
  row: 3,
  value: "~",
  page: 1
}], ho = [{
  row: 0,
  value: "a"
}, {
  row: 0,
  value: "z"
}, {
  row: 0,
  value: "e"
}, {
  row: 0,
  value: "r"
}, {
  row: 0,
  value: "t"
}, {
  row: 0,
  value: "y"
}, {
  row: 0,
  value: "u"
}, {
  row: 0,
  value: "i"
}, {
  row: 0,
  value: "o"
}, {
  row: 0,
  value: "p"
}, {
  row: 1,
  value: "q"
}, {
  row: 1,
  value: "s"
}, {
  row: 1,
  value: "d"
}, {
  row: 1,
  value: "f"
}, {
  row: 1,
  value: "g"
}, {
  row: 1,
  value: "h"
}, {
  row: 1,
  value: "j"
}, {
  row: 1,
  value: "k"
}, {
  row: 1,
  value: "l"
}, {
  row: 1,
  value: "m"
}, {
  row: 2,
  value: "w"
}, {
  row: 2,
  value: "x"
}, {
  row: 2,
  value: "c"
}, {
  row: 2,
  value: "v"
}, {
  row: 2,
  value: "b"
}, {
  row: 2,
  value: "n"
}, {
  row: 2,
  value: "Backspace"
}], yo = [{
  row: 0,
  value: "a"
}, {
  row: 0,
  value: "z"
}, {
  row: 0,
  value: "e"
}, {
  row: 0,
  value: "r"
}, {
  row: 0,
  value: "t"
}, {
  row: 0,
  value: "y"
}, {
  row: 0,
  value: "u"
}, {
  row: 0,
  value: "i"
}, {
  row: 0,
  value: "o"
}, {
  row: 0,
  value: "p"
}, {
  row: 1,
  value: "q"
}, {
  row: 1,
  value: "s"
}, {
  row: 1,
  value: "d"
}, {
  row: 1,
  value: "f"
}, {
  row: 1,
  value: "g"
}, {
  row: 1,
  value: "h"
}, {
  row: 1,
  value: "j"
}, {
  row: 1,
  value: "k"
}, {
  row: 1,
  value: "l"
}, {
  row: 1,
  value: "m"
}, {
  row: 2,
  value: "Enter"
}, {
  row: 2,
  value: "w"
}, {
  row: 2,
  value: "x"
}, {
  row: 2,
  value: "c"
}, {
  row: 2,
  value: "v"
}, {
  row: 2,
  value: "b"
}, {
  row: 2,
  value: "n"
}, {
  row: 2,
  value: "Backspace"
}], ko = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>', qo = '<svg width="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-left"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>';
const {
  HtmlTag: So,
  SvelteComponent: Co,
  append: zo,
  attr: oe,
  destroy_each: Me,
  detach: se,
  element: Ce,
  empty: Lo,
  ensure_array_like: re,
  init: Fo,
  insert: ue,
  listen: ve,
  noop: ul,
  run_all: jo,
  safe_not_equal: Po,
  set_data: Vo,
  space: Bo,
  text: Mo,
  toggle_class: ee
} = window.__gradio__svelte__internal, { createEventDispatcher: No } = window.__gradio__svelte__internal;
function fl(o, e, l) {
  const t = o.slice();
  return t[27] = e[l], t[29] = l, t;
}
function _l(o, e, l) {
  const t = o.slice();
  return t[30] = e[l], t;
}
function cl(o, e, l) {
  const t = o.slice();
  return t[33] = e[l].value, t[34] = e[l].display, t;
}
function Eo(o) {
  let e = (
    /*display*/
    o[34] + ""
  ), l;
  return {
    c() {
      l = Mo(e);
    },
    m(t, a) {
      ue(t, l, a);
    },
    p(t, a) {
      a[0] & /*rowData*/
      8 && e !== (e = /*display*/
      t[34] + "") && Vo(l, e);
    },
    d(t) {
      t && se(l);
    }
  };
}
function Do(o) {
  let e, l = (
    /*display*/
    o[34] + ""
  ), t;
  return {
    c() {
      e = new So(!1), t = Lo(), e.a = t;
    },
    m(a, n) {
      e.m(l, a, n), ue(a, t, n);
    },
    p(a, n) {
      n[0] & /*rowData*/
      8 && l !== (l = /*display*/
      a[34] + "") && e.p(l);
    },
    d(a) {
      a && (se(t), e.d());
    }
  };
}
function dl(o) {
  let e, l, t, a, n;
  function r(d, _) {
    return _[0] & /*rowData*/
    8 && (l = null), l == null && (l = !!/*display*/
    d[34].includes("<svg")), l ? Do : Eo;
  }
  let i = r(o, [-1, -1]), s = i(o);
  function u(...d) {
    return (
      /*touchstart_handler*/
      o[19](
        /*value*/
        o[33],
        ...d
      )
    );
  }
  function f(...d) {
    return (
      /*mousedown_handler*/
      o[20](
        /*value*/
        o[33],
        ...d
      )
    );
  }
  function v() {
    return (
      /*touchend_handler*/
      o[21](
        /*value*/
        o[33]
      )
    );
  }
  function h() {
    return (
      /*mouseup_handler*/
      o[22](
        /*value*/
        o[33]
      )
    );
  }
  return {
    c() {
      e = Ce("button"), s.c(), oe(e, "type", "button"), oe(e, "class", t = "key key--" + /*value*/
      o[33] + " " + /*keyClass*/
      (o[0][
        /*value*/
        o[33]
      ] || "") + " svelte-1bx3au8"), ee(
        e,
        "single",
        /*value*/
        o[33].length === 1
      ), ee(
        e,
        "active",
        /*value*/
        o[33] === /*active*/
        o[2]
      );
    },
    m(d, _) {
      ue(d, e, _), s.m(e, null), a || (n = [
        ve(e, "touchstart", u),
        ve(e, "mousedown", f),
        ve(e, "touchend", v, { passive: !0 }),
        ve(e, "mouseup", h)
      ], a = !0);
    },
    p(d, _) {
      o = d, i === (i = r(o, _)) && s ? s.p(o, _) : (s.d(1), s = i(o), s && (s.c(), s.m(e, null))), _[0] & /*rowData, keyClass*/
      9 && t !== (t = "key key--" + /*value*/
      o[33] + " " + /*keyClass*/
      (o[0][
        /*value*/
        o[33]
      ] || "") + " svelte-1bx3au8") && oe(e, "class", t), _[0] & /*rowData, keyClass, rowData*/
      9 && ee(
        e,
        "single",
        /*value*/
        o[33].length === 1
      ), _[0] & /*rowData, keyClass, rowData, active*/
      13 && ee(
        e,
        "active",
        /*value*/
        o[33] === /*active*/
        o[2]
      );
    },
    d(d) {
      d && se(e), s.d(), a = !1, jo(n);
    }
  };
}
function wl(o) {
  let e, l = re(
    /*keys*/
    o[30]
  ), t = [];
  for (let a = 0; a < l.length; a += 1)
    t[a] = dl(cl(o, l, a));
  return {
    c() {
      e = Ce("div");
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      oe(e, "class", "row row--" + /*i*/
      o[29] + " svelte-1bx3au8");
    },
    m(a, n) {
      ue(a, e, n);
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(e, null);
    },
    p(a, n) {
      if (n[0] & /*rowData, keyClass, active, onKeyStart, onKeyEnd*/
      61) {
        l = re(
          /*keys*/
          a[30]
        );
        let r;
        for (r = 0; r < l.length; r += 1) {
          const i = cl(a, l, r);
          t[r] ? t[r].p(i, n) : (t[r] = dl(i), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    d(a) {
      a && se(e), Me(t, a);
    }
  };
}
function vl(o) {
  let e, l, t = re(
    /*row*/
    o[27]
  ), a = [];
  for (let n = 0; n < t.length; n += 1)
    a[n] = wl(_l(o, t, n));
  return {
    c() {
      e = Ce("div");
      for (let n = 0; n < a.length; n += 1)
        a[n].c();
      l = Bo(), oe(e, "class", "page svelte-1bx3au8"), ee(
        e,
        "visible",
        /*i*/
        o[29] === /*page*/
        o[1]
      );
    },
    m(n, r) {
      ue(n, e, r);
      for (let i = 0; i < a.length; i += 1)
        a[i] && a[i].m(e, null);
      zo(e, l);
    },
    p(n, r) {
      if (r[0] & /*rowData, keyClass, active, onKeyStart, onKeyEnd*/
      61) {
        t = re(
          /*row*/
          n[27]
        );
        let i;
        for (i = 0; i < t.length; i += 1) {
          const s = _l(n, t, i);
          a[i] ? a[i].p(s, r) : (a[i] = wl(s), a[i].c(), a[i].m(e, l));
        }
        for (; i < a.length; i += 1)
          a[i].d(1);
        a.length = t.length;
      }
      r[0] & /*page*/
      2 && ee(
        e,
        "visible",
        /*i*/
        n[29] === /*page*/
        n[1]
      );
    },
    d(n) {
      n && se(e), Me(a, n);
    }
  };
}
function To(o) {
  let e, l = re(
    /*rowData*/
    o[3]
  ), t = [];
  for (let a = 0; a < l.length; a += 1)
    t[a] = vl(fl(o, l, a));
  return {
    c() {
      e = Ce("div");
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      oe(e, "class", "svelte-keyboard");
    },
    m(a, n) {
      ue(a, e, n);
      for (let r = 0; r < t.length; r += 1)
        t[r] && t[r].m(e, null);
    },
    p(a, n) {
      if (n[0] & /*page, rowData, keyClass, active, onKeyStart, onKeyEnd*/
      63) {
        l = re(
          /*rowData*/
          a[3]
        );
        let r;
        for (r = 0; r < l.length; r += 1) {
          const i = fl(a, l, r);
          t[r] ? t[r].p(i, n) : (t[r] = vl(i), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1)
          t[r].d(1);
        t.length = l.length;
      }
    },
    i: ul,
    o: ul,
    d(a) {
      a && se(e), Me(t, a);
    }
  };
}
const Zo = "abcdefghijklmnopqrstuvwxyz";
function Ao(o, e, l) {
  let t, a, n, r, i, s, u, f, v, { custom: h } = e, { localizationLayout: d = "qwerty" } = e, { layout: _ = "standard" } = e, { noSwap: b = [] } = e, { keyClass: y = {} } = e, F = 0, L = !1, c;
  const z = {
    qwerty: {
      standard: go,
      crossword: mo,
      wordle: po
    },
    azerty: {
      standard: bo,
      crossword: ho,
      wordle: yo
    }
  }, m = No(), O = {
    Page0: "abc",
    Page1: "?123",
    Space: " ",
    Shift: "abc",
    Enter: qo,
    Backspace: ko
  }, p = (w) => [...new Set(w)], I = (w, S) => {
    if (w.preventDefault(), l(2, c = S), S.includes("Page"))
      l(1, F = +S.substr(-1));
    else if (S === "Shift")
      l(10, L = !L);
    else {
      let T = S;
      L && Zo.includes(S) && (T = S.toUpperCase()), m("keydown", T);
    }
    return w.stopPropagation(), !1;
  }, H = (w) => {
    setTimeout(
      () => {
        w === c && l(2, c = void 0);
      },
      50
    );
  }, K = (w, S) => I(S, w), fe = (w, S) => I(S, w), ce = (w) => H(w), G = (w) => H(w);
  return o.$$set = (w) => {
    "custom" in w && l(6, h = w.custom), "localizationLayout" in w && l(7, d = w.localizationLayout), "layout" in w && l(8, _ = w.layout), "noSwap" in w && l(9, b = w.noSwap), "keyClass" in w && l(0, y = w.keyClass);
  }, o.$$.update = () => {
    o.$$.dirty[0] & /*custom, localizationLayout, layout*/
    448 && l(18, t = h || z[d][_] || standard), o.$$.dirty[0] & /*rawData, noSwap, shifted*/
    263680 && l(17, a = t.map((w) => {
      let S = w.display;
      const T = O[w.value];
      return T && !b.includes(w.value) && !w.noSwap && (S = T), S || (S = L ? w.value.toUpperCase() : w.value), w.value === "Shift" && (S = L ? T : T.toUpperCase()), { ...w, display: S };
    })), o.$$.dirty[0] & /*data*/
    131072 && l(15, n = a.filter((w) => !w.page)), o.$$.dirty[0] & /*data*/
    131072 && l(13, r = a.filter((w) => w.page)), o.$$.dirty[0] & /*page0*/
    32768 && l(14, i = p(n.map((w) => w.row))), o.$$.dirty[0] & /*rows0*/
    16384 && i.sort((w, S) => w - S), o.$$.dirty[0] & /*page1*/
    8192 && l(16, s = p(r.map((w) => w.row))), o.$$.dirty[0] & /*rows1*/
    65536 && s.sort((w, S) => w - S), o.$$.dirty[0] & /*rows0, page0*/
    49152 && l(12, u = i.map((w) => n.filter((S) => S.row === w))), o.$$.dirty[0] & /*rows0, page1*/
    24576 && l(11, f = i.map((w) => r.filter((S) => S.row === w))), o.$$.dirty[0] & /*rowData0, rowData1*/
    6144 && l(3, v = [u, f]);
  }, [
    y,
    F,
    c,
    v,
    I,
    H,
    h,
    d,
    _,
    b,
    L,
    f,
    u,
    r,
    i,
    n,
    s,
    a,
    t,
    K,
    fe,
    ce,
    G
  ];
}
class Io extends Co {
  constructor(e) {
    super(), Fo(
      this,
      e,
      Ao,
      To,
      Po,
      {
        custom: 6,
        localizationLayout: 7,
        layout: 8,
        noSwap: 9,
        keyClass: 0
      },
      null,
      [-1, -1]
    );
  }
}
const Ko = [{
  row: 0,
  value: "q"
}, {
  row: 0,
  value: "w"
}, {
  row: 0,
  value: "e"
}, {
  row: 0,
  value: "r"
}, {
  row: 0,
  value: "t"
}, {
  row: 0,
  value: "y"
}, {
  row: 0,
  value: "u"
}, {
  row: 0,
  value: "i"
}, {
  row: 0,
  value: "ѳ"
}, {
  row: 0,
  value: "p"
}, {
  row: 1,
  value: "a"
}, {
  row: 1,
  value: "s"
}, {
  row: 1,
  value: "d"
}, {
  row: 1,
  value: "f"
}, {
  row: 1,
  value: "g"
}, {
  row: 1,
  value: "h"
}, {
  row: 1,
  value: "j"
}, {
  row: 1,
  value: "k"
}, {
  row: 1,
  value: "l"
}, {
  row: 2,
  value: "Shift"
}, {
  row: 2,
  value: "z"
}, {
  row: 2,
  value: "x"
}, {
  row: 2,
  value: "c"
}, {
  row: 2,
  value: "v"
}, {
  row: 2,
  value: "b"
}, {
  row: 2,
  value: "n"
}, {
  row: 2,
  value: "m"
}, {
  row: 2,
  value: "Backspace"
}, {
  row: 3,
  value: "Page1"
}, {
  row: 3,
  value: ","
}, {
  row: 3,
  value: "Space"
}, {
  row: 3,
  value: "."
}, {
  row: 3,
  value: "Enter"
}, {
  row: 0,
  value: "1",
  page: 1
}, {
  row: 0,
  value: "2",
  page: 1
}, {
  row: 0,
  value: "3",
  page: 1
}, {
  row: 0,
  value: "4",
  page: 1
}, {
  row: 0,
  value: "5",
  page: 1
}, {
  row: 0,
  value: "6",
  page: 1
}, {
  row: 0,
  value: "7",
  page: 1
}, {
  row: 0,
  value: "8",
  page: 1
}, {
  row: 0,
  value: "9",
  page: 1
}, {
  row: 0,
  value: "0",
  page: 1
}, {
  row: 1,
  value: "!",
  page: 1
}, {
  row: 1,
  value: "@",
  page: 1
}, {
  row: 1,
  value: "#",
  page: 1
}, {
  row: 1,
  value: "$",
  page: 1
}, {
  row: 1,
  value: "%",
  page: 1
}, {
  row: 1,
  value: "^",
  page: 1
}, {
  row: 1,
  value: "&",
  page: 1
}, {
  row: 1,
  value: "*",
  page: 1
}, {
  row: 1,
  value: "(",
  page: 1
}, {
  row: 1,
  value: ")",
  page: 1
}, {
  row: 2,
  value: "-",
  page: 1
}, {
  row: 2,
  value: "_",
  page: 1
}, {
  row: 2,
  value: "=",
  page: 1
}, {
  row: 2,
  value: "+",
  page: 1
}, {
  row: 2,
  value: ";",
  page: 1
}, {
  row: 2,
  value: ":",
  page: 1
}, {
  row: 2,
  value: "'",
  page: 1
}, {
  row: 2,
  value: '"',
  page: 1
}, {
  row: 2,
  value: "<",
  page: 1
}, {
  row: 2,
  value: ">",
  page: 1
}, {
  row: 3,
  value: "Page0",
  page: 1
}, {
  row: 3,
  value: "/",
  page: 1
}, {
  row: 3,
  value: "?",
  page: 1
}, {
  row: 3,
  value: "[",
  page: 1
}, {
  row: 3,
  value: "]",
  page: 1
}, {
  row: 3,
  value: "{",
  page: 1
}, {
  row: 3,
  value: "}",
  page: 1
}, {
  row: 3,
  value: "|",
  page: 1
}, {
  row: 3,
  value: "\\",
  page: 1
}, {
  row: 3,
  value: "~",
  page: 1
}];
const {
  SvelteComponent: Go,
  append: ge,
  assign: Uo,
  attr: X,
  binding_callbacks: Ho,
  check_outros: Wo,
  create_component: ke,
  destroy_component: qe,
  detach: Ve,
  element: Le,
  flush: V,
  get_spread_object: Xo,
  get_spread_update: Yo,
  group_outros: Oo,
  init: Ro,
  insert: Be,
  listen: gl,
  mount_component: Se,
  run_all: Jo,
  safe_not_equal: Qo,
  set_data: xo,
  set_input_value: ml,
  set_style: P,
  space: Fe,
  text: $o,
  toggle_class: ea,
  transition_in: R,
  transition_out: le
} = window.__gradio__svelte__internal, { tick: la } = window.__gradio__svelte__internal;
function pl(o) {
  let e, l;
  const t = [
    { autoscroll: (
      /*gradio*/
      o[1].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      o[1].i18n
    ) },
    /*loading_status*/
    o[10]
  ];
  let a = {};
  for (let n = 0; n < t.length; n += 1)
    a = Uo(a, t[n]);
  return e = new vo({ props: a }), {
    c() {
      ke(e.$$.fragment);
    },
    m(n, r) {
      Se(e, n, r), l = !0;
    },
    p(n, r) {
      const i = r & /*gradio, loading_status*/
      1026 ? Yo(t, [
        r & /*gradio*/
        2 && { autoscroll: (
          /*gradio*/
          n[1].autoscroll
        ) },
        r & /*gradio*/
        2 && { i18n: (
          /*gradio*/
          n[1].i18n
        ) },
        r & /*loading_status*/
        1024 && Xo(
          /*loading_status*/
          n[10]
        )
      ]) : {};
      e.$set(i);
    },
    i(n) {
      l || (R(e.$$.fragment, n), l = !0);
    },
    o(n) {
      le(e.$$.fragment, n), l = !1;
    },
    d(n) {
      qe(e, n);
    }
  };
}
function ta(o) {
  let e;
  return {
    c() {
      e = $o(
        /*label*/
        o[2]
      );
    },
    m(l, t) {
      Be(l, e, t);
    },
    p(l, t) {
      t & /*label*/
      4 && xo(
        e,
        /*label*/
        l[2]
      );
    },
    d(l) {
      l && Ve(e);
    }
  };
}
function oa(o) {
  let e, l, t, a, n, r, i, s, u, f, v, h, d, _ = (
    /*loading_status*/
    o[10] && pl(o)
  );
  return t = new Lt({
    props: {
      show_label: (
        /*show_label*/
        o[7]
      ),
      info: void 0,
      $$slots: { default: [ta] },
      $$scope: { ctx: o }
    }
  }), u = new Io({ props: { custom: Ko } }), u.$on(
    "keydown",
    /*onKeydown*/
    o[15]
  ), {
    c() {
      _ && _.c(), e = Fe(), l = Le("label"), ke(t.$$.fragment), a = Fe(), n = Le("input"), s = Fe(), f = Le("div"), ke(u.$$.fragment), X(n, "data-testid", "textbox"), X(n, "type", "text"), X(n, "class", "scroll-hide svelte-2jrh70"), X(
        n,
        "placeholder",
        /*placeholder*/
        o[6]
      ), n.disabled = r = !/*interactive*/
      o[11], X(n, "dir", i = /*rtl*/
      o[12] ? "rtl" : "ltr"), P(f, "display", "contents"), P(f, "--height", "3.5rem"), P(f, "--background", "#efefef"), P(f, "--color", "currentColor"), P(f, "--border", "none"), P(f, "--border-radius", "2px"), P(f, "--box-shadow", "none"), P(f, "--flex", "1"), P(f, "--font-family", "sans-serif"), P(f, "--font-size", "20px"), P(f, "--font-weight", "normal"), P(f, "--margin", "0.125rem"), P(f, "--min-width", "2rem"), P(f, "--opacity", "1"), P(f, "--stroke-width", "3px"), P(f, "--text-transform", "none"), P(f, "--active-background", "#cdcdcd"), P(f, "--active-border", "none"), P(f, "--active-box-shadow", "none"), P(f, "--active-color", "currentColor"), P(f, "--active-opacity", "1"), P(f, "--active-transform", "none"), X(l, "class", "svelte-2jrh70"), ea(l, "container", na);
    },
    m(b, y) {
      _ && _.m(b, y), Be(b, e, y), Be(b, l, y), Se(t, l, null), ge(l, a), ge(l, n), ml(
        n,
        /*value*/
        o[0]
      ), o[18](n), ge(l, s), ge(l, f), Se(u, f, null), v = !0, h || (d = [
        gl(
          n,
          "input",
          /*input_input_handler*/
          o[17]
        ),
        gl(
          n,
          "keypress",
          /*handle_keypress*/
          o[14]
        )
      ], h = !0);
    },
    p(b, y) {
      /*loading_status*/
      b[10] ? _ ? (_.p(b, y), y & /*loading_status*/
      1024 && R(_, 1)) : (_ = pl(b), _.c(), R(_, 1), _.m(e.parentNode, e)) : _ && (Oo(), le(_, 1, 1, () => {
        _ = null;
      }), Wo());
      const F = {};
      y & /*show_label*/
      128 && (F.show_label = /*show_label*/
      b[7]), y & /*$$scope, label*/
      1048580 && (F.$$scope = { dirty: y, ctx: b }), t.$set(F), (!v || y & /*placeholder*/
      64) && X(
        n,
        "placeholder",
        /*placeholder*/
        b[6]
      ), (!v || y & /*interactive*/
      2048 && r !== (r = !/*interactive*/
      b[11])) && (n.disabled = r), (!v || y & /*rtl*/
      4096 && i !== (i = /*rtl*/
      b[12] ? "rtl" : "ltr")) && X(n, "dir", i), y & /*value*/
      1 && n.value !== /*value*/
      b[0] && ml(
        n,
        /*value*/
        b[0]
      );
    },
    i(b) {
      v || (R(_), R(t.$$.fragment, b), R(u.$$.fragment, b), v = !0);
    },
    o(b) {
      le(_), le(t.$$.fragment, b), le(u.$$.fragment, b), v = !1;
    },
    d(b) {
      b && (Ve(e), Ve(l)), _ && _.d(b), qe(t), o[18](null), qe(u), h = !1, Jo(d);
    }
  };
}
function aa(o) {
  let e, l;
  return e = new Hl({
    props: {
      visible: (
        /*visible*/
        o[5]
      ),
      elem_id: (
        /*elem_id*/
        o[3]
      ),
      elem_classes: (
        /*elem_classes*/
        o[4]
      ),
      scale: (
        /*scale*/
        o[8]
      ),
      min_width: (
        /*min_width*/
        o[9]
      ),
      allow_overflow: !1,
      padding: !0,
      $$slots: { default: [oa] },
      $$scope: { ctx: o }
    }
  }), {
    c() {
      ke(e.$$.fragment);
    },
    m(t, a) {
      Se(e, t, a), l = !0;
    },
    p(t, [a]) {
      const n = {};
      a & /*visible*/
      32 && (n.visible = /*visible*/
      t[5]), a & /*elem_id*/
      8 && (n.elem_id = /*elem_id*/
      t[3]), a & /*elem_classes*/
      16 && (n.elem_classes = /*elem_classes*/
      t[4]), a & /*scale*/
      256 && (n.scale = /*scale*/
      t[8]), a & /*min_width*/
      512 && (n.min_width = /*min_width*/
      t[9]), a & /*$$scope, placeholder, interactive, rtl, value, el, show_label, label, gradio, loading_status*/
      1064135 && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
    },
    i(t) {
      l || (R(e.$$.fragment, t), l = !0);
    },
    o(t) {
      le(e.$$.fragment, t), l = !1;
    },
    d(t) {
      qe(e, t);
    }
  };
}
const na = !0;
function ra(o, e, l) {
  let { gradio: t } = e, { label: a = "Textbox" } = e, { elem_id: n = "" } = e, { elem_classes: r = [] } = e, { visible: i = !0 } = e, { value: s = "" } = e, { placeholder: u = "" } = e, { show_label: f } = e, { scale: v = null } = e, { min_width: h = void 0 } = e, { loading_status: d = void 0 } = e, { value_is_output: _ = !1 } = e, { interactive: b } = e, { rtl: y = !1 } = e, F;
  function L() {
    t.dispatch("change"), _ || t.dispatch("input");
  }
  async function c(p) {
    await la(), p.key === "Enter" && (p.preventDefault(), t.dispatch("submit"));
  }
  const z = (p) => {
    l(0, s = s + p.detail);
  };
  function m() {
    s = this.value, l(0, s);
  }
  function O(p) {
    Ho[p ? "unshift" : "push"](() => {
      F = p, l(13, F);
    });
  }
  return o.$$set = (p) => {
    "gradio" in p && l(1, t = p.gradio), "label" in p && l(2, a = p.label), "elem_id" in p && l(3, n = p.elem_id), "elem_classes" in p && l(4, r = p.elem_classes), "visible" in p && l(5, i = p.visible), "value" in p && l(0, s = p.value), "placeholder" in p && l(6, u = p.placeholder), "show_label" in p && l(7, f = p.show_label), "scale" in p && l(8, v = p.scale), "min_width" in p && l(9, h = p.min_width), "loading_status" in p && l(10, d = p.loading_status), "value_is_output" in p && l(16, _ = p.value_is_output), "interactive" in p && l(11, b = p.interactive), "rtl" in p && l(12, y = p.rtl);
  }, o.$$.update = () => {
    o.$$.dirty & /*value*/
    1 && s === null && l(0, s = ""), o.$$.dirty & /*value*/
    1 && l(0, s = s.replace("o", "ѳ")), o.$$.dirty & /*value*/
    1 && L();
  }, [
    s,
    t,
    a,
    n,
    r,
    i,
    u,
    f,
    v,
    h,
    d,
    b,
    y,
    F,
    c,
    z,
    _,
    m,
    O
  ];
}
class ia extends Go {
  constructor(e) {
    super(), Ro(this, e, ra, aa, Qo, {
      gradio: 1,
      label: 2,
      elem_id: 3,
      elem_classes: 4,
      visible: 5,
      value: 0,
      placeholder: 6,
      show_label: 7,
      scale: 8,
      min_width: 9,
      loading_status: 10,
      value_is_output: 16,
      interactive: 11,
      rtl: 12
    });
  }
  get gradio() {
    return this.$$.ctx[1];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), V();
  }
  get label() {
    return this.$$.ctx[2];
  }
  set label(e) {
    this.$$set({ label: e }), V();
  }
  get elem_id() {
    return this.$$.ctx[3];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), V();
  }
  get elem_classes() {
    return this.$$.ctx[4];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), V();
  }
  get visible() {
    return this.$$.ctx[5];
  }
  set visible(e) {
    this.$$set({ visible: e }), V();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), V();
  }
  get placeholder() {
    return this.$$.ctx[6];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), V();
  }
  get show_label() {
    return this.$$.ctx[7];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), V();
  }
  get scale() {
    return this.$$.ctx[8];
  }
  set scale(e) {
    this.$$set({ scale: e }), V();
  }
  get min_width() {
    return this.$$.ctx[9];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), V();
  }
  get loading_status() {
    return this.$$.ctx[10];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), V();
  }
  get value_is_output() {
    return this.$$.ctx[16];
  }
  set value_is_output(e) {
    this.$$set({ value_is_output: e }), V();
  }
  get interactive() {
    return this.$$.ctx[11];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), V();
  }
  get rtl() {
    return this.$$.ctx[12];
  }
  set rtl(e) {
    this.$$set({ rtl: e }), V();
  }
}
export {
  ia as default
};
