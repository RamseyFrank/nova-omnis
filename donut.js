const preTag = document.getElementById("donut");

let A = 0, B = 0;
const interval = 30; // Speed of animation

function renderDonut() {
    let b = new Array(1760).fill(" ");
    let z = new Array(1760).fill(0);
    let cosA = Math.cos(A), sinA = Math.sin(A);
    let cosB = Math.cos(B), sinB = Math.sin(B);

    for (let j = 0; j < 6.28; j += 0.07) {
        let cosJ = Math.cos(j), sinJ = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
            let cosI = Math.cos(i), sinI = Math.sin(i);
            let h = cosJ + 2;
            let D = 1 / (sinI * h * sinA + sinJ * cosA + 5);
            let t = sinI * h * cosA - sinJ * sinA;
            let x = 40 + 30 * D * (cosI * h * cosB - t * sinB);
            let y = 12 + 15 * D * (cosI * h * sinB + t * cosB);
            let o = Math.floor(x) + 80 * Math.floor(y);
            let N = Math.floor(8 * ((sinJ * sinA - sinI * cosJ * cosA) * cosB - sinI * cosJ * sinA - sinJ * cosA - cosI * cosJ * sinB));

            if (1760 > o && o > 0 && D > z[o]) {
                z[o] = D;
                b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
            }
        }
    }
    
    preTag.innerHTML = b.join("").replace(/(.{80})/g, "$1\n");
    A += 0.04;
    B += 0.08;
}

setInterval(renderDonut, interval);
