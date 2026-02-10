// varsayılan deper
function mesajGonder(mesaj = "Sistem mesajı") {
    console.log("İleti:", mesaj);
}
mesajGonder();

// 
function oyuncuOlustur(isim = "Oyuncu 1", seviye = 1) {
    console.log(`${isim} - Seviye: ${seviye}`);
}
oyuncuOlustur(); // Oyuncu 1 - Seviye: 1

// undefined vs null 
function test(deger = "Varsayılan") {
    console.log(deger);
}
test(undefined); 
test(null);

// matematiksel işlemler
function alanHesapla(en = 5, boy = 10) {
    return en * boy;
}
console.log(alanHesapla(2));

// 
function vergiHesapla(fiyat, oran = fiyat * 0.18) {
    return fiyat + oran;
}
console.log(vergiHesapla(100));

// fonksiyonu varsayılan değer yapma
const bugun = () => new Date().toLocaleDateString();
function raporOlustur(baslik, tarih = bugun()) {
    console.log(`${baslik} - Tarih: ${tarih}`);
}
raporOlustur("Satış Raporu");

// 
function ilkIki([a = 0, b = 0] = []) {
    return a + b;
}
console.log(ilkIki([10]));

//
function profilGoster({ ad = "Anonim", yas = 18 } = {}) {
    console.log(`Ad: ${ad}, Yaş: ${yas}`);
}
profilGoster({ ad: "Can" });

// zorunlu parametre kontrolü
function hataFirlat() { throw new Error("Parametre eksik!"); }
function kayitEkle(isim = hataFirlat()) {
    console.log(`Kayıt yapıldı: ${isim}`);
}

// 
function URLOlustur(domain = "google", uzanti = "com") {
    return `https://www.${domain}.${uzanti}`;
}
console.log(URLOlustur("github")); 