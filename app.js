// =========================================
// IMPORTA O EXPRESS
// =========================================

// require() funciona como "import"

// Estamos pegando a biblioteca Express
// que foi instalada com:
//
// npm install express

const express = require("express");


// =========================================
// IMPORTA O PATH
// =========================================

// Path é um módulo nativo do Node.js

// Ele ajuda a trabalhar com caminhos
// de pastas e arquivos

const path = require("path");


// =========================================
// CRIA A APLICAÇÃO EXPRESS
// =========================================

// Aqui estamos criando nosso servidor

const app = express();


// =========================================
// CONFIGURA O EJS
// =========================================

// Dizemos para o Express:
//
// "As páginas do site serão EJS"

app.set("view engine", "ejs");


// =========================================
// DEFINE A PASTA PUBLIC
// =========================================

// express.static() fala:
//
// "Tudo nessa pasta pode ser acessado
// diretamente pelo navegador"

// __dirname = pasta atual do projeto

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// =========================================
// CRIA A PRIMEIRA ROTA
// =========================================

// app.get() significa:
//
// "Quando alguém acessar essa URL"

// "/" significa:
//
// página inicial

app.get("/", (req, res) => {

    // req = requisição
    // res = resposta

    // render() renderiza um arquivo EJS

    // Aqui:
    // views/index.ejs

    res.render("index");

});


// =========================================
// PORTA DO SERVIDOR
// =========================================

// Todo servidor roda em uma porta

const PORT = 3000;


// =========================================
// INICIA O SERVIDOR
// =========================================

// app.listen() inicia o servidor

app.listen(PORT, () => {

    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );

});