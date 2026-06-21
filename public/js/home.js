// =======================================
// MENU SUPERIOR
// =======================================

// Obtém todos os itens do menu

const menuItems = document.querySelectorAll(".menu-bar span");

// Obtém a frase principal

const topQuote = document.getElementById("topQuote");

// Armazena a frase original

const defaultQuote = topQuote.textContent;

// Atualiza a frase ao passar o mouse

menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        topQuote.textContent = item.dataset.message;

    });

    item.addEventListener("mouseleave", () => {

        topQuote.textContent = defaultQuote;

    });

});

// =======================================
// URL DINÂMICA
// =======================================

// Obtém o campo da URL

const browserUrl = document.getElementById("browserUrl");


// Obtém todos os links da caixa "Saved Pages"

const savedPages = document.querySelectorAll(".links-box a");


// URL padrão

const defaultUrl = "https://seemilyplay.net";


// Atualiza a URL ao passar o mouse

savedPages.forEach(link => {

    link.addEventListener("mouseenter", () => {

        browserUrl.value = `${defaultUrl}/${link.dataset.url}`;

    });


    link.addEventListener("mouseleave", () => {

        browserUrl.value = defaultUrl;

    });

    // Impede a navegação do link

    link.addEventListener("click", (event) => {

        event.preventDefault();

    });

});

// =======================================
// WEBCAM INTERATIVA
// =======================================

// Obtém todas as webcams

const photoWrappers = document.querySelectorAll(".photo-wrapper");


// Adiciona interação em cada webcam

photoWrappers.forEach(wrapper => {

    // Obtém o timestamp da foto

    const timestamp = wrapper.querySelector(".timestamp");

    // Salva o horário original

    const originalTime = timestamp.dataset.time;


    // Mouse entrou

    wrapper.addEventListener("mouseenter", () => {

        timestamp.textContent = "● LIVE";

        timestamp.classList.add("live");

    });


    // Mouse saiu

    wrapper.addEventListener("mouseleave", () => {

        timestamp.textContent = originalTime;

        timestamp.classList.remove("live");

    });

});

// =======================================
// CUSTOM AUDIO PLAYER
// =======================================

(() => {

    const siteAudio = document.getElementById("site-audio");
    const audioToggle = document.getElementById("audio-toggle");
    const audioBar = document.getElementById("audio-bar");
    const audioProgress = document.getElementById("audio-progress");
    const audioTime = document.getElementById("audio-time");

    if (!siteAudio || !audioToggle || !audioBar || !audioProgress || !audioTime) {
        return;
    }

    function formatAudioTime(seconds) {

        if (isNaN(seconds)) {
            return "0:00";
        }

        const minutes = Math.floor(seconds / 60);

        const secs = Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");

        return `${minutes}:${secs}`;

    }

    function updateAudioPlayer() {

        const current = siteAudio.currentTime;
        const duration = siteAudio.duration;

        const progress = duration ? (current / duration) * 100 : 0;

        audioProgress.style.width = `${progress}%`;

        audioTime.textContent = `${formatAudioTime(current)} / ${formatAudioTime(duration)}`;

    }

    audioToggle.addEventListener("click", () => {

        if (siteAudio.paused) {

            siteAudio.play();

            audioToggle.textContent = "[ pause ]";

        } else {

            siteAudio.pause();

            audioToggle.textContent = "[ play ]";

        }

    });

    siteAudio.addEventListener("timeupdate", updateAudioPlayer);

    siteAudio.addEventListener("loadedmetadata", updateAudioPlayer);

    siteAudio.addEventListener("pause", () => {

        audioToggle.textContent = "[ play ]";

    });

    siteAudio.addEventListener("play", () => {

        audioToggle.textContent = "[ pause ]";

    });

    audioBar.addEventListener("click", (event) => {

        const duration = siteAudio.duration;

        if (!duration) {
            return;
        }

        const barPosition = audioBar.getBoundingClientRect();

        const clickPosition = event.clientX - barPosition.left;

        const percentage = clickPosition / barPosition.width;

        siteAudio.currentTime = percentage * duration;

    });

})();

// =======================================
// SCOTT ARCHIVE POPUP
// =======================================

const scottTrigger = document.getElementById("scott-trigger");
const scottPopup = document.getElementById("scott-popup");
const closeScottPopup = document.getElementById("close-scott-popup");

const scottArtFrame = document.querySelector(".scott-art-frame");
const scottArt = document.querySelector(".scott-art");

function cropScottArtText(text) {

    let lines = text.replace(/\r/g, "").split("\n");

    // Remove linhas totalmente vazias no começo e no fim
    while (lines.length && lines[0].replace(/[ \t\u2800]/g, "") === "") {
        lines.shift();
    }

    while (lines.length && lines[lines.length - 1].replace(/[ \t\u2800]/g, "") === "") {
        lines.pop();
    }

    // Remove espaços invisíveis no fim de cada linha
    lines = lines.map(line => line.replace(/[ \t\u2800]+$/g, ""));

    // Remove margem vazia comum no começo das linhas
    const filledLines = lines.filter(line => line.replace(/[ \t\u2800]/g, "") !== "");

    if (filledLines.length) {

        const minLeftSpace = Math.min(
            ...filledLines.map(line => {
                const match = line.match(/^[ \t\u2800]*/);
                return match ? match[0].length : 0;
            })
        );

        lines = lines.map(line => line.slice(minLeftSpace));

    }

    return lines.join("\n");

}

function fitScottArt() {

    if (!scottArtFrame || !scottArt) {
        return;
    }

    scottArt.style.transform = "scale(1)";
    scottArtFrame.style.height = "auto";

    const frameWidth = scottArtFrame.clientWidth;
    const artWidth = scottArt.scrollWidth;

    const scale = Math.min(frameWidth / artWidth, 1);

    scottArt.style.transform = `scale(${scale})`;

    scottArtFrame.style.height = `${scottArt.scrollHeight * scale}px`;

}

if (scottArt) {
    scottArt.textContent = cropScottArtText(scottArt.textContent);
}

if (scottTrigger && scottPopup && closeScottPopup) {

    scottTrigger.addEventListener("click", () => {

        scottPopup.style.display = "block";

        setTimeout(fitScottArt, 50);

    });

    closeScottPopup.addEventListener("click", () => {

        scottPopup.style.display = "none";

    });

}

window.addEventListener("resize", () => {

    if (scottPopup && scottPopup.style.display === "block") {

        fitScottArt();

    }

});


// =======================================
// FUNÇÃO DESTE ARQUIVO
// =======================================

// Este arquivo controla todas as interações
// da página principal do Emily Navigator.
//
// Responsabilidades:
// - atualizar dinamicamente a frase superior
//   conforme a interação do usuário.
//
// Por que ele é importante:
// - mantém o HTML limpo;
// - concentra a lógica JavaScript;
// - facilita adicionar novas interações futuramente.