/**
 * Miladi yili hicriye , hicri yili miladi ye cevirecek program yazilacak
 * program iki modulden olusmali
 * modul isimleri istendigi gibi olmali
 * moduller app.js dosyasina import edilmeli
 * program calistirmak icin app.js ---> node.js ile calistirilmali
 */
const findGregorian = require("./miladi-converter") // hicriyi miladiye ceviriyor
const findHijri = require("./hijri-converter") //  miladiyi hicriye ceviriyor

//Z.B
findGregorian(571)
findHijri(1506)
