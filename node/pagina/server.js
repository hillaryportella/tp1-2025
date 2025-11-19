const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("formulario");
});

app.post("/enviar", (req, res) => {
    const nome = req.body.nomezinho;
    const sobrenome = req.body.sobrenome;

    res.render("resposta", { nome, sobrenome });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
