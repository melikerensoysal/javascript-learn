const car = { brand: "honda", model: "civic", year: 2004, color: "dark blue" };

// 
const keys = Object.keys(car);

// 
const values = Object.values(car); 

// obje boş mu kontrol etme
const isEmpty = Object.keys({}).length === 0;

// 
Object.keys(car).forEach(key => console.log(`${key}: ${car[key]}`));

// değerlerin toplamını bulma
const scores = { math: 90, english: 80, art: 100 };
const total = Object.values(scores).reduce((a, b) => a + b, 0);

// 
const mixed = { id: 1, name: "eren", active: true };
const stringsOnly = Object.values(mixed).filter(val => typeof val === "string");

// 
const upperKeys = Object.keys(car).map(k => k.toUpperCase());

// 
const form = { user: "zeren", pass: "123", email: "" };
const isFormComplete = Object.values(form).every(val => val !== "");

//key sayısını bulma
const propertyCount = Object.keys(car).length;


const hasTesla = Object.values(car).includes("Tesla");


// 
const elma = { kalori: 52, karbonhidrat: 14, protein: 0.3 };
const besinBasliklari = Object.keys(elma);

// 
const stok = { kalem: 100, defter: 50, silgi: 200 };
const miktarlar = Object.values(stok);

// 
const pc = { islemci: "ryzen 7", ram: "32gb", ssd: "1tb" };
const parcaListesi = Object.keys(pc);

// 
const kurs = { html: 10, css: 15, js: 25 };
const saatler = Object.values(kurs);

// 
const gonderi = { begeni: 120, yorum: 15, paylasim: 5 };
const etkilesimTurleri = Object.keys(gonderi);

// 
const turkiye = { 34: "denizli", 6: "muğla", 35: "eskişehir" };
const sehirIsimleri = Object.values(turkiye);

// 
const arac = { yakit: "benzin", vites: "manuel", kapi: 2 };
const ozellikler = Object.keys(arac);

// 
const harcamalar = { market: 200, ulasim: 50, yemek: 150 };
const tutarlar = Object.values(harcamalar);

// 
const renkler = { anaRenk: "#ffffff", ikincilRenk: "#000000" };
const renkKodlari = Object.keys(renkler);

// 
const kale = { yatay: "A", dikey: 1 };
const konumVerileri = Object.values(kale);


// 
const siparis = { 
    id: 101, 
    musteri: { isim: "eren", iletisim: { telefon: "535-514" } } 
};
const kargoSirketi = siparis.kargoBilgisi?.sirketAdi;
const musteriTel = siparis.musteri?.iletisim?.telefon;
console.log("\n1. Örnek - Kargo Şirketi:", kargoSirketi);
console.log("1. Örnek - Müşteri Telefonu:", musteriTel);



//
const fifaKarakter = { ad: "sihirbaz", yetenekler: { sut: 88, hiz: 93 } };
const kopyaKarakter = structuredClone(fifaKarakter);

kopyaKarakter.yetenekler.sut = 95;
console.log("\n2. Örnek - Orijinal sut:", fifaKarakter.yetenekler.sut);
console.log("2. Örnek - Kopya sut:", kopyaKarakter.yetenekler.sut);



//
const formVerileri = [
    ["kullaniciAdi", "admin"],
    ["sifre", "123456"],
    ["rol", "yonetici"]
];

const kullaniciObjesi = Object.fromEntries(formVerileri);
console.log("\n3. Örnek - Diziden Oluşan Obje:", kullaniciObjesi);



//

const ayarlar = { tema: "karanlık", otoKayit: false };

const temaVarMi = Object.hasOwn(ayarlar, "tema"); 
const dilVarMi = Object.hasOwn(ayarlar, "dil");

console.log("\n4. Örnek - Tema ayarı var mı?:", temaVarMi);
console.log("4. Örnek - Dil ayarı var mı?:", dilVarMi); 



//
const bankaHesabi = {
    sahibi: "Zeynep",
    bakiye: 5000,
    
    paraEkle(miktar) {
        this.bakiye += miktar;
        return `Hesaba ${miktar} TL eklendi. Güncel bakiye: ${this.bakiye} TL`;
    }
};
console.log("\n5. Örnek - İşlem:", bankaHesabi.paraEkle(1500));
