function deteksiPalindrom(kata){
const upperToLower = {
    'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g',
    'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n',
    'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u',
    'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z'
}
let update = ''
for (let i = 0; i < kata.length; i++) {
    let huruf = kata[i]
    if (huruf >= 'A') {
        if (huruf <= 'Z') {
            update += upperToLower[huruf]
        }
    }
    if (huruf >= 'a') {
        if (huruf <= 'z') {
            update += huruf
        }
    }
}
let balikKata = ''
for (let i = update.length - 1; i >= 0; i--) {
    balikKata += update[i]
}
let deteksiPalindrom = true
for (let i = 0; i < update.length; i++) {
    if (update[i] !== balikKata[i]) {
        deteksiPalindrom = false
    }
}
return deteksiPalindrom
}
let kata = "Malam";
if (deteksiPalindrom(kata)) {
    console.log("Palindrom");
} else {
    console.log();
}
