function calculateHijri(date) {
    let dateOfGregorian = new Date(date) //girilen miladi yil
    let dateOfHijri = (dateOfGregorian - 622) / (32 / 33) // yil hesaplama
    dateOfHijri = Math.floor(dateOfHijri) // ondaliklari atma

    return dateOfHijri
}
module.exports = calculateHijri