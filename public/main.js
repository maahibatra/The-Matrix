const loading = document.querySelector(".loading");
const loadMessage = document.querySelector(".loadMessage");
const welcome = document.querySelector(".welcome");
const welcMessage = document.querySelector(".welcMessage");
const name = document.querySelector(".name");

loading.addEventListener("animationend", () => {
    loadMessage.style.visibility = "visible";
    loadMessage.style.animation = "typingIni 1s steps(15)";
});

loadMessage.addEventListener("animationend", () => {
    setTimeout(() => {
        loading.style.visibility = "hidden";
        loadMessage.style.visibility = "hidden";
        welcome.style.visibility = "visible";
        welcome.style.animation = "loadWelc 0.5s, borderGlitch 1s infinite";
    }, 2000);
})

welcome.addEventListener("animationend", () => {
    welcMessage.style.visibility = "visible";
    welcMessage.style.animation = "typingWelc 0.4s steps(9), glitch 1s infinite";
})

welcMessage.addEventListener("animationend", () => {
    name.style.visibility = "visible";
    name.style.animation = "reveal 0.3s ease-out forwards, glitch 1s infinite, borderGlitchBottom 1s infinite";
})
