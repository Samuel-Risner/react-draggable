import e, { useRef as t } from "react";
//#region \0rolldown/runtime.js
var n = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), r = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), i = { position: "relative" }, a = { position: "absolute" }, o = /* @__PURE__ */ n(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), s = /* @__PURE__ */ n(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function i(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, r, a, s, u) {
			var f = n.children;
			if (f !== void 0) {
				if (a) {
					if (M(f)) {
						for (a = 0; a < f.length; a++) p(f[a]);
						Object.freeze && Object.freeze(f);
					} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				} else p(f);
			}
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = r("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), c = (/* @__PURE__ */ n(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? o() : s();
})))();
function l({ child: e, style: t, posData: n, w: r, h: i, setTarget: o, unsetTarget: s, setSource: l }) {
	return /* @__PURE__ */ (0, c.jsx)("div", {
		style: {
			...t,
			...a,
			left: `${n.x}px`,
			top: `${n.y}px`,
			width: r,
			height: i
		},
		onPointerOver: (e) => {
			e.preventDefault(), o({
				...n,
				el: e.currentTarget
			});
		},
		onPointerLeave: (e) => s(e.currentTarget),
		onPointerDown: (t) => {
			if (t.preventDefault(), e === null) return;
			let r = t.currentTarget.getBoundingClientRect();
			l({
				...n,
				el: t.currentTarget,
				offsetX: t.clientX - r.left,
				offsetY: t.clientY - r.top
			});
		},
		children: e
	});
}
//#endregion
//#region src/draggable/helpers.ts
function u(e, t, n, r, i) {
	let a = e[t][n];
	e[t][n] = e[r][i], e[r][i] = a;
}
function d(t) {
	let n = [], r = [];
	for (let i of t) {
		let t = [], a = [];
		n.push(t), r.push(a);
		for (let n of i) t.push(n), a.push(e.isValidElement(n) ? n.key : null);
	}
	return [n, r];
}
function f(e, t, n) {
	e.style.transform = `translate3d(${t}px, ${n}px, 0)`;
}
function p(e) {
	f(e, 0, 0);
}
function m(e) {
	e.style.zIndex = "-1";
}
function h(e) {
	e.style.zIndex = "0";
}
//#endregion
//#region src/draggable/Grid.tsx
function g({ grid: n, reportChange: r, draggingEnabled: a = !0, elWidth: o, elHeight: s, elGap: g, containerStyle: _ = {}, elStyle: v = {} }) {
	let y = t(null), b = t(null), x = t(null), S = (e) => {
		if (!a) return;
		y.current = e, m(e.el);
		let t = (e) => {
			if (y.current === null || x.current === null) return;
			console.log("MOVE");
			let t = x.current.getBoundingClientRect();
			f(y.current.el, e.clientX - y.current.x - t.x - y.current.offsetX, e.clientY - y.current.y - t.y - y.current.offsetY);
		}, i = () => {
			if (console.log("UP"), window.removeEventListener("pointerup", i), window.removeEventListener("pointermove", t), y.current !== null) {
				if (b.current === null) console.log("NO TARGET SELECTED"), p(y.current.el);
				else {
					console.log("SWITCHING"), u(n, y.current.row, y.current.col, b.current.row, b.current.col), p(y.current.el);
					let [e, t] = d(n);
					r(e, t);
				}
				h(y.current.el), y.current = null, b.current = null;
			}
		};
		window.addEventListener("pointerup", i), window.addEventListener("pointermove", t);
	}, C = (e) => {
		if (y.current === null) {
			b.current = null;
			return;
		}
		y.current.el !== e.el && (console.log("SET TARGET"), b.current = e);
	}, w = (e) => {
		if (y.current === null) {
			b.current = null;
			return;
		}
		y.current.el !== e && (console.log("UNSET TARGET"), b.current = null);
	};
	return /* @__PURE__ */ (0, c.jsx)("div", {
		style: {
			..._,
			...i
		},
		ref: x,
		children: n.map((t, n) => t.map((t, r) => /* @__PURE__ */ (0, c.jsx)(l, {
			child: t,
			style: v,
			posData: {
				x: r * (o + g),
				y: n * (s + g),
				row: n,
				col: r
			},
			w: o,
			h: s,
			setTarget: C,
			unsetTarget: w,
			setSource: S
		}, e.isValidElement(t) ? t.key : `${n}-${r}`)))
	});
}
//#endregion
export { g as Grid, l as GridElement };
