(self.webpackChunk = self.webpackChunk || []).push([
  ["850"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new w.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          Q.debug && window && window.console.warn(e);
        }
        var c,
          d,
          l,
          s = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(c, d) {
              function l() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              d === n && ((d = c), (c = Object)), (l.Bare = s);
              var u,
                f = (o[e] = c[e]),
                p = (s[e] = l[e] = new o());
              return (
                (p.constructor = l),
                (l.mixin = function (t) {
                  return (s[e] = l[e] = r(l, t)[e]), l;
                }),
                (l.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(l, p, f, l, c)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return i(p.init) || (p.init = c), l;
                }),
                l.open(d)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                  ? t + n
                  : (e /= a / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          g = /[\-\.0-9]/g,
          I = /[A-Z]/,
          T = "number",
          y = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          R = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          A = document.createElement("a"),
          L = ["Webkit", "Moz", "O", "ms"],
          N = ["-webkit-", "-moz-", "-o-", "-ms-"],
          S = function (e) {
            if (e in A.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < L.length; t++)
              if ((n = L[t] + a) in A.style) return { dom: n, css: N[t] + e };
          },
          h = (t.support = {
            bind: Function.prototype.bind,
            transform: S("transform"),
            transition: S("transition"),
            backface: S("backface-visibility"),
            timing: S("transition-timing-function"),
          });
        if (h.transition) {
          var C = h.timing.dom;
          if (((A.style[C] = u["ease-in-back"][0]), !A.style[C]))
            for (var M in f) u[M][0] = f[M];
        }
        var P = (t.frame =
            (c =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && h.bind
              ? c.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          U = (t.now =
            (l =
              (d = p.performance) &&
              (d.now || d.webkitNow || d.msNow || d.mozNow)) && h.bind
              ? l.bind(d)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          V = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = W[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  c = this.props[a];
                return (
                  c || (c = this.props[a] = new o.Bare()),
                  c.init(this.$el, n, i, t),
                  c
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      d.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      l.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    E = !1,
                    g = {};
                  P(function () {
                    u.call(p, e, function (e) {
                      e.active && ((E = !0), (g[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(g);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this);
            }
            function d() {
              c.call(this), (this.el.style.display = "none");
            }
            function l() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[h.transition.dom] = n));
            }
            function u(e, t, a) {
              var i,
                o,
                r,
                c,
                d = t !== f,
                l = {};
              for (i in e)
                (r = e[i]),
                  i in j
                    ? (l.transform || (l.transform = {}), (l.transform[i] = r))
                    : (I.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in W ? (l[i] = r) : (c || (c = {}), (c[i] = r)));
              for (i in l) {
                if (((r = l[i]), !(o = this.props[i]))) {
                  if (!d) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && c && a.call(this, c);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function T(e, n) {
              t[e] = function () {
                return this.children
                  ? y.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Q.keepInherited && !Q.fallback)
              ) {
                var n = z(this.el, "transition");
                n && !R.test(n) && (this.upstream = n);
              }
              h.backface &&
                Q.hideBackface &&
                H(this.el, h.backface.css, "hidden");
            }),
              T("add", n),
              T("start", a),
              T("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              T("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              T("next", i),
              T("stop", c),
              T("set", function (e) {
                c.call(this, e), u.call(this, e, p, g);
              }),
              T("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              T("hide", d),
              T("redraw", l),
              T("destroy", function () {
                c.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          w = s(V, function (t) {
            function n(t, n) {
              var a = e.data(t, E) || e.data(t, E, new V.Bare());
              return a.el || a.init(t), n ? a.start(n) : a;
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          F = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, a) {
              (this.$el = e), (this.el = e[0]);
              var i,
                r,
                c,
                d = t[0];
              n[2] && (d = n[2]),
                Y[d] && (d = Y[d]),
                (this.name = d),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (r = this.ease),
                  (c = "ease"),
                  void 0 !== r && (c = r),
                  i in u ? i : c)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = a.unit || this.unit || Q.defaultUnit),
                (this.angle = a.angle || this.angle || Q.defaultAngle),
                Q.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new D({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                H(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  H(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case T:
                    if (o) return e;
                    if (c && "" === e.replace(g, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case y:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case m:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (c && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (c && b.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          x = s(F, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          k = s(F, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          G = s(F, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                (i = (o = j[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  j.perspective &&
                    Q.perspective &&
                    ((this.current.perspective = Q.perspective),
                    H(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  H(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(a));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                H(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    (a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  a
                );
              });
          }),
          D = s(function (t) {
            function o() {
              var e,
                t,
                n,
                a = d.length;
              if (a)
                for (P(o), t = U(), e = a; e--; ) (n = d[e]) && n.render(t);
            }
            var c = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || c.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                a = e.to;
              void 0 === n && (n = c.from),
                void 0 === a && (a = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = U()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = U()),
                  (this.active = !0),
                  1 === d.push(this) && P(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, d)) >= 0 &&
                    ((t = d.slice(n + 1)),
                    (d.length = n),
                    t.length && (d = d.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + r * this.change) * l) / l),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(g, "");
                  a !== e.replace(g, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var d = [],
              l = 1e3;
          }),
          X = s(D, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          B = s(D, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new D({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          Q = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !h.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!h.transition) return (Q.fallback = !0);
          Q.agentTests.push("(" + e + ")");
          var t = RegExp(Q.agentTests.join("|"), "i");
          Q.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new D(e);
          }),
          (t.delay = function (e, t, n) {
            return new X({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var H = e.style,
          z = e.css,
          Y = { transform: h.transform && h.transform.css },
          W = {
            color: [x, y],
            background: [x, y, "background-color"],
            "outline-color": [x, y],
            "border-color": [x, y],
            "border-top-color": [x, y],
            "border-right-color": [x, y],
            "border-bottom-color": [x, y],
            "border-left-color": [x, y],
            "border-width": [F, m],
            "border-top-width": [F, m],
            "border-right-width": [F, m],
            "border-bottom-width": [F, m],
            "border-left-width": [F, m],
            "border-spacing": [F, m],
            "letter-spacing": [F, m],
            margin: [F, m],
            "margin-top": [F, m],
            "margin-right": [F, m],
            "margin-bottom": [F, m],
            "margin-left": [F, m],
            padding: [F, m],
            "padding-top": [F, m],
            "padding-right": [F, m],
            "padding-bottom": [F, m],
            "padding-left": [F, m],
            "outline-width": [F, m],
            opacity: [F, T],
            top: [F, b],
            right: [F, b],
            bottom: [F, b],
            left: [F, b],
            "font-size": [F, b],
            "text-indent": [F, b],
            "word-spacing": [F, b],
            width: [F, b],
            "min-width": [F, b],
            "max-width": [F, b],
            height: [F, b],
            "min-height": [F, b],
            "max-height": [F, b],
            "line-height": [F, v],
            "scroll-top": [k, T, "scrollTop"],
            "scroll-left": [k, T, "scrollLeft"],
          },
          j = {};
        h.transform &&
          ((W.transform = [G]),
          (j = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [T],
            scaleX: [T],
            scaleY: [T],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          h.transform &&
            h.backface &&
            ((j.z = [b, "translateZ"]),
            (j.rotateZ = [O]),
            (j.scaleZ = [T]),
            (j.perspective = [m]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        c,
        d,
        l,
        s,
        u,
        f,
        p,
        E,
        g,
        I,
        T,
        y,
        m,
        b,
        O,
        v,
        R = window.$,
        _ = n(5487) && R.tram;
      ((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (c = Function.prototype),
        o.push,
        (d = o.slice),
        o.concat,
        r.toString,
        (l = r.hasOwnProperty),
        (s = o.forEach),
        (u = o.map),
        o.reduce,
        o.reduceRight,
        (f = o.filter),
        o.every,
        (p = o.some),
        (E = o.indexOf),
        o.lastIndexOf,
        (g = Object.keys),
        c.bind,
        (I =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var c = a.keys(e), o = 0, r = c.length; o < r; o++)
                  if (t.call(n, e[c[o]], c[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
              ? e.map(t, n)
              : (I(e, function (e, i, o) {
                  a.push(t.call(n, e, i, o));
                }),
                a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              T(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (a = e), !0;
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
              ? e.filter(t, n)
              : (I(e, function (e, i, o) {
                  t.call(n, e, i, o) && a.push(e);
                }),
                a);
          }),
        (T =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, n)
                : (I(e, function (e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i;
                  }),
                  !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : T(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = d.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(d.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              _.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            c,
            d,
            l = function () {
              var s = a.now() - c;
              s < t
                ? (i = setTimeout(l, t - s))
                : ((i = null), n || ((d = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            (r = this), (o = arguments), (c = a.now());
            var s = n && !i;
            return (
              i || (i = setTimeout(l, t)),
              s && ((d = e.apply(r, o)), (r = o = null)),
              d
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return l.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (m = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + m[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            c = "__p+='";
          e.replace(o, function (t, n, a, i, o) {
            return (
              (c += e.slice(r, o).replace(b, O)),
              (r = o + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (c += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (c += "';\n");
          var d = t.variable;
          if (d) {
            if (!v.test(d))
              throw Error("variable is not a bare identifier: " + d);
          } else (c = "with(obj||{}){\n" + c + "}\n"), (d = "obj");
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var l = function (e) {
            return i.call(this, e, a);
          };
          return (l.source = "function(" + d + "){\n" + c + "}"), l;
        }),
        (e.exports = a);
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            o = e("html"),
            r = e("body"),
            c = window.location,
            d = /PhantomJS/i.test(navigator.userAgent),
            l =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          
         
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            c = document.location,
            d = "hashchange",
            l =
              n.load ||
              function () {
                var t, n, a;
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(d, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("jg-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    E(n, a), t(!1);
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !i && /\?edit/.test(c.hash) && l();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            s
              ? l()
              : c.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                  /\?edit$/.test(c.href)) &&
                l()
              : o.on(d, u).triggerHandler(d),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function r(e) {
                      e.getAttribute("jg-focus-visible") ||
                        e.setAttribute("jg-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function d() {
                      document.addEventListener("mousemove", l),
                        document.addEventListener("mousedown", l),
                        document.addEventListener("mouseup", l),
                        document.addEventListener("pointermove", l),
                        document.addEventListener("pointerdown", l),
                        document.addEventListener("pointerup", l),
                        document.addEventListener("touchmove", l),
                        document.addEventListener("touchstart", l),
                        document.addEventListener("touchend", l);
                    }
                    function l(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", l),
                        document.removeEventListener("mousedown", l),
                        document.removeEventListener("mouseup", l),
                        document.removeEventListener("pointermove", l),
                        document.removeEventListener("pointerdown", l),
                        document.removeEventListener("pointerup", l),
                        document.removeEventListener("touchmove", l),
                        document.removeEventListener("touchstart", l),
                        document.removeEventListener("touchend", l));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && r(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), d());
                        },
                        !0
                      ),
                      d(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, c;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              r(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("jg-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "jg-focus-visible"
                              ) && t.removeAttribute("jg-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            (i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("jg-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          (a = []), t.extend(n.triggers, o);
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var o = window.jQuery,
        r = {},
        c = ".w-ix";
      (r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = r);
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        c = [],
        d = window.Webflow || [],
        l = window.jQuery,
        s = l(window),
        u = l(document),
        f = l.isFunction,
        p = (o._ = n(5756)),
        E = (o.tram = n(5487) && l.tram),
        g = !1,
        I = !1;
      function T(e) {
        o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) return e.ready();
              p.contains(c, e.ready) || c.push(e.ready);
            })(e);
      }
      function y(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (c = p.filter(c, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && y(r[e]);
          var a = (r[e] = t(l, p, n) || {});
          return T(a), a;
        }),
        (o.require = function (e) {
          return r[e];
        }),
        (o.push = function (e) {
          if (g) {
            f(e) && e();
            return;
          }
          d.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var m = navigator.userAgent.toLowerCase(),
        b = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(m));
      (o.env.safari = /safari/.test(m) && !O && !v),
        b &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = b
          ? function (e) {
              return e === a || l.contains(e, a);
            }
          : function () {
              return !0;
            });
      var R = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + R;
      function A(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function L(e) {
        f(e) && e();
      }
      function N() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new l.Deferred()),
          s.on("load", i.resolve);
      }
      (o.resize = A(s, R)),
        (o.scroll = A(s, _)),
        (o.redraw = A()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (g = !0),
            I ? ((I = !1), p.each(r, T)) : p.each(c, L),
            p.each(d, L),
            o.resize.up();
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          (e = e || {}),
            (I = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(r, y),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (c = []),
            (d = []),
            "pending" === i.state() && N();
        }),
        l(o.ready),
        N(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            c = e(window),
            d = a.env(),
            l = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  r = i.outerHeight(),
                  c = 0.5 * n,
                  d = i.is(":visible") && o + r - c >= e && o + c <= e + n;
                t.active !== d && ((t.active = d), g(a, u, d));
              }
            });
          }
          function g(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (r.ready =
              r.design =
              r.preview =
                function () {
                  (n = d && a.env("design")),
                    (o = a.env("slug") || l.pathname || ""),
                    a.scroll.off(E),
                    (i = []);
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = a), !(a.indexOf(":") >= 0))) {
                          var r = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === l.host + l.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var c = e(s.hash);
                            c.length && i.push({ link: r, sec: c, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            g(
                              r,
                              u,
                              s.href === l.href ||
                                a === o ||
                                (f.test(a) && p.test(o))
                            );
                        }
                      }
                    })(t[r]);
                  i.length && (a.scroll.on(E), E());
                }),
            r
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            r = e(document),
            c = e(document.body),
            d =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            l = a.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              l +
              " > .header, " +
              l +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function I(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("jg-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("jg-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("jg-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function T(t) {
            var r = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
              )
            ) {
              var l =
                E.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                  ? r.hash
                  : "";
              if ("" !== l) {
                var u,
                  f = e(l);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = l),
                  n.hash !== u &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(s),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              c = t.outerHeight();
                            c < r && (i -= Math.round((r - c) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "jg-scroll-motion"
                                ) ||
                              g.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              c.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          l = Date.now(),
                          u = function () {
                            var e,
                              t,
                              o,
                              c,
                              s,
                              f = Date.now() - l;
                            window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = f) > (c = r)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = o / c) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= r ? d(u) : "function" == typeof n && n();
                          };
                        d(u);
                      }
                    })(f, function () {
                      I(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        I(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              r.on(n, f, T),
                r.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function d(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function l(t) {
              if (o) {
                if (r && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var a,
                  d,
                  l,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - i;
                (i = p),
                  Math.abs(E) > c &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (d = t),
                    (l = { direction: E > 0 ? "right" : "left" }),
                    (s = e.Event(a, { originalEvent: d })),
                    e(d.target).trigger(s, l),
                    u());
              }
            }
            function s(e) {
              if (o && ((o = !1), r && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (r = !1);
                return;
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", d, !1),
              t.addEventListener("touchmove", l, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", d, !1),
              t.addEventListener("mousemove", l, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", d, !1),
                  t.removeEventListener("touchmove", l, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", d, !1),
                  t.removeEventListener("mousemove", l, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            r,
            c,
            d,
            l = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            E = a.env(),
            g = ".w-nav",
            I = "w--open",
            T = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            m = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            O = i.triggers,
            v = e();
          function R() {
            a.resize.off(_);
          }
          function _() {
            r.each(V);
          }
          function A(n, a) {
            var i,
              r,
              l,
              s,
              p,
              E = e(a),
              I = e.data(a, g);
            I ||
              (I = e.data(a, g, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (I.menu = E.find(".w-nav-menu")),
              (I.links = I.menu.find(".w-nav-link")),
              (I.dropdowns = I.menu.find(".w-dropdown")),
              (I.dropdownToggle = I.menu.find(".w-dropdown-toggle")),
              (I.dropdownList = I.menu.find(".w-dropdown-list")),
              (I.button = E.find(".w-nav-button")),
              (I.container = E.find(".w-container")),
              (I.overlayContainerId = "w-nav-overlay-" + n),
              (I.outside =
                ((i = I).outside && f.off("click" + g, i.outside),
                function (t) {
                  var n = e(t.target);
                  (d && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    U(i, n);
                }));
            var T = E.find(".w-nav-brand");
            T &&
              "/" === T.attr("href") &&
              null == T.attr("aria-label") &&
              T.attr("aria-label", "home"),
              I.button.attr("style", "-webkit-user-select: text;"),
              null == I.button.attr("aria-label") &&
                I.button.attr("aria-label", "menu"),
              I.button.attr("role", "button"),
              I.button.attr("tabindex", "0"),
              I.button.attr("aria-controls", I.overlayContainerId),
              I.button.attr("aria-haspopup", "menu"),
              I.button.attr("aria-expanded", "false"),
              I.el.off(g),
              I.button.off(g),
              I.menu.off(g),
              S(I),
              c
                ? (N(I),
                  I.el.on(
                    "setting" + g,
                    ((r = I),
                    function (e, n) {
                      n = n || {};
                      var a = u.width();
                      S(r),
                        !0 === n.open && k(r, !0),
                        !1 === n.open && D(r, !0),
                        r.open &&
                          t.defer(function () {
                            a !== u.width() && C(r);
                          });
                    })
                  ))
                : ((l = I).overlay ||
                    ((l.overlay = e(
                      '<div class="w-nav-overlay" jg-ignore />'
                    ).appendTo(l.el)),
                    l.overlay.attr("id", l.overlayContainerId),
                    (l.parent = l.menu.parent()),
                    D(l, !0)),
                  I.button.on("click" + g, M(I)),
                  I.menu.on("click" + g, "a", P(I)),
                  I.button.on(
                    "keydown" + g,
                    ((s = I),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            M(s)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return D(s), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!s.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === o.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            h(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  I.el.on(
                    "keydown" + g,
                    ((p = I),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              h(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              D(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              h(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              h(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              V(n, a);
          }
          function L(t, n) {
            var a = e.data(n, g);
            a && (N(a), e.removeData(n, g));
          }
          function N(e) {
            e.overlay && (D(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function S(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(C, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function h(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), P(t);
            }
          }
          function C(e) {
            e.open && (D(e, !0), k(e, !0));
          }
          function M(e) {
            return p(function () {
              e.open ? D(e) : k(e);
            });
          }
          function P(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && D(t);
            };
          }
          (l.ready =
            l.design =
            l.preview =
              function () {
                (c = E && a.env("design")),
                  (d = a.env("editor")),
                  (n = e(document.body)),
                  (r = f.find(g)).length && (r.each(A), R(), a.resize.on(_));
              }),
            (l.destroy = function () {
              (v = e()), R(), r && r.length && r.each(L);
            });
          var U = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || D(e);
            }
          });
          function V(t, n) {
            var a = e.data(n, g),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || c || D(a, !0), a.container.length)) {
              var o,
                r =
                  ("none" === (o = a.container.css(w)) && (o = ""),
                  function (t, n) {
                    (n = e(n)).css(w, ""), "none" === n.css(w) && n.css(w, o);
                  });
              a.links.each(r), a.dropdowns.each(r);
            }
            a.open && G(a);
          }
          var w = "max-width";
          function F(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function x(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function k(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(F),
                e.links.addClass(b),
                e.dropdowns.addClass(T),
                e.dropdownToggle.addClass(y),
                e.dropdownList.addClass(m),
                e.button.addClass(I);
              var n = e.config;
              ("none" === n.animation ||
                !s.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = G(e),
                o = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                d = e.el.height(),
                l = e.el[0];
              if (
                (V(0, l),
                O.intro(0, l),
                a.redraw.up(),
                c || f.on("click" + g, e.outside),
                t)
              )
                return void p();
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                s(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * r, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(r);
                return;
              }
              s(e.menu)
                .add(u)
                .set({ y: -(d + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function G(e) {
            var t = e.config,
              a = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function D(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(I);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + g, e.outside),
                t)
              ) {
                s(e.menu).stop(), c();
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                r = e.el.height();
              if (n.animOver)
                return void s(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(c);
              s(e.menu)
                .add(a)
                .start({ y: -(r + i) })
                .then(c);
            }
            function c() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(x),
                e.links.removeClass(b),
                e.dropdowns.removeClass(T),
                e.dropdownToggle.removeClass(y),
                e.dropdownList.removeClass(m),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return l;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return z;
        },
        animationFrameChanged: function () {
          return G;
        },
        clearRequested: function () {
          return w;
        },
        elementStateChanged: function () {
          return H;
        },
        eventListenerAdded: function () {
          return F;
        },
        eventStateChanged: function () {
          return k;
        },
        instanceAdded: function () {
          return X;
        },
        instanceRemoved: function () {
          return Q;
        },
        instanceStarted: function () {
          return B;
        },
        mediaQueriesDefined: function () {
          return W;
        },
        parameterChanged: function () {
          return D;
        },
        playbackRequested: function () {
          return U;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return S;
        },
        sessionInitialized: function () {
          return h;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return M;
        },
        stopRequested: function () {
          return V;
        },
        testFrameRendered: function () {
          return x;
        },
        viewportWidthChanged: function () {
          return Y;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        r = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: c,
          IX2_SESSION_INITIALIZED: d,
          IX2_SESSION_STARTED: l,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: g,
          IX2_TEST_FRAME_RENDERED: I,
          IX2_EVENT_STATE_CHANGED: T,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: m,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: R,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: A,
          IX2_MEDIA_QUERIES_DEFINED: L,
        } = o.IX2EngineActionTypes,
        { reifyState: N } = r.IX2VanillaUtils,
        S = (e) => ({ type: c, payload: { ...N(e) } }),
        h = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: d,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: l }),
        M = () => ({ type: s }),
        P = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        U = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: r,
          testManual: c,
          verbose: d,
          rawData: l,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: a,
            allowEvents: i,
            immediate: r,
            verbose: d,
            rawData: l,
          },
        }),
        V = (e) => ({ type: p, payload: { actionListId: e } }),
        w = () => ({ type: E }),
        F = (e, t) => ({ type: g, payload: { target: e, listenerParams: t } }),
        x = (e = 1) => ({ type: I, payload: { step: e } }),
        k = (e, t) => ({ type: T, payload: { stateKey: e, newState: t } }),
        G = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        D = (e, t) => ({ type: m, payload: { key: e, value: t } }),
        X = (e) => ({ type: b, payload: { ...e } }),
        B = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        Q = (e) => ({ type: v, payload: { instanceId: e } }),
        H = (e, t, n, a) => ({
          type: R,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        z = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        Y = ({ width: e, mediaQueries: t }) => ({
          type: A,
          payload: { width: e, mediaQueries: t },
        }),
        W = () => ({ type: L });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return l;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = n(9516),
        c = (a = n(7243)) && a.__esModule ? a : { default: a },
        d = n(1970),
        l = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, r.createStore)(c.default);
      function f(e) {
        e() && (0, d.observeRequests)(u);
      }
      function p(e) {
        E(), (0, d.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, d.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return m;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return R;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return I;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return T;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return g;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        r = n(7087),
        { ELEMENT_MATCHES: c } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: d,
          HTML_ELEMENT: l,
          PLAIN_OBJECT: s,
          WF_PAGE: u,
        } = r.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function g(e) {
        return (t) => t[c](e);
      }
      function I({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(d)) {
            let n = e.split(d),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function T(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function m(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let R = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[c] && n[c](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? l
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = y(n(9777)),
        r = y(n(4738)),
        c = y(n(4659)),
        d = y(n(3452)),
        l = y(n(6633)),
        s = y(n(3729)),
        u = y(n(2397)),
        f = y(n(5082)),
        p = n(7087),
        E = n(9468),
        g = n(3946),
        I = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = m(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(5012)),
        T = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function m(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (m = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: R,
          HTML_ELEMENT: _,
          RENDER_GENERAL: A,
          W_MOD_IX: L,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: N,
          getElementId: S,
          getDestinationValues: h,
          observeStore: C,
          getInstanceId: M,
          renderHTMLElement: P,
          clearAllStyles: U,
          getMaxDurationItemIndex: V,
          getComputedStyle: w,
          getInstanceOrigin: F,
          reduceListToGroup: x,
          shouldNamespaceEventParameter: k,
          getNamespacedParameterId: G,
          shouldAllowMediaQuery: D,
          cleanupHTMLElement: X,
          clearObjectCache: B,
          stringifyTarget: Q,
          mediaQueriesEqual: H,
          shallowEqual: z,
        } = E.IX2VanillaUtils,
        {
          isPluginType: Y,
          createPluginInstance: W,
          getPluginDuration: j,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          ea({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: c,
            testManual: d,
            verbose: l = !0,
          } = e,
          { rawData: s } = e;
        if (a && i && s && c) {
          let e = s.actionLists[a];
          e && (s = x({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (ea({ store: t, rawData: s, allowEvents: r, testManual: d }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          ep({ store: t, actionListId: a }),
            eu({ store: t, actionListId: a, eventId: o });
          let e = eE({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: c,
            verbose: l,
          });
          l &&
            e &&
            t.dispatch(
              (0, g.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !c,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
      }
      function en(e, t) {
        ei(t), U({ store: t, elementApi: I });
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, g.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, g.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(R),
              reducedMotion:
                document.body.hasAttribute("jg-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              ec(e),
                (0, u.default)(n, (t, n) => {
                  let a = T.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          r = I.getQuerySelector(o);
                        t[r] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[r] = !0),
                            (n +=
                              r +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: d } = t.getState(),
                      { actionLists: l } = d,
                      s = ed(n, es);
                    if (!(0, c.default)(s)) return;
                    (0, u.default)(s, (e, a) => {
                      let i = n[a],
                        {
                          action: c,
                          id: s,
                          mediaQueries: u = d.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = c.config;
                      H(u, d.mediaQueryKeys) ||
                        t.dispatch((0, g.mediaQueriesDefined)()),
                        c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, r.default)(
                                l,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              c = (0, o.default)(i, ({ id: e }) => e === a),
                              d = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            c &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: c,
                                  smoothing: d,
                                  restingValue: l,
                                }) {
                                  let { ixData: s, ixSession: u } =
                                      e.getState(),
                                    { events: f } = s,
                                    E = f[a],
                                    { eventTypeId: g } = E,
                                    T = {},
                                    y = {},
                                    m = [],
                                    { continuousActionGroups: b } = c,
                                    { id: O } = c;
                                  k(g, i) && (O = G(t, O));
                                  let _ =
                                    u.hasBoundaryNodes && n
                                      ? I.getClosestElement(n, R)
                                      : null;
                                  b.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? _ : null,
                                        r = Q(i) + v + a;
                                      if (
                                        ((y[r] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0)
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(y[r], t, e)),
                                        !T[r])
                                      ) {
                                        T[r] = !0;
                                        let { config: t } = e;
                                        N({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: I,
                                        }).forEach((e) => {
                                          m.push({ element: e, key: r });
                                        });
                                      }
                                    });
                                  }),
                                    m.forEach(({ element: t, key: n }) => {
                                      let i = y[n],
                                        c = (0, r.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = c,
                                        u = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                c.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Y(s)
                                        )
                                          ? W(s)?.(t, c)
                                          : null,
                                        f = h(
                                          {
                                            element: t,
                                            actionItem: c,
                                            elementApi: I,
                                          },
                                          u
                                        );
                                      eg({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: c,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: d,
                                        restingValue: l,
                                        pluginInstance: u,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + v + a,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: c,
                                  smoothing: d,
                                  restingValue: u,
                                });
                              });
                          }),
                        (c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(c.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: s });
                    });
                    let E = (e) => {
                        let { ixSession: a } = t.getState();
                        el(s, (o, r, c) => {
                          let l = n[r],
                            s = a.eventState[c],
                            { action: u, mediaQueries: f = d.mediaQueryKeys } =
                              l;
                          if (!D(f, a.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: l,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: c,
                              },
                              s
                            );
                            z(a, s) ||
                              t.dispatch((0, g.eventStateChanged)(c, a));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(l.config)
                                ? l.config
                                : [l.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      T = (0, f.default)(E, 12),
                      y = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? T : E;
                            e.addEventListener(n, i),
                              t.dispatch((0, g.eventListenerAdded)(e, [n, i]));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(y)
                      : "string" == typeof a && y(e);
                  })({ logic: a, store: e, events: t });
                });
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  er.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, g.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(L) && (e.className += ` ${L}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    U({ store: e, elementApi: I }),
                    ea({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, g.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, g.animationFrameChanged)(a, o)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(eo), B(), e.dispatch((0, g.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let er = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, g.viewportWidthChanged)({ width: a, mediaQueries: t })
          );
        }
      }
      let ed = (e, t) => (0, d.default)((0, s.default)(e, t), l.default),
        el = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a);
            });
          });
        },
        es = (e) =>
          N({
            config: { target: e.target, targets: e.targets },
            elementApi: I,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: c } = a,
          d = c[n],
          l = o[t];
        if (l && l.useFirstGroupAsInitialState) {
          let o = (0, r.default)(l, "actionItemGroups[0].actionItems", []);
          if (
            !D(
              (0, r.default)(d, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = N({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: d.target, targets: d.targets }
                    : i,
                event: d,
                elementApi: I,
              }),
              c = Y(o);
            r.forEach((i) => {
              let r = c ? W(o)?.(i, a) : null;
              eg({
                destination: h({ element: i, actionItem: a, elementApi: I }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            eI(t, e),
              a &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: c } = e.getState(),
          d = c.hasBoundaryNodes && n ? I.getClosestElement(n, R) : null;
        (0, u.default)(o, (n) => {
          let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
            c = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && c) {
            if (d && o && !I.elementContains(d, n.element)) return;
            eI(n, e),
              n.verbose &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: c,
        verbose: d,
      }) {
        let { ixData: l, ixSession: s } = e.getState(),
          { events: u } = l,
          f = u[t] || {},
          { mediaQueries: p = l.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: g } = (0,
          r.default)(l, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        o >= E.length && (0, r.default)(f, "config.loop") && (o = 0),
          0 === o && g && o++;
        let T =
            (0 === o || (1 === o && g)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, r.default)(E, [o, "actionItems"], []);
        if (!y.length || !D(p, s.mediaQueryKey)) return !1;
        let m = s.hasBoundaryNodes && n ? I.getClosestElement(n, R) : null,
          b = V(y),
          v = !1;
        return (
          y.forEach((r, l) => {
            let { config: s, actionTypeId: u } = r,
              p = Y(u),
              { target: E } = s;
            E &&
              N({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? m : null,
                elementApi: I,
              }).forEach((s, f) => {
                let E = p ? W(u)?.(s, r) : null,
                  g = p ? j(u)(s, r) : null;
                v = !0;
                let y = w({ element: s, actionItem: r }),
                  m = h({ element: s, actionItem: r, elementApi: I }, E);
                eg({
                  store: e,
                  element: s,
                  actionItem: r,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: b === l && 0 === f,
                  computedStyle: y,
                  destination: m,
                  immediate: c,
                  verbose: d,
                  pluginInstance: E,
                  pluginDuration: g,
                  instanceDelay: T,
                });
              });
          }),
          v
        );
      }
      function eg(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: c,
            pluginInstance: d,
            continuous: l,
            restingValue: s,
            eventId: u,
          } = i,
          f = M(),
          { ixElements: E, ixSession: T, ixData: y } = n.getState(),
          m = S(E, o),
          { refState: b } = E[m] || {},
          O = I.getRefType(o),
          v = T.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
        if (v && l)
          switch (y.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let R = F(o, b, a, r, I, d);
        if (
          (n.dispatch(
            (0, g.instanceAdded)({
              instanceId: f,
              elementId: m,
              origin: R,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          eT(document.body, "ix2-animation-started", f),
          c)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, g.instanceStarted)(t, 0)),
              e.dispatch((0, g.animationFrameChanged)(performance.now(), n));
            let { ixInstances: a } = e.getState();
            ey(a[t], e);
          })(n, f);
        C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: ey }),
          l || n.dispatch((0, g.instanceStarted)(f, T.tick));
      }
      function eI(e, t) {
        eT(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        r === _ && X(o, a, I), t.dispatch((0, g.instanceRemoved)(e.id));
      }
      function eT(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
      }
      function ey(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: c,
            renderType: d,
            current: l,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: T,
            styleProp: y,
            verbose: m,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: R } = O,
          { mediaQueries: L = O.mediaQueryKeys } = R && R[u] ? R[u] : {};
        if (D(L, v.mediaQueryKey) && (a || n || i)) {
          if (l || (d === A && i)) {
            t.dispatch((0, g.elementStateChanged)(o, c, l, r));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              s = i && i[c];
            (a === _ || Y(c)) && P(n, i, s, u, r, y, I, d, b);
          }
          if (i) {
            if (T) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: s + 1,
                verbose: m,
              });
              m &&
                !e &&
                t.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            eI(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = u(n(5801)),
        o = u(n(4738)),
        r = u(n(3789)),
        c = n(7087),
        d = n(1970),
        l = n(3946),
        s = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: g,
          MOUSE_OVER: I,
          MOUSE_OUT: T,
          DROPDOWN_CLOSE: y,
          DROPDOWN_OPEN: m,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: R,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: L,
          PAGE_SCROLL_DOWN: N,
          SCROLL_INTO_VIEW: S,
          SCROLL_OUT_OF_VIEW: h,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: M,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: U,
          ECOMMERCE_CART_OPEN: V,
          PAGE_START: w,
          PAGE_SCROLL: F,
        } = c.EventTypeConsts,
        x = "COMPONENT_ACTIVE",
        k = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: G } = c.IX2EngineConstants,
        { getNamespacedParameterId: D } = s.IX2VanillaUtils,
        X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        B = X(({ element: e, nativeEvent: t }) => e === t.target),
        Q = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        H = (0, i.default)([B, Q]),
        z = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        Y = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!z(e, a);
        },
        W = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: r, id: c } = t,
            { actionListId: l, autoStopEventId: s } = r.config,
            u = z(e, s);
          return (
            u &&
              (0, d.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + G + a.split(G)[1],
                actionListId: (0, o.default)(u, "action.config.actionListId"),
              }),
            (0, d.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: l,
            }),
            (0, d.startActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: l,
            }),
            i
          );
        },
        j = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
        $ = { handler: j(H, W) },
        q = { ...$, types: [x, k].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: w, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return "mouseout" === n && !!o && !!r;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: a,
            bottom: i - r,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [x, k].indexOf(a) ? a === x : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        er = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: r, innerHeight: c } = et(),
              {
                event: { config: d, eventTypeId: l },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = d,
              f = r - c,
              p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === u ? s : (c * (s || 0)) / 100) / f,
              g = 0;
            n &&
              ((a = p > n.percentTop),
              (g = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let I = l === N ? p >= g + E : p <= g - E,
              T = {
                ...n,
                percentTop: p,
                inBounds: I,
                anchorTop: g,
                scrollingDown: a,
              };
            return (n && I && (i || T.inBounds !== n.inBounds) && e(t, T)) || T;
          },
        ed = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        el =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        es = (e = !0) => ({
          ...q,
          handler: j(
            e ? H : B,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        eu = (e = !0) => ({
          ...q,
          handler: j(
            e ? H : B,
            eo((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: r } = o;
              return !r[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === S) === n
                ? (W(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: es(),
          [O]: eu(),
          [m]: es(),
          [y]: eu(),
          [A]: es(!1),
          [_]: eu(!1),
          [v]: es(),
          [R]: eu(),
          [V]: { types: "ecommerce-cart-open", handler: j(H, W) },
          [U]: { types: "ecommerce-cart-close", handler: j(H, W) },
          [f]: {
            types: "click",
            handler: j(
              H,
              el((e, { clickCount: t }) => {
                Y(e) ? 1 === t && W(e) : W(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: j(
              H,
              el((e, { clickCount: t }) => {
                2 === t && W(e);
              })
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [g]: { ...$, types: "mouseup" },
          [I]: {
            types: Z,
            handler: j(
              H,
              er((e, t) => {
                t.elementHovered && W(e);
              })
            ),
          },
          [T]: {
            types: Z,
            handler: j(
              H,
              er((e, t) => {
                t.elementHovered || W(e);
              })
            ),
          },
          [L]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: d,
                  continuousParameterGroupId: s,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: E = o.clientY,
                  pageX: g = o.pageX,
                  pageY: I = o.pageY,
                } = a,
                T = "X_AXIS" === d,
                y = "mouseout" === a.type,
                m = f / 100,
                b = s,
                O = !1;
              switch (r) {
                case c.EventBasedOn.VIEWPORT:
                  m = T
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  m = T ? Math.min(e + g, n) / n : Math.min(t + I, a) / a;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  b = D(i, s);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== H({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: c, height: d } = n;
                  if (!e && !ed({ left: p, top: E }, n)) break;
                  (O = !0), (m = T ? (p - o) / c : (E - r) / d);
                }
              }
              return (
                y && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (r !== c.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((m = u ? 1 - m : m),
                  e.dispatch((0, l.parameterChanged)(b, m))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: g,
                  pageY: I,
                }
              );
            },
          },
          [F]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                c = i / (o - r);
              (c = a ? 1 - c : c), e.dispatch((0, l.parameterChanged)(n, c));
            },
          },
          [M]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: d,
                  scrollHeight: s,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: g,
                  startsExiting: I,
                  addEndOffset: T,
                  addStartOffset: y,
                  addOffsetValue: m = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (f === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / d : r / s;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, l.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = D(a, E),
                  o = e.getBoundingClientRect(),
                  r = (y ? m : 0) / 100,
                  c = (T ? b : 0) / 100;
                (r = g ? r : 1 - r), (c = I ? c : 1 - c);
                let d = o.top + Math.min(o.height * r, u),
                  f = Math.min(u + (o.top + o.height * c - d), s),
                  p = Math.min(Math.max(0, u - d), f) / f;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, l.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [S]: ef,
          [h]: ef,
          [N]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown && W(e);
            }),
          },
          [C]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown || W(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: j(B, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && W(e), n;
            }),
          },
          [w]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: j(B, (e, t) => (t || W(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: d,
          IX2_INSTANCE_STARTED: l,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: g } = a.IX2EngineConstants,
        {
          getItemConfigByKey: I,
          getRenderType: T,
          getStyleProp: y,
        } = i.IX2VanillaUtils,
        m = (e, t) => {
          let n,
            a,
            i,
            r,
            {
              position: c,
              parameterId: d,
              actionGroups: l,
              destinationKeys: s,
              smoothing: u,
              restingValue: E,
              actionTypeId: g,
              customEasingFn: T,
              skipMotion: y,
              skipToValue: m,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = b[d];
          null == v && ((O = 1), (v = E));
          let R = f((Math.max(v, 0) || 0) - c),
            _ = y ? m : f(c + R * O),
            A = 100 * _;
          if (_ === c && e.current) return e;
          for (let e = 0, { length: t } = l; e < t; e++) {
            let { keyframe: t, actionItems: o } = l[e];
            if ((0 === e && (n = o[0]), A >= t)) {
              n = o[0];
              let c = l[e + 1],
                d = c && A !== t;
              (a = d ? c.actionItems[0] : null),
                d && ((i = t / 100), (r = (c.keyframe - t) / 100));
            }
          }
          let L = {};
          if (n && !a)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              L[t] = I(g, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (_ - i) / r,
              t = p(n.config.easing, e, T);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = I(g, i, n.config),
                r = (I(g, i, a.config) - o) * t + o;
              L[i] = r;
            }
          }
          return (0, o.merge)(e, { position: _, current: L });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: c,
              verbose: d,
              actionItem: l,
              destination: s,
              destinationKeys: u,
              pluginDuration: E,
              instanceDelay: I,
              customEasingFn: T,
              skipMotion: y,
            } = e,
            m = l.config.easing,
            { duration: b, delay: O } = l.config;
          null != E && (b = E),
            (O = null != I ? I : O),
            c === g ? (b = 0) : (r || y) && (b = O = 0);
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (d) {
              let t = b + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / b), 1)),
              r = p(m, n, T),
              c = {},
              l = null;
            return (
              u.length &&
                (l = u.reduce((e, t) => {
                  let n = s[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return (e[t] = o * r + i), e;
                }, {})),
              (c.current = l),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, o.merge)(e, c)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case d: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: c,
                  eventStateKey: d,
                  actionListId: l,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: I,
                  continuous: m,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: R,
                  pluginInstance: _,
                  pluginDuration: A,
                  instanceDelay: L,
                  skipMotion: N,
                  skipToValue: S,
                } = t.payload,
                { actionTypeId: h } = i,
                C = T(h),
                M = y(C, h),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: U } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: g,
                verbose: I,
                current: null,
                actionItem: i,
                actionTypeId: h,
                eventId: r,
                eventTarget: c,
                eventStateKey: d,
                actionListId: l,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: M,
                continuous: m,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: R,
                pluginInstance: _,
                pluginDuration: A,
                instanceDelay: L,
                skipMotion: N,
                skipToValue: S,
                customEasingFn:
                  Array.isArray(U) && 4 === U.length ? E(U) : void 0,
              });
            }
            case l: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  c = e[i],
                  d = c.continuous ? m : b;
                n = (0, o.set)(n, i, d(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return (e[n] = a), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        c = n(9468),
        d = n(7718),
        l = n(1540),
        { ixElements: s } = c.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: s,
          ixInstances: d.ixInstances,
          ixParameters: l.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: d,
        } = a.IX2EngineActionTypes,
        l = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [c]: { value: "stop" },
          [d]: { value: "clear" },
        }),
        u = (e = l, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return I;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: d,
          IX2_EVENT_LISTENER_ADDED: l,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = a.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        I = (e = g, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case d:
              return g;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case l: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return l;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        r = (e) => e || { value: 0 },
        c = (e) => ({ value: e.value }),
        d = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        l = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require("rive"),
        d = (e, t) => e.value.inputs[t],
        l = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = c();
          if (!a) return;
          let r = a.getInstance(e),
            d = a.rive.StateMachineInputType,
            { name: l, inputs: s = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(l);
              if (null != n) {
                if ((e.isPlaying || e.play(l, !1), i in s || o in s)) {
                  let t = e.layout,
                    n = s[i] ?? t.fit,
                    a = s[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in s) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case d.Boolean:
                        null != s[e] && (a.value = !!s[e]);
                        break;
                      case d.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case d.Trigger:
                        s[e] && a.fire();
                    }
                }
              }
            }
          }
          r?.rive ? u(r.rive) : a.setLoadHandler(e, u);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        r = (e, t) => e.filter((e) => !t.includes(e)),
        c = (e, t) => e.value[t],
        d = () => null,
        l = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = r(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = l[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = l[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            r = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ);
            };
          i ? c(i.spline) : a.setLoadHandler(e, c);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        r = (e, t) => e.value[t],
        c = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(i) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, o.normalizeColor)(i)
            : void 0;
        },
        l = (e) => e.value,
        s = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(u).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let a = n(7087),
        i = l(n(7377)),
        o = l(n(2866)),
        r = l(n(2570)),
        c = l(n(1407));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      let s = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return m;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return I;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return T;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return g;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return l;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return d;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return r;
        },
        IX2_SESSION_STOPPED: function () {
          return c;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return R;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        r = "IX2_SESSION_STARTED",
        c = "IX2_SESSION_STOPPED",
        d = "IX2_PREVIEW_REQUESTED",
        l = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        g = "IX2_PARAMETER_CHANGED",
        I = "IX2_INSTANCE_ADDED",
        T = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        m = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        R = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return H;
        },
        BACKGROUND: function () {
          return k;
        },
        BACKGROUND_COLOR: function () {
          return x;
        },
        BAR_DELIMITER: function () {
          return W;
        },
        BORDER_COLOR: function () {
          return G;
        },
        BOUNDARY_SELECTOR: function () {
          return d;
        },
        CHILDREN: function () {
          return j;
        },
        COLON_DELIMITER: function () {
          return Y;
        },
        COLOR: function () {
          return D;
        },
        COMMA_DELIMITER: function () {
          return z;
        },
        CONFIG_UNIT: function () {
          return I;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return l;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return g;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return X;
        },
        FILTER: function () {
          return U;
        },
        FLEX: function () {
          return B;
        },
        FONT_VARIATION_SETTINGS: function () {
          return V;
        },
        HEIGHT: function () {
          return F;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return L;
        },
        ROTATE_Y: function () {
          return N;
        },
        ROTATE_Z: function () {
          return S;
        },
        SCALE_3D: function () {
          return A;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return R;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return h;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return M;
        },
        TRANSFORM: function () {
          return T;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return m;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return w;
        },
        WILL_CHANGE: function () {
          return Q;
        },
        W_MOD_IX: function () {
          return c;
        },
        W_MOD_JS: function () {
          return r;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "jg-page",
        r = "w-mod-js",
        c = "w-mod-ix",
        d = ".w-dyn-item",
        l = "xValue",
        s = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        g = "zUnit",
        I = "unit",
        T = "transform",
        y = "translateX",
        m = "translateY",
        b = "translateZ",
        O = "translate3d",
        v = "scaleX",
        R = "scaleY",
        _ = "scaleZ",
        A = "scale3d",
        L = "rotateX",
        N = "rotateY",
        S = "rotateZ",
        h = "skew",
        C = "skewX",
        M = "skewY",
        P = "opacity",
        U = "filter",
        V = "font-variation-settings",
        w = "width",
        F = "height",
        x = "backgroundColor",
        k = "background",
        G = "borderColor",
        D = "color",
        X = "display",
        B = "flex",
        Q = "willChange",
        H = "AUTO",
        z = ",",
        Y = ":",
        W = "|",
        j = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return r.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return c;
        },
        IX2EngineConstants: function () {
          return d;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = l(n(1833), t),
        r = l(n(262), t);
      l(n(8704), t), l(n(3213), t);
      let c = u(n(8023)),
        d = u(n(2686));
      function l(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: c,
          STYLE_FILTER: d,
          STYLE_FONT_VARIATION: l,
        } = n(262).ActionTypeConsts,
        s = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [c]: !0, [d]: !0, [l]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return r;
        },
        EventContinuousMouseAxes: function () {
          return c;
        },
        EventLimitAffectedElements: function () {
          return d;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return l;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        d = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        l = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (c.startsWith("hsla")) {
          let e,
            n,
            r,
            d = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            l = parseFloat(d[0]),
            s = parseFloat(d[1].replace("%", "")) / 100,
            u = parseFloat(d[2].replace("%", "")) / 100;
          o = parseFloat(d[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((l / 60) % 2) - 1)),
            E = u - f / 2;
          l >= 0 && l < 60
            ? ((e = f), (n = p), (r = 0))
            : l >= 60 && l < 120
            ? ((e = p), (n = f), (r = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = f), (r = p))
            : l >= 180 && l < 240
            ? ((e = 0), (n = p), (r = f))
            : l >= 240 && l < 300
            ? ((e = p), (n = 0), (r = f))
            : ((e = f), (n = 0), (r = p)),
            (t = Math.round((e + E) * 255)),
            (a = Math.round((n + E) * 255)),
            (i = Math.round((r + E) * 255));
        } else if (c.startsWith("hsl")) {
          let e,
            n,
            o,
            r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            d = parseFloat(r[0]),
            l = parseFloat(r[1].replace("%", "")) / 100,
            s = parseFloat(r[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * l,
            f = u * (1 - Math.abs(((d / 60) % 2) - 1)),
            p = s - u / 2;
          d >= 0 && d < 60
            ? ((e = u), (n = f), (o = 0))
            : d >= 60 && d < 120
            ? ((e = f), (n = u), (o = 0))
            : d >= 120 && d < 180
            ? ((e = 0), (n = u), (o = f))
            : d >= 180 && d < 240
            ? ((e = 0), (n = f), (o = u))
            : d >= 240 && d < 300
            ? ((e = f), (n = 0), (o = u))
            : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return c;
        },
        IX2Easings: function () {
          return r;
        },
        IX2ElementsReducer: function () {
          return d;
        },
        IX2VanillaPlugins: function () {
          return l;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = f(n(2662)),
        r = f(n(8686)),
        c = f(n(3767)),
        d = f(n(5861)),
        l = f(n(1799)),
        s = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return l;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return c;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return d;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(9777)) && a.__esModule ? a : { default: a },
        c = "undefined" != typeof window,
        d = (e, t) => (c ? e() : t),
        l = d(() =>
          (0, r.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = d(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = d(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return l;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(8686)),
        c = (a = n(1361)) && a.__esModule ? a : { default: a };
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function s(e) {
        return (0, c.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? l(t > 0 ? n(t) : t)
          : l(t > 0 && e && r[e] ? r[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return B;
          },
          bouncePast: function () {
            return Q;
          },
          ease: function () {
            return c;
          },
          easeIn: function () {
            return d;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return l;
          },
          inBack: function () {
            return U;
          },
          inCirc: function () {
            return h;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return F;
          },
          inExpo: function () {
            return L;
          },
          inOutBack: function () {
            return w;
          },
          inOutCirc: function () {
            return M;
          },
          inOutCubic: function () {
            return I;
          },
          inOutElastic: function () {
            return k;
          },
          inOutExpo: function () {
            return S;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return m;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return A;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return T;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return R;
          },
          outBack: function () {
            return V;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return g;
          },
          outElastic: function () {
            return x;
          },
          outExpo: function () {
            return N;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return D;
          },
          swingFromTo: function () {
            return G;
          },
          swingTo: function () {
            return X;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(1361)) && a.__esModule ? a : { default: a },
        c = (0, r.default)(0.25, 0.1, 0.25, 1),
        d = (0, r.default)(0.42, 0, 1, 1),
        l = (0, r.default)(0, 0, 0.58, 1),
        s = (0, r.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function g(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function I(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function T(e) {
        return Math.pow(e, 4);
      }
      function y(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function R(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function A(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function L(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function N(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function S(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function h(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function M(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function U(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function V(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function w(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function F(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1)
          ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : a *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function D(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function B(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function Q(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return c;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        r = n(3690);
      function c(e) {
        return r.pluginMethodMap.has(e);
      }
      let d = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = r.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        l = d("getPluginConfig"),
        s = d("getPluginOrigin"),
        u = d("getPluginDuration"),
        f = d("getPluginDestination"),
        p = d("createPluginInstance"),
        E = d("renderPlugin"),
        g = d("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return ez;
        },
        clearAllStyles: function () {
          return eB;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eh;
        },
        getElementId: function () {
          return eg;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eA;
        },
        getItemConfigByKey: function () {
          return eS;
        },
        getMaxDurationItemIndex: function () {
          return ej;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return eM;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return ey;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eI;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = g(n(4075)),
        r = g(n(1455)),
        c = g(n(5720)),
        d = n(1185),
        l = n(7087),
        s = g(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: I,
          TRANSFORM: T,
          TRANSLATE_3D: y,
          SCALE_3D: m,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: R,
          PRESERVE_3D: _,
          FLEX: A,
          OPACITY: L,
          FILTER: N,
          FONT_VARIATION_SETTINGS: S,
          WIDTH: h,
          HEIGHT: C,
          BACKGROUND_COLOR: M,
          BORDER_COLOR: P,
          COLOR: U,
          CHILDREN: V,
          IMMEDIATE_CHILDREN: w,
          SIBLINGS: F,
          PARENT: x,
          DISPLAY: k,
          WILL_CHANGE: G,
          AUTO: D,
          COMMA_DELIMITER: X,
          COLON_DELIMITER: B,
          BAR_DELIMITER: Q,
          RENDER_TRANSFORM: H,
          RENDER_GENERAL: z,
          RENDER_STYLE: Y,
          RENDER_PLUGIN: W,
        } = l.IX2EngineConstants,
        {
          TRANSFORM_MOVE: j,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: er,
        } = l.ActionTypeConsts,
        ec = (e) => e.trim(),
        ed = Object.freeze({ [en]: M, [ea]: P, [ei]: U }),
        el = Object.freeze({
          [E.TRANSFORM_PREFIXED]: T,
          [M]: I,
          [L]: L,
          [N]: N,
          [h]: h,
          [C]: C,
          [S]: S,
        }),
        es = new Map();
      function eu() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eg(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eE++;
      }
      function eI({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, r.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eT = (e, t) => e === t;
      function ey({ store: e, select: t, onChange: n, comparator: a = eT }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) return void r();
            a(o, c) || n((c = o), e);
          }),
          c = t(i());
        return r;
      }
      function em(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, c;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: d } = e;
        if (Array.isArray(d) && d.length > 0)
          return d.reduce(
            (e, o) =>
              e.concat(
                eb({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: g,
            matchSelector: I,
            elementContains: T,
            isSiblingNode: y,
          } = i,
          { target: m } = e;
        if (!m) return [];
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: R,
          appliesTo: _,
          useEventTarget: A,
        } = em(m);
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
        if (_ === l.EventAppliesTo.PAGE) {
          let e = s(b);
          return e ? [e] : [];
        }
        let L = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          N = !!(L.id || L.selector),
          S = t && u(em(t.target));
        if (
          (N
            ? ((o = L.limitAffectedElements), (r = S), (c = u(L)))
            : (r = c = u({ id: b, selector: v, selectorGuids: R })),
          t && A)
        ) {
          let e = n && (c || !0 === A) ? [n] : f(S);
          if (c) {
            if (A === x) return f(c).filter((t) => e.some((e) => T(t, e)));
            if (A === V) return f(c).filter((t) => e.some((e) => T(e, t)));
            if (A === F) return f(c).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        return null == r || null == c
          ? []
          : E.IS_BROWSER_ENV && a
          ? f(c).filter((e) => a.contains(e))
          : o === V
          ? f(r, c)
          : o === w
          ? p(f(r)).filter(I(c))
          : o === F
          ? g(f(r)).filter(I(c))
          : f(c);
      }
      function eO({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eR = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = ew[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eA(e, t = {}, n = {}, a, i) {
        let { getStyle: r } = i,
          { actionTypeId: c } = a;
        if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], a);
        switch (a.actionTypeId) {
          case j:
          case $:
          case q:
          case K:
            return t[a.actionTypeId] || eU[a.actionTypeId];
          case J:
            return eR(t[a.actionTypeId], a.config.filters);
          case ee:
            return e_(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, o.default)(parseFloat(r(e, L)), 1) };
          case et: {
            let t,
              i = r(e, h),
              c = r(e, C);
            return {
              widthValue:
                a.config.widthUnit === D
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === D
                  ? ev.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(c), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = ed[t],
                r = a(e, i),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eG, ek.test(r) ? r : n[i]).split(X);
              return {
                rValue: (0, o.default)(parseInt(c[0], 10), 255),
                gValue: (0, o.default)(parseInt(c[1], 10), 255),
                bValue: (0, o.default)(parseInt(c[2], 10), 255),
                aValue: (0, o.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case eo:
            return { value: (0, o.default)(r(e, k), n.display) };
          case er:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eL = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, c.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eh({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case j:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: c } = t.config,
              { widthValue: d, heightValue: l } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: d, heightValue: l };
            if (r === D) {
              let t = a(e, h);
              i(e, h, ""), (d = o(e, "offsetWidth")), i(e, h, t);
            }
            if (c === D) {
              let t = a(e, C);
              i(e, C, ""), (l = o(e, "offsetHeight")), i(e, C, t);
            }
            return { widthValue: d, heightValue: l };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, c),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case J:
            return t.config.filters.reduce(eL, {});
          case ee:
            return t.config.fontVariations.reduce(eN, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? H
          : /^STYLE_/.test(e)
          ? Y
          : /^GENERAL_/.test(e)
          ? z
          : /^PLUGIN_/.test(e)
          ? W
          : void 0;
      }
      function eM(e, t) {
        return e === Y ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, a, i, o, c, d, l) {
        switch (d) {
          case H:
            var s = e,
              u = t,
              f = n,
              g = i,
              I = c;
            let T = ex
                .map((e) => {
                  let t = eU[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: r = "",
                      zUnit: c = "",
                    } = u[e] || {};
                  switch (e) {
                    case j:
                      return `${y}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case $:
                      return `${m}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case q:
                      return `${b}(${n}${o}) ${O}(${a}${r}) ${v}(${i}${c})`;
                    case K:
                      return `${R}(${n}${o}, ${a}${r})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: L } = I;
            eD(s, E.TRANSFORM_PREFIXED, I),
              L(s, E.TRANSFORM_PREFIXED, T),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a }
              ) {
                return (
                  (e === j && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(g, f) && L(s, E.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case Y:
            return (function (e, t, n, a, i, o) {
              let { setStyle: c } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: r, heightValue: d } = n;
                  void 0 !== r &&
                    (t === D && (t = "px"), eD(e, h, o), c(e, h, r + t)),
                    void 0 !== d &&
                      (i === D && (i = "px"), eD(e, C, o), c(e, C, d + i));
                  break;
                }
                case J:
                  var d = a.config;
                  let l = (0, r.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eF(n, d)})`,
                      ""
                    ),
                    { setStyle: s } = o;
                  eD(e, N, o), s(e, N, l);
                  break;
                case ee:
                  a.config;
                  let u = (0, r.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = o;
                  eD(e, S, o), f(e, S, u);
                  break;
                case en:
                case ea:
                case ei: {
                  let t = ed[a.actionTypeId],
                    i = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    d = Math.round(n.bValue),
                    l = n.aValue;
                  eD(e, t, o),
                    c(
                      e,
                      t,
                      l >= 1
                        ? `rgb(${i},${r},${d})`
                        : `rgba(${i},${r},${d},${l})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  eD(e, i, o), c(e, i, n.value + t);
                }
              }
            })(e, 0, n, i, o, c);
          case z:
            var M = e,
              P = i,
              U = c;
            let { setStyle: V } = U;
            if (P.actionTypeId === eo) {
              let { value: e } = P.config;
              V(M, k, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case W: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(l, t, i);
          }
        }
      }
      let eU = {
          [j]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eV = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        ew = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eF = (e, t) => {
          let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eU),
        ek = /^rgb/,
        eG = RegExp("rgba?\\(([^)]+)\\)");
      function eD(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = el[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, G);
        if (!r) return void o(e, G, a);
        let c = r.split(X).map(ec);
        -1 === c.indexOf(a) && o(e, G, c.concat(a).join(X));
      }
      function eX(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = el[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, G);
        r &&
          -1 !== r.indexOf(a) &&
          o(
            e,
            G,
            r
              .split(X)
              .map(ec)
              .filter((e) => e !== a)
              .join(X)
          );
      }
      function eB({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            c = i[r];
          c && eQ({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eQ({ actionList: i[e], elementApi: t });
          });
      }
      function eQ({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        a &&
          a.forEach((e) => {
            eH({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                eH({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eH({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          (a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eY({ effect: eW, actionTypeId: i, elementApi: n })),
            eb({ config: o, event: t, elementApi: n }).forEach(a);
        });
      }
      function ez(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          n.widthUnit === D && a(e, h, ""), n.heightUnit === D && a(e, C, "");
        }
        i(e, G) && eY({ effect: eX, actionTypeId: o, elementApi: n })(e);
      }
      let eY =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case j:
            case $:
            case q:
            case K:
              e(a, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, N, n);
              break;
            case ee:
              e(a, S, n);
              break;
            case Z:
              e(a, L, n);
              break;
            case et:
              e(a, h, n), e(a, C, n);
              break;
            case en:
            case ea:
            case ei:
              e(a, ed[t], n);
              break;
            case eo:
              e(a, k, n);
          }
        };
      function eW(e, t, n) {
        let { setStyle: a } = n;
        eX(e, t, n),
          a(e, t, ""),
          t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function ej(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              d = n[ej(n)],
              { config: l, actionTypeId: s } = d;
            i.id === d.id && (c = r + o);
            let u = eC(s) === z ? 0 : l.duration;
            r += l.delay + u;
          }),
          r > 0 ? (0, u.optimizeFloat)(c / r) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, d.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, d.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === l.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === l.EventBasedOn.ELEMENT || null == t)) ||
          (e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + B + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + Q + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + Q + n + Q + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return R;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        r = n(7087),
        {
          HTML_ELEMENT: c,
          PLAIN_OBJECT: d,
          ABSTRACT_NODE: l,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: g,
          CONFIG_Z_UNIT: I,
          CONFIG_UNIT: T,
        } = r.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: m,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = r.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case y:
              return O;
            case m: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: r,
                  refType: c,
                } = t.payload,
                { actionTypeId: d } = r,
                l = e;
              return (
                (0, o.getIn)(l, [n, a]) !== a && (l = R(l, a, c, n, r)),
                _(l, n, d, i, r)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return _(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function R(e, t, n, a, i) {
        let r =
          n === d ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
      }
      function _(e, t, n, a, i) {
        let r = (function (e) {
          let { config: t } = e;
          return A.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return null != o && null != r && (e[i] = r), e;
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, r);
      }
      let A = [
        [s, E],
        [u, g],
        [f, I],
        [p, T],
      ];
    },
    2220: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".navigation-link",
              originalId: "7f03a822-4b54-a0fe-8146-c46b11b79f8d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".navigation-link",
                originalId: "7f03a822-4b54-a0fe-8146-c46b11b79f8d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18bf3d9ddda,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".navigation-link",
              originalId: "7f03a822-4b54-a0fe-8146-c46b11b79f8d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".navigation-link",
                originalId: "7f03a822-4b54-a0fe-8146-c46b11b79f8d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18bf3d9dddb,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".marquee-track",
              originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".marquee-track",
                originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: -10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf3ed3d88,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".marquee-track",
              originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".marquee-track",
                originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf3ed3d89,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf8c50ab0,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-299",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "172db327-eb91-98ce-0506-aebff67826b4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "172db327-eb91-98ce-0506-aebff67826b4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf909c359,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-298",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "172db327-eb91-98ce-0506-aebff67826b4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "172db327-eb91-98ce-0506-aebff67826b4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf909c359,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-285",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".divider-mutted",
              originalId:
                "G3I7T7H3U6I4A2L5ON|9dcd4272-8ffe-37ff-9095-894799a26b72",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".divider-mutted",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|9dcd4272-8ffe-37ff-9095-894799a26b72",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18d12dba259,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".service-item-grid",
              originalId:
                "G3I7T7H3U6I4A2L5ON|b9ed65bf-d7a9-3be5-1dda-e57152223727",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".service-item-grid",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|b9ed65bf-d7a9-3be5-1dda-e57152223727",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18d12dfefb3,
          },
          "e-197": {
            id: "e-197",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-128",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-198",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52effed|ddcd9ca0-9c14-06e3-2e42-b8ceeedc7bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effed|ddcd9ca0-9c14-06e3-2e42-b8ceeedc7bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18d8915ea91,
          },
          "e-269": {
            id: "e-269",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-270",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "050772fc-bc72-dec2-8740-5b63d38fb377",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fe8bc88b8,
          },
          "e-270": {
            id: "e-270",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-269",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "050772fc-bc72-dec2-8740-5b63d38fb377",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fe8bc88b8,
          },
          "e-276": {
            id: "e-276",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-277",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190a1eeb4a6,
          },
          "e-280": {
            id: "e-280",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-281",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190a211629f,
          },
          "e-295": {
            id: "e-295",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-296",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-mask",
              originalId:
                "G3I7T7H3U6I4A2L5ON|df90f8f0-f764-ed27-b728-48c7abfaeab6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-mask",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|df90f8f0-f764-ed27-b728-48c7abfaeab6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b7709438,
          },
          "e-298": {
            id: "e-298",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-299",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "ba37f5a9-42fd-cfed-2cff-cca4beefd38b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ba37f5a9-42fd-cfed-2cff-cca4beefd38b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf909c359,
          },
          "e-299": {
            id: "e-299",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-298",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "ba37f5a9-42fd-cfed-2cff-cca4beefd38b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ba37f5a9-42fd-cfed-2cff-cca4beefd38b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf909c359,
          },
          "e-318": {
            id: "e-318",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-319",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".project-inner",
              originalId:
                "G3I7T7H3U6I4A2L5ON|56e918ac-db5f-99b2-fb62-732c8fbcd19f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".project-inner",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|56e918ac-db5f-99b2-fb62-732c8fbcd19f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190ead1df5f,
          },
          "e-320": {
            id: "e-320",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-321",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".blog-link",
              originalId:
                "G3I7T7H3U6I4A2L5ON|1532b140-8672-d80e-55e9-db9b878a88a9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-link",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|1532b140-8672-d80e-55e9-db9b878a88a9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190ff502e6a,
          },
          "e-321": {
            id: "e-321",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-320",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".blog-link",
              originalId:
                "G3I7T7H3U6I4A2L5ON|1532b140-8672-d80e-55e9-db9b878a88a9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-link",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|1532b140-8672-d80e-55e9-db9b878a88a9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190ff502e6b,
          },
          "e-334": {
            id: "e-334",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-75",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-335",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd6d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd6d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191037eac74,
          },
          "e-335": {
            id: "e-335",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-76",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-334",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd6d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd6d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191037eac75,
          },
          "e-336": {
            id: "e-336",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-337",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer-link-old",
              originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-link-old",
                originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ccab7a668,
          },
          "e-337": {
            id: "e-337",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-336",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer-link-old",
              originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-link-old",
                originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ccab7a669,
          },
          "e-340": {
            id: "e-340",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-70",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-341",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd87",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd87",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 7,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19103c1d528,
          },
          "e-342": {
            id: "e-342",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-71",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-343",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 7,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19103c21d87,
          },
          "e-344": {
            id: "e-344",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-345",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dda7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dda7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 7,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19103c26f21,
          },
          "e-623": {
            id: "e-623",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-83",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-624",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "62c3d14e-52ed-e0cf-5537-4d12e7fdea3b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "62c3d14e-52ed-e0cf-5537-4d12e7fdea3b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971279ae7f,
          },
          "e-624": {
            id: "e-624",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-623",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "62c3d14e-52ed-e0cf-5537-4d12e7fdea3b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "62c3d14e-52ed-e0cf-5537-4d12e7fdea3b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971279ae82,
          },
          "e-625": {
            id: "e-625",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-626",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|08b112b6-4549-1286-e3ce-5269d15fae1e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|08b112b6-4549-1286-e3ce-5269d15fae1e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971731d988,
          },
          "e-627": {
            id: "e-627",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-86",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-628",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "050772fc-bc72-dec2-8740-5b63d38fb377",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971be74198,
          },
          "e-629": {
            id: "e-629",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-630",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|b0d40774-d4cb-5866-8131-748af54f7f6c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|b0d40774-d4cb-5866-8131-748af54f7f6c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971beccf6d,
          },
          "e-631": {
            id: "e-631",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-632",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|e86d0780-59f9-1ce2-cff5-e670a800d7af",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|e86d0780-59f9-1ce2-cff5-e670a800d7af",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971bee3832,
          },
          "e-639": {
            id: "e-639",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-90",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-640",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|f4cf2e8c-72f8-793b-ec23-62fbc8d8724b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|f4cf2e8c-72f8-793b-ec23-62fbc8d8724b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971bfcacb8,
          },
          "e-643": {
            id: "e-643",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-90",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-644",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|9e193f75-1c1a-13de-0df3-6eb9b25797a1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|9e193f75-1c1a-13de-0df3-6eb9b25797a1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971bfd2642,
          },
          "e-645": {
            id: "e-645",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-90",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-646",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|49062555-9b46-15e1-c583-20950a026bd2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|49062555-9b46-15e1-c583-20950a026bd2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971bff0070,
          },
          "e-647": {
            id: "e-647",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-91",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-648",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|70930c5a-7f0a-e1e4-b8d6-5f2dc9317ec2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|70930c5a-7f0a-e1e4-b8d6-5f2dc9317ec2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971c14ba8e,
          },
          "e-649": {
            id: "e-649",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-93",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-650",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".marquee-track-reverse",
              originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".marquee-track-reverse",
                originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: -10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197311e4691,
          },
          "e-650": {
            id: "e-650",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-649",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".marquee-track-reverse",
              originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".marquee-track-reverse",
                originalId: "703fc64a-a968-732e-983f-eca8d016b20f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197311e4692,
          },
          "e-651": {
            id: "e-651",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-94",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|b0bc69c5-2727-b112-820f-3dac97ffc67f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|b0bc69c5-2727-b112-820f-3dac97ffc67f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-94-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1973562b16c,
          },
          "e-652": {
            id: "e-652",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-95",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|b0bc69c5-2727-b112-820f-3dac97ffc67f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|b0bc69c5-2727-b112-820f-3dac97ffc67f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-95-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x197357a8828,
          },
          "e-653": {
            id: "e-653",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-96",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-654",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|7642b0f1-4f43-8b31-ba2e-bd6d414ac082",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|7642b0f1-4f43-8b31-ba2e-bd6d414ac082",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973b6b0f21,
          },
          "e-654": {
            id: "e-654",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-97",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-653",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|7642b0f1-4f43-8b31-ba2e-bd6d414ac082",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|7642b0f1-4f43-8b31-ba2e-bd6d414ac082",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973b6b0f22,
          },
          "e-655": {
            id: "e-655",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-96",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-656",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973b7eec9b,
          },
          "e-656": {
            id: "e-656",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-97",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-655",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973b7eec9b,
          },
          "e-657": {
            id: "e-657",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-96",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-658",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|5c806518-c203-b23f-aaae-97494097ac6e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|5c806518-c203-b23f-aaae-97494097ac6e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973b7efd93,
          },
          "e-658": {
            id: "e-658",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-97",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-657",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|5c806518-c203-b23f-aaae-97494097ac6e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|5c806518-c203-b23f-aaae-97494097ac6e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973b7efd93,
          },
          "e-659": {
            id: "e-659",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-98",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-98-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1973fb77934,
          },
          "e-660": {
            id: "e-660",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-99",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|5c806518-c203-b23f-aaae-97494097ac6a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|5c806518-c203-b23f-aaae-97494097ac6a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-99-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1973fb931da,
          },
          "e-661": {
            id: "e-661",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-100",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-662",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|5e34a481-a04a-814b-e378-a394f71fd655",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|5e34a481-a04a-814b-e378-a394f71fd655",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973fd83032,
          },
          "e-663": {
            id: "e-663",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-101",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-681",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "dd079e52-761f-de34-0566-81d55dd84176",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "dd079e52-761f-de34-0566-81d55dd84176",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19740b11797,
          },
          "e-664": {
            id: "e-664",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-680",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "dd079e52-761f-de34-0566-81d55dd84176",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "dd079e52-761f-de34-0566-81d55dd84176",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19740b11798,
          },
          "e-665": {
            id: "e-665",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-103",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|92732a38-a359-403a-9f4d-a86d572ebcd2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|92732a38-a359-403a-9f4d-a86d572ebcd2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-103-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x197457de155,
          },
          "e-668": {
            id: "e-668",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-670",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e665",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e665",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194f0848de5,
          },
          "e-671": {
            id: "e-671",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-677",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e687",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e687",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194f085c762,
          },
          "e-675": {
            id: "e-675",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-611",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e675",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e675",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194f08532e4,
          },
          "e-676": {
            id: "e-676",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-619",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e697",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|17483af1-af0a-4fd8-767b-4d9d4303e697",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194f0870b46,
          },
          "e-680": {
            id: "e-680",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-101",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-681",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "e217ebb7-7262-a541-aa52-55459cc7ad5e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e217ebb7-7262-a541-aa52-55459cc7ad5e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19740b11797,
          },
          "e-681": {
            id: "e-681",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-680",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "e217ebb7-7262-a541-aa52-55459cc7ad5e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e217ebb7-7262-a541-aa52-55459cc7ad5e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19740b11798,
          },
          "e-682": {
            id: "e-682",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-109",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-683",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".awards-row",
              originalId:
                "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".awards-row",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197694a8dd4,
          },
          "e-683": {
            id: "e-683",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-110",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-682",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".awards-row",
              originalId:
                "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".awards-row",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197694a8dd6,
          },
          "e-686": {
            id: "e-686",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-112",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-694",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer-link",
              originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-link",
                originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ccab7a669,
          },
          "e-687": {
            id: "e-687",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-695",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272452b97,
          },
          "e-688": {
            id: "e-688",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-115",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-691",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b233e805,
          },
          "e-689": {
            id: "e-689",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-692",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b233e805,
          },
          "e-690": {
            id: "e-690",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-115",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-693",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272461b4e,
          },
          "e-691": {
            id: "e-691",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-116",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-688",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b233e805,
          },
          "e-692": {
            id: "e-692",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-114",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-689",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "cbb59581-76d5-5377-0c1a-51e8c6130911",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b233e805,
          },
          "e-693": {
            id: "e-693",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-116",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-690",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272461b50,
          },
          "e-694": {
            id: "e-694",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-111",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-686",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer-link",
              originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-link",
                originalId: "f0f582dc-17eb-3701-02ad-78ef05139c22",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ccab7a668,
          },
          "e-695": {
            id: "e-695",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-114",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-687",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".back-top-link",
              originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".back-top-link",
                originalId: "bf3f5da5-ac60-d711-7b22-dc30d14407a3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272452b98,
          },
          "e-696": {
            id: "e-696",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-106",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|a7978d63-5513-dead-5a3f-fdbbb37fd851",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|a7978d63-5513-dead-5a3f-fdbbb37fd851",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-106-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1976df17793,
          },
          "e-697": {
            id: "e-697",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-117",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-299",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "898bef50-5996-83df-6efd-10fdcd4a5edd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "898bef50-5996-83df-6efd-10fdcd4a5edd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf909c359,
          },
          "e-698": {
            id: "e-698",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-118",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-298",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "898bef50-5996-83df-6efd-10fdcd4a5edd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "898bef50-5996-83df-6efd-10fdcd4a5edd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cf909c359,
          },
          "e-701": {
            id: "e-701",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-702",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19779b53887,
          },
          "e-703": {
            id: "e-703",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-704",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|fe6ce312-07fa-4a18-edfa-410a51029909",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|fe6ce312-07fa-4a18-edfa-410a51029909",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19779b53887,
          },
          "e-741": {
            id: "e-741",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-742",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977ea5f6d5,
          },
          "e-743": {
            id: "e-743",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-744",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977ea5f6d5,
          },
          "e-755": {
            id: "e-755",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-125",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-756",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|1853ce49-ad18-ca1c-2961-27424a15e1ac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|1853ce49-ad18-ca1c-2961-27424a15e1ac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977ea96c75,
          },
          "e-759": {
            id: "e-759",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-760",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac0b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac0b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977eb636a5,
          },
          "e-761": {
            id: "e-761",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-82",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac0b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac0b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-82-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1977eb636a5,
          },
          "e-764": {
            id: "e-764",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-103",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac68",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac68",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-103-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1977eb636a5,
          },
          "e-765": {
            id: "e-765",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-766",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac76",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac76",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977eb636a5,
          },
          "e-767": {
            id: "e-767",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-105",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-768",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac90",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac90",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977eb636a5,
          },
          "e-769": {
            id: "e-769",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-96",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-770",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|a235bbe0-1672-34d6-900d-b80e5dc78e17",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|a235bbe0-1672-34d6-900d-b80e5dc78e17",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977eb7c3c9,
          },
          "e-770": {
            id: "e-770",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-97",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-769",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|a235bbe0-1672-34d6-900d-b80e5dc78e17",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|a235bbe0-1672-34d6-900d-b80e5dc78e17",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977eb7c3c9,
          },
          "e-773": {
            id: "e-773",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-774",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|6e5f8aaf-9e29-fb07-a020-1431bf02604f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977ebfc215,
          },
          "e-775": {
            id: "e-775",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-776",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977ebfc215,
          },
          "e-781": {
            id: "e-781",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-782",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|a235bbe0-1672-34d6-900d-b80e5dc78e14",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|a235bbe0-1672-34d6-900d-b80e5dc78e14",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977ec2b40d,
          },
          "e-787": {
            id: "e-787",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-95",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c25dfec9-bcb2-c23c-e599-25e6cdacd0da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c25dfec9-bcb2-c23c-e599-25e6cdacd0da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-95-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19782e0e1a8,
          },
          "e-788": {
            id: "e-788",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-94",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c25dfec9-bcb2-c23c-e599-25e6cdacd0da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c25dfec9-bcb2-c23c-e599-25e6cdacd0da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-94-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19782e0e1a8,
          },
          "e-789": {
            id: "e-789",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-82",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|ad3eabc9-fa89-f18c-283c-3f3e8490f89a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|ad3eabc9-fa89-f18c-283c-3f3e8490f89a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-82-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x197837ccb47,
          },
          "e-790": {
            id: "e-790",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-791",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|ad3eabc9-fa89-f18c-283c-3f3e8490f89a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|ad3eabc9-fa89-f18c-283c-3f3e8490f89a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197837ccb47,
          },
          "e-792": {
            id: "e-792",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-128",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-793",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|6565f596-1c64-c466-3ddc-a9aa7de4c235",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|6565f596-1c64-c466-3ddc-a9aa7de4c235",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19783dbe058,
          },
          "e-794": {
            id: "e-794",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-128",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-795",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|35e839d3-56db-0615-cf30-1c5760aeec18",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|35e839d3-56db-0615-cf30-1c5760aeec18",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19783dca5d7,
          },
          "e-798": {
            id: "e-798",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-128",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-799",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|11fff3af-370e-6b36-8d46-26ebcf725ea8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|11fff3af-370e-6b36-8d46-26ebcf725ea8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 12,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19783fab7e9,
          },
          "e-802": {
            id: "e-802",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-803",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52effed|d3ada01c-2bfc-e5c0-2aea-a05217395ec2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effed|d3ada01c-2bfc-e5c0-2aea-a05217395ec2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -100,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19787ec975d,
          },
          "e-804": {
            id: "e-804",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-82",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52effed|d3ada01c-2bfc-e5c0-2aea-a05217395ec2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effed|d3ada01c-2bfc-e5c0-2aea-a05217395ec2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-82-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19787ec975d,
          },
          "e-805": {
            id: "e-805",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-128",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-806",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52effed|d7664144-54a5-4681-0ee7-3cf37295e01e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effed|d7664144-54a5-4681-0ee7-3cf37295e01e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: -20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197880b877f,
          },
          "e-807": {
            id: "e-807",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-96",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-808",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68359ff741035fe5c52effed|d7664144-54a5-4681-0ee7-3cf37295e021",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effed|d7664144-54a5-4681-0ee7-3cf37295e021",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197880b877f,
          },
          "e-808": {
            id: "e-808",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-97",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-807",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68359ff741035fe5c52effed|d7664144-54a5-4681-0ee7-3cf37295e021",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effed|d7664144-54a5-4681-0ee7-3cf37295e021",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197880b877f,
          },
          "e-809": {
            id: "e-809",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-129",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-810",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".awards-row",
              originalId:
                "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".awards-row",
                originalId:
                  "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 7,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978e20bd23,
          },
          "e-811": {
            id: "e-811",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-812",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac28d9f1,
          },
          "e-813": {
            id: "e-813",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-814",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac2aa438,
          },
          "e-815": {
            id: "e-815",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-816",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|ffc89de8-499f-a1e1-402e-303739391ce0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|ffc89de8-499f-a1e1-402e-303739391ce0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac2fb44e,
          },
          "e-817": {
            id: "e-817",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-818",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac05",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68504f28c8ee5d953d0cac18|c7ace413-b964-2364-614c-3d97128bac05",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac300cbd,
          },
          "e-819": {
            id: "e-819",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-820",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac31a3d9,
          },
          "e-821": {
            id: "e-821",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-822",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52effee|03142709-64c7-1fba-28f6-828216c1e864",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effee|03142709-64c7-1fba-28f6-828216c1e864",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac3260e9,
          },
          "e-823": {
            id: "e-823",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-824",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52efff5|9c27940c-dd48-710a-27bf-840ee2dc4a99",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52efff5|9c27940c-dd48-710a-27bf-840ee2dc4a99",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac32b13c,
          },
          "e-825": {
            id: "e-825",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-826",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52efff6|3a805453-c156-41ab-3a43-bee0232491a8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52efff6|3a805453-c156-41ab-3a43-bee0232491a8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac33174c,
          },
          "e-827": {
            id: "e-827",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-828",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52efff7|2f3b0c3f-8348-d43a-aeb6-6a3d9e90e82f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52efff7|2f3b0c3f-8348-d43a-aeb6-6a3d9e90e82f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac336e9e,
          },
          "e-829": {
            id: "e-829",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-830",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68359ff741035fe5c52effed|d3ada01c-2bfc-e5c0-2aea-a05217395ebc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68359ff741035fe5c52effed|d3ada01c-2bfc-e5c0-2aea-a05217395ebc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac341499,
          },
          "e-831": {
            id: "e-831",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-832",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685553280d9a0c7314422ce3|2f3b0c3f-8348-d43a-aeb6-6a3d9e90e82f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685553280d9a0c7314422ce3|2f3b0c3f-8348-d43a-aeb6-6a3d9e90e82f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac346ee5,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Menu link slide up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text-hover",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcf"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 10,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcb"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 10,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcb"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 10,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text-hover",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcf"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 10,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text-hover",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcf"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18bf3da371b,
          },
          "a-2": {
            id: "a-2",
            title: "Menu link slide down",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcb"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcb"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text-hover",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcf"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text-hover",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dcf"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18bf3dbcd63,
          },
          "a-9": {
            id: "a-9",
            title: "Marquee start",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "dc9facce-bb54-4641-9dd9-26248c26a790",
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 7e4,
                      target: {
                        useEventTarget: !0,
                        id: "dc9facce-bb54-4641-9dd9-26248c26a790",
                      },
                      xValue: -50,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "dc9facce-bb54-4641-9dd9-26248c26a790",
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cf3eea1b3,
          },
          "a-10": {
            id: "a-10",
            title: "Marquee pause",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "dc9facce-bb54-4641-9dd9-26248c26a790",
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18cf3eea1b3,
          },
          "a-11": {
            id: "a-11",
            title: "Page loader",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "G3I7T7H3U6I4A2L5ON|715888e8-49c8-b88f-62be-4616d3cd594e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "",
                      duration: 200,
                      target: {
                        id: "G3I7T7H3U6I4A2L5ON|715888e8-49c8-b88f-62be-4616d3cd594e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cf8c52708,
          },
          "a-12": {
            id: "a-12",
            title: "Button hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-inner",
                        selectorGuids: ["b13713e1-b68b-cae6-ea97-80f3b87f52f2"],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-inner",
                        selectorGuids: ["b13713e1-b68b-cae6-ea97-80f3b87f52f2"],
                      },
                      xValue: 1.5625,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cf909e478,
          },
          "a-13": {
            id: "a-13",
            title: "Button hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-inner",
                        selectorGuids: ["b13713e1-b68b-cae6-ea97-80f3b87f52f2"],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18cf909e478,
          },
          "a-15": {
            id: "a-15",
            title: "Divider scale horizontally",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|9dcd4272-8ffe-37ff-9095-894799a26b72",
                      },
                      xValue: 0,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|9dcd4272-8ffe-37ff-9095-894799a26b72",
                      },
                      xValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18d12dc85be,
          },
          "a-16": {
            id: "a-16",
            title: "Fade in up delay 0.7",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 12,
                      xUnit: "PX",
                      yUnit: "vw",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outQuart",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vw",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "outQuart",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-128": {
            id: "a-128",
            title: "Fade in up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-128-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-128-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-128-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-128-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1977ef99f20,
          },
          "a-46": {
            id: "a-46",
            title: "Menu icon open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-46-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-46-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc7"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-46-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-46-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc9"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-46-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc8"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-46-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc8"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ce9251a33,
          },
          "a-47": {
            id: "a-47",
            title: "Menu icon close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-47-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc7"],
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-47-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc7"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-47-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc9"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-47-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc9"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-47-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc8"],
                      },
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-47-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["a69f869b-bf9c-6c6b-5186-8b518d607dc8"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ce9251a33,
          },
          "a-41": {
            id: "a-41",
            title: "Fade in up delay 1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-41-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 12,
                      xUnit: "PX",
                      yUnit: "vw",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-41-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outQuart",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vw",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "outQuart",
                      duration: 1200,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-51": {
            id: "a-51",
            title: "Fade in delay 1.5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-51-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-51-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1500,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|fe6ce312-07fa-4a18-edfa-410a51029909",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a211e8ce,
          },
          "a-57": {
            id: "a-57",
            title: "Image unmask right",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-57-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|df90f8f0-f764-ed27-b728-48c7abfaeab6",
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-57-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|df90f8f0-f764-ed27-b728-48c7abfaeab6",
                      },
                      xValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-57-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1.37,
                      yValue: 1.37,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-57-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-57-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|df90f8f0-f764-ed27-b728-48c7abfaeab6",
                      },
                      xValue: 0,
                      yValue: null,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190b770d6ed,
          },
          "a-62": {
            id: "a-62",
            title: "Fade in up long",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-62-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 6,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-62-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-62-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-62-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-66": {
            id: "a-66",
            title: "Blog item hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-66-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-66-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-66-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-66-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      yValue: -1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190ff517f17,
          },
          "a-67": {
            id: "a-67",
            title: "Blog item hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-67-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-67-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190ff517f17,
          },
          "a-75": {
            id: "a-75",
            title: "Scroll top hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-75-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd6d",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vw",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-75-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd6d",
                      },
                      yValue: -0.5,
                      xUnit: "PX",
                      yUnit: "vw",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191037f792f,
          },
          "a-76": {
            id: "a-76",
            title: "Scroll top hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-76-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "3ae97ba8-2d8e-f1fc-618a-7c3877d9dd6d",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vw",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191037f792f,
          },
          "a-77": {
            id: "a-77",
            title: "Footer link slide up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-77-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-77-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 10,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-77-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 10,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18c4594e31c,
          },
          "a-78": {
            id: "a-78",
            title: "Footer link slide down",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-78-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-78-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18c4594e31c,
          },
          "a-70": {
            id: "a-70",
            title: "Fade in up delay 0.1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-70-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-70-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-70-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-70-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-71": {
            id: "a-71",
            title: "Fade in up delay 0.2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-71-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-71-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-71-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-71-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-72": {
            id: "a-72",
            title: "Fade in up delay 0.3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-72-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-72-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-72-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-72-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-83": {
            id: "a-83",
            title: "Social link hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-83-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-back",
                        selectorGuids: ["d3b0dfbb-66a9-6ab8-eb63-9f9285e2f830"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-83-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-back",
                        selectorGuids: ["d3b0dfbb-66a9-6ab8-eb63-9f9285e2f830"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-83-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-front",
                        selectorGuids: ["96ae8f78-7558-b473-e01f-6f05f6f1ec8d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-83-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-front",
                        selectorGuids: ["96ae8f78-7558-b473-e01f-6f05f6f1ec8d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-83-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-front",
                        selectorGuids: ["96ae8f78-7558-b473-e01f-6f05f6f1ec8d"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-83-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-front",
                        selectorGuids: ["96ae8f78-7558-b473-e01f-6f05f6f1ec8d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-83-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-back",
                        selectorGuids: ["d3b0dfbb-66a9-6ab8-eb63-9f9285e2f830"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-83-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-back",
                        selectorGuids: ["d3b0dfbb-66a9-6ab8-eb63-9f9285e2f830"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197127a8989,
          },
          "a-84": {
            id: "a-84",
            title: "Social link hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-84-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-front",
                        selectorGuids: ["96ae8f78-7558-b473-e01f-6f05f6f1ec8d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-84-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-front",
                        selectorGuids: ["96ae8f78-7558-b473-e01f-6f05f6f1ec8d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-84-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-back",
                        selectorGuids: ["d3b0dfbb-66a9-6ab8-eb63-9f9285e2f830"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-84-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 450,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-links-back",
                        selectorGuids: ["d3b0dfbb-66a9-6ab8-eb63-9f9285e2f830"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x197127a8989,
          },
          "a-85": {
            id: "a-85",
            title: "Positions numbers rotation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-85-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.two",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "ae5b0992-4131-9847-8caf-8ea09317dc24",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.two",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "ae5b0992-4131-9847-8caf-8ea09317dc24",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-85-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.three",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "fa09be4e-d27c-7db2-c821-5108867e8d86",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.three",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "fa09be4e-d27c-7db2-c821-5108867e8d86",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-85-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2500,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.one",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "3a3fc36f-c357-7fce-5731-01d6006256f3",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 2500,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.one",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "3a3fc36f-c357-7fce-5731-01d6006256f3",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-85-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2500,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.two",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "ae5b0992-4131-9847-8caf-8ea09317dc24",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 2500,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.two",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "ae5b0992-4131-9847-8caf-8ea09317dc24",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-85-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2500,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.two",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "ae5b0992-4131-9847-8caf-8ea09317dc24",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-12",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 2500,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.two",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "ae5b0992-4131-9847-8caf-8ea09317dc24",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-85-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2500,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.three",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "fa09be4e-d27c-7db2-c821-5108867e8d86",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-10",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 2500,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.three",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "fa09be4e-d27c-7db2-c821-5108867e8d86",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-85-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2500,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.three",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "fa09be4e-d27c-7db2-c821-5108867e8d86",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-16",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 2500,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.three",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "fa09be4e-d27c-7db2-c821-5108867e8d86",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-85-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2500,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.one",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "3a3fc36f-c357-7fce-5731-01d6006256f3",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-85-n-14",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 2500,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".position-number.one",
                        selectorGuids: [
                          "309452e3-e8aa-8ab8-5e0f-885306b4dae8",
                          "3a3fc36f-c357-7fce-5731-01d6006256f3",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19716ca5f99,
          },
          "a-86": {
            id: "a-86",
            title: "Fade in down delay 0.15",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-86-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-86-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: -5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-86-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "outQuart",
                      duration: 700,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-86-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 150,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1971be76dc7,
          },
          "a-87": {
            id: "a-87",
            title: "Fade in up delay 0.15",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-87-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-87-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-87-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "outQuart",
                      duration: 700,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-87-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 150,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1971be76dc7,
          },
          "a-90": {
            id: "a-90",
            title: "Position item slide up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-90-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-90-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1350,
                      easing: [0.047, 0.752, 0.082, 1],
                      duration: 1750,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1971be76dc7,
          },
          "a-91": {
            id: "a-91",
            title: "Hero image slide down",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-91-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-91-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: -5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-91-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1350,
                      easing: [0.047, 0.752, 0.082, 1],
                      duration: 1750,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-91-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1350,
                      easing: [0.047, 0.752, 0.082, 1],
                      duration: 1750,
                      target: {
                        useEventTarget: !0,
                        id: "050772fc-bc72-dec2-8740-5b63d38fb377",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1971be76dc7,
          },
          "a-93": {
            id: "a-93",
            title: "Marquee start reverse",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-93-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "dc9facce-bb54-4641-9dd9-26248c26a790",
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-93-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 7e4,
                      target: {
                        useEventTarget: !0,
                        id: "dc9facce-bb54-4641-9dd9-26248c26a790",
                      },
                      xValue: 50,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-93-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "dc9facce-bb54-4641-9dd9-26248c26a790",
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cf3eea1b3,
          },
          "a-94": {
            id: "a-94",
            title: "Marquees scroll animation",
            continuousParameterGroups: [
              {
                id: "a-94-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-94-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.one",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "b776457a-50ee-466c-7b08-f4749f0a53e7",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 34,
                    actionItems: [
                      {
                        id: "a-94-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.two",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "31016691-33e8-7f70-17ad-7dd8751882bf",
                            ],
                          },
                          xValue: 90,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 38,
                    actionItems: [
                      {
                        id: "a-94-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.three",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "fbb15d3c-278e-a0bc-18ff-a7ebe5ab3f16",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 42,
                    actionItems: [
                      {
                        id: "a-94-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.four",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "2911ad54-6d77-a66f-d2a9-b34f65f705f8",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 64,
                    actionItems: [
                      {
                        id: "a-94-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.one",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "b776457a-50ee-466c-7b08-f4749f0a53e7",
                            ],
                          },
                          xValue: -30,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-94-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.two",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "31016691-33e8-7f70-17ad-7dd8751882bf",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-94-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.three",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "fbb15d3c-278e-a0bc-18ff-a7ebe5ab3f16",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-94-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.four",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "2911ad54-6d77-a66f-d2a9-b34f65f705f8",
                            ],
                          },
                          xValue: -20,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1973561b853,
          },
          "a-95": {
            id: "a-95",
            title: "Marquees scroll animation mobile",
            continuousParameterGroups: [
              {
                id: "a-95-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-95-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.one",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "b776457a-50ee-466c-7b08-f4749f0a53e7",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 34,
                    actionItems: [
                      {
                        id: "a-95-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.two",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "31016691-33e8-7f70-17ad-7dd8751882bf",
                            ],
                          },
                          xValue: 90,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 38,
                    actionItems: [
                      {
                        id: "a-95-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.three",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "fbb15d3c-278e-a0bc-18ff-a7ebe5ab3f16",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 42,
                    actionItems: [
                      {
                        id: "a-95-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.four",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "2911ad54-6d77-a66f-d2a9-b34f65f705f8",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 64,
                    actionItems: [
                      {
                        id: "a-95-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.one",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "b776457a-50ee-466c-7b08-f4749f0a53e7",
                            ],
                          },
                          xValue: -10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-95-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.two",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "31016691-33e8-7f70-17ad-7dd8751882bf",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-95-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.three",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "fbb15d3c-278e-a0bc-18ff-a7ebe5ab3f16",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-95-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".marquee-line-inner.four",
                            selectorGuids: [
                              "47d8032a-3772-a6ab-f39a-41ed39efafcd",
                              "2911ad54-6d77-a66f-d2a9-b34f65f705f8",
                            ],
                          },
                          xValue: -10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1973561b853,
          },
          "a-96": {
            id: "a-96",
            title: "Project hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-96-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-thumbnail-image",
                        selectorGuids: ["49342b84-98b0-f8d9-ef9d-ec0670f9c409"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-96-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-title-front",
                        selectorGuids: ["b8794f5b-c0f8-4d33-4a60-4e7fcdacb91d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-title-back",
                        selectorGuids: ["795a5d61-6f41-f8cb-9053-84548ab28a39"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-arrow-front",
                        selectorGuids: ["81a8b0f1-8f8f-ba51-f648-1881c869dff6"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-arrow-back",
                        selectorGuids: ["c0c24641-99d5-3d13-b878-b2983c3be49b"],
                      },
                      xValue: -110,
                      yValue: 0,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-96-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-thumbnail-image",
                        selectorGuids: ["49342b84-98b0-f8d9-ef9d-ec0670f9c409"],
                      },
                      xValue: 1.07,
                      yValue: 1.07,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-96-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-title-front",
                        selectorGuids: ["b8794f5b-c0f8-4d33-4a60-4e7fcdacb91d"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-title-back",
                        selectorGuids: ["795a5d61-6f41-f8cb-9053-84548ab28a39"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-arrow-front",
                        selectorGuids: ["81a8b0f1-8f8f-ba51-f648-1881c869dff6"],
                      },
                      xValue: 110,
                      yValue: -110,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-96-n-16",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-arrow-back",
                        selectorGuids: ["c0c24641-99d5-3d13-b878-b2983c3be49b"],
                      },
                      xValue: 0,
                      yValue: -110,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1973b6bb146,
          },
          "a-97": {
            id: "a-97",
            title: "Project hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-97-n-10",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-thumbnail-image",
                        selectorGuids: ["49342b84-98b0-f8d9-ef9d-ec0670f9c409"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-97-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-title-front",
                        selectorGuids: ["b8794f5b-c0f8-4d33-4a60-4e7fcdacb91d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-97-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-title-back",
                        selectorGuids: ["795a5d61-6f41-f8cb-9053-84548ab28a39"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-97-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-arrow-front",
                        selectorGuids: ["81a8b0f1-8f8f-ba51-f648-1881c869dff6"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-97-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".project-arrow-back",
                        selectorGuids: ["c0c24641-99d5-3d13-b878-b2983c3be49b"],
                      },
                      xValue: -110,
                      yValue: 0,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1973b6bb146,
          },
          "a-98": {
            id: "a-98",
            title: "Project two parallax",
            continuousParameterGroups: [
              {
                id: "a-98-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-98-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae0",
                          },
                          yValue: 27,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-98-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae0",
                          },
                          yValue: -12,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1973fb7b1aa,
          },
          "a-99": {
            id: "a-99",
            title: "Project three parallax",
            continuousParameterGroups: [
              {
                id: "a-99-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-99-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae0",
                          },
                          yValue: 15,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-99-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "G3I7T7H3U6I4A2L5ON|e78b93ee-cbef-224f-bd2a-76d34981eae0",
                          },
                          yValue: -55,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1973fb7b1aa,
          },
          "a-100": {
            id: "a-100",
            title: "Fade in up delay 0.8",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-100-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-100-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-100-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-100-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outQuart",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-101": {
            id: "a-101",
            title: "Section link hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-101-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".section-link-underline-back",
                        selectorGuids: ["cd726ab0-ff39-4891-93e8-e9ec99343750"],
                      },
                      xValue: -105,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-101-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".section-link-underline-front",
                        selectorGuids: ["15543297-f76e-5864-e5a6-c6538f6c09b9"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-101-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.047, 0.752, 0.082, 1],
                      duration: 900,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".section-link-underline-front",
                        selectorGuids: ["15543297-f76e-5864-e5a6-c6538f6c09b9"],
                      },
                      xValue: 105,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-101-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 250,
                      easing: [0.047, 0.752, 0.082, 1],
                      duration: 900,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".section-link-underline-back",
                        selectorGuids: ["cd726ab0-ff39-4891-93e8-e9ec99343750"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19740b1422e,
          },
          "a-102": {
            id: "a-102",
            title: "Section link hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-102-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.047, 0.752, 0.082, 1],
                      duration: 900,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".section-link-underline-back",
                        selectorGuids: ["cd726ab0-ff39-4891-93e8-e9ec99343750"],
                      },
                      xValue: -105,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-102-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 250,
                      easing: [0.047, 0.752, 0.082, 1],
                      duration: 900,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".section-link-underline-front",
                        selectorGuids: ["15543297-f76e-5864-e5a6-c6538f6c09b9"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19740b1422e,
          },
          "a-103": {
            id: "a-103",
            title: "Benefits background animation",
            continuousParameterGroups: [
              {
                id: "a-103-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 36,
                    actionItems: [
                      {
                        id: "a-103-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".section-benefits-background-inner",
                            selectorGuids: [
                              "cd17f362-d2df-9cc7-d535-c8cf54fb32ab",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-103-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".section-benefits-background-inner",
                            selectorGuids: [
                              "cd17f362-d2df-9cc7-d535-c8cf54fb32ab",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 37,
                    actionItems: [
                      {
                        id: "a-103-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".section-benefits-background-inner",
                            selectorGuids: [
                              "cd17f362-d2df-9cc7-d535-c8cf54fb32ab",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-103-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".section-benefits-background-inner",
                            selectorGuids: [
                              "cd17f362-d2df-9cc7-d535-c8cf54fb32ab",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x197455aa575,
          },
          "a-105": {
            id: "a-105",
            title: "Benefits  item appear animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-105-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-105-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: null,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-105-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-105-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-105-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {},
                      xValue: 1,
                      yValue: null,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-105-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194acd62a12,
          },
          "a-109": {
            id: "a-109",
            title: "Awards row hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-109-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".awards-row-hover",
                        selectorGuids: ["47b0566e-4ffe-36d4-5d34-8deb82646c03"],
                      },
                      yValue: 0,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-109-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".awards-row-hover",
                        selectorGuids: ["47b0566e-4ffe-36d4-5d34-8deb82646c03"],
                      },
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-109-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 360,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
                      },
                      globalSwatchId: "--color--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197694ab7ea,
          },
          "a-110": {
            id: "a-110",
            title: "Awards row hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-110-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".awards-row-hover",
                        selectorGuids: ["47b0566e-4ffe-36d4-5d34-8deb82646c03"],
                      },
                      yValue: 0,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-110-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 360,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f1fea8ea-ffa6-c9a7-f9e2-134e0ca735d7",
                      },
                      globalSwatchId: "--color--primary",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x197694ab7ea,
          },
          "a-112": {
            id: "a-112",
            title: "Footer link slide down 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-112-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadc"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-112-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad4"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-112-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadc"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-112-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad4"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18c4594e31c,
          },
          "a-113": {
            id: "a-113",
            title: "Back top icon slide up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-113-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadd"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-113-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadd"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-113-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-113-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-113-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 50,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad0"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-113-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 50,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-113-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 50,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadd"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-113-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 50,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadd"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18c45db3ebc,
          },
          "a-115": {
            id: "a-115",
            title: "Back top text slide right",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-115-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-text",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad8"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-115-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 50,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-text",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad8"],
                      },
                      xValue: 5,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18c45e5a876,
          },
          "a-116": {
            id: "a-116",
            title: "Back top text slide left",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-116-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-text",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad8"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18c45e5a876,
          },
          "a-114": {
            id: "a-114",
            title: "Back top icon slide down",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-114-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-114-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-114-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadd"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-114-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".back-top-icon-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadd"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18c45db3ebc,
          },
          "a-111": {
            id: "a-111",
            title: "Footer link slide up 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-111-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad4"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-111-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad4"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-111-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadc"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-111-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad4"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-111-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadc"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-111-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-back",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddad4"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-111-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-front",
                        selectorGuids: ["159a514a-aae7-2880-55e2-93006d7ddadc"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18c4594e31c,
          },
          "a-106": {
            id: "a-106",
            title: "Hero image parallax",
            continuousParameterGroups: [
              {
                id: "a-106-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-106-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".hero-image-container",
                            selectorGuids: [
                              "b1d6a4e2-d4e5-2014-e0ce-7baca68d73b5",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "vw",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-106-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".hero-image-container",
                            selectorGuids: [
                              "b1d6a4e2-d4e5-2014-e0ce-7baca68d73b5",
                            ],
                          },
                          yValue: -30,
                          xUnit: "PX",
                          yUnit: "vw",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1975f9eef00,
          },
          "a-117": {
            id: "a-117",
            title: "Button small hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-117-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-117-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-117-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-117-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-117-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-117-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-117-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cf909e478,
          },
          "a-118": {
            id: "a-118",
            title: "Button small hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-118-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-118-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-118-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-front",
                        selectorGuids: ["5f1e875e-d7bf-9b76-426f-edc8e99102b7"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-118-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 420,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text-back",
                        selectorGuids: ["d33622f9-2f0c-e48e-20a4-5e458556879a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18cf909e478,
          },
          "a-125": {
            id: "a-125",
            title: "Fade in delay 1.25",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-125-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-125-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1250,
                      easing: "ease",
                      duration: 1250,
                      target: {
                        useEventTarget: !0,
                        id: "65f1b36a40a82f97a30596ea|59bdda3c-3e22-80ec-069e-8d8737f91d43",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18cee86c033,
          },
          "a-82": {
            id: "a-82",
            title: "Image vertical parallax",
            continuousParameterGroups: [
              {
                id: "a-82-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-82-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image-parallax-inner",
                            selectorGuids: [
                              "ea1c30b9-aa31-429c-5c81-815d027254b5",
                            ],
                          },
                          yValue: -14,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-82-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image-parallax-inner",
                            selectorGuids: [
                              "ea1c30b9-aa31-429c-5c81-815d027254b5",
                            ],
                          },
                          yValue: 14,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18c21960e99,
          },
          "a-129": {
            id: "a-129",
            title: "Fade in up short",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-129-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      yValue: 3.7,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-129-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-129-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-129-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1977ef99f20,
          },
          "a-130": {
            id: "a-130",
            title: "First fade in up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-130-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-130-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      yValue: -0.0625,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-130-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-130-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "G3I7T7H3U6I4A2L5ON|f963208f-2fc1-81c2-d43d-cf24c8a2b15c",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197ac2ac7fe,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
