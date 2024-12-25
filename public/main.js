const loading = document.querySelector(".loading");
const loadMessage = document.querySelector(".loadMessage");
const welcome = document.querySelector(".welcome");
const welcMessage = document.querySelector(".welcMessage");
const nameInput = document.querySelector(".name");

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
        const username = nameInput.value.trim();
        welcome.style.animation = "unloadWelc 0.5s";
        welcMessage.style.visibility = "hidden";
        nameInput.style.visibility = "hidden";
        setTimeout(() => {
            welcome.style.display = "none";
        }, 500);
    }
});


