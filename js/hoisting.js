// fonksiyon beyanı
kahveYap();
function kahveYap() {
    console.log("Kahveniz hazırlanıyor...");
}

// let yukarı taşınır ama erişilemez
console.log(fiyat);
let fiyat = 100;

// 
const apiKey = "gizli_anahtar";

// 
const baslat = function() {
    console.log("Sistem açılıyor...");
};

// 
const ucusModu = () => console.log("Uçuş modu aktif");

// if blogu içindeki let dışarı sızmaz
if (true) {
    let durum = "Aktif";
}

// Fonksiyon ve değişken isimleri karışırsa
function kontrol() { console.log("Fonksiyon çalıştı"); }
let kontrol = "Yazı";


// 
function ana() {
    alt();
    function alt() { console.log("Alt fonksiyon çalıştı"); }
}

// aynı isimde iki fonksiyon olursa sonuncusu çalışır
function mesaj() { console.log("İlk mesaj"); }
function mesaj() { console.log("Son mesaj"); }
mesaj();

// mantıksal sıralama
let mod = "gece";
function modGuncelle() {
    let mod = "gündüz";
}