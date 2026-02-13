// global kapsam
const uygulamaAdi = "Hava Durumu";

// fonksiyon kapsamı
function selamlama() {
    const kullanici = "Ahmet";
    console.log(`Merhaba ${kullanici}`);
}

// indirim sadece süslü parantez içinde çalışır
if (true) {
    const indirim = 50;
    console.log(`Bugünkü indirim: ${indirim} TL`);
}

// i değişkeni döngü bittiğinde yok olur
for (let i = 1; i <= 3; i++) {
    console.log(`Sıradaki ürün: ${i}`);
}

// Shadowing
const tema = "Açık";
function temaDegistir() {
    const tema = "Koyu";
    console.log(`Şu anki tema: ${tema}`);
}

// 
function dış() {
    const mesaj = "Dışarıdan selam!";
    function iç() {
        console.log(mesaj); 
    }
    iç();
}

// globali güncelleme
let toplamPuan = 0;
function puanEkle() {
    toplamPuan += 10;
}

// parametre kapsamı
function karsila(misafir) {
    console.log(`Hoş geldin, ${misafir}`);
}

// fonksiyon tanımlandığı kapsamına bağlıdır
const sehir = "İstanbul";
function sehriYazdir() {
    console.log(sehir);
}

// yerel bir değişkene dışarıdan ulaşmaya çalışmak
function gizliVeri() {
    const sifre = "abc123";
}