/**
 * Bu odevde bir txt dosyasinin ekrana yansitilmasi isteniyor
 * oncelikle bir txt dosyasi olusturuyoruz
 * daha sonra app.js mize bir server icin bir de dosyayi okumak icin import ediyoruz
 * daha sonra okunmasi icinn olusturdugumuz text dosyasini bir fonksiyon ile /oku komutu geldiginde dosyamzi cagiriyoruz
 */
const http = require('http');

const fs = require('fs')
const readText = function (req, res) {
    // istek tipi hangi adresten geldigi 
    console.log(new Date().toString(), req.method, req.headers.host, req.url);
    //oku cagrilirsa ekrana yazdir
    if (req.url === '/oku') {
        // dosyayi oku
        fs.readFile('./test.txt', (err, data) => {
            res.end(`<h1>${data}</h1>`);
        });
    } else {
        res.writeHead(200, {
            'Content-Tpye': 'text/plain'
        });
        res.end(`<h1>Hello World</h1>`);
    }
}
const server = http.createServer(readText);

server.listen(9001, () => console.log("running buzinesss..."));