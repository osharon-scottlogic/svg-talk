"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(Array.from(document.querySelectorAll('img.svg')).map(elm => importSVG(elm)));
        const deck = new Reveal();
        deck.on('the-basics', () => { drawAnimation('svgElementsShowcase'); });
        deck.on('thank-you', () => { thankYouAnimation(); });
        deck.initialize();
    });
}
window.addEventListener('load', init);
function importSVG(imgElm) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(imgElm.src);
            const data = yield response.text();
            const svgElm = (new DOMParser()).parseFromString(data, 'image/svg+xml').firstChild;
            svgElm.classList.add(...imgElm.classList);
            (_a = imgElm === null || imgElm === void 0 ? void 0 : imgElm.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(svgElm, imgElm);
            return svgElm;
        }
        catch (err) {
            console.log(`failed to import ${imgElm.src}`, err);
        }
        return null;
    });
}
function minimizeDialog() {
    const rabbitDialog = document.getElementById('rabbitDialog');
    const options = [{ x: 5, y: 0 }, { x: -20, y: 0 }, { x: -45, y: -0 }, { x: -20, y: -15, }, { x: -45, y: -15, }];
    if (rabbitDialog) {
        if (rabbitDialog.getAttribute('minimized') === 'true') {
            gsap.to('#rabbitDialog', { duration: 1, scaleX: 1, scaleY: 1, x: -40, y: -40, opacity: 1 });
            rabbitDialog.removeAttribute('minimized');
        }
        else {
            gsap.to('#rabbitDialog', Object.assign(Object.assign({ duration: 1, scaleX: 0.1, scaleY: 0.2 }, options[Math.floor(Math.random() * options.length)]), { opacity: 0 }));
            rabbitDialog.setAttribute('minimized', 'true');
        }
    }
}
function makeDraggable(svg) {
    let selectedElement = null, textElm, offset = { x: 0, y: 0 };
    const triangle = svg.querySelector('.triangle');
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
    function startDrag(evt) {
        evt.preventDefault();
        if (evt.target.classList.contains('draggable')) {
            selectedElement = evt.target;
            selectedElement.setAttribute('dragged', 'true');
            offset = getMousePosition(evt);
            offset.x -= parseFloat(selectedElement.getAttributeNS(null, "cx") || '0');
            offset.y -= parseFloat(selectedElement.getAttributeNS(null, "cy") || '0');
            textElm = document.getElementById(selectedElement.getAttribute('aria-labelledby') || '');
            triangle === null || triangle === void 0 ? void 0 : triangle.setAttribute('points', getPoints());
        }
    }
    function getPoints() {
        const circles = document.querySelectorAll('.circles circle');
        const agg = [];
        circles.forEach(circle => agg.push(`${getValue(circle.cx)},${getValue(circle.cy)}`));
        return agg.join(' ');
    }
    function getValue(svgAnimatedLength) {
        return svgAnimatedLength.baseVal.value;
    }
    function drag(evt) {
        if (selectedElement) {
            evt.preventDefault();
            const coord = getMousePosition(evt);
            selectedElement.setAttributeNS(null, "cx", `${coord.x}`);
            selectedElement.setAttributeNS(null, "cy", `${coord.y}`);
            if (textElm) {
                textElm.setAttributeNS(null, "x", `${coord.x}`);
                textElm.setAttributeNS(null, "y", `${coord.y}`);
            }
            triangle === null || triangle === void 0 ? void 0 : triangle.setAttribute('points', getPoints());
        }
    }
    function getMousePosition(evt) {
        const CTM = svg === null || svg === void 0 ? void 0 : svg.getScreenCTM();
        return {
            x: ((evt.clientX - CTM.e) / CTM.a) - offset.x,
            y: ((evt.clientY - CTM.f) / CTM.d) - offset.y
        };
    }
    function endDrag(evt) {
        selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.removeAttribute('dragged');
        selectedElement = null;
    }
}
function drawAnimation(svgId) {
    var _a, _b;
    (_a = document.getElementById(svgId)) === null || _a === void 0 ? void 0 : _a.classList.remove('invisible');
    console.log('here!', (_b = document.getElementById(svgId)) === null || _b === void 0 ? void 0 : _b.classList);
    new Vivus(svgId, { duration: 200, type: 'oneByOne' }, () => { });
}
function thankYouAnimation() {
    document.body.onload = function () {
        var _a, _b, _c;
        const t1 = document.getElementById('t1');
        const t2 = document.getElementById('t2');
        const t2d = [document.getElementById('t2d1'), document.getElementById('t2d2'), document.getElementById('t2d3')];
        const t1d = [document.getElementById('t1d1'), document.getElementById('t1d2')];
        const h1 = document.getElementById('h1');
        const h2 = document.getElementById('h2');
        const h2d = [document.getElementById('h2d1'), document.getElementById('h2d2'), document.getElementById('h2d3')];
        const h3 = document.getElementById('h3');
        const h3d = [document.getElementById('h3d1'),
            document.getElementById('h3d2'),
            document.getElementById('h3d3'),
            document.getElementById('h3d4')];
        const a1 = document.getElementById('a1');
        const a2 = document.getElementById('a2');
        const a2d = [document.getElementById('a2d1'),
            document.getElementById('a2d2'),
            document.getElementById('a2d3')];
        const n1 = document.getElementById('n1');
        const n1d = [
            document.getElementById('n1d1'),
            document.getElementById('n1d2'),
            document.getElementById('n1d3'),
            document.getElementById('n1d4'),
            document.getElementById('n1d5'),
        ];
        const k1 = document.getElementById('k1');
        const k1d1 = document.getElementById('k1d1');
        const k2 = document.getElementById('k2');
        const k2d = [document.getElementById('k2d1'),
            document.getElementById('k2d2'),
            document.getElementById('k2d3'),
            document.getElementById('k2d4')];
        const y1 = document.getElementById('y1');
        const y1d = [document.getElementById('y1d1'), document.getElementById('y1d2')];
        const y2 = document.getElementById('y2');
        const y2d = [
            document.getElementById('y2d1'),
            document.getElementById('y2d2')
        ];
        const o1 = document.getElementById('o1');
        const o1d = [document.getElementById('o1d1'),
            document.getElementById('o1d2'),
            document.getElementById('o1d3'),
            document.getElementById('o1d4')];
        const u1 = document.getElementById('u1');
        const u1d = [document.getElementById('u1d1'), document.getElementById('u1d2')];
        const e1 = document.getElementById('e1');
        const e2 = document.getElementById('e2');
        const e1d = [document.getElementById('e1d1'),
            document.getElementById('e1d2'),
            document.getElementById('e1d3')];
        const text = document.getElementById('text');
        const tspans = document.getElementsByTagName('tspan');
        const underlines = [
            document.getElementById('underline1'),
            document.getElementById('underline2'),
            document.getElementById('underline3'),
            document.getElementById('underline4')
        ];
        const mainTimeline = new TimelineLite({ onComplete: showReplay });
        const tline = new TimelineLite();
        tline
            .to((_a = t2 === null || t2 === void 0 ? void 0 : t2.x2) === null || _a === void 0 ? void 0 : _a.baseVal, 0.4, { value: 200.6, ease: Back.easeInOut }, 0)
            .to((_b = t2 === null || t2 === void 0 ? void 0 : t2.y2) === null || _b === void 0 ? void 0 : _b.baseVal, 0.4, { value: 58.6, ease: Back.easeInOut }, 0)
            .to((_c = t1 === null || t1 === void 0 ? void 0 : t1.y2) === null || _c === void 0 ? void 0 : _c.baseVal, 0.5, { value: 156.4, ease: Back.easeInOut }, 0.1)
            .to(t2, 0.01, { opacity: 1 }, 0)
            .to(t1, 0.01, { opacity: 1 }, 0.3);
        addLineDecTween(tline, t2d[0], 0.2, 200, 51, 0.1);
        addLineDecTween(tline, t2d[1], 0.2, 170, 48, 0.2);
        addLineDecTween(tline, t2d[2], 0.2, 150, 44, 0.3);
        addLineDecTween(tline, t1d[0], 0.2, 160, 159, 0.2);
        addLineDecTween(tline, t1d[1], 0.2, 165, 130, 0.3);
        mainTimeline.add(tline, 0.5);
        const hline = new TimelineLite();
        hline
            .to(h1.y2.baseVal, 0.5, { value: 145.4, ease: Back.easeInOut }, 0)
            .to(h2.x2.baseVal, 0.4, { value: 217.1, ease: Back.easeInOut }, 0.2)
            .to(h2.y2.baseVal, 0.4, { value: 102.6, ease: Back.easeInOut }, 0.2)
            .to(h3.y2.baseVal, 0.5, { value: 130.4, ease: Back.easeInOut }, 0.3)
            .to(h1, 0.01, { opacity: 1 }, 0)
            .to(h2, 0.01, { opacity: 1 }, 0.2)
            .to(h3, 0.01, { opacity: 1 }, 0.3);
        addDotDecTween(hline, h3d[0], 0.25, 2, 0.2);
        addDotDecTween(hline, h3d[1], 0.25, 2, 0.4);
        addDotDecTween(hline, h3d[2], 0.25, 2, 0.6);
        addDotDecTween(hline, h3d[3], 0.25, 2, 0.8);
        addLineDecTween(hline, h2d[0], 0.3, 270, 93, 0.1);
        addLineDecTween(hline, h2d[1], 0.3, 256, 104, 0.2);
        addLineDecTween(hline, h2d[2], 0.3, 242, 114, 0.3);
        mainTimeline.add(hline, 0.9);
        const aline = new TimelineLite();
        if (a1.points[0]) {
            aline
                .to(a1.points[0], 0.2, { x: 305.6, y: 138.6, ease: Quad.easeIn }, 0)
                .to(a1.points[0], 0.5, { x: 282.6, ease: Back.easeOut }, 'a1')
                .to(a1.points[2], 0.2, { x: 305.6, y: 138.6, ease: Quad.easeIn }, 0)
                .to(a1.points[2], 0.5, { x: 330.6, ease: Back.easeOut }, 'a1');
        }
        else {
            const apoly = { x0: 305.6, y0: 51.6, x1: 305.6, y1: 51.6, x2: 305.6, y2: 51.6 };
            aline
                .to(apoly, 0.2, { x0: 305.6, y0: 138.6, x2: 305.6, y2: 138.6, ease: Quad.easeIn, onUpdate: function () {
                    updatePolyline(a1, apoly);
                } }, 0)
                .to(apoly, 0.5, { x0: 282.6, x2: 330.6, ease: Back.easeOut, onUpdate: function () {
                    updatePolyline(a1, apoly);
                } }, 'a1');
        }
        aline
            .to(a2.x1.baseVal, 0.4, { value: 319.6, ease: Back.easeInOut }, 0.2)
            .to(a1, 0.01, { opacity: 1 }, 0)
            .to(a2, 0.01, { opacity: 1 }, 0.2);
        addLineDecOutTween(aline, a2d[0], 0.2, 295, 120, 319, 120, 0.2);
        addLineDecOutTween(aline, a2d[1], 0.2, 293, 127, 321, 127, 0.3);
        addLineDecOutTween(aline, a2d[2], 0.2, 291, 134, 322, 134, 0.4);
        mainTimeline.add(aline, 1.2);
        const nline = new TimelineLite();
        if (n1.points[1]) {
            nline
                .to(n1.points[1], 0.2, { y: 51.6, ease: Quad.easeOut }, 0)
                .to(n1.points[3], 0.2, { y: 51.6, ease: Quad.easeOut }, 0)
                .to(n1.points[2], 0.2, { x: 391.6, y: 138.6 }, 'n1')
                .to(n1.points[3], 0.2, { x: 391.6, y: 62.4, ease: Quad.easeOut }, 0.4);
        }
        else {
            const npoly = { x0: 352, y0: 147, x1: 358, y1: 147, x2: 363, y2: 147, x3: 365, y3: 74 };
            nline
                .to(npoly, 0.2, { y1: 51.6, y3: 51.6, ease: Quad.easeOut, onUpdate: function () {
                    updatePolyline(n1, npoly);
                } }, 0)
                .to(npoly, 0.2, { x2: 391.6, x3: 391.6, y2: 138.6, y3: 62.4, ease: Quad.easeOut, onUpdate: function () {
                    updatePolyline(n1, npoly);
                } }, 0.2);
        }
        nline
            .to(n1, 0.01, { opacity: 1 }, 0);
        addLineDecTween(nline, n1d[0], 0.3, 352, 70, 0.1);
        addLineDecTween(nline, n1d[1], 0.3, 358, 102, 0.2);
        addLineDecTween(nline, n1d[2], 0.3, 363, 124, 0.3);
        addLineDecTween(nline, n1d[3], 0.3, 385, 80, 0.4);
        addLineDecTween(nline, n1d[4], 0.3, 385, 74, 0.5);
        mainTimeline.add(nline, 1.5);
        const kline = new TimelineLite();
        if (k2.points[0]) {
            kline
                .to(k2.points[0], 0.2, { x: 452.6, y: 51.6, ease: Back.easeOut }, 0.2)
                .to(k2.points[2], 0.2, { x: 452.6, y: 145.6, ease: Back.easeOut }, 0.3);
        }
        else {
            const kpoly = { x0: 414.1, y0: 97.6, x1: 414.1, y1: 97.6, x2: 414.1, y2: 97.6 };
            kline
                .to(kpoly, 0.2, { x0: 452.6, y0: 51.6, x2: 452.6, y2: 145.6, ease: Back.easeOut, onUpdate: function () {
                    updatePolyline(k2, kpoly);
                } }, 0.2);
        }
        kline
            .to(k1.y2.baseVal, 0.4, { value: 138.4, ease: Back.easeInOut }, 0)
            .to(k1, 0.01, { opacity: 1 }, 0)
            .to(k2, 0.01, { opacity: 1 }, 0.2);
        addLineDecTween(kline, k1d1, 0.3, 419, 139, 0.1);
        addDotDecTween(kline, k2d[0], 0.25, 2, 0.2);
        addDotDecTween(kline, k2d[1], 0.25, 2, 0.4);
        addDotDecTween(kline, k2d[2], 0.25, 2, 0.6);
        addDotDecTween(kline, k2d[3], 0.25, 2, 0.8);
        mainTimeline.add(kline, 1.7);
        const yline = new TimelineLite();
        yline
            .to(y1.x2.baseVal, 0.3, { value: 493.6, ease: Back.easeOut }, 0)
            .to(y1.y2.baseVal, 0.3, { value: 112.6, ease: Back.easeOut }, 0)
            .to(y2.x2.baseVal, 0.4, { value: 472.6, ease: Back.easeOut }, 0.15)
            .to(y2.y2.baseVal, 0.4, { value: 168.6, ease: Back.easeOut }, 0.15)
            .to(y1, 0.01, { opacity: 1 }, 0)
            .to(y2, 0.01, { opacity: 1 }, 0.15);
        addLineDecTween(yline, y1d[0], 0.3, 470, 155, 0.3);
        addLineDecTween(yline, y1d[1], 0.3, 478, 120, 0.4);
        addDotDecTween(yline, y2d[0], 0.25, 2, 0.1);
        addDotDecTween(yline, y2d[1], 0.25, 2, 0.2);
        mainTimeline.add(yline, 2);
        const oline = new TimelineLite();
        o1.style.opacity = '1';
        oline
            .to(o1.rx.baseVal, 0.5, { value: 27, ease: Back.easeOut }, 0)
            .to(o1.ry.baseVal, 0.5, { value: 40.5, ease: Back.easeOut }, 0)
            .to(o1d[0].rx.baseVal, 0.6, { value: 27, ease: Back.easeOut }, 0.1)
            .to(o1d[0].ry.baseVal, 0.6, { value: 40.5, ease: Back.easeOut }, 0.1)
            .to(o1d[1].rx.baseVal, 0.6, { value: 27, ease: Quad.easeOut }, 0.2)
            .to(o1d[1].ry.baseVal, 0.6, { value: 40.5, ease: Quad.easeOut }, 0.2)
            .to(o1d[2].rx.baseVal, 0.6, { value: 27, ease: Quad.easeOut }, 0.3)
            .to(o1d[2].ry.baseVal, 0.6, { value: 40.5, ease: Quad.easeOut }, 0.3)
            .to(o1d[3].rx.baseVal, 0.6, { value: 27, ease: Quad.easeOut }, 0.4)
            .to(o1d[3].ry.baseVal, 0.6, { value: 40.5, ease: Quad.easeOut }, 0.4);
        mainTimeline.add(oline, 2.2);
        const uline = new TimelineLite();
        const length = `${u1.getTotalLength()}`;
        u1.style.opacity = '1';
        u1.style.strokeDasharray = length;
        u1.style.strokeDashoffset = length;
        uline
            .to(u1, 0.5, { strokeDashoffset: 0, ease: Quad.easeInOut }, 0);
        addLineDecTween(uline, u1d[0], 0.3, 626, 60, 0.3);
        addLineDecTween(uline, u1d[1], 0.3, 620, 60, 0.4);
        mainTimeline.add(uline, 2.4);
        const eline = new TimelineLite();
        e2.style.opacity = '1';
        eline
            .to(e2.rx.baseVal, 0.3, { value: 6, ease: Back.easeOut }, 0.3)
            .to(e2.ry.baseVal, 0.3, { value: 6, ease: Back.easeOut }, 0.3)
            .to(e1.x2.baseVal, 0.3, { value: 658.6, ease: Back.easeInOut }, 0)
            .to(e1.y2.baseVal, 0.3, { value: 130.6, ease: Back.easeInOut }, 0)
            .to(e1, 0.01, { opacity: 1 }, 0);
        addLineDecTween(eline, e1d[0], 0.3, 653, 118, 0.1);
        addLineDecTween(eline, e1d[1], 0.3, 650, 110, 0.2);
        addLineDecTween(eline, e1d[2], 0.3, 673, 86, 0.3);
        mainTimeline.add(eline, 2.6);
        const textTl = new TimelineLite();
        if (tspans[0].dx.baseVal[0]) {
            textTl.to(tspans[0].dx.baseVal[0], 0.6, { value: 0, ease: Cubic.easeOut }, 1);
            textTl.to(tspans[0].dy.baseVal[0], 0.6, { value: -1, ease: Cubic.easeOut }, 1);
        }
        else {
            tspans[0].setAttribute('dx', '0');
            tspans[0].setAttribute('dy', '0');
        }
        for (let i = tspans.length - 1; i >= 0; i--) {
            textTl.to(tspans[i], 0.3, { opacity: 1 }, 1 + (tspans.length - 1 - i) * 0.05);
        }
        addUnderlineTween(textTl, underlines[0], 0.5, 664, 153, 370, 167, 0.2);
        addUnderlineTween(textTl, underlines[1], 0.51, 670, 160, 370, 175, 0.3);
        addUnderlineTween(textTl, underlines[2], 0.52, 678, 168, 370, 183, 0.4);
        addUnderlineTween(textTl, underlines[3], 0.53, 686, 176, 370, 191, 0.5);
        mainTimeline.add(textTl, 2);
        mainTimeline.timescale = 0.6;
        mainTimeline.play();
        function addLineDecTween(tl, line, duration, x, y, delay) {
            tl.to(line.x2.baseVal, duration, { value: x, ease: Quart.easeInOut }, delay);
            tl.to(line.y2.baseVal, duration, { value: y, ease: Quart.easeInOut }, delay);
            tl.to(line.x1.baseVal, duration, { value: x, ease: Quart.easeInOut }, delay + duration);
            tl.to(line.y1.baseVal, duration, { value: y, ease: Quart.easeInOut }, delay + duration);
            tl.to(line, 0.01, { opacity: 1 }, delay);
            tl.to(line, 0.01, { opacity: 0 }, delay + (duration * 2));
        }
        function addLineDecOutTween(tl, line, duration, x1, y1, x2, y2, delay) {
            tl.to(line.x1.baseVal, duration, { value: x1, ease: Quart.easeInOut }, delay);
            tl.to(line.y1.baseVal, duration, { value: y1, ease: Quart.easeInOut }, delay);
            tl.to(line.x2.baseVal, duration, { value: x2, ease: Quart.easeInOut }, delay);
            tl.to(line.y2.baseVal, duration, { value: y2, ease: Quart.easeInOut }, delay);
            tl.to(line.x1.baseVal, duration, { value: x2, ease: Quart.easeInOut }, delay + duration);
            tl.to(line.y1.baseVal, duration, { value: y2, ease: Quart.easeInOut }, delay + duration);
            tl.to(line, 0.01, { opacity: 1 }, delay);
            tl.to(line, 0.01, { opacity: 0 }, delay + (duration * 2));
        }
        function addDotDecTween(tl, dot, duration, r, delay) {
            tl.to(dot.rx.baseVal, duration, { value: r, ease: Quart.easeOut }, delay);
            tl.to(dot.ry.baseVal, duration, { value: r, ease: Quart.easeOut }, delay);
            tl.to(dot.rx.baseVal, duration, { value: 0, ease: Quart.easeIn }, delay + duration);
            tl.to(dot.ry.baseVal, duration, { value: 0, ease: Quart.easeIn }, delay + duration);
        }
        function addUnderlineTween(tl, ul, duration, x2, y2, x1, y1, delay) {
            tl.to(ul.x2.baseVal, duration, { value: x2, ease: Quad.easeInOut }, delay);
            tl.to(ul.y2.baseVal, duration, { value: y2, ease: Quad.easeInOut }, delay);
            tl.to(ul.x1.baseVal, duration, { value: x1, ease: Quad.easeInOut }, delay + duration);
            tl.to(ul.y1.baseVal, duration, { value: y1, ease: Quad.easeInOut }, delay + duration);
        }
        function updatePolyline(line, points) {
            if (points.x3) {
                line.setAttribute('points', points.x0 + ',' + points.y0 + ' ' + points.x1 + ',' + points.y1 + ' ' + points.x2 + ',' + points.y2 + ' ' + points.x3 + ',' + points.y3);
            }
            else {
                line.setAttribute('points', points.x0 + ',' + points.y0 + ' ' + points.x1 + ',' + points.y1 + ' ' + points.x2 + ',' + points.y2);
            }
        }
    };
}
