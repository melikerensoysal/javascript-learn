const selamla = () => console.log("Selam!");


const kareAl = x => x * x;


const topla = (a, b) => a + b;


const kisiOlustur = (ad, yas) => ({ isim: ad, yas: yas });


const sayilar = [1, 2, 3];
const ikiKati = sayilar.map(n => n * 2);


const ciftler = sayilar.filter(n => n % 2 === 0);


const hesapla = (a, b) => {
    const sonuc = a + b;
    return sonuc * 2;
};


setTimeout(() => console.log("1 saniye geçti"), 1000);


const sayac = {
    sayi: 0,
    arttir: function() {
        setInterval(() => { this.sayi++; console.log(this.sayi); }, 1000);
    }
};


const merhaba = (isim = "Misafir") => `Merhaba ${isim}`;