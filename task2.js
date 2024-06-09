function reverseWords(kalimat) {
    let reversedWords = ''
    let hurufAwal = 0

    for (let i = 0; i <= kalimat.length; i++) {
        if (!kalimat[i]) {
            let kata = ''
            for (let j = hurufAwal; j < i; j++) {
                kata += kalimat[j]
            }
            if (reversedWords === '') {
                reversedWords = kata
            } else {
                reversedWords = kata + ' ' + reversedWords
            }
            hurufAwal = i + 1
        }
        if (kalimat[i] === ' ') {
            let kata = ''
            for (let j = hurufAwal; j < i; j++) {
                kata += kalimat[j]
            }
            if (reversedWords === '') {
                reversedWords = kata
            } else {
                reversedWords = kata + ' ' + reversedWords
            }
            hurufAwal = i + 1
        }
    }

    return reversedWords
}
let kalimat = "Saya Belajar Javascript"
let kalimatTerbalik = reverseWords(kalimat)
console.log(kalimatTerbalik)