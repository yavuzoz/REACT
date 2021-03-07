

function merhabaFonksiyonu() {
    console.log("node eski modul sisteminden merhabalar");
}

function elvedaFonksiyonu() {
    console.log("node eski modul sisteminden güle güle");
}

// eski modul sistemi

module.exports = {
    merhaba: merhabaFonksiyonu,
    elveda: elvedaFonksiyonu
}