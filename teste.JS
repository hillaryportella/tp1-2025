const port = 8000;
const http = require('http');
const currentDate = new Date();

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    const data = currentDate.getDate();
    const mes = currentDate.getMonth();
    const hora = currentDate.getHours();
    const minutos = currentDate.getMinutes();
    console.log('Hoje é ${data}/${mes} às ${hora}/${minutos}');

    res.end();
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);
