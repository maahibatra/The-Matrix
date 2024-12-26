const loading = document.querySelector(".loading");
const loadMessage = document.querySelector(".loadMessage");
const welcome = document.querySelector(".welcome");
const welcMessage = document.querySelector(".welcMessage");
const nameInput = document.querySelector(".name");
const bar = document.querySelector(".bar");
const time = document.querySelector(".time");
const session = document.querySelector(".session");
const ip = document.querySelector(".ip");
const settings = document.querySelector(".settings");

let username = "";
let ipAddress = "";
let timeNow = "";

loading.addEventListener("animationend", () => {
    loadMessage.style.visibility = "visible";
    loadMessage.style.animation = "typingIni 1s steps(15)";
});

loadMessage.addEventListener("animationend", () => {
    setTimeout(() => {
        loading.style.animation = "unloadIni 0.5s";
        loadMessage.style.visibility = "hidden";
    }, 1500);
    setTimeout(() => {
        loading.style.display = "none";
        welcome.style.visibility = "visible";
        welcome.style.animation = "loadWelc 0.5s, borderGlitch 1s infinite";
    }, 2000);
});

welcome.addEventListener("animationend", () => {
    welcMessage.style.visibility = "visible";
    welcMessage.style.animation = "typingWelc 0.4s steps(9), glitch 1s infinite";
});

welcMessage.addEventListener("animationend", () => {
    setTimeout(() => {
        nameInput.style.visibility = "visible";
        nameInput.style.animation = "reveal 0.3s ease-out forwards, glitch 1s infinite, borderGlitchBottom 1s infinite";
    }, 50);
});

nameInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && nameInput.value.trim() != "") {
        username = nameInput.value.trim();
        welcome.style.animation = "unloadWelc 0.5s";
        welcMessage.style.visibility = "hidden";
        nameInput.style.visibility = "hidden";
        setTimeout(() => {
            welcome.style.display = "none";
            setTimeout(() => {
                bar.style.visibility = "visible";
                bar.style.animation = "revealHeight 0.5s ease forwards";
                session.textContent = username;
                generateIP();
                ip.textContent = ipAddress;
            }, 500);
        }, 500);
    }
});

setInterval(() => {
    getTime();
    time.textContent = timeNow;
}, 1000);

function generateIP() {
    ipAddress = (Math.floor(Math.random() * 255) + 1)+"."
        +(Math.floor(Math.random() * 255) + 1)+
        "."+(Math.floor(Math.random() * 255) + 1)+"."
        +(Math.floor(Math.random() * 255) + 1);
}

function getTime() {
    timeNow = new Date();
    const hours = String(timeNow.getHours()).padStart(2, "0");
    const minutes = String(timeNow.getMinutes()).padStart(2, "0");
    const seconds = String(timeNow.getSeconds()).padStart(2, "0");

    timeNow = `${hours}:${minutes}:${seconds}`;
}
