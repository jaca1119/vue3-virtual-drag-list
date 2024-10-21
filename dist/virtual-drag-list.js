/*!
 * vue-virtual-draglist v3.2.2
 * open source under the MIT license
 * https://github.com/mfuu/vue3-virtual-drag-list#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VirtualDragList = factory(global.Vue));
})(this, (function (vue) { 'use strict';

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var sortableDnd_min = {exports: {}};

  /*!
   * sortable-dnd v0.6.8
   * open source under the MIT license
   * https://github.com/mfuu/sortable-dnd#readme
   */
  (function (module, exports) {
    !function (t, e) {
      module.exports = e() ;
    }(commonjsGlobal, function () {

      function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t(e);
      }
      function e() {
        return e = Object.assign ? Object.assign.bind() : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }, e.apply(this, arguments);
      }
      var n = {
          capture: !1,
          passive: !1
        },
        o = /\s+/g;
      function i(t) {
        if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t);
      }
      var r = i(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
        s = i(/Edge/i),
        a = i(/safari/i) && !i(/chrome/i) && !i(/android/i),
        l = function () {
          var t = !1;
          return document.addEventListener("checkIfSupportPassive", null, {
            get passive() {
              return t = !0, !0;
            }
          }), t;
        }(),
        c = function () {
          if ("undefined" == typeof window || "undefined" == typeof document) return "";
          var t = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
            e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1];
          return e ? "-".concat(e, "-") : "";
        }();
      function h(t, e) {
        t.style["".concat(c, "transform")] = e;
      }
      function u(t, e) {
        t.style["".concat(c, "transition-duration")] = e ? "".concat(e, "ms") : "";
      }
      function d(t, e, o) {
        window.addEventListener ? t.addEventListener(e, o, !(!l && r) && n) : window.attachEvent ? t.attachEvent("on" + e, o) : t["on" + e] = o;
      }
      function p(t, e, o) {
        window.removeEventListener ? t.removeEventListener(e, o, !(!l && r) && n) : window.detachEvent ? t.detachEvent("on" + e, o) : t["on" + e] = null;
      }
      function m() {
        return document.scrollingElement || document.documentElement;
      }
      function f(t, e, n) {
        if (t.getBoundingClientRect || t === window) {
          var o, i, r, s, a, l, c;
          if (t !== window && t.parentNode && t !== m() ? (i = (o = t.getBoundingClientRect()).top, r = o.left, s = o.bottom, a = o.right, l = o.height, c = o.width) : (i = 0, r = 0, s = window.innerHeight, a = window.innerWidth, l = window.innerHeight, c = window.innerWidth), e && t !== window) {
            n = n || t.parentNode;
            do {
              if (n && n.getBoundingClientRect) {
                var h = n.getBoundingClientRect();
                i -= h.top + parseInt(E(n, "border-top-width")), r -= h.left + parseInt(E(n, "border-left-width")), s = i + o.height, a = r + o.width;
                break;
              }
            } while (n = n.parentNode);
          }
          return {
            top: i,
            left: r,
            bottom: s,
            right: a,
            width: c,
            height: l
          };
        }
      }
      function g(t, e, n, o) {
        if (!t) return null;
        if (n && !e) {
          var i = Array.prototype.slice.call(n.children),
            r = i.indexOf(t);
          if (r > -1) return i[r];
          for (var s = 0; s < i.length; s++) if (v(t, i[s])) return i[s];
        }
        n = n || document;
        do {
          if (null != e && (">" === e[0] ? t.parentNode === n && x(t, e) : x(t, e)) || o && t === n) return t;
          if (t === n) break;
        } while (t = t.parentNode);
        return null;
      }
      function v(t, e) {
        if (!t || !e) return !1;
        if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
        if (e.contains && 1 === t.nodeType) return e.contains(t) && e !== t;
        for (; t = t.parentNode;) if (t === e) return !0;
        return !1;
      }
      function y(t, e) {
        for (var n = t.lastElementChild; n && (n === st.ghost || "none" === E(n, "display") || e && !x(n, e));) n = n.previousElementSibling;
        return n || null;
      }
      function w(t, e) {
        if (!t || !t.parentNode) return -1;
        for (var n = 0; t = t.previousElementSibling;) "TEMPLATE" === t.nodeName.toUpperCase() || e && !x(t, e) || "none" === E(t, "display") || n++;
        return n;
      }
      function b(t, e, n, o) {
        for (var i = 0, r = 0, s = t.children; i < s.length;) {
          if (s[i] !== st.ghost && "none" !== E(s[i], "display") && g(s[i], n, t, !1) && (o || s[i] !== st.dragged)) {
            if (r === e) return s[i];
            r++;
          }
          i++;
        }
        return null;
      }
      function _(t, e) {
        var n = E(t),
          o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
          i = b(t, 0, e),
          a = b(t, 1, e),
          l = i && E(i),
          c = a && E(a),
          h = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + f(i).width,
          u = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + f(a).width,
          d = s || r ? "cssFloat" : "float";
        if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (i && l.float && "none" !== l.float) {
          var p = "left" === l.float ? "left" : "right";
          return !a || "both" !== c.clear && c.clear !== p ? "horizontal" : "vertical";
        }
        return i && ("block" === l.display || "flex" === l.display || "table" === l.display || "grid" === l.display || h >= o && "none" === n[d] || a && "none" === n[d] && h + u > o) ? "vertical" : "horizontal";
      }
      function S(t, e, n) {
        if (t && e) if (t.classList) t.classList[n ? "add" : "remove"](e);else {
          var i = (" " + t.className + " ").replace(o, " ").replace(" " + e + " ", " ");
          t.className = (i + (n ? " " + e : "")).replace(o, " ");
        }
      }
      function x(t, e) {
        if (e) {
          if (">" === e[0] && (e = e.substring(1)), t) try {
            if (t.matches) return t.matches(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
          } catch (t) {
            return !1;
          }
          return !1;
        }
      }
      function E(t, e, n) {
        var o = t && t.style;
        if (o) {
          if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
          e in o || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px");
        }
      }
      function D(t, e) {
        var n,
          o,
          i = (o = e, (n = t).compareDocumentPosition ? n.compareDocumentPosition(o) : n.contains ? (n != o && n.contains(o) && 16) + (n != o && o.contains(n) && 8) + (n.sourceIndex >= 0 && o.sourceIndex >= 0 ? (n.sourceIndex < o.sourceIndex && 4) + (n.sourceIndex > o.sourceIndex && 2) : 1) : 0);
        return 2 === i ? 1 : 4 === i ? -1 : 0;
      }
      function C(t) {
        void 0 !== t.preventDefault && t.cancelable && t.preventDefault();
      }
      function I(t) {
        var n = t.sortable,
          o = t.name,
          i = t.params,
          r = n.options[o];
        "function" == typeof r && r(e({}, i));
      }
      var T,
        M,
        N = "Sortable" + Date.now();
      function P(t) {
        this.options = t, this.autoScrollAnimationFrame = null;
      }
      function O(t) {
        this.options = t, this.animations = [];
      }
      function A(t) {
        this.options = t || {}, this.selectedElements = [];
      }
      window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
        return setTimeout(t, 17);
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t);
      }), P.prototype = {
        destroy: function () {
          this.autoScrollAnimationFrame && (cancelAnimationFrame(this.autoScrollAnimationFrame), this.autoScrollAnimationFrame = null);
        },
        update: function (t, e, n) {
          var o = this;
          cancelAnimationFrame(this.autoScrollAnimationFrame), this.autoScrollAnimationFrame = requestAnimationFrame(function () {
            e && n && o.autoScroll(t, n), o.update(t, e, n);
          });
        },
        autoScroll: function (t, e) {
          if (t && void 0 !== e.clientX && void 0 !== e.clientY) {
            var n = f(t);
            if (n) {
              var o = e.clientX,
                i = e.clientY,
                r = n.top,
                s = n.right,
                a = n.bottom,
                l = n.left,
                c = n.height,
                h = n.width;
              if (!(i < r || o > s || i > a || o < l)) {
                var u = this.options,
                  d = u.scrollThreshold,
                  p = u.scrollSpeed,
                  m = t.scrollTop,
                  g = t.scrollLeft,
                  v = t.scrollHeight,
                  y = m > 0 && i >= r && i <= r + d,
                  w = g + h < t.scrollWidth && o <= s && o >= s - d,
                  b = m + c < v && i <= a && i >= a - d,
                  _ = 0,
                  S = 0;
                g > 0 && o >= l && o <= l + d && (_ = Math.floor(Math.max(-1, (o - l) / d - 1) * p.x)), w && (_ = Math.ceil(Math.min(1, (o - s) / d + 1) * p.x)), y && (S = Math.floor(Math.max(-1, (i - r) / d - 1) * p.y)), b && (S = Math.ceil(Math.min(1, (i - a) / d + 1) * p.y)), t.scrollTop += S, t.scrollLeft += _;
              }
            }
          }
        }
      }, O.prototype = {
        collect: function (t) {
          if (t) {
            for (var e = f(t), n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, i = Math.min(e.right, n), r = Math.min(e.bottom, o), s = Array.prototype.slice.call(t.children), a = [], l = 0; l <= s.length; l++) {
              var c = s[l];
              if (c && c !== st.ghost && "none" !== E(c, "display")) {
                var h = f(c);
                if (!(h.bottom < 0 || h.right < 0)) {
                  if (h.top - h.height > r || h.left - h.width > i) break;
                  a.push({
                    node: c,
                    rect: h
                  });
                }
              }
            }
            this.animations.push(a);
          }
        },
        animate: function () {
          for (var t = this.animations.pop(), e = 0, n = t.length; e < n; e++) {
            var o = t[e],
              i = o.node,
              r = o.rect;
            this._excute(i, r);
          }
        },
        _excute: function (t, e) {
          var n = e.left,
            o = e.top,
            i = f(t);
          if (i.top !== o || i.left !== n) {
            var r = o - i.top,
              s = n - i.left;
            u(t, 0), h(t, "translate3d(".concat(s, "px, ").concat(r, "px, 0)")), t.offsetWidth, u(t, this.options.animation), h(t, "translate3d(0px, 0px, 0px)"), clearTimeout(t.animated), t.animated = setTimeout(function () {
              u(t, 0), h(t, ""), t.animated = null;
            }, this.options.animation);
          }
        }
      }, A.prototype = {
        destroy: function () {
          T = M = null;
        },
        active: function () {
          return !!T;
        },
        setParams: function (t) {
          t.nodes = T || [], t.clones = M || [];
        },
        select: function (t) {
          S(t, this.options.selectedClass, !0), this.selectedElements.push(t), this.selectedElements.sort(function (t, e) {
            return D(t, e);
          });
        },
        deselect: function (t) {
          var e = this.selectedElements.indexOf(t);
          e > -1 && (S(t, this.options.selectedClass, !1), this.selectedElements.splice(e, 1));
        },
        getGhostElement: function () {
          if (!T) return null;
          var t = document.createElement("div");
          return this.selectedElements.forEach(function (e, n) {
            var o = e.cloneNode(!0),
              i = 0 === n ? 1 : .5;
            o.style = "position: absolute;left: 0;top: 0;bottom: 0;right: 0;opacity: ".concat(i, ";z-index: ").concat(n, ";"), t.appendChild(o);
          }), t;
        },
        toggleSelected: function (t, e) {
          var n = this;
          e ? t.forEach(function (t) {
            return n.selectedElements.push(t);
          }) : this.selectedElements = this.selectedElements.filter(function (e) {
            return t.indexOf(e) < 0;
          });
        },
        toggleClass: function (t) {
          if (T) for (var e = 0; e < T.length; e++) S(T[e], this.options.chosenClass, t);
        },
        toggleVisible: function (t) {
          if (T) if (t) {
            var e = T.indexOf(st.dragged);
            this._viewElements(T, e, st.dragged);
          } else this._hideElements(T);
        },
        onChoose: function () {
          !this.options.multiple || !this.selectedElements.length || this.selectedElements.indexOf(st.dragged) < 0 || (this.selectedElements.sort(function (t, e) {
            return D(t, e);
          }), T = this.selectedElements, this.toggleClass(!0));
        },
        onDrag: function (t) {
          T && (t.animator.collect(st.dragged.parentNode), this._hideElements(T), t.animator.animate(), this.toggleClass(!1));
        },
        onDrop: function (t, e, n) {
          if (T) {
            var o = st.dragged,
              i = st.clone,
              r = T.indexOf(o);
            e[N].animator.collect(i.parentNode), t !== e && "clone" === n ? (E(i, "display", "none"), M = T.map(function (t) {
              return t.cloneNode(!0);
            }), this._viewElements(M, r, i), this._viewElements(T, r, o)) : this._viewElements(T, r, i), e[N].animator.animate(), t !== e && (e[N].multiplayer.toggleSelected(M || T, !0), "clone" !== n && t[N].multiplayer.toggleSelected(T, !1));
          }
        },
        onSelect: function (t, e, n) {
          var o = this.selectedElements.indexOf(e);
          S(e, this.options.selectedClass, o < 0);
          var i = {
            from: n.el,
            event: t,
            node: e,
            index: w(e)
          };
          o < 0 ? (this.selectedElements.push(e), I({
            sortable: n,
            name: "onSelect",
            params: i
          })) : (this.selectedElements.splice(o, 1), I({
            sortable: n,
            name: "onDeselect",
            params: i
          })), this.selectedElements.sort(function (t, e) {
            return D(t, e);
          });
        },
        _viewElements: function (t, e, n) {
          for (var o = 0; o < t.length; o++) if (E(t[o], "display", ""), o < e) n.parentNode.insertBefore(t[o], n);else {
            var i = o > 0 ? t[o - 1] : n;
            n.parentNode.insertBefore(t[o], i.nextSibling);
          }
        },
        _hideElements: function (t) {
          for (var e = 0; e < t.length; e++) t[e] != st.dragged && E(t[e], "display", "none");
        }
      };
      var H,
        L,
        X,
        Y,
        k,
        W,
        B,
        F,
        R,
        z,
        G,
        j,
        V,
        q,
        U,
        Z,
        J,
        K,
        Q,
        $,
        tt,
        et,
        nt,
        ot = [];
      function it(e) {
        var n = {},
          o = e.group;
        o && "object" == t(o) || (o = {
          name: o,
          pull: !0,
          put: !0,
          revertDrag: !0
        }), n.name = o.name, n.pull = o.pull, n.put = o.put, n.revertDrag = o.revertDrag, e.group = n;
      }
      function rt(t) {
        var e = Z || U;
        return !(void 0 !== t.clientX && void 0 !== t.clientY && Math.abs(t.clientX - e.clientX) <= 0 && Math.abs(t.clientY - e.clientY) <= 0);
      }
      function st(t, n) {
        if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable-dnd: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
        t[N] = this, this.el = t, this.options = n = e({}, n);
        var o = {
          store: null,
          group: "",
          handle: null,
          sortable: !0,
          disabled: !1,
          multiple: !1,
          lockAxis: "",
          direction: "",
          animation: 150,
          draggable: null,
          selectHandle: null,
          customGhost: null,
          autoScroll: !0,
          scrollThreshold: 55,
          scrollSpeed: {
            x: 10,
            y: 10
          },
          delay: 0,
          delayOnTouchOnly: !1,
          touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
          ghostClass: "",
          ghostStyle: {},
          chosenClass: "",
          selectedClass: "",
          swapOnDrop: !0,
          fallbackOnBody: !1,
          supportTouch: "ontouchstart" in window,
          emptyInsertThreshold: -5
        };
        for (var i in o) !(i in this.options) && (this.options[i] = o[i]);
        for (var r in it(n), this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
        d(t, this.options.supportTouch ? "touchstart" : "mousedown", this._onDrag), ot.push(t), this.autoScroller = new P(this.options), this.multiplayer = new A(this.options), this.animator = new O(this.options);
      }
      return st.prototype = {
        constructor: st,
        _onDrag: function (t) {
          var e = this;
          if (!Y && !this.options.disabled && this.options.group.pull && (!/mousedown|pointerdown/.test(t.type) || 0 === t.button)) {
            var n = t.touches && t.touches[0],
              o = (n || t).target;
            if (!a || !o || "SELECT" !== o.tagName.toUpperCase()) {
              var i = g(o, this.options.draggable, this.el);
              if (i && !i.animated) {
                U = {
                  origin: t,
                  clientX: (n || t).clientX,
                  clientY: (n || t).clientY
                }, Y = i, d($ = n ? Y : document, "mouseup", this._onDrop), d($, "touchend", this._onDrop), d($, "touchcancel", this._onDrop);
                var l = this.options,
                  c = l.handle,
                  h = l.selectHandle;
                if ("function" == typeof h && h(t) || "string" == typeof h && x(o, h)) nt = !0;else if (("function" != typeof c || c(t)) && ("string" != typeof c || x(o, c))) {
                  var u = this.options,
                    p = u.delay,
                    m = u.delayOnTouchOnly;
                  !p || m && !n || s || r ? this._onStart(n, t) : (d(this.el.ownerDocument, "touchmove", this._delayMoveHandler), d(this.el.ownerDocument, "mousemove", this._delayMoveHandler), d(this.el.ownerDocument, "mouseup", this._cancelStart), d(this.el.ownerDocument, "touchend", this._cancelStart), d(this.el.ownerDocument, "touchcancel", this._cancelStart), et = setTimeout(function () {
                    return e._onStart(n, t);
                  }, p)), d(document, "selectstart", C), a && E(document.body, "user-select", "none");
                }
              }
            }
          }
        },
        _delayMoveHandler: function (t) {
          var e = t.touches ? t.touches[0] : t;
          Math.max(Math.abs(e.clientX - U.clientX), Math.abs(e.clientY - U.clientY)) >= Math.floor(this.options.touchStartThreshold / (window.devicePixelRatio || 1)) && this._cancelStart();
        },
        _cancelStart: function () {
          clearTimeout(et), p(this.el.ownerDocument, "touchmove", this._delayMoveHandler), p(this.el.ownerDocument, "mousemove", this._delayMoveHandler), p(this.el.ownerDocument, "mouseup", this._cancelStart), p(this.el.ownerDocument, "touchend", this._cancelStart), p(this.el.ownerDocument, "touchcancel", this._cancelStart), p(document, "selectstart", C), a && E(document.body, "user-select", "");
        },
        _onStart: function (t, e) {
          var n = w(Y);
          H = this.el, L = this.el, R = Y, j = n, V = n, q = n, K = {
            to: this.el,
            target: Y,
            newIndex: n,
            relative: 0
          }, Q = Y, X = this.el, B = Y.cloneNode(!0), z = Y.parentNode, G = this.options.group.pull, st.clone = B, st.active = this, st.dragged = Y, S(Y, this.options.chosenClass, !0), this.multiplayer.onChoose(), I({
            sortable: this,
            name: "onChoose",
            params: this._getParams(e)
          }), d($, t ? "touchmove" : "mousemove", this._nearestSortable);
          try {
            document.selection ? setTimeout(function () {
              return document.selection.empty();
            }, 0) : window.getSelection().removeAllRanges();
          } catch (t) {}
        },
        _onStarted: function () {
          S(B, this.options.chosenClass, !0), this._appendGhost(), this.multiplayer.onDrag(this), I({
            sortable: this,
            name: "onDrag",
            params: this._getParams(U.origin)
          }), E(Y, "display", "none"), S(Y, this.options.chosenClass, !1), Y.parentNode.insertBefore(B, Y);
        },
        _getGhostElement: function () {
          var t = this.options.customGhost;
          if ("function" == typeof t) {
            var e = this.multiplayer.selectedElements;
            return t(e.length ? e : [Y]);
          }
          return this.multiplayer.getGhostElement() || Y;
        },
        _appendGhost: function () {
          if (!F) {
            var t = this.options.fallbackOnBody ? document.body : this.el,
              n = this._getGhostElement();
            S(F = n.cloneNode(!0), this.options.ghostClass, !0);
            var o,
              i = f(Y),
              r = e({
                position: "fixed",
                top: i.top,
                left: i.left,
                width: i.width,
                height: i.height,
                minWidth: i.width,
                minHeight: i.height,
                opacity: "0.8",
                overflow: "hidden",
                "z-index": "100000",
                "box-sizing": "border-box",
                "pointer-events": "none"
              }, this.options.ghostStyle);
            for (var s in r) E(F, s, r[s]);
            o = "none", F.style["".concat(c, "transition")] = o, h(F, "translate3d(0px, 0px, 0px)"), st.ghost = F, t.appendChild(F);
            var a = (U.clientX - i.left) / parseInt(F.style.width) * 100,
              l = (U.clientY - i.top) / parseInt(F.style.height) * 100;
            E(F, "transform-origin", "".concat(a, "% ").concat(l, "%")), E(F, "transform", "translateZ(0)"), E(F, "will-change", "transform");
          }
        },
        _nearestSortable: function (t) {
          C(t);
          var e = t.touches && t.touches[0] || t;
          if (Y && rt(e)) {
            !Z && this._onStarted();
            var n = this.options.lockAxis,
              o = "x" === n ? U.clientX : e.clientX,
              i = "y" === n ? U.clientY : e.clientY,
              r = document.elementFromPoint(o, i),
              s = o - U.clientX,
              a = i - U.clientY;
            if (Z = {
              origin: t,
              clientX: o,
              clientY: i
            }, h(F, "translate3d(".concat(s, "px, ").concat(a, "px, 0)")), this.options.autoScroll) {
              var l = function (t, e) {
                if (!t || !t.getBoundingClientRect) return m();
                var n = t,
                  o = !1;
                do {
                  if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                    var i = E(n);
                    if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                      if (!n.getBoundingClientRect || n === document.body) return m();
                      if (o || e) return n;
                      o = !0;
                    }
                  }
                } while (n = n.parentNode);
                return m();
              }(r, !0);
              this.autoScroller.update(l, U, Z);
            }
            var c,
              u,
              d,
              p = (c = o, u = i, ot.some(function (t) {
                var e = t[N].options.emptyInsertThreshold;
                if (null != e) {
                  var n = f(t),
                    o = c >= n.left - e && c <= n.right + e,
                    i = u >= n.top - e && u <= n.bottom + e;
                  return o && i ? d = t : void 0;
                }
              }), d);
            p && p[N]._onMove(t, r);
          }
        },
        _allowPut: function () {
          if (X === this.el) return !0;
          if (this.options.group.put) {
            var t = this.options.group,
              e = t.name,
              n = t.put,
              o = X[N].options.group;
            return n.join && n.indexOf(o.name) > -1 || o.name && e && o.name === e;
          }
          return !1;
        },
        _getDirection: function () {
          var t = this.options,
            e = t.draggable,
            n = t.direction;
          return n ? "function" == typeof n ? n.call(Z.origin, Y, this) : n : _(z, e);
        },
        _allowSwap: function () {
          var t = f(k),
            e = "vertical" === this._getDirection(),
            n = e ? "top" : "left",
            o = e ? "bottom" : "right",
            i = k[e ? "offsetHeight" : "offsetWidth"],
            r = e ? Z.clientY : Z.clientX,
            s = r >= t[n] && r < t[o] - i / 2 ? -1 : 1,
            a = b(z, 0, this.options.draggable),
            l = y(z),
            c = f(a),
            h = f(l);
          if (k === z || v(z, k)) return B === a && r < c[n] ? (W = k, !0) : B === l && r > h[o] && (W = k.nextSibling, !0);
          var u = D(B, k);
          return W = u < 0 ? k.nextSibling : k, J !== k ? (tt = s, !0) : tt !== s && (tt = s, s < 0 ? u > 0 : u < 0);
        },
        _onMove: function (t, e) {
          if (!this.options.disabled && this._allowPut() && (k = g(e, this.options.draggable, this.el), I({
            sortable: this,
            name: "onMove",
            params: this._getParams(t, {
              target: k
            })
          }), this.options.sortable)) return this.el === L || e !== this.el && y(this.el) ? void (k && !k.animated && this._allowSwap() && (k !== B && W !== B ? (this.el !== L ? this._onInsert(t) : k !== Y && this._onChange(t), J = k) : J = k)) : (k = J = null, void this._onInsert(t));
        },
        _onInsert: function (t) {
          var e = k || B,
            n = "clone" === G && this.el !== X && L === X,
            o = "clone" === G && this.el === X && L !== X;
          H = this.el, j = w(B), R = e, z = k ? k.parentNode : this.el, L[N].animator.collect(B.parentNode), this.animator.collect(z), n && (K.target = Q, K.newIndex = j, K.relative = Q === Y ? 0 : D(B, Q), E(Y, "display", ""), X[N].multiplayer.toggleVisible(!0), X[N].options.group.revertDrag || L.insertBefore(Y, B)), o && (j = w(Y), E(Y, "display", "none"), this.multiplayer.toggleVisible(!1)), k ? z.insertBefore(B, tt < 0 ? k : k.nextSibling) : z.appendChild(B), V = w(B), n && X[N].options.group.revertDrag && (K.target = Y, K.newIndex = q, K.relative = 0, I({
            sortable: X[N],
            name: "onChange",
            params: this._getParams(t, {
              to: X,
              target: Y,
              newIndex: q,
              revertDrag: !0
            })
          })), n || I({
            sortable: L[N],
            name: "onRemove",
            params: this._getParams(t)
          }), o && k !== Y && (Q = k, I({
            sortable: this,
            name: "onChange",
            params: this._getParams(t, {
              from: X,
              backToOrigin: !0
            })
          })), o || I({
            sortable: this,
            name: "onAdd",
            params: this._getParams(t)
          }), L[N].animator.animate(), this.animator.animate(), L = this.el;
        },
        _onChange: function (t) {
          j = w(B), z = k.parentNode, R = k, this.el === X && (Q = k), this.animator.collect(z), z.insertBefore(B, W), V = w(B), I({
            sortable: this,
            name: "onChange",
            params: this._getParams(t)
          }), this.animator.animate(), L = this.el;
        },
        _onDrop: function (t) {
          C(t), this._cancelStart(), p($, "touchmove", this._nearestSortable), p($, "mousemove", this._nearestSortable), p($, "mouseup", this._onDrop), p($, "touchend", this._onDrop), p($, "touchcancel", this._onDrop), S(Y, this.options.chosenClass, !1), X && (L = X, j = q, R === B && (R = Y), this.multiplayer.toggleClass(!1), I({
            sortable: this,
            name: "onUnchoose",
            params: this._getParams(t)
          }), Z && this._onEnd(t));
          var e = this.options,
            n = e.multiple,
            o = e.selectHandle;
          n && (o && nt || !o && !X) && !rt(t.changedTouches ? t.changedTouches[0] : t) && this.multiplayer.onSelect(t, Y, this);
          F && F.parentNode && F.parentNode.removeChild(F), this.multiplayer.destroy(), this.autoScroller.destroy(), this._nulling();
        },
        _onEnd: function (t) {
          var n = this._getParams(t);
          this.multiplayer.onDrop(L, H, G);
          var o = this.options.swapOnDrop;
          "clone" === G && L !== H || !("function" == typeof o ? o(n) : o) || z.insertBefore(Y, B), "clone" !== G || L === H || this.multiplayer.active() ? B && B.parentNode && B.parentNode.removeChild(B) : S(B, this.options.chosenClass, !1), E(Y, "display", ""), L !== H && I({
            sortable: L[N],
            name: "onDrop",
            params: "clone" === G ? e({}, n, K) : n
          }), I({
            sortable: H[N],
            name: "onDrop",
            params: n
          });
        },
        _getParams: function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = {};
          return o.event = t, o.to = H, o.from = L, o.node = Y, o.clone = B, o.target = R, o.oldIndex = j, o.newIndex = V, o.pullMode = G, this.multiplayer.setParams(o), e(o, n), o.relative = R === Y ? 0 : D(B, R), o;
        },
        _nulling: function () {
          H = L = X = Y = k = W = B = F = R = z = G = j = V = q = U = Z = J = K = Q = $ = tt = et = nt = st.clone = st.ghost = st.active = st.dragged = null;
        },
        destroy: function () {
          this._cancelStart(), this._nulling(), p(this.el, "touchstart", this._onDrag), p(this.el, "mousedown", this._onDrag), ot.splice(ot.indexOf(this.el), 1), this.el[N] = this.animator = this.multiplayer = this.autoScroller = null;
        },
        option: function (t, e) {
          if (void 0 === e) return this.options[t];
          this.options[t] = e, this.animator.options[t] = e, this.multiplayer.options[t] = e, this.autoScroller.options[t] = e, "group" === t && it(this.options);
        },
        select: function (t) {
          this.multiplayer.select(t);
        },
        deselect: function (t) {
          this.multiplayer.deselect(t);
        },
        getSelectedElements: function () {
          return this.multiplayer.selectedElements;
        }
      }, st.utils = {
        on: d,
        off: p,
        css: E,
        index: w,
        closest: g,
        getRect: f,
        toggleClass: S,
        detectDirection: _
      }, st.get = function (t) {
        return t[N];
      }, st.create = function (t, e) {
        return new st(t, e);
      }, st;
    });
  })(sortableDnd_min);
  var Dnd = sortableDnd_min.exports;

  var VirtualProps = {
    dataSource: {},
    modelValue: {},
    dataKey: {
      type: String,
      "default": '',
      required: true
    },
    draggable: {
      type: [String]
    },
    handle: {
      type: [Function, String]
    },
    group: {
      type: [Object, String]
    },
    scroller: {
      type: [Document, HTMLElement]
    },
    lockAxis: {
      type: String,
      "default": ''
    },
    direction: {
      type: String,
      "default": 'vertical'
    },
    keeps: {
      type: Number,
      "default": 30
    },
    size: {
      type: Number
    },
    debounceTime: {
      type: Number,
      "default": 0
    },
    throttleTime: {
      type: Number,
      "default": 0
    },
    animation: {
      type: Number,
      "default": 150
    },
    autoScroll: {
      type: Boolean,
      "default": true
    },
    scrollThreshold: {
      type: Number,
      "default": 55
    },
    keepOffset: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    fallbackOnBody: {
      type: Boolean,
      "default": false
    },
    delay: {
      type: Number,
      "default": 0
    },
    delayOnTouchOnly: {
      type: Boolean,
      "default": false
    },
    rootTag: {
      type: String,
      "default": 'div'
    },
    wrapTag: {
      type: String,
      "default": 'div'
    },
    itemTag: {
      type: String,
      "default": 'div'
    },
    wrapClass: {
      type: String,
      "default": ''
    },
    wrapStyle: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    itemStyle: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    itemClass: {
      type: String,
      "default": ''
    },
    ghostClass: {
      type: String,
      "default": ''
    },
    ghostStyle: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    chosenClass: {
      type: String,
      "default": ''
    }
  };
  var SlotsProps = {
    tag: {
      type: String,
      "default": 'div'
    },
    dataKey: {
      type: [String, Number]
    },
    sizeKey: {
      type: String
    }
  };

  var useObserver = function useObserver(props, aRef, emit) {
    var observer = null;
    var getCurrentSize = function getCurrentSize() {
      return aRef.value ? aRef.value[props.sizeKey] : 0;
    };
    var onSizeChange = function onSizeChange() {
      emit('resize', getCurrentSize(), props.dataKey);
    };
    vue.onMounted(function () {
      if (typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(function () {
          onSizeChange();
        });
        aRef.value && observer.observe(aRef.value);
      }
    });
    vue.onUpdated(function () {
      onSizeChange();
    });
    vue.onUnmounted(function () {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    });
  };
  var Items = vue.defineComponent({
    name: 'VirtualDraglistItems',
    props: SlotsProps,
    emits: ['resize'],
    setup: function setup(props, _ref) {
      var emit = _ref.emit,
        slots = _ref.slots;
      var itemRef = vue.ref(null);
      useObserver(props, itemRef, emit);
      return function () {
        var Tag = props.tag,
          dataKey = props.dataKey;
        return vue.h(Tag, {
          ref: itemRef,
          key: dataKey,
          'data-key': dataKey
        }, {
          "default": function _default() {
            var _a;
            return (_a = slots["default"]) === null || _a === void 0 ? void 0 : _a.call(slots);
          }
        });
      };
    }
  });

  function throttle(fn, wait) {
    var timer = null;
    var result = function result() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (timer) return;
      if (wait <= 0) {
        fn.apply(this, args);
      } else {
        timer = setTimeout(function () {
          timer = undefined;
          fn.apply(_this, args);
        }, wait);
      }
    };
    result['cancel'] = function () {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    return result;
  }
  function debounce(fn, wait) {
    var throttled = throttle(fn, wait);
    var result = function result() {
      throttled['cancel']();
      throttled.apply(this, arguments);
    };
    result['cancel'] = function () {
      throttled['cancel']();
    };
    return result;
  }
  function getDataKey(item, dataKey) {
    return (!Array.isArray(dataKey) ? dataKey.replace(/\[/g, '.').replace(/\]/g, '.').split('.') : dataKey).reduce(function (o, k) {
      return (o || {})[k];
    }, item);
  }

  var SortableAttrs = ['delay', 'group', 'handle', 'lockAxis', 'disabled', 'draggable', 'animation', 'autoScroll', 'ghostClass', 'ghostStyle', 'chosenClass', 'fallbackOnBody', 'scrollThreshold', 'delayOnTouchOnly'];
  function Sortable(el, options) {
    this.el = el;
    this.options = options;
    this.list = [];
    this.store = {};
    this.reRendered = false;
    this.init();
  }
  Sortable.prototype = {
    constructor: Sortable,
    destroy: function destroy() {
      this.sortable && this.sortable.destroy();
      this.sortable = this.store = this.reRendered = null;
    },
    option: function option(key, value) {
      if (key === 'list') {
        this.list = _toConsumableArray(value);
      } else {
        this.sortable.option(key, value);
      }
    },
    init: function init() {
      var _this = this;
      var props = SortableAttrs.reduce(function (res, key) {
        res[key] = _this.options[key];
        return res;
      }, {});
      this.sortable = new Dnd(this.el, _objectSpread2(_objectSpread2({}, props), {}, {
        swapOnDrop: function swapOnDrop(params) {
          return params.from === params.to;
        },
        onDrag: function onDrag(params) {
          return _this.onDrag(params);
        },
        onAdd: function onAdd(params) {
          return _this.onAdd(params);
        },
        onRemove: function onRemove(params) {
          return _this.onRemove(params);
        },
        onChange: function onChange(params) {
          return _this.onChange(params);
        },
        onDrop: function onDrop(params) {
          return _this.onDrop(params);
        }
      }));
      this.list = _toConsumableArray(this.options.list);
    },
    onDrag: function onDrag(params) {
      var key = params.node.dataset.key;
      var index = this.getIndex(this.list, key);
      var item = this.list[index];

      // store the drag item
      this.store = {
        item: item,
        key: key,
        start: {
          index: index,
          list: this.list
        },
        from: {
          index: index,
          list: this.list
        },
        to: {
          index: index,
          list: this.list
        }
      };
      this.sortable.option('store', this.store);
      this.dispatchEvent('onDrag', {
        item: item,
        key: key,
        index: index
      });
    },
    onRemove: function onRemove(params) {
      var key = params.node.dataset.key;
      var index = this.getIndex(this.list, key);
      var item = this.list[index];
      this.list.splice(index, 1);
      Object.assign(this.store, {
        key: key,
        item: item
      });
      this.sortable.option('store', this.store);
      this.dispatchEvent('onRemove', {
        item: item,
        key: key,
        index: index
      });
    },
    onAdd: function onAdd(params) {
      var from = params.from,
        target = params.target,
        relative = params.relative;
      var _Dnd$get$option = Dnd.get(from).option('store'),
        key = _Dnd$get$option.key,
        item = _Dnd$get$option.item;
      var index = this.getIndex(this.list, target.dataset.key);
      if (relative === 0) {
        index = this.list.length;
      } else if (relative === -1) {
        index += 1;
      }
      this.list.splice(index, 0, item);
      Object.assign(this.store, {
        to: {
          index: index,
          list: this.list
        }
      });
      this.sortable.option('store', this.store);
      this.dispatchEvent('onAdd', {
        item: item,
        key: key,
        index: index
      });
    },
    onChange: function onChange(params) {
      var store = Dnd.get(params.from).option('store');
      if (params.revertDrag) {
        this.list = _toConsumableArray(this.options.list);
        Object.assign(this.store, {
          from: store.start
        });
        return;
      }
      var node = params.node,
        target = params.target,
        relative = params.relative,
        backToOrigin = params.backToOrigin;
      var fromIndex = this.getIndex(this.list, node.dataset.key);
      var fromItem = this.list[fromIndex];
      var toIndex = this.getIndex(this.list, target.dataset.key);
      if (backToOrigin) {
        if (relative === 1 && store.from.index < toIndex) {
          toIndex -= 1;
        }
        if (relative === -1 && store.from.index > toIndex) {
          toIndex += 1;
        }
      }
      this.list.splice(fromIndex, 1);
      this.list.splice(toIndex, 0, fromItem);
      Object.assign(this.store, {
        from: {
          index: toIndex,
          list: this.list
        },
        to: {
          index: toIndex,
          list: this.list
        }
      });
    },
    onDrop: function onDrop(params) {
      var _Dnd$get$option2 = Dnd.get(params.from).option('store'),
        start = _Dnd$get$option2.start,
        item = _Dnd$get$option2.item,
        key = _Dnd$get$option2.key;
      var _Dnd$get$option3 = Dnd.get(params.to).option('store'),
        to = _Dnd$get$option3.to;
      var changed = params.from !== params.to || start.index !== to.index;
      this.dispatchEvent('onDrop', {
        changed: changed,
        list: this.list,
        item: item,
        key: key,
        from: start,
        to: to
      });
      if (params.from === this.el && this.reRendered) {
        var _Dnd$dragged;
        (_Dnd$dragged = Dnd.dragged) === null || _Dnd$dragged === void 0 || _Dnd$dragged.remove();
      }
      if (params.from !== params.to && params.pullMode === 'clone') {
        var _Dnd$clone;
        (_Dnd$clone = Dnd.clone) === null || _Dnd$clone === void 0 || _Dnd$clone.remove();
      }
      this.reRendered = false;
    },
    getIndex: function getIndex(list, key) {
      for (var i = 0; i < list.length; i++) {
        if (getDataKey(list[i], this.options.dataKey) == key) {
          return i;
        }
      }
      return -1;
    },
    dispatchEvent: function dispatchEvent(name, params) {
      var cb = this.options[name];
      cb && cb(params);
    }
  };

  var VirtualAttrs = ['size', 'keeps', 'scroller', 'direction', 'debounceTime', 'throttleTime'];
  var CACLTYPE = {
    INIT: 'INIT',
    FIXED: 'FIXED',
    DYNAMIC: 'DYNAMIC'
  };
  var SCROLL_DIRECTION = {
    FRONT: 'FRONT',
    BEHIND: 'BEHIND',
    STATIONARY: 'STATIONARY'
  };
  var DIRECTION = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical'
  };
  var rectDir = _defineProperty(_defineProperty({}, DIRECTION.VERTICAL, 'top'), DIRECTION.HORIZONTAL, 'left');
  var scrollDir = _defineProperty(_defineProperty({}, DIRECTION.VERTICAL, 'scrollTop'), DIRECTION.HORIZONTAL, 'scrollLeft');
  var scrollSize = _defineProperty(_defineProperty({}, DIRECTION.VERTICAL, 'scrollHeight'), DIRECTION.HORIZONTAL, 'scrollWidth');
  var offsetSize = _defineProperty(_defineProperty({}, DIRECTION.VERTICAL, 'offsetHeight'), DIRECTION.HORIZONTAL, 'offsetWidth');
  function Virtual(options) {
    this.options = options;
    var defaults = {
      size: 0,
      keeps: 0,
      buffer: 0,
      wrapper: null,
      scroller: null,
      direction: 'vertical',
      uniqueKeys: [],
      debounceTime: null,
      throttleTime: null
    };
    for (var name in defaults) {
      !(name in this.options) && (this.options[name] = defaults[name]);
    }
    this.sizes = new Map(); // store item size
    this.range = {
      start: 0,
      end: 0,
      front: 0,
      behind: 0
    };
    this.offset = 0;
    this.calcType = CACLTYPE.INIT;
    this.calcSize = {
      average: 0,
      total: 0,
      fixed: 0
    };
    this.scrollEl = this.getScrollElement(options.scroller);
    this.scrollDir = '';
    this.updateOnScrollFunction();
    this.addScrollEventListener();
    this.checkIfUpdate(0, options.keeps - 1);
  }
  Virtual.prototype = {
    constructor: Virtual,
    isFront: function isFront() {
      return this.scrollDir === SCROLL_DIRECTION.FRONT;
    },
    isBehind: function isBehind() {
      return this.scrollDir === SCROLL_DIRECTION.BEHIND;
    },
    isFixed: function isFixed() {
      return this.calcType === CACLTYPE.FIXED;
    },
    getSize: function getSize(key) {
      return this.sizes.get(key) || this.getItemSize();
    },
    getOffset: function getOffset() {
      return this.scrollEl[scrollDir[this.options.direction]];
    },
    getScrollSize: function getScrollSize() {
      return this.scrollEl[scrollSize[this.options.direction]];
    },
    getClientSize: function getClientSize() {
      return this.scrollEl[offsetSize[this.options.direction]];
    },
    scrollToOffset: function scrollToOffset(offset) {
      this.scrollEl[scrollDir[this.options.direction]] = offset;
    },
    scrollToIndex: function scrollToIndex(index) {
      if (index >= this.options.uniqueKeys.length - 1) {
        this.scrollToBottom();
      } else {
        var indexOffset = this.getOffsetByIndex(index);
        var startOffset = this.getScrollStartOffset();
        this.scrollToOffset(indexOffset + startOffset);
      }
    },
    scrollToBottom: function scrollToBottom() {
      var _this = this;
      var offset = this.getScrollSize();
      this.scrollToOffset(offset);

      // if the bottom is not reached, execute the scroll method again
      setTimeout(function () {
        var clientSize = _this.getClientSize();
        var scrollSize = _this.getScrollSize();
        var scrollOffset = _this.getOffset();
        if (scrollOffset + clientSize + 1 < scrollSize) {
          _this.scrollToBottom();
        }
      }, 5);
    },
    option: function option(key, value) {
      var _this2 = this;
      var oldValue = this.options[key];
      this.options[key] = value;
      if (key === 'uniqueKeys') {
        this.sizes.forEach(function (v, k) {
          if (!value.includes(k)) {
            _this2.sizes["delete"](k);
          }
        });
      }
      if (key === 'scroller') {
        oldValue && Dnd.utils.off(oldValue, 'scroll', this.onScroll);
        this.scrollEl = this.getScrollElement(value);
        this.addScrollEventListener();
      }
    },
    updateRange: function updateRange(range) {
      if (range) {
        this.handleUpdate(range.start, range.end);
        return;
      }
      var start = this.range.start;
      start = Math.max(start, 0);
      this.handleUpdate(start, this.getEndByStart(start));
    },
    onItemResized: function onItemResized(key, size) {
      this.sizes.set(key, size);
      if (this.calcType === CACLTYPE.INIT) {
        this.calcType = CACLTYPE.FIXED;
        this.calcSize.fixed = size;
      } else if (this.isFixed() && this.calcSize.fixed !== size) {
        this.calcType = CACLTYPE.DYNAMIC;
        this.calcSize.fixed = undefined;
      }
      // In the case of non-fixed heights, the average height and the total height are calculated
      if (this.calcType !== CACLTYPE.FIXED) {
        this.calcSize.total = _toConsumableArray(this.sizes.values()).reduce(function (t, i) {
          return t + i;
        }, 0);
        this.calcSize.average = Math.round(this.calcSize.total / this.sizes.size);
      }
    },
    addScrollEventListener: function addScrollEventListener() {
      if (this.options.scroller) {
        Dnd.utils.on(this.options.scroller, 'scroll', this.onScroll);
      }
    },
    removeScrollEventListener: function removeScrollEventListener() {
      if (this.options.scroller) {
        Dnd.utils.off(this.options.scroller, 'scroll', this.onScroll);
      }
    },
    // ========================================= Properties =========================================
    updateOnScrollFunction: function updateOnScrollFunction() {
      var _this3 = this;
      var _this$options = this.options,
        debounceTime = _this$options.debounceTime,
        throttleTime = _this$options.throttleTime;
      if (debounceTime) {
        this.onScroll = debounce(function () {
          return _this3.handleScroll();
        }, debounceTime);
      } else if (throttleTime) {
        this.onScroll = throttle(function () {
          return _this3.handleScroll();
        }, throttleTime);
      } else {
        this.onScroll = function () {
          return _this3.handleScroll();
        };
      }
    },
    handleScroll: function handleScroll() {
      var offset = this.getOffset();
      var clientSize = this.getClientSize();
      var scrollSize = this.getScrollSize();
      if (offset === this.offset) {
        this.scrollDir = SCROLL_DIRECTION.STATIONARY;
      } else {
        this.scrollDir = offset < this.offset ? SCROLL_DIRECTION.FRONT : SCROLL_DIRECTION.BEHIND;
      }
      this.offset = offset;
      var top = this.isFront() && offset <= 0;
      var bottom = this.isBehind() && clientSize + offset >= scrollSize;
      this.options.onScroll({
        top: top,
        bottom: bottom,
        offset: offset,
        direction: this.scrollDir
      });
      if (this.isFront()) {
        this.handleScrollFront();
      } else if (this.isBehind()) {
        this.handleScrollBehind();
      }
    },
    handleScrollFront: function handleScrollFront() {
      var scrolls = this.getScrollItems();
      if (scrolls > this.range.start) {
        return;
      }
      var start = Math.max(scrolls - this.options.buffer, 0);
      this.checkIfUpdate(start, this.getEndByStart(start));
    },
    handleScrollBehind: function handleScrollBehind() {
      var scrolls = this.getScrollItems();
      if (scrolls < this.range.start + this.options.buffer) {
        return;
      }
      this.checkIfUpdate(scrolls, this.getEndByStart(scrolls));
    },
    getScrollItems: function getScrollItems() {
      var offset = this.offset - this.getScrollStartOffset();
      if (offset <= 0) {
        return 0;
      }
      if (this.isFixed()) {
        return Math.floor(offset / this.calcSize.fixed);
      }
      var low = 0;
      var high = this.options.uniqueKeys.length;
      var middle = 0;
      var middleOffset = 0;
      while (low <= high) {
        middle = low + Math.floor((high - low) / 2);
        middleOffset = this.getOffsetByIndex(middle);
        if (middleOffset === offset) {
          return middle;
        } else if (middleOffset < offset) {
          low = middle + 1;
        } else if (middleOffset > offset) {
          high = middle - 1;
        }
      }
      return low > 0 ? --low : 0;
    },
    checkIfUpdate: function checkIfUpdate(start, end) {
      var keeps = this.options.keeps;
      var total = this.options.uniqueKeys.length;
      if (total <= keeps) {
        start = 0;
        end = this.getLastIndex();
      } else if (end - start < keeps - 1) {
        start = end - keeps + 1;
      }
      if (this.range.start !== start) {
        this.handleUpdate(start, end);
      }
    },
    handleUpdate: function handleUpdate(start, end) {
      this.range.start = start;
      this.range.end = end;
      this.range.front = this.getFrontOffset();
      this.range.behind = this.getBehindOffset();
      this.options.onUpdate(_objectSpread2({}, this.range));
    },
    getFrontOffset: function getFrontOffset() {
      if (this.isFixed()) {
        return this.calcSize.fixed * this.range.start;
      } else {
        return this.getOffsetByIndex(this.range.start);
      }
    },
    getBehindOffset: function getBehindOffset() {
      var end = this.range.end;
      var last = this.getLastIndex();
      if (this.isFixed()) {
        return (last - end) * this.calcSize.fixed;
      }
      return (last - end) * this.getItemSize();
    },
    getOffsetByIndex: function getOffsetByIndex(index) {
      if (!index) return 0;
      var offset = 0;
      for (var i = 0; i < index; i++) {
        var size = this.sizes.get(this.options.uniqueKeys[i]);
        offset = offset + (typeof size === 'number' ? size : this.getItemSize());
      }
      return offset;
    },
    getEndByStart: function getEndByStart(start) {
      return Math.min(start + this.options.keeps - 1, this.getLastIndex());
    },
    getLastIndex: function getLastIndex() {
      var _this$options2 = this.options,
        uniqueKeys = _this$options2.uniqueKeys,
        keeps = _this$options2.keeps;
      return uniqueKeys.length > 0 ? uniqueKeys.length - 1 : keeps - 1;
    },
    getItemSize: function getItemSize() {
      return this.isFixed() ? this.calcSize.fixed : this.calcSize.average || this.options.size;
    },
    getScrollElement: function getScrollElement(scroller) {
      if (scroller instanceof Document && scroller.nodeType === 9 || scroller instanceof Window) {
        return document.scrollingElement || document.documentElement || document.body;
      }
      return scroller;
    },
    getScrollStartOffset: function getScrollStartOffset() {
      var offset = 0;
      var _this$options3 = this.options,
        wrapper = _this$options3.wrapper,
        scroller = _this$options3.scroller;
      if (wrapper && wrapper) {
        var rect = Dnd.utils.getRect(wrapper, true, scroller);
        offset = this.offset + rect[rectDir[this.options.direction]];
      }
      return offset;
    }
  };

  var getList = function getList(source) {
    return vue.isRef(source) ? source.value : source;
  };
  var VirtualDragList = vue.defineComponent({
    props: VirtualProps,
    emits: ['update:dataSource', 'update:modelValue', 'top', 'bottom', 'drag', 'drop', 'add', 'remove'],
    setup: function setup(props, _ref) {
      var emit = _ref.emit,
        slots = _ref.slots,
        expose = _ref.expose;
      var range = vue.ref({
        start: 0,
        end: props.keeps,
        front: 0,
        behind: 0
      });
      var rootRef = vue.ref(null);
      var groupRef = vue.ref(null);
      var viewlist = vue.ref([]);
      var uniqueKeys = vue.ref([]);
      var isHorizontal = vue.computed(function () {
        return props.direction !== 'vertical';
      });
      var itemSizeKey = vue.computed(function () {
        return props.direction !== 'vertical' ? 'offsetWidth' : 'offsetHeight';
      });
      var virtualAttributes = vue.computed(function () {
        return VirtualAttrs.reduce(function (res, key) {
          res[key] = props[key];
          return res;
        }, {});
      });
      var sortableAttributes = vue.computed(function () {
        return SortableAttrs.reduce(function (res, key) {
          res[key] = props[key];
          return res;
        }, {});
      });
      var lastLength = 0;
      var sortable;
      var virtual;
      // git item size by data-key
      function getSize(key) {
        return virtual.getSize(key);
      }
      // Get the current scroll height
      function getOffset() {
        return virtual.getOffset();
      }
      // Get client viewport size
      function getClientSize() {
        return virtual.getClientSize();
      }
      // Get all scroll size
      function getScrollSize() {
        return virtual.getScrollSize();
      }
      function scrollToKey(key) {
        var index = uniqueKeys.value.indexOf(key);
        if (index > -1) {
          virtual.scrollToIndex(index);
        }
      }
      // Scroll to the specified offset
      function scrollToOffset(offset) {
        virtual.scrollToOffset(offset);
      }
      // Scroll to the specified index position
      function scrollToIndex(index) {
        virtual.scrollToIndex(index);
      }
      // Scroll to top of list
      function scrollToTop() {
        scrollToOffset(0);
      }
      // Scroll to bottom of list
      function scrollToBottom() {
        virtual.scrollToBottom();
      }
      expose({
        getSize: getSize,
        getOffset: getOffset,
        getClientSize: getClientSize,
        getScrollSize: getScrollSize,
        scrollToTop: scrollToTop,
        scrollToBottom: scrollToBottom,
        scrollToKey: scrollToKey,
        scrollToIndex: scrollToIndex,
        scrollToOffset: scrollToOffset
      });
      vue.watch(function () {
        return [props.dataSource, props.modelValue];
      }, function () {
        onUpdate();
      }, {
        deep: true
      });
      vue.watch(virtualAttributes, function (newVal, oldVal) {
        if (!virtual) return;
        for (var key in newVal) {
          if (newVal[key] != oldVal[key]) {
            virtual.option(key, newVal[key]);
          }
        }
      });
      vue.watch(sortableAttributes, function (newVal, oldVal) {
        if (!virtual) return;
        for (var key in newVal) {
          if (newVal[key] != oldVal[key]) {
            sortable.option(key, newVal[key]);
          }
        }
      });
      // init range
      vue.onBeforeMount(function () {
        initVirtual();
        onUpdate();
      });
      // set back offset when awake from keep-alive
      vue.onActivated(function () {
        virtual && scrollToOffset(virtual.offset);
        virtual.addScrollEventListener();
      });
      vue.onDeactivated(function () {
        virtual.removeScrollEventListener();
      });
      vue.onMounted(function () {
        virtual.option('wrapper', groupRef.value);
        if (!props.scroller) {
          virtual.option('scroller', rootRef.value);
        }
      });
      vue.onUnmounted(function () {
        sortable && sortable.destroy();
        virtual.removeScrollEventListener();
      });
      var onUpdate = function onUpdate() {
        var list = getList(props.modelValue || props.dataSource);
        if (!list) return;
        var oldList = _toConsumableArray(viewlist.value);
        viewlist.value = list;
        updateUniqueKeys();
        updateRange(oldList, list);
        if (!sortable) {
          vue.nextTick(function () {
            return initSortable();
          });
        } else {
          sortable.option('list', list);
        }
        // if auto scroll to the last offset
        if (lastLength && props.keepOffset) {
          var index = list.length - lastLength;
          if (index > 0) {
            scrollToIndex(index);
          }
          lastLength = 0;
        }
      };
      var updateUniqueKeys = function updateUniqueKeys() {
        uniqueKeys.value = viewlist.value.map(function (item) {
          return getDataKey(item, props.dataKey);
        });
        virtual.option('uniqueKeys', uniqueKeys.value);
      };
      var initVirtual = function initVirtual() {
        virtual = new Virtual({
          size: props.size,
          keeps: props.keeps,
          buffer: Math.round(props.keeps / 3),
          scroller: props.scroller,
          direction: props.direction,
          uniqueKeys: uniqueKeys.value,
          debounceTime: props.debounceTime,
          throttleTime: props.throttleTime,
          onScroll: function onScroll(params) {
            lastLength = 0;
            if (!!viewlist.value.length && params.top) {
              handleToTop();
            } else if (params.bottom) {
              handleToBottom();
            }
          },
          onUpdate: function onUpdate(newRange) {
            if (Dnd.dragged && sortable && newRange.start !== range.value.start) {
              sortable.reRendered = true;
            }
            range.value = newRange;
          }
        });
      };
      var initSortable = function initSortable() {
        sortable = new Sortable(groupRef.value, Object.assign(Object.assign({
          list: viewlist.value
        }, props), {
          onDrag: function onDrag(params) {
            emit('drag', params);
          },
          onAdd: function onAdd(params) {
            emit('add', params);
          },
          onRemove: function onRemove(params) {
            emit('remove', params);
          },
          onDrop: function onDrop(params) {
            if (params.changed) {
              emit('update:dataSource', params.list);
              emit('update:modelValue', params.list);
            }
            emit('drop', params);
          }
        }));
      };
      var updateRange = function updateRange(oldList, newList) {
        var newRange = Object.assign({}, range.value);
        if (newList.length > oldList.length && newRange.end === oldList.length - 1 && scrolledToBottom()) {
          newRange.end++;
          newRange.start = Math.max(0, newRange.end - props.keeps);
        }
        virtual.updateRange(newRange);
      };
      var scrolledToBottom = function scrolledToBottom() {
        var offset = getOffset();
        var clientSize = getClientSize();
        var scrollSize = getScrollSize();
        return offset + clientSize + 1 >= scrollSize;
      };
      var handleToTop = throttle(function () {
        emit('top');
        lastLength = viewlist.value.length;
      }, 50);
      var handleToBottom = throttle(function () {
        emit('bottom');
      }, 50);
      var onItemResized = function onItemResized(size, key) {
        var renders = virtual.sizes.size;
        virtual.onItemResized(key, size);
        if (renders === 0) {
          updateRange(viewlist.value, viewlist.value);
        }
      };
      var getItemStyle = function getItemStyle(dataKey) {
        var _a;
        var fromKey = (_a = Dnd.dragged) === null || _a === void 0 ? void 0 : _a.dataset.key;
        if (dataKey == fromKey) {
          return {
            display: 'none'
          };
        }
        return {};
      };
      var renderItems = function renderItems() {
        var renders = [];
        var _range$value = range.value,
          start = _range$value.start,
          end = _range$value.end;
        var _loop = function _loop(index) {
          var record = viewlist.value[index];
          if (record) {
            var dataKey = getDataKey(record, props.dataKey);
            var itemStyle = Object.assign(Object.assign({}, props.itemStyle), getItemStyle(dataKey));
            renders.push(slots.item ? vue.h(Items, {
              key: dataKey,
              tag: props.itemTag,
              "class": props.itemClass,
              style: itemStyle,
              dataKey: dataKey,
              sizeKey: itemSizeKey.value,
              onResize: onItemResized
            }, {
              "default": function _default() {
                var _a;
                return (_a = slots.item) === null || _a === void 0 ? void 0 : _a.call(slots, {
                  record: record,
                  index: index,
                  dataKey: dataKey
                });
              }
            }) : null);
          }
        };
        for (var index = start; index <= end; index++) {
          _loop(index);
        }
        return renders;
      };
      return function () {
        var _range$value2 = range.value,
          front = _range$value2.front,
          behind = _range$value2.behind;
        var rootTag = props.rootTag,
          wrapTag = props.wrapTag,
          scroller = props.scroller,
          wrapClass = props.wrapClass,
          wrapStyle = props.wrapStyle;
        var padding = isHorizontal.value ? "0px ".concat(behind, "px 0px ").concat(front, "px") : "".concat(front, "px 0px ").concat(behind, "px");
        return vue.h(rootTag, {
          ref: rootRef,
          style: !scroller && {
            overflow: isHorizontal.value ? 'auto hidden' : 'hidden auto'
          }
        }, {
          "default": function _default() {
            var _a, _b;
            return [(_a = slots.header) === null || _a === void 0 ? void 0 : _a.call(slots), vue.h(wrapTag, {
              ref: groupRef,
              "class": wrapClass,
              style: Object.assign(Object.assign({}, wrapStyle), {
                padding: padding
              })
            }, {
              "default": function _default() {
                return renderItems();
              }
            }), (_b = slots.footer) === null || _b === void 0 ? void 0 : _b.call(slots)];
          }
        });
      };
    }
  });

  return VirtualDragList;

}));
