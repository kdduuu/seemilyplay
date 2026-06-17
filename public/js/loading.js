// =======================================
// ELEMENTOS
// =======================================

// Linhas do terminal

const line1 = document.getElementById("line1");

const line2 = document.getElementById("line2");

const line3 = document.getElementById("line3");

const line4 = document.getElementById("line4");

const status = document.getElementById("status");


// =======================================
// MENSAGENS
// =======================================

// Sequência exibida durante o carregamento

const bootSequence = [

    {
        element: line1,
        text: "> establishing connection..."
    },

    {
        element: line2,
        text: "> loading webcam archive..."
    },

    {
        element: line3,
        text: "> indexing memories..."
    },

    {
        element: line4,
        text: "> launching Emily Navigator..."
    }

];

// =======================================
// EFEITO DE DIGITAÇÃO
// =======================================

// Escreve uma mensagem letra por letra

function typeText(element, text, speed = 35){

    return new Promise(resolve => {

        let index = 0;

        function type(){

            if(index < text.length){

                element.textContent += text.charAt(index);

                index++;

                setTimeout(type, speed);

            }

            else{

                resolve();

            }

        }

        type();

    });

}


// =======================================
// BOOT SEQUENCE
// =======================================

// Executa toda a sequência do terminal

async function startBootSequence(){

    for(const line of bootSequence){

        await typeText(line.element, line.text);

        await new Promise(resolve => setTimeout(resolve, 350));

    }


    // Mensagem final

    status.textContent = "opening interface...";

// Aguarda antes de entrar na Home

    setTimeout(() => {

    // Aplica o efeito de fade

    document.body.classList.add("fade-out");

    // Aguarda a animação terminar

    setTimeout(() => {

        window.location.href = "/";

    }, 450);

    }, 1200);
}


// =======================================
// INICIAR
// =======================================

// Inicia automaticamente ao abrir a página

startBootSequence();