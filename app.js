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


// ======================================
// ARCHIVE
// ======================================

// Página inicial do projeto

app.get("/", (req, res) => {

    // Renderiza archive.ejs

    res.render("archive");

});


// ======================================
// LOADING
// ======================================

// Tela de carregamento

app.get("/loading", (req, res) => {

    // Renderiza loading.ejs

    res.render("loading");

});


// ======================================
// HOME
// ======================================

// Emily Navigator

app.get("/home", (req, res) => {

    // Renderiza index.ejs

    res.render("index");

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

// Este arquivo é o coração do back-end do projeto.
//
// Responsabilidades:
//
// - iniciar o servidor Express
// - servir arquivos estáticos da pasta public
// - renderizar as páginas EJS
// - controlar o fluxo de navegação:
//
//      /          → Archive
//      /loading   → Loading
//      /home      → Emily Navigator
//
// Dessa forma, o visitante percorre a experiência
// completa do projeto antes de chegar à página principal.