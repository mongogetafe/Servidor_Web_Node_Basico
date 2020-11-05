const http = require('http');

const port = 3000;

let equipos = [
    {nombre: 'Real Madrid', localidad: 'Madrid'},
    {nombre: 'Atlético de Madrid', localidad: 'Madrid'},
    {nombre: 'Getafe A.G.', localidad: 'Getafe'},
    {nombre: 'Leganes', localidad: 'Leganes'},
];

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.write('Bienvenidos!');
            break;
        case "/equipos":
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write(JSON.stringify(equipos));
            break;
    }
    res.end();
}).listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})