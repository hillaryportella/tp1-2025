const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

// Rota para exibir o formulário
app.get("/", (req, res) => {
    res.render("formulario");
});

// Rota que recebe os dados do formulário
app.post("/enviar", (req, res) => {
    const nome = req.body.nomezinho;
    const sobrenome = req.body.sobrenome;

    res.render("resposta", { nome, sobrenome });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
