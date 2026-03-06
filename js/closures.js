// gizli sayaç
function sayacOlustur() {
    let sayi = 0;
    return () => ++sayi;
}
const sayici = sayacOlustur();

//
function selamYaz(onEk) {
    return (isim) => console.log(`${onEk}, ${isim}`);
}
const gunaydinDe = selamYaz("Günaydın");

// basit çarpıcı
function carpimYap(katsayi) {
    return (rakam) => rakam * katsayi;
}
const ikiyleCarp = carpimYap(2);

// şifreyi saklama
function dogrulama(gercekSifre) {
    return (deneme) => deneme === gercekSifre;
}
const sifreKontrol = dogrulama("1234");

// minimum sınırı hatırlar
function limitBelirle(min) {
    return (deger) => deger >= min;
}
const yetiskinMi = limitBelirle(18);

// 
function isikAcKapa() {
    let acik = false;
    return () => { acik = !acik; return acik ? "Açık" : "Kapalı"; };
}

// son idyi tutar
function idUret() {
    let sonId = 100;
    return () => ++sonId;
}

// mesaj kaydetme (hafızaya alma)
function günlükTut(mesaj) {
    return () => console.log(`Kayıt: ${mesaj}`);
}

// skor takibi
function skorTutucu() {
    let skor = 0;
    return (puan) => { skor += puan; return skor; };
}

// adım sayac
function yuruyusYap(adimBoyu) {
    let toplamMesafe = 0;
    return () => { toplamMesafe += adimBoyu; return toplamMesafe; };
}


// 
function vergiHesapla(oran) {
    return (fiyat) => fiyat + (fiyat * oran / 100);
}
const kdvYuzdeYirmi = vergiHesapla(20);

// 
function hedefBelirle(hedefMiktar) {
    let biriken = 0;
    return (eklenen) => { 
        biriken += eklenen; 
        return biriken >= hedefMiktar ? "Hedefe ulaşıldı!" : `Kalan: ${hedefMiktar - biriken}`; 
    };
}
const telefonParasi = hedefBelirle(40000);

//
function cumleOlustur() {
    let cumle = "";
    return (kelime) => { 
        cumle += kelime + " "; 
        return cumle.trim(); 
    };
}
const hikayeYaz = cumleOlustur();

// 
function sansurUygula(yasakliKelime) {
    return (metin) => metin.split(yasakliKelime).join("***");
}
const kufurFiltresi = sansurUygula("salak");

// 
function sesKontrol(baslangicSesi) {
    let ses = baslangicSesi;
    return (degisim) => { 
        ses += degisim; 
        if(ses > 100) ses = 100;
        if(ses < 0) ses = 0;
        return `Ses seviyesi: ${ses}`; 
    };
}
const tvSes = sesKontrol(30);