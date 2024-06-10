function FazzFood(harga, voucher, jarak, pajak) {
    const availableVoucer = {
        FAZZFOOD50 : {
            min : 50000,
            diskon : 50 / 100,
            max : 50000
        },
        DIRAKTIR60 : {
            min : 25000,
            diskon : 60 / 100,
            max : 30000
        } 
    }
   
    if(!availableVoucer[voucher]){
        console.log("Voucher is not available!")
        return
    }

    voucher = availableVoucer[voucher]
    if(harga < voucher.min){
        console.log("Voucher min order is invalid")
        return
    }

    let disc = harga * voucher.diskon
    if (disc > voucher.max){
        disc = voucher.max
    }
    
    let biayaAntar = 5000
    if (jarak > 2) {
        biayaAntar += (jarak - 2) * 3000
    }

    if (pajak === true) {
        pajak = harga * 5 / 100
    }else{
        tax = 0
    }

    let subtotal = harga - disc + biayaAntar + pajak
   
    console.log("Harga : " + harga)
    console.log("Potongan : " + disc)
    console.log("Biaya Antar : " + biayaAntar)
    console.log("Pajak : " + pajak)
    console.log("Subtotal : " + subtotal)
}
FazzFood(75000,'FAZZFOOD50', 5, true)
