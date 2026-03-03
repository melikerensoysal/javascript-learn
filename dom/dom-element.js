//
const girisButonu = document.getElementById("ana-giris-btn");

// sayfadaki ana başlığı css yakalama
const anaBaslik = document.querySelector("#sayfa-basligi");

//karanlık modu anahtarını class yakalama
const temaSecici = document.querySelector(".tema-degistirici-switch");

// 
const sepetUrunleri = document.getElementsByClassName("sepet-kalemi");

//
const epostaInput = document.querySelector('input[name="kullanici_eposta"]');

// footeri tüm bağlantıları toplu halde seçme
const footerLinkleri = document.querySelectorAll("footer nav a");

// liste içerisindeki işaretlenmiş kutuları yakalamak
const seciliHobiler = document.querySelectorAll(".hobi-listesi input:checked");

// ilk liste öğesini yakalama
const ilkMenuOgesi = document.querySelector(".ana-menu li:first-child");

// sayfadaki resim taglarını yakalama
const tumGorseller = document.getElementsByTagName("img");

// 
const profilIsmi = document.querySelector(".profil-karti .isim-alani h2");

// data attribute 
const hedefSekme = document.querySelector('[data-tab-target="#anasayfa"]');


// 
const silmeButonu = document.querySelector(".cop-kutusu-ikonu");
const anaKart = silmeButonu.closest(".kullanici-karti");

// nextElementSibling
const aktifBaslik = document.querySelector(".aktif-bolum");
const sonrakiIcerik = aktifBaslik.nextElementSibling;

// OR mantığı
const tumBasliklar = document.querySelectorAll("h1, h2, .alt-baslik");


// 
const anaListe = document.querySelector("#kategori-grubu");
const sadeceListeOgeleri = anaListe.children;
