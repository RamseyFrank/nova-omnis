const preTag = document.getElementById("donut");

let A = 0, B = 0;
const interval = 30; // Speed of animation

function renderDonut() {
    let b = new Array(5600).fill(" "); // Increase buffer size for larger output
    let z = new Array(5600).fill(0); // Increase depth buffer size
    let cosA = Math.cos(A), sinA = Math.sin(A);
    let cosB = Math.cos(B), sinB = Math.sin(B);

    const width = 120, height = 40; // Increased size for a 70% screen fill

    for (let j = 0; j < 6.28; j += 0.06) { // Adjusted step size for smoother rendering
        let cosJ = Math.cos(j), sinJ = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
            let cosI = Math.cos(i), sinI = Math.sin(i);
            let h = cosJ + 2;
            let D = 1 / (sinI * h * sinA + sinJ * cosA + 5);
            let t = sinI * h * cosA - sinJ * sinA;

            let x = Math.floor(width / 2 + width * 0.35 * D * (cosI * h * cosB - t * sinB));
            let y = Math.floor(height / 2 + height * 0.9 * D * (cosI * h * sinB + t * cosB));
            let o = x + width * y;
            let N = Math.floor(8 * ((sinJ * sinA - sinI * cosJ * cosA) * cosB - sinI * cosJ * sinA - sinJ * cosA - cosI * cosJ * sinB));

            if (5600 > o && o > 0 && D > z[o]) {
                z[o] = D;
                b[o] = "%@#*+=-:. "[N > 0 ? N : 0]; // Keep high-contrast ASCII symbols
            }
        }
    }
    
    preTag.innerHTML = `<span style="color: orange;">${b.join("").replace(/(.{120})/g, "$1\n")}</span>`;
    A += 0.04;
    B += 0.08;
}

setInterval(renderDonut, interval);
