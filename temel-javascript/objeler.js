const profil = {
    isim: "Ece",
    yas: 24,
    sehir: "İzmir"
};

const araba = {
    marka: "Honda",
    calistir() {
        console.log("Motor sesi: Vutututu!");
    }
};
araba.calistir();

const oyun = { ad: "Witcher 3" };
oyun.tur = "RPG";
delete oyun.ad;

console.log("Neleri biliyoruz?:", Object.keys(profil));

const { isim, sehir } = profil;
console.log(`${isim}, ${sehir} şehrinde yaşıyor.`);

const yeniProfil = { ...profil, meslek: "Tasarımcı" };
console.log("Yeni kayıt:", yeniProfil);

const kullanıcı = { ayarlar: { tema: "karanlık" } };
console.log("Dil ayarı:", kullanıcı.ayarlar?.dil);

const ozellik1 = { hizi: 100 };
const ozellik2 = { rengi: "Kırmızı" };
const arabaDetay = Object.assign(ozellik1, ozellik2);
console.log("Araba Özellikleri:", arabaDetay);

for (let anahtar in profil) {
    console.log(`${anahtar}: ${profil[anahtar]}`);
}

const model = "iPhone";
const marka = "Apple";
const cihaz = { model, marka };
console.log("Cihaz Bilgisi:", cihaz);