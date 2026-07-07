// ===============================
// Wait for page to fully load
// ===============================
window.addEventListener("load", () => {

    // Counter Animation
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let target = Number(counter.dataset.target);
        let current = 0;

        let timer = setInterval(() => {
            current += Math.ceil(target / 100);

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.innerText = current;
        }, 30);
    });

});


// ===============================
// Loader Text Animation
// ===============================
const loaderTexts = [
    "Connecting to server",
    "Getting access from server",
    "User verified successfully",
    "Loading Resources...",
    "St. Xavier's School"
];

const text = document.getElementById("loaderText");
const preloader = document.getElementById("preloader");

let current = 0;

const changeInterval = 1400;

const textInterval = setInterval(() => {

    text.style.opacity = "0";

    setTimeout(() => {

        current++;

        if (current < loaderTexts.length) {
            text.textContent = loaderTexts[current];
        }

        text.style.opacity = "1";

    }, 300);

}, changeInterval);


// ===============================
// Hide Loader After 7 Seconds
// ===============================
setTimeout(() => {

    clearInterval(textInterval);

    preloader.classList.add("hide");

    // Initialize AOS AFTER loader disappears
    setTimeout(() => {

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 120
        });

        AOS.refresh();

    }, 700); // Match this to your loader hide transition

}, 7000);