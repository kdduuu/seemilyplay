// =======================================
// ELEMENTOS
// =======================================

const input = document.getElementById("chatInput");

const button = document.getElementById("sendBtn");

const messages = document.getElementById("messages");


// =======================================
// RESPOSTAS DO BOT
// =======================================

function getBotReply(text){

    text = text.toLowerCase();


    if(text.includes("hello")){

        return "hi...";

    }

    if(text.includes("music")){

        return "currently playing something nostalgic";

    }

    if(text.includes("emily")){

        return "she is probably sleeping";

    }

    if(text.includes("love")){

        return "connection unstable...";

    }

    return "i dont understand...";
}


// =======================================
// ENVIAR MENSAGEM
// =======================================

button.addEventListener("click", () => {

    const userMessage = input.value;

    if(userMessage.trim() === "") return;


    // mensagem usuário

    messages.innerHTML += `

        <p>
            <span>you:</span>
            ${userMessage}
        </p>

    `;


    // resposta bot

    const botReply = getBotReply(userMessage);

    messages.innerHTML += `

        <p>
            <span>EmilyBot:</span>
            ${botReply}
        </p>

    `;


    // limpa input

    input.value = "";


    // scroll automático

    messages.scrollTop = messages.scrollHeight;

});