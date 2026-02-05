function bakiyeEkle(mevcut, eklenen) {
    return mevcut + eklenen;
}
console.log("Yeni Bakiye:", bakiyeEkle(100, 50));

const yasHesapla = function(dogumYili) {
    return 2026 - dogumYili;
};
console.log("Yaşınız:", yasHesapla(1998));

const kdvHesapla = (tutar) => tutar * 0.20;
console.log("KDV Miktarı:", kdvHesapla(1000));

const karesiniAl = n => n * n;
console.log("Sonuç:", karesiniAl(9));

const sayfaYenile = () => console.log("Sayfa güncelleniyor...");
sayfaYenile();

function selamlama(isim = "Ziyaretçi") {
    console.log(`Merhaba ${isim}, hoş geldin.`);
}
selamlama();

const sifreKontrol = (sifre) => {
    if (sifre.length < 8) {
        return "Şifre çok kısa!";
    }
    return "Şifre uygun.";
};
console.log(sifreKontrol("12345"));

const kurHesapla = (dolar) => {
    const kur = 30.5;
    const tlKarsiligi = () => dolar * kur;
    return tlKarsiligi();
};
console.log("Toplam TL:", kurHesapla(100));

const islemYap = (sayi, callback) => callback(sayi);
console.log(islemYap(5, karesiniAl));

setTimeout(() => {
    console.log("Bekleme süresi bitti.");
}, 1500);