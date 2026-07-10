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

const studentBtn = document.getElementById("studentBtn");
const teacherBtn = document.getElementById("teacherBtn");
const slider = document.querySelector(".slider");
const title = document.getElementById("title");
const user = document.getElementById("user");

studentBtn.onclick = () => {
    slider.style.left = "0";
    studentBtn.classList.add("active");
    teacherBtn.classList.remove("active");

    title.innerText = "Student Login";
    user.placeholder = "Student ID";
};

teacherBtn.onclick = () => {
    slider.style.left = "50%";
    teacherBtn.classList.add("active");
    studentBtn.classList.remove("active");

    title.innerText = "Teacher Login";
    user.placeholder = "Teacher ID";
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value;

    // Student 1
    if (id === "ST001" && password === "12345") {
        window.location.href = "st-ids/student1.html";
    }

    // Student 2
    else if (id === "ST002" && password === "samsan") {
        window.location.href = "st-ids/sanskar.html";
    }

    // Student 3
    else if (id === "ST003" && password === "xavier") {
        window.location.href = "student3.html";
    }

    // Student 4
    else if (id === "ST004" && password === "pass004") {
        window.location.href = "student4.html";
    }

    // Invalid login
    else {
        alert("Invalid Student ID or Password!");
    }
});