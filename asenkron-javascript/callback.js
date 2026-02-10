//callback mantığı
function islemYap(sayi, callback) {
    const sonuc = sayi * 2;
    callback(sonuc);
}
islemYap(5, (sonuc) => {
    console.log("Çarpma sonucu:", sonuc);
});

// 
const sayilar = [10, 25, 30, 45];
function filtrele(dizi, kriterCallback) {
    const yeniDizi = [];
    for (const eleman of dizi) {
        if (kriterCallback(eleman)) {
            yeniDizi.push(eleman);
        }
    }
    return yeniDizi;
}
const buyukSayilar = filtrele(sayilar, (s) => s > 20);
console.log(buyukSayilar); // [25, 30, 45]

//  veri tabanı simülasyonu
function veriGetir(id, callback) {
    console.log("Veri tabanına bağlanılıyor...");
    setTimeout(() => {
        const data = { id: id, ad: "Ürün A" };
        callback(data);
    }, 2000);
}
veriGetir(101, (gelenVeri) => {
    console.log("Gelen Veri:", gelenVeri);
});

// Hata Yönetimi 
function dosyaOku(dosyaAdi, callback) {
    if (dosyaAdi === "") {
        callback("Dosya adı boş olamaz!", null);
    } else {
        callback(null, "Dosya içeriği başarıyla okundu.");
    }
}
dosyaOku("", (hata, veri) => {
    if (hata) {
        console.error("HATA:", hata);
    } else {
        console.log(veri);
    }
});

//  event şistener mantığı
function dugmeyeTikla(olayAdi, callback) {
    console.log(`${olayAdi} olayı tetiklendi.`);
    callback();
}
dugmeyeTikla("onClick", () => {
    console.log("Form gönderildi!");
});

// matematiksel işlem seçici
function hesapla(s1, s2, islemCallback) {
    return islemCallback(s1, s2);
}
const topla = (a, b) => a + b;
const carp = (a, b) => a * b;
console.log(hesapla(10, 5, topla)); console.log(hesapla(10, 5, carp));  

// 

function adim1(callback) {
    setTimeout(() => { console.log("Adım 1 Bitti"); callback(); }, 1000);
}
function adim2(callback) {
    setTimeout(() => { console.log("Adım 2 Bitti"); callback(); }, 1000);
}
function adim3(callback) {
    setTimeout(() => { console.log("Adım 3 Bitti"); callback(); }, 1000);
}

adim1(() => {
    adim2(() => {
        adim3(() => {
            console.log("Tüm adımlar tamamlandı (Callback Hell örneği)");
        });
    });
});

//  harici kaynaktan resim yükleme 
function resimYukle(url, basari, hata) {
    const yuklendi = true;
    if (yuklendi) basari(`Resim ${url} adresinden yüklendi`);
    else hata("Yükleme başarısız");
}
resimYukle("logo.png", console.log, console.error);

//dizi işleme
const meyveler = ["elma", "armut"];
function isle(dizi, fn) {
    for (let i = 0; i < dizi.length; i++) {
        fn(dizi[i]);
    }
}
isle(meyveler, (meyve) => console.log("Meyve:", meyve.toUpperCase()));

// çoklu callback
function baslaBitis(islem, baslangicCb, bitisCb) {
    baslangicCb();
    console.log("İşlem yapılıyor: " + islem);
    bitisCb();
}
baslaBitis("Dosya İndirme", 
    () => console.log("--- Başladı ---"), 
    () => console.log("--- Bitti ---")
);