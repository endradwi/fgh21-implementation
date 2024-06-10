const devideAndSort = (integer)=>{
    let arr = []
    let nilai = ""
    for(let i=0; i < integer.length; i++){
        if(integer[i] === "0" || i === integer.length - 1){// Memisahkan angka berdasarkan nol
            if(integer[i] !== "0"){
                nilai += integer[i]
            }
            if (nilai.length > 0){
                arr[arr.length] = nilai
                nilai = ""
            }
        } else{
            nilai += integer[i]
        }
}
for (let i = 0; i < arr.length; i++) {//Memecah velue array menjadi per-angka
    let number = []
    for (let j = 0; j < arr[i].length; j++) {
        number[number.length] = arr[i][j]
    }
    for (let j = 0; j < number.length - 1; j++) { //Menggunalkan Bubble Sort
            for (let k = 0; k < number.length - 1 - j; k++) {
                if (number[k] > number[k + 1]) {
                    let temp = number[k]
                    number[k] = number[k + 1]
                    number[k + 1] = temp
                }
        }
        arr[i] = number
    }
}
let hasil = ""//Mengubah Tiper data Array menjadi String
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        hasil += arr[i][j]
    }
}
console.log(hasil)
}
devideAndSort("5956560159466056")