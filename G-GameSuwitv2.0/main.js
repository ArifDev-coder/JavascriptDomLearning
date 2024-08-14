let tanya = true;
while(tanya) {
    // menangkap pilihan player
    let p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    let comp = Math.random();
    if(comp < 0.34) {
        comp = 'gajah';
    }else if(comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    }else {
        comp = 'semut';
    }

    // menentukan rules
    let hasil = '';
    if(p == comp) {
        hasil = 'seri';
    }else if(p == 'gajah') {
        hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
    }else if (p == 'orang') {
        hasil = (comp == 'semut') ? 'Kalah' : 'Menang';
    }else if(p == 'semut') {
        hasil = (comp == 'orang') ?  'Kalah' : 'Menang';
    }else {
        hasil = 'Memasukkan pilihan yang salah!';
    }
}