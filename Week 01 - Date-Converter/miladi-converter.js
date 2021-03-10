function calculateGregorian(date) {
    let dateOfHijri = new Date(date) //girile hicri yil
    let dateOfGregorian = (dateOfHijri / (33 / 32)) + 623 // yil hesaplama
    dateOfGregorian = Math.floor(dateOfGregorian) // ondaliklari atma

    return dateOfGregorian
}
module.exports = calculateGregorian