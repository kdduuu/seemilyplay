// ======================================
// IMPORTAÇÕES
// ======================================

// Importa o framework Express
const express = require("express");

// Importa o path
const path = require("path");


// ======================================
// APP
// ======================================

// Cria a aplicação
const app = express();


// ======================================
// CONFIGURAÇÃO EJS
// ======================================

// Define EJS como view engine
app.set("view engine", "ejs");

// Define a pasta de views
app.set("views", path.join(__dirname, "views"));


// ======================================
// ARQUIVOS ESTÁTICOS
// ======================================

// Libera a pasta public
app.use(express.static(path.join(__dirname, "public")));


// ======================================
// ROTAS
// ======================================

// Página principal
app.get("/", (req, res) => {

    // Renderiza index.ejs
    res.render("index");

});


// Página de introdução ao Emily Navigator
app.get("/archive", (req, res) => {

    // Renderiza archive.ejs
    res.render("archive");

});

// ======================================
// LOADING
// ======================================

// Tela de carregamento antes da página principal

app.get("/loading", (req, res) => {

    res.render("loading");

});


// ======================================
// PORTA
// ======================================

// Usa a porta do Render
// ou localmente usa 3000
const PORT = process.env.PORT || 3000;


// ======================================
// INICIAR SERVIDOR
// ======================================

app.listen(PORT, () => {

    console.log(`server running on port ${PORT}`);

});


// ======================================
// FUNÇÃO DESTE ARQUIVO
// ======================================

// Este arquivo é o coração do back-end do meu projeto.
// Ele configura o servidor Node.js com Express, define onde estão as views e os arquivos estáticos,
// e cria as rotas responsáveis por renderizar as páginas da aplicação.
//
// Responsabilidade:
// - iniciar o servidor na porta escolhida
// - servir arquivos estáticos de dentro da pasta public
// - renderizar a página principal (index.ejs)
// - renderizar a página de introdução (archive.ejs)
//
// Por que ele é importante:
// - sem ele, meu site não teria um servidor para responder às requisições
// - ele conecta meu front-end estruturado (HTML, CSS, Bootstrap) ao back-end em Node.js
// - facilita adicionar novas rotas e APIs no futuro