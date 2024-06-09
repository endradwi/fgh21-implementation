function FazzFood(harga, voucher, jarak, pajak) {
    let potongan = 0
    if (voucher === 'FAZZFOOD50') {
        if (harga >= 50000) {
            potongan = harga * 0.5
        }
    } if (voucher === 'DITRAKTIR60') {
        if (harga >= 25000) {
            potongan = harga * 0.6
        }
    }

    let biayaAntar = 5000
    if (jarak > 2) {
        biayaAntar += (jarak - 2) * 3000
    }
    let biayaPajak = 0;
    if (pajak) {
        biayaPajak = harga * 0.05;
    }
    let subtotal = harga - potongan + biayaAntar + biayaPajak;

    console.log("Harga : " + harga);
    console.log("Potongan : " + potongan);
    console.log("Biaya Antar : " + biayaAntar);
    console.log("Pajak : " + biayaPajak);
    console.log("Subtotal : " + subtotal);
}
FazzFood(75000, 'FAZZFOOD50', 5, true);
