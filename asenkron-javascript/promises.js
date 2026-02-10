// promise yapısı
const sozumSoz = new Promise((resolve, reject) => {
    const islemBasarili = true;
    if (islemBasarili) {
        resolve("İşlem tamam!");
    } else {
        reject("Bir sorun çıktı.");
    }
});
sozumSoz
    .then(mesaj => console.log(mesaj))
    .catch(hata => console.log(hata));

// promise ile gecikme
function bekle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
bekle(2000).then(() => console.log("2 saniye geçti (Promise ile)"));

//
const sayiTut = new Promise((resolve) => {
    resolve(10);
});
sayiTut
    .then(sayi => {
        console.log("Sayı:", sayi);
        return sayi * 2;
    })
    .then(yeniSayi => {
        console.log("İki katı:", yeniSayi);
        return yeniSayi + 5;
    })
    .then(sonuc => console.log("Sonuç:", sonuc));

// API isteği simülasyonu
function kullaniciGetir() {
    return new Promise((resolve, reject) => {
        console.log("Sunucuya bağlanılıyor...");
        setTimeout(() => {
            reject("Sunucu Hatası 500"); 
        }, 1500);
    });
}
kullaniciGetir()
    .then(user => console.log("Hoşgeldin", user.ad))
    .catch(error => console.error("Hata oluştu:", error))
    .finally(() => console.log("İstek tamamlandı (Başarılı veya başarısız)"));

//(Paralel Çalıştırma)
const p1 = new Promise(resolve => setTimeout(() => resolve("Resimler"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Yazılar"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Videolar"), 500));

Promise.all([p1, p2, p3])
    .then(veriler => console.log("Tüm veriler yüklendi:", veriler));

// promise.race 
const hizli = new Promise(r => setTimeout(() => r("Hızlı Olan"), 100));
const yavas = new Promise(r => setTimeout(() => r("Yavaş Olan"), 500));

Promise.race([hizli, yavas])
    .then(sonuc => console.log("Kazanan:", sonuc));

// reject kısayolları
const hazirVeri = Promise.resolve("Önbellekten gelen veri");
hazirVeri.then(d => console.log(d));

//  koşullu promise
function ehliyetAlabilirMi(yas) {
    return new Promise((resolve, reject) => {
        if (yas >= 18) resolve("Ehliyet alabilir.");
        else reject("Yaş yetersiz.");
    });
}
ehliyetAlabilirMi(17)
    .then(m => console.log(m))
    .catch(e => console.log("Üzgünüm:", e));

//  iç içe promise

bekle(1000).then(() => {
    console.log("1. Bekleme bitti");
    bekle(1000).then(() => {
        console.log("2. Bekleme bitti");
    });
});

//JSON Parse 
const veriCozumle = (jsonVeri) => {
    return new Promise((resolve, reject) => {
        try {
            const obje = JSON.parse(jsonVeri);
            resolve(obje);
        } catch (e) {
            reject("JSON formatı hatalı!");
        }
    });
};
veriCozumle('{"ad":"Ali"}').then(s => console.log(s.ad));
veriCozumle("Hatalı JSON").catch(e => console.log(e));