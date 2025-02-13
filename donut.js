let donut = document.getElementById("donut");

// Variables for rotation
let rotationX = 0;
let rotationY = 0;
let velocityX = 0;
let velocityY = 0;
const damping = 0.95; // Decay factor for momentum
const rotationSpeed = 0.2; // Speed of rotation when moving the mouse

// Track mouse movement
document.addEventListener("mousemove", function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate new velocity based on mouse position
    velocityX = ((mouseY / window.innerHeight) * 2 - 1) * rotationSpeed;
    velocityY = ((mouseX / window.innerWidth) * 2 - 1) * rotationSpeed;
});

// Momentum-based rotation update
function update() {
    // Apply velocity
    rotationX += velocityX;
    rotationY += velocityY;

    // Apply damping for smooth stopping effect
    velocityX *= damping;
    velocityY *= damping;

    // Apply rotation to donut
    donut.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    // Request next frame for animation
    requestAnimationFrame(update);
}

// Start animation loop
update();
