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
const windows = document.querySelector(".windows");
const windowElement = document.querySelectorAll(".window");
const windowHead = document.querySelector(".windowHead");
const windowBody = document.querySelector(".windowBody");
const consoleWindow = document.querySelector(".console");
const assistant = document.querySelector(".assistant");
const attack = document.querySelector(".attack");
const cracker = document.querySelector(".cracker");
const previous = document.querySelector(".previous");
const prevMessage = document.querySelector(".prevMessage");

let username = "";
let ipAddress = "";
let timeNow = "";

loading.addEventListener("animationend", () => {
    loadMessage.style.visibility = "visible";
    loadMessage.style.animation = "typingIni 1s steps(15), glitch 1s infinite";
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
        nameInput.focus();
    }, 50);
});

nameInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && nameInput.value.trim() != "") {
        username = nameInput.value.trim().toUpperCase();
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

bar.addEventListener("animationend", () => {
    windows.style.visibility = "visible";
    consoleWindow.style.animation = "expand 0.5s ease-in-out forwards";
    setTimeout(() => {
        assistant.style.animation = "expand 0.5s ease-in-out forwards";
        setTimeout(() => {
            attack.style.animation = "expand 0.5s ease-in-out forwards";
            setTimeout(() => {
                cracker.style.animation = "expand 0.5s ease-in-out forwards";
            }, 150);
        }, 150);
    }, 150);
});

cracker.addEventListener("animationend", () => {
    setTimeout(() => {
        previous.style.visibility = "visible";
        previous.style.animation = "loadPrev 0.5s, borderGlitch 1s infinite";
    }, 750);
});

previous.addEventListener("animationend", () => {
    prevMessage.style.visibility = "visible";
    prevMessage.style.animation = "typingPrev 0.4s steps(10), glitch 1s infinite";
})

prevMessage.addEventListener("animationend", () => {
    setTimeout(() => {
        previous.style.animation = "unloadPrev 0.5s";
        prevMessage.style.visibility = "visible";
        prevMessage.style.animation = "typingPrev 1s steps(19), glitch 1s infinite";
        consoleWindow.querySelector(".windowBody").style.visibility = "visible";
        consoleWindow.querySelector(".windowBody").scrollTop = consoleWindow.querySelector(".windowBody").scrollHeight;
        setTimeout(() => {
            assistant.querySelector(".windowBody").style.visibility = "visible";
            assistant.querySelector(".windowBody").scrollTop = assistant.querySelector(".windowBody").scrollHeight;
            setTimeout(() => {
                attack.querySelector(".windowBody").style.visibility = "visible";
                attack.querySelector(".windowBody").scrollTop = attack.querySelector(".windowBody").scrollHeight;
                setTimeout(() => {
                    cracker.querySelector(".windowBody").style.visibility = "visible";
                    cracker.querySelector(".windowBody").scrollTop = cracker.querySelector(".windowBody").scrollHeight;
                }, 150);
            }, 150);
        }, 150);
        prevMessage.style.visibility = "hidden";
    }, 1500);
    setTimeout(() => {
        previous.style.animation = "unloadPrev 0.5s";
        previous.style.display = "none";
    }, 2000);
})

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
