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