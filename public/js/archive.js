// ======================================
// ELEMENTOS
// ======================================

// Obtém todas as linhas do log
const logLines = document.querySelectorAll("#system-log p");

// Obtém o botão de acesso
const openButton = document.getElementById("openArchive");

// Obtém a janela principal
const browserWindow = document.querySelector(".browser-window");


// ======================================
// EXIBIÇÃO DO LOG
// ======================================

// Exibe cada linha do log com um pequeno intervalo,
// simulando um sistema carregando o arquivo.

logLines.forEach((line, index) => {

    setTimeout(() => {

        line.style.display = "block";

    }, index * 500);

});


// ======================================
// BOTÃO
// ======================================

// Após o carregamento do log,
// exibe o botão para abrir o arquivo.

setTimeout(() => {

    openButton.style.display = "block";

}, logLines.length * 500 + 300);


// ======================================
// ABRIR ARQUIVO
// ======================================

// Ao clicar no botão,
// o sistema simula a abertura do arquivo
// antes de redirecionar para a página principal.

openButton.addEventListener("click", () => {

    // Impede múltiplos cliques
    openButton.disabled = true;

    // Atualiza o texto do botão
    openButton.textContent = "> Granting access...";

    // Primeira mensagem
    setTimeout(() => {

        logLines[3].textContent = "> access granted.";

        openButton.textContent = "> Decrypting archive...";

    }, 500);

    // Segunda mensagem
    setTimeout(() => {

        logLines[3].textContent = "> opening archive...";

        openButton.textContent = "> Opening archive...";

    }, 1100);

    // Fade + redirecionamento
    setTimeout(() => {

        browserWindow.classList.add("fade-out");

    }, 1700);

    setTimeout(() => {

        window.location.href = "/loading";

    }, 2200);

});


// ======================================
// FUNÇÃO DESTE ARQUIVO
// ======================================

// Este arquivo controla a experiência da página archive.
//
// Responsabilidade:
// - revelar o log do sistema linha por linha
// - exibir o botão "Open Archive"
// - simular o desbloqueio do arquivo
// - aplicar uma transição suave
// - redirecionar o usuário para a página principal
//
// Por que ele é importante:
// - torna a introdução mais imersiva
// - mantém a lógica separada do HTML
// - facilita futuras alterações sem modificar archive.ejs