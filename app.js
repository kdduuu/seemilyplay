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