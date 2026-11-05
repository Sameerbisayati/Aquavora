export default function initAnimations() {
  var css = function (n) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(n)
      .trim();
  };
  var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  /* hero waves */
  var c = document.getElementById("waves"),
    x = c.getContext("2d"),
    W,
    H,
    dpr = Math.min(devicePixelRatio || 1, 2),
    m = { x: -999, y: -999, vx: 0 },
    rip = [],
    t = 0,
    col;
  function size() {
    W = c.clientWidth;
    H = c.clientHeight;
    c.width = W * dpr;
    c.height = H * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    col = css("--aqua");
  }
  size();
  addEventListener("resize", size);
  var hero = c.parentNode;
  hero.addEventListener("pointermove", function (e) {
    var r = c.getBoundingClientRect();
    m.vx = e.clientX - r.left - m.x;
    m.x = e.clientX - r.left;
    m.y = e.clientY - r.top;
    if (Math.random() < 0.12) rip.push({ x: m.x, y: m.y, r: 0 });
  });
  hero.addEventListener("pointerdown", function (e) {
    var r = c.getBoundingClientRect();
    rip.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0 });
  });
  function draw() {
    t += 0.012;
    x.clearRect(0, 0, W, H);
    var L = 34,
      gap = H / L;
    rip = rip.filter(function (p) {
      p.r += 3.2;
      return p.r < 420;
    });
    for (var i = 0; i < L; i++) {
      var by = i * gap + gap / 2;
      x.beginPath();
      for (var px = 0; px <= W; px += 10) {
        var y =
          by +
          Math.sin(px * 0.006 + t + i * 0.35) * 10 +
          Math.sin(px * 0.013 - t * 1.3 + i * 0.2) * 5;
        var dx = px - m.x,
          dy = by - m.y,
          d = Math.sqrt(dx * dx + dy * dy);
        y += Math.exp((-d * d) / 26000) * -38 * Math.sin(t * 6 - d * 0.05);
        for (var k = 0; k < rip.length; k++) {
          var q = rip[k],
            rd = Math.hypot(px - q.x, by - q.y),
            e = rd - q.r;
          y +=
            Math.exp((-e * e) / 600) *
            18 *
            (1 - q.r / 420) *
            Math.sign(Math.sin(e * 0.2));
        }
        px ? x.lineTo(px, y) : x.moveTo(px, y);
      }
      x.strokeStyle = col;
      x.globalAlpha = 0.1 + 0.5 * (i / L);
      x.lineWidth = 1.2;
      x.stroke();
    }
    x.globalAlpha = 1;
    if (!reduce) requestAnimationFrame(draw);
  }
  draw();
  if (reduce) setTimeout(draw, 50);
  /* treatment */
  var tc = document.getElementById("tc"),
    tx = tc.getContext("2d"),
    TS,
    P = [],
    prog = 0,
    tank = document.getElementById("tank"),
    ntu = document.getElementById("ntu"),
    lis = document.querySelectorAll("#steps li"),
    sec = document.getElementById("process");
  function tsize() {
    TS = tc.clientWidth;
    tc.width = TS * dpr;
    tc.height = TS * dpr;
    tx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  tsize();
  addEventListener("resize", tsize);
  for (var i = 0; i < 260; i++)
    P.push({
      x: Math.random(),
      y: Math.random(),
      s: Math.random() * 5 + 1,
      v: Math.random() * 0.0007 + 0.0002,
      k: Math.random(),
    });
  function mix(a, b, f) {
    return Math.round(a + (b - a) * f);
  }
  function loop() {
    var r = sec.getBoundingClientRect(),
      h = sec.offsetHeight - innerHeight;
    prog = Math.min(1, Math.max(0, -r.top / h));
    var f = prog,
      cl = [
        [107, 85, 48],
        [47, 143, 181],
        [127, 227, 214],
      ],
      a = f < 0.6 ? cl[0] : cl[1],
      b = f < 0.6 ? cl[1] : cl[2],
      g = f < 0.6 ? f / 0.6 : (f - 0.6) / 0.4;
    tank.style.setProperty(
      "--w",
      "rgb(" +
        mix(a[0], b[0], g) +
        "," +
        mix(a[1], b[1], g) +
        "," +
        mix(a[2], b[2], g) +
        ")",
    );
    ntu.textContent = Math.round(f * 99.6 * 10) / 10 + "%";
    var si = Math.min(3, Math.floor(prog * 4));
    lis.forEach(function (el, i) {
      el.classList.toggle("on", i === si);
    });
    var bg = document.getElementById("bgn");
    if (bg.dataset.s !== String(si)) {
      bg.dataset.s = si;
      bg.textContent = "0" + (si + 1);
      bg.classList.remove("pop");
      void bg.offsetWidth;
      bg.classList.add("pop");
      if (prog > 0.02 && prog < 0.98)
        document.documentElement.style.setProperty(
          "--bg",
          (matchMedia("(prefers-color-scheme:dark)").matches
            ? ["#061c2a", "#0a2a2a", "#062a3a", "#08323a"]
            : ["#dbeaf3", "#d9eeee", "#d3e8f2", "#d1eaec"])[si],
        );
    }
    tx.clearRect(0, 0, TS, TS);
    var n = Math.floor(P.length * (1 - prog));
    for (var i = 0; i < n; i++) {
      var p = P[i];
      if (!reduce) {
        p.y -= p.v;
        p.x += Math.sin(t * 3 + p.k * 9) * 0.0006;
        if (p.y < 0) p.y = 1;
      }
      tx.beginPath();
      tx.arc(p.x * TS, p.y * TS, p.s * (1 - prog * 0.6), 0, 6.3);
      tx.fillStyle = "rgba(40,28,10," + (0.55 * (1 - prog) + 0.05) + ")";
      tx.fill();
    }
    requestAnimationFrame(loop);
  }
  loop();
  /* marquee, words, loop, calculator */
  var mq = document.querySelector(".mq>div"),
    mvel = 0,
    lastY = scrollY,
    mf = document.querySelector(".mf p");
  mf.innerHTML = mf.textContent
    .trim()
    .split(/\s+/)
    .map(function (w) {
      return '<span class="w">' + w + "</span>";
    })
    .join(" ");
  var ws = mf.querySelectorAll(".w"),
    dot = document.getElementById("dot"),
    ring = document.getElementById("ring"),
    RL = ring.getTotalLength(),
    ll = document.querySelectorAll("#lsteps li"),
    nds = document.querySelectorAll(".nd"),
    lsec = document.getElementById("loop"),
    dc = ["#8a6d3b", "#7fe3d6", "#2f8fb5", "#7fe3d6"];
  var cv = document.getElementById("cv"),
    cr = document.getElementById("cr"),
    cs = 0,
    cp = 0,
    ct = [0, 0];
  function calc() {
    var v = +cv.value,
      r = +cr.value,
      l = (v * 1000 * 365 * r) / 100;
    document.getElementById("cvo").textContent = v.toLocaleString() + " KLD";
    document.getElementById("cro").textContent = r + "%";
    ct = [l / 1e6, l / 2.5e6];
    document.getElementById("fill").style.height = r + "%";
  }
  cv.oninput = cr.oninput = calc;
  calc();
  function clamp(v) {
    return Math.min(1, Math.max(0, v));
  }
  function l2() {
    var y = scrollY;
    mvel += (y - lastY - mvel) * 0.1;
    lastY = y;

    var r = mf.getBoundingClientRect(),
      p = clamp((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.5));
    ws.forEach(function (w, i) {
      w.classList.toggle("on", i < p * ws.length);
    });
    var q = lsec.getBoundingClientRect(),
      lp = clamp(-q.top / (lsec.offsetHeight - innerHeight)),
      pt = ring.getPointAtLength(lp * RL * 0.9999);
    dot.setAttribute("cx", pt.x);
    dot.setAttribute("cy", pt.y);
    ring.style.strokeDasharray = lp * RL + " " + RL;
    var sv = lsec.querySelector("svg");
    sv.style.transform =
      "scale(" + (0.82 + lp * 0.22) + ") rotate(" + (0.5 - lp) * 20 + "deg)";
    lsec.querySelector(".rb2").style.transform = "rotate(" + lp * 300 + "deg)";
    var si = Math.min(3, Math.floor(lp * 4));
    dot.setAttribute("fill", dc[si]);
    var ltx = document.getElementById("lt"),
      nm = ["Source", "Treat", "Use", "Reclaim"][si];
    if (ltx.textContent !== nm) ltx.textContent = nm;
    ll.forEach(function (el, i) {
      el.classList.toggle("on", i === si);
    });
    nds.forEach(function (n, i) {
      n.classList.toggle("on", lp >= i * 0.25);
    });
    cs += (ct[0] - cs) * 0.08;
    cp += (ct[1] - cp) * 0.08;
    document.getElementById("saved").textContent = cs.toFixed(1);
    document.getElementById("pools").textContent =
      Math.round(cp).toLocaleString();
    requestAnimationFrame(l2);
  }
  l2();
  var bt = document.querySelector(".btn");
  bt.addEventListener("pointermove", function (e) {
    var r = bt.getBoundingClientRect();
    bt.style.transform =
      "translate(" +
      (e.clientX - r.left - r.width / 2) * 0.25 +
      "px," +
      (e.clientY - r.top - r.height / 2) * 0.35 +
      "px) scale(1.05)";
  });
  bt.addEventListener("pointerleave", function () {
    bt.style.transform = "";
  });
  var io2 = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io2.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  document.querySelectorAll("[data-in]").forEach(function (el) {
    io2.observe(el);
  });
  var cf = document.getElementById("cf"),
    ok = document.getElementById("ok");
  cf.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = {};
    new FormData(cf).forEach(function (v, k) {
      d[k] = v;
    });
    d.submittedAt = new Date().toISOString();
    try {
      var a = JSON.parse(localStorage.getItem("aquvora_enquiries") || "[]");
      if (!Array.isArray(a)) a = [];
      a.push(d);
      localStorage.setItem("aquvora_enquiries", JSON.stringify(a));
      cf.hidden = true;
      ok.hidden = false;
      ok.focus();
    } catch (x) {
      alert("Unable to record your enquiry. Please try again.");
    }
  });
  document.getElementById("again").onclick = function () {
    cf.reset();
    ok.hidden = true;
    cf.hidden = false;
  };
  var nv = document.getElementById("nv"),
    nl = document.getElementById("nl"),
    mb = document.getElementById("mb");
  function tg(o) {
    nl.classList.toggle("open", o);
    nv.classList.toggle("open", o);
    mb.setAttribute("aria-expanded", o);
    mb.textContent = o ? "Close" : "Menu";
    document.body.style.overflow = o ? "hidden" : "";
  }
  mb.onclick = function () {
    tg(!nl.classList.contains("open"));
  };
  nl.addEventListener("click", function (e) {
    if (e.target.tagName === "A") tg(false);
  });
  addEventListener("keydown", function (e) {
    if (e.key === "Escape") tg(false);
  });
  var sts = document.querySelectorAll(".st span"),
    sw = document.querySelector(".st");
  function l3() {
    var r = sw.getBoundingClientRect(),
      p = (innerHeight - r.top) / (innerHeight + r.height),
      k = reduce ? 0 : (p - 0.5) * innerWidth * 0.25;
    sts.forEach(function (s, i) {
      s.style.transform = "translateX(" + (i % 2 ? k : -k) + "px)";
    });
    requestAnimationFrame(l3);
  }
  l3();
  var pl = document.getElementById("pl"),
    pt = document.getElementById("plt"),
    pn = document.getElementById("pln"),
    h1 = document.querySelector(".hero h1");
  (function sp(n, c) {
    c = c || { i: 0 };
    Array.prototype.slice.call(n.childNodes).forEach(function (k) {
      if (k.nodeType === 3) {
        var f = document.createDocumentFragment();
        k.textContent.split("").forEach(function (ch) {
          var s = document.createElement("span");
          s.className = "ch";
          s.style.setProperty("--i", c.i++);
          s.setAttribute("aria-hidden", "true");
          s.textContent = ch;
          f.appendChild(s);
        });
        k.parentNode.replaceChild(f, k);
      } else sp(k, c);
    });
  })(h1);
  h1.setAttribute("aria-label", "Water. Reimagined.");
  var t0 = performance.now(),
    dur = reduce ? 1 : 1700;
  (function pf(now) {
    var q = Math.min(1, (now - t0) / dur),
      v = 1 - Math.pow(1 - q, 2);
    pt.style.setProperty("--p", v * 100 + "%");
    pn.textContent = Math.round(v * 100);
    if (q < 1) requestAnimationFrame(pf);
    else {
      pl.classList.add("out");
      document.body.classList.add("go");
      setTimeout(function () {
        pl.remove();
      }, 1000);
    }
  })(t0);
  var cu = document.getElementById("cur"),
    pvv = document.getElementById("pv"),
    mx = innerWidth / 2,
    my = innerHeight / 2,
    cx = mx,
    cy = my,
    px = mx,
    py = my,
    hz = document.getElementById("technology"),
    hzt = hz.querySelector(".hzt"),
    hzb = hz.querySelector(".hzp i"),
    brr = document.getElementById("bar");
  addEventListener("pointermove", function (e) {
    mx = e.clientX;
    my = e.clientY;
  });
  document.addEventListener("pointerover", function (e) {
    cu.classList.toggle(
      "big",
      !!e.target.closest("a,button,.pj,.hzc,.svc div"),
    );
  });
  function hzs() {
    hz.style.height = hzt.scrollWidth - innerWidth + innerHeight + "px";
  }
  hzs();
  addEventListener("resize", hzs);
  addEventListener("load", hzs);
  document.querySelectorAll(".pj").forEach(function (p) {
    var d = p.dataset,
      b = "<b style='font-weight:500;color:var(--ink)'>";
    p.querySelector(".dt").innerHTML =
      d.d +
      "<br><br>" +
      b +
      "Challenge.</b> " +
      d.c +
      "<br>" +
      b +
      "Approach.</b> " +
      d.a;
    p.addEventListener("pointerenter", function () {
      pvv.innerHTML =
        "<h4>" +
        d.s +
        " · " +
        d.t +
        "</h4><p>" +
        d.c +
        "</p><span>" +
        d.a +
        "</span>";
      pvv.classList.add("on");
    });
    p.addEventListener("pointerleave", function () {
      pvv.classList.remove("on");
    });
  });
  document.querySelectorAll(".fi button").forEach(function (b) {
    b.addEventListener("click", function () {
      var i = b.parentNode,
        o = !i.classList.contains("o");
      i.classList.toggle("o", o);
      b.setAttribute("aria-expanded", o);
    });
  });
  document.querySelectorAll(".svc div").forEach(function (d) {
    d.addEventListener("pointermove", function (e) {
      var r = d.getBoundingClientRect();
      d.style.setProperty("--mx", e.clientX - r.left + "px");
      d.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });
  function l4() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cu.style.transform = "translate(" + cx + "px," + cy + "px)";
    px += (mx - px) * 0.12;
    py += (my - py) * 0.12;
    pvv.style.transform =
      "translate(" +
      Math.max(10, Math.min(px + 26, innerWidth - 390)) +
      "px," +
      Math.max(10, Math.min(py + 26, innerHeight - 230)) +
      "px)";
    var y = scrollY,
      H = document.documentElement.scrollHeight - innerHeight;
    nv.classList.toggle("sc", y > 20);
    brr.style.transform = "scaleX(" + (H > 0 ? y / H : 0) + ")";
    var f = Math.min(1, y / innerHeight);
    if (!reduce) {
      h1.style.transform = "translateY(" + f * 14 + "vh)";
      h1.style.opacity = 1 - f * 1.1;
    }
    var q = hz.getBoundingClientRect(),
      p = Math.min(1, Math.max(0, -q.top / (hz.offsetHeight - innerHeight)));
    hzt.style.transform =
      "translateX(" + -p * (hzt.scrollWidth - innerWidth) + "px)";
    hzb.style.transform = "scaleX(" + p + ")";
    requestAnimationFrame(l4);
  }
  l4();
  var cm = [
      [".hero", "#0e1511"],
      [".mf", "#0e1511"],
      ["#principles", "#0a1f24"],
      ["#process", "#061c2a"],
      ["#loop", "#0e1511"],
      ["#approach", "#0b1d1a"],
      ["#services", "#0e1511"],
      ["#technology", "#08141f"],
      ["#industries", "#0e1511"],
      ["#projects", "#12180f"],
      ["#impact", "#062a2a"],
      ["#reuse", "#0e1511"],
      [".pb", "#0e1511"],
      ["#faq", "#0e1511"],
      ["#contact", "#04141a"],
    ].map(function (a) {
      return [document.querySelector(a[0]), a[1]];
    }),
    cc = "",
    dk = matchMedia("(prefers-color-scheme:dark)").matches;
  var LT = {
      "#0e1511": "#eef5f1",
      "#0a1f24": "#e0f0f0",
      "#061c2a": "#dbeaf3",
      "#0b1d1a": "#e2f1ec",
      "#08141f": "#e0e9f3",
      "#12180f": "#eef0df",
      "#062a2a": "#d6efec",
      "#04141a": "#dceaf0",
    },
    dg = [];
  function cbg() {
    for (var i = 0; i < cm.length; i++) {
      var r = cm[i][0].getBoundingClientRect();
      if (r.top < innerHeight * 0.5 && r.bottom > innerHeight * 0.5) {
        if (cc !== cm[i][1]) {
          cc = cm[i][1];
          document.documentElement.style.setProperty(
            "--bg",
            dk ? cc : LT[cc] || cc,
          );
        }
        var a = -1;
        dg.forEach(function (d, k) {
          if (d.i <= i) a = k;
        });
        dg.forEach(function (d, k) {
          d.e.classList.toggle("on", k === a);
        });
        return;
      }
    }
  }
  var cau = document.getElementById("cau"),
    fcv = document.getElementById("fc"),
    fx = fcv.getContext("2d"),
    FW = 0,
    FH = 0,
    FP = [],
    G = null,
    zs = document.querySelectorAll(".ph,.sd,.res"),
    mqc = document.querySelector(".mq");
  (function () {
    var g = cau.getContext("webgl");
    if (!g) return;
    var vs = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}",
      fs =
        "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform float t;uniform vec2 r;void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=mod(vec2(uv.x*r.x/r.y,uv.y)*12.56637,6.28318)-250.;vec2 i=p;float c=1.;float k=.005;for(int n=0;n<5;n++){float q=t*(1.-3.5/float(n+1));i=p+vec2(cos(q-i.x)+sin(q+i.y),sin(q-i.y)+cos(q+i.x));c+=1./length(vec2(p.x/(sin(i.x+q)/k),p.y/(cos(i.y+q)/k)));}c/=5.;c=1.17-pow(c,1.4);vec3 w=vec3(pow(abs(c),8.));w=clamp(w+vec3(0.,.35,.5),0.,1.);vec3 col=w*vec3(.4,.85,.8)*(.5+.5*uv.y);col*=1.-.6*length(uv-.5);gl_FragColor=vec4(col,1.);}";
    function sh(ty, s) {
      var o = g.createShader(ty);
      g.shaderSource(o, s);
      g.compileShader(o);
      return o;
    }
    var pr = g.createProgram();
    g.attachShader(pr, sh(g.VERTEX_SHADER, vs));
    g.attachShader(pr, sh(g.FRAGMENT_SHADER, fs));
    g.linkProgram(pr);
    if (!g.getProgramParameter(pr, g.LINK_STATUS)) return;
    g.useProgram(pr);
    var b = g.createBuffer();
    g.bindBuffer(g.ARRAY_BUFFER, b);
    g.bufferData(
      g.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      g.STATIC_DRAW,
    );
    var al = g.getAttribLocation(pr, "a");
    g.enableVertexAttribArray(al);
    g.vertexAttribPointer(al, 2, g.FLOAT, false, 0, 0);
    G = {
      g: g,
      t: g.getUniformLocation(pr, "t"),
      r: g.getUniformLocation(pr, "r"),
    };
  })();
  function gsz() {
    if (G) {
      var d = Math.min(dpr, 1.5);
      cau.width = cau.clientWidth * d;
      cau.height = cau.clientHeight * d;
      G.g.viewport(0, 0, cau.width, cau.height);
    }
    FW = fcv.clientWidth;
    FH = fcv.clientHeight;
    fcv.width = FW * dpr;
    fcv.height = FH * dpr;
    fx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  gsz();
  addEventListener("resize", gsz);
  function mkp(init) {
    return {
      x: init ? Math.random() * FW : -10,
      y: FH * 0.06 + Math.random() * FH * 0.58,
      s: Math.random() * 3 + 1.5,
      v: Math.random() * 0.8 + 0.5,
      k: Math.random(),
      d: Math.random() < 0.6,
      a: 1,
      c: 0,
    };
  }
  for (var i = 0; i < 140; i++) FP.push(mkp(1));
  function flow() {
    fx.clearRect(0, 0, FW, FH);
    var gs = [0.3, 0.55, 0.8];
    gs.forEach(function (gx) {
      fx.beginPath();
      fx.moveTo(FW * gx, FH * 0.04);
      fx.lineTo(FW * gx, FH * 0.7);
      fx.strokeStyle = "rgba(127,227,214,.55)";
      fx.lineWidth = 2;
      fx.setLineDash([6, 8]);
      fx.shadowColor = "#7fe3d6";
      fx.shadowBlur = 12;
      fx.stroke();
    });
    fx.setLineDash([]);
    fx.shadowBlur = 0;
    FP.forEach(function (p, i) {
      var ox = p.x;
      p.x += p.v * 1.2;
      p.y += p.c ? 2.2 : Math.sin(t * 2 + p.k * 20) * 0.35;
      if (p.c) p.a -= 0.025;
      if (!p.c && p.d)
        gs.forEach(function (gx) {
          var X = FW * gx;
          if (ox < X && p.x >= X && Math.random() < 0.5) p.c = 1;
        });
      if (p.x > FW || p.a <= 0) {
        FP[i] = mkp(0);
        return;
      }
      var f = Math.min(1, p.x / FW),
        dy = p.c ? 1 : p.d ? 1 - f : 0,
        r = Math.round(127 + 11 * dy),
        g = Math.round(227 - 118 * dy),
        b = Math.round(214 - 155 * dy);
      fx.beginPath();
      fx.arc(p.x, p.y, p.s, 0, 6.3);
      fx.fillStyle =
        "rgba(" + r + "," + g + "," + b + "," + Math.max(0, p.a) * 0.85 + ")";
      fx.fill();
    });
  }
  function l5() {
    cbg();
    if (G) {
      var a = cau.getBoundingClientRect();
      if (a.bottom > 0 && a.top < innerHeight) {
        G.g.uniform1f(G.t, performance.now() * 0.0005 + 23);
        G.g.uniform2f(G.r, cau.width, cau.height);
        G.g.drawArrays(G.g.TRIANGLE_STRIP, 0, 4);
      }
    }
    if (!reduce) {
      var b2 = fcv.getBoundingClientRect();
      if (b2.bottom > 0 && b2.top < innerHeight) flow();
      c.style.transform =
        "scale(" + (1 + Math.min(1, scrollY / innerHeight) * 0.3) + ")";

      zs.forEach(function (e) {
        var r = e.getBoundingClientRect(),
          d = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        e.style.transform =
          "scale(" +
          (1 - Math.min(0.14, Math.abs(d) * 0.2)) +
          ") rotate(" +
          d * -1.5 +
          "deg)";
      });
      document.querySelectorAll(".hzc").forEach(function (e) {
        var r = e.getBoundingClientRect(),
          d = (r.left + r.width / 2 - innerWidth / 2) / innerWidth;
        e.style.setProperty(
          "--k",
          Math.max(0, 1 - Math.abs(d) * 2.4).toFixed(2),
        );
        e.style.transform =
          "perspective(1200px) rotateY(" +
          d * -16 +
          "deg) scale(" +
          (1 - Math.min(0.12, Math.abs(d) * 0.14)) +
          ")";
      });
    }
    requestAnimationFrame(l5);
  }
  l5();
  var io3 = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io3.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  function wsp(n, c) {
    Array.prototype.slice.call(n.childNodes).forEach(function (k) {
      if (k.nodeType === 3) {
        var f = document.createDocumentFragment();
        k.textContent.split(/(\s+)/).forEach(function (w) {
          if (!w) return;
          if (/^\s+$/.test(w)) {
            f.appendChild(document.createTextNode(" "));
            return;
          }
          var o = document.createElement("span"),
            i = document.createElement("span");
          o.className = "wd";
          i.style.setProperty("--i", c.i++);
          i.textContent = w;
          o.appendChild(i);
          f.appendChild(o);
        });
        k.parentNode.replaceChild(f, k);
      } else if (k.nodeType === 1) wsp(k, c);
    });
  }
  document.querySelectorAll("section h2:not(.z1),.ft h2").forEach(function (h) {
    wsp(h, { i: 0 });
    io3.observe(h);
  });
  var zp = document.getElementById("portal"),
    zc = document.getElementById("zc"),
    z1 = document.getElementById("z1"),
    z2 = document.getElementById("z2"),
    prs = document.getElementById("process"),
    tkk = document.getElementById("tank"),
    hbs = document.querySelectorAll(".hzc b");
  function l6() {
    var q = zp.getBoundingClientRect(),
      p = clamp(-q.top / (zp.offsetHeight - innerHeight)),
      s2 = clamp((p - 0.62) * 3.5);
    zc.style.transform = "scale(" + (0.01 + Math.pow(p, 2.2) * 17) + ")";
    z1.style.transform = "scale(" + (1 + p * 1.4) + ")";
    z1.style.opacity = Math.max(0, 1 - p * 2.2);
    z2.style.opacity = s2;
    z2.style.transform = "scale(" + (0.8 + s2 * 0.2) + ")";
    var r = prs.getBoundingClientRect(),
      pp = clamp(-r.top / (prs.offsetHeight - innerHeight));
    tkk.style.setProperty("--r", pp * 540 + "deg");
    tkk.style.transform = "scale(" + (1 + 0.04 * Math.sin(pp * Math.PI)) + ")";
    var h = hz.getBoundingClientRect(),
      hp = clamp(-h.top / (hz.offsetHeight - innerHeight));
    requestAnimationFrame(l6);
  }
  l6();
  document.querySelectorAll(".ph").forEach(function (e) {
    io2.observe(e);
  });
  document.fonts && document.fonts.ready.then(hzs);
  var dl = [
      [0, "Home"],
      [2, "Mission"],
      [3, "Process"],
      [4, "Reuse loop"],
      [6, "Capabilities"],
      [7, "Technology"],
      [8, "Industries"],
      [9, "Projects"],
      [10, "Impact"],
      [13, "Questions"],
      [14, "Contact"],
    ],
    dw = document.createElement("div");
  dw.id = "dots";
  dl.forEach(function (a) {
    var e = document.createElement("a");
    e.href = "#";
    e.setAttribute("data-l", a[1]);
    e.setAttribute("aria-label", a[1]);
    e.onclick = function (ev) {
      ev.preventDefault();
      cm[a[0]][0].scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    };
    dw.appendChild(e);
    dg.push({ i: a[0], e: e });
  });
  document.body.appendChild(dw);
  var wmE = document.querySelector(".wm");
  (function l7() {
    var r = wmE.getBoundingClientRect(),
      p = clamp(1 - r.top / innerHeight);
    if (!reduce) {
      wmE.style.transform =
        "translateY(" + (1 - p) * 6 + "vh) scale(" + (0.84 + 0.16 * p) + ")";
      wmE.style.opacity = 0.25 + 0.75 * p;
    }
    requestAnimationFrame(l7);
  })();
  /* counters */
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target,
          n = +el.dataset.n,
          s = performance.now();
        (function f(now) {
          var q = Math.min(1, (now - s) / 1400);
          el.textContent = Math.round(n * (1 - Math.pow(1 - q, 3)));
          if (q < 1) requestAnimationFrame(f);
        })(s);
      });
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll("[data-n]").forEach(function (el) {
    io.observe(el);
  });
  
  /* PREMIUM AQUVORA ANIMATION LAYER */

  // Cinematic section reveals
  var premiumObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("premium-visible");
          premiumObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  document
    .querySelectorAll(
      "section > .container, section > .inner, .svc, .pj, .ph, .res, .st, .ft"
    )
    .forEach(function (el, index) {
      if (el.closest(".hero")) return;

      el.classList.add("premium-reveal");
      el.style.setProperty("--reveal-delay", (index % 4) * 90 + "ms");
      premiumObserver.observe(el);
    });

  // Premium 3D tilt interaction
  if (!reduce && matchMedia("(pointer:fine)").matches) {
    document
      .querySelectorAll(".pj, .hzc, .svc div, .ph, .res")
      .forEach(function (card) {
        card.addEventListener("pointermove", function (e) {
          var r = card.getBoundingClientRect();
          var x = (e.clientX - r.left) / r.width;
          var y = (e.clientY - r.top) / r.height;

          var rotateY = (x - 0.5) * 9;
          var rotateX = (0.5 - y) * 9;

          card.style.setProperty("--tilt-x", rotateX + "deg");
          card.style.setProperty("--tilt-y", rotateY + "deg");
          card.style.setProperty("--mouse-x", x * 100 + "%");
          card.style.setProperty("--mouse-y", y * 100 + "%");
          card.classList.add("premium-tilting");
        });

        card.addEventListener("pointerleave", function () {
          card.classList.remove("premium-tilting");
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
        });
      });
  }

  // Smooth magnetic interaction for buttons
  if (!reduce && matchMedia("(pointer:fine)").matches) {
    document
      .querySelectorAll(".btn, .hero a, .ft a")
      .forEach(function (button) {
        button.addEventListener("pointermove", function (e) {
          var r = button.getBoundingClientRect();
          var x = e.clientX - r.left - r.width / 2;
          var y = e.clientY - r.top - r.height / 2;

          button.style.setProperty("--mag-x", x * 0.12 + "px");
          button.style.setProperty("--mag-y", y * 0.12 + "px");
          button.classList.add("premium-magnetic");
        });

        button.addEventListener("pointerleave", function () {
          button.classList.remove("premium-magnetic");
          button.style.setProperty("--mag-x", "0px");
          button.style.setProperty("--mag-y", "0px");
        });
      });
  }

  // Subtle parallax for visual elements
  var parallaxItems = document.querySelectorAll(
    ".hero .wm, .hero .hero-visual, .hero .orb, .ph, .sd"
  );

  var parallaxFrame = false;

  function premiumParallax() {
    if (reduce) return;

    if (parallaxFrame) return;

    parallaxFrame = true;

    requestAnimationFrame(function () {
      parallaxItems.forEach(function (el) {
        var r = el.getBoundingClientRect();

        if (r.bottom < 0 || r.top > innerHeight) return;

        var distance =
          (r.top + r.height / 2 - innerHeight / 2) / innerHeight;

        el.style.setProperty(
          "--premium-parallax",
          distance * -16 + "px"
        );
      });

      parallaxFrame = false;
    });
  }

  addEventListener("scroll", premiumParallax, { passive: true });
  premiumParallax();

  // Smooth anchor navigation
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(
        link.getAttribute("href")
      );

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    });
  });

  // Animated water-inspired hover glow
  document.querySelectorAll(".pj, .hzc, .svc div").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();

      el.style.setProperty(
        "--glow-x",
        e.clientX - r.left + "px"
      );

      el.style.setProperty(
        "--glow-y",
        e.clientY - r.top + "px"
      );
    });
  });

  // Premium entrance for the hero content
  var heroContent = document.querySelectorAll(
    ".hero h1, .hero p, .hero .btn, .hero .eyebrow"
  );

  heroContent.forEach(function (el, index) {
    el.style.setProperty("--hero-delay", index * 140 + "ms");
    el.classList.add("premium-hero-enter");
  });

  // Keep animations accessible
  if (reduce) {
    document.querySelectorAll(".premium-reveal").forEach(function (el) {
      el.classList.add("premium-visible");
    });
  }

}
