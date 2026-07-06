

window.onload = function () {
    alert("1");

    const counters = document.querySelectorAll(".counter");

    alert("Found: " + counters.length);
};
window.onload = function () {
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
        }, 100);
    });
};

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

// Total loader time = 7 seconds
// 5 messages => change every 1.4 seconds
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


// Hide loader after 7 seconds
setTimeout(() => {

    clearInterval(textInterval);

    preloader.classList.add("hide");

}, 7000);

