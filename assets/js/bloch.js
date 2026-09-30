/* Animated Bloch sphere: a qubit state precessing about z while its polar angle slowly nods. */
(function () {
  var fig = document.querySelector('.bloch svg');
  if (!fig) return;

  var ELEV = 0.32;            // camera elevation (rad)
  var AZ = -0.55;             // camera azimuth (rad)
  var ce = Math.cos(ELEV), se = Math.sin(ELEV), ca = Math.cos(AZ), sa = Math.sin(AZ);

  // 3D (x, y, z) → screen [sx, sy, depth]; depth > 0 means facing the viewer.
  function project(x, y, z) {
    var xr = x * ca - y * sa, yr = x * sa + y * ca;
    return [xr, -(z * ce + yr * se), z * se - yr * ce];
  }
  function ringPath(fn, front) {
    var d = '', pen = false;
    for (var i = 0; i <= 180; i++) {
      var t = (i / 180) * 2 * Math.PI, p = fn(t), s = project(p[0], p[1], p[2]);
      if ((s[2] >= 0) === front) {
        d += (pen ? 'L' : 'M') + s[0].toFixed(4) + ' ' + s[1].toFixed(4);
        pen = true;
      } else pen = false;
    }
    return d;
  }
  var equator = function (t) { return [Math.cos(t), Math.sin(t), 0]; };
  var meridian = function (t) { return [Math.cos(t), 0, Math.sin(t)]; };
  var q = function (sel) { return fig.querySelector(sel); };
  q('[data-ring="equator-front"]').setAttribute('d', ringPath(equator, true));
  q('[data-ring="equator-back"]').setAttribute('d', ringPath(equator, false));
  q('[data-ring="meridian-front"]').setAttribute('d', ringPath(meridian, true));
  q('[data-ring="meridian-back"]').setAttribute('d', ringPath(meridian, false));

  var vec = q('.b-vec'), tip = q('.b-tip'), trail = q('.b-trail'), drop = q('.b-drop');
  var history = [], TRAIL = 70;

  function state(t) {
    var theta = 1.0 + 0.55 * Math.sin(t * 0.23);
    var phi = t * 0.9;
    return [Math.sin(theta) * Math.cos(phi), Math.sin(theta) * Math.sin(phi), Math.cos(theta)];
  }
  /* Decoherence: the transverse (coherent) part decays with T2, the longitudinal part with T1,
     so the state spirals in from the surface toward the maximally mixed state at the center.
     Every CYCLE seconds a fresh pure state is re-prepared. */
  var T2 = 3.2, T1 = 5.5, CYCLE = 13, lastCycle = -1;
  var readout = document.querySelector('[data-bloch-r]');
  function draw(t, decohere) {
    var v = state(t), r = 1;
    if (decohere) {
      var cyc = Math.floor(t / CYCLE), tc = t - cyc * CYCLE;
      if (cyc !== lastCycle) { history = []; lastCycle = cyc; }   // re-prepared: start a new trail
      var fT = Math.exp(-tc / T2), fL = Math.exp(-tc / T1);
      v = [v[0] * fT, v[1] * fT, v[2] * fL];
      r = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    }
    if (readout) readout.textContent = r.toFixed(2);
    var s = project(v[0], v[1], v[2]), base = project(v[0], v[1], 0);
    vec.setAttribute('x2', s[0]); vec.setAttribute('y2', s[1]);
    tip.setAttribute('cx', s[0]); tip.setAttribute('cy', s[1]);
    drop.setAttribute('x1', s[0]); drop.setAttribute('y1', s[1]);
    drop.setAttribute('x2', base[0]); drop.setAttribute('y2', base[1]);
    history.push(s[0].toFixed(4) + ',' + s[1].toFixed(4));
    if (history.length > TRAIL) history.shift();
    trail.setAttribute('points', history.join(' '));
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (var i = 0; i < TRAIL; i++) draw(2 + i * 0.05, false);
    return;
  }
  var start = performance.now();
  (function frame(now) {
    draw((now - start) / 1000, true);
    requestAnimationFrame(frame);
  })(start);
})();
