const sepet = [
    { urun: "T-Shirt", fiyat: 300 },
    { urun: "Pantolon", fiyat: 800 },
    { urun: "Çorap", fiyat: 50 }
];

sepet.forEach(item => console.log(`${item.urun}: ${item.fiyat} TL`));

const fiyatlar = sepet.map(item => item.fiyat);
console.log("Fiyat listesi:", fiyatlar);

const pahaliUrunler = sepet.filter(item => item.fiyat > 500);
console.log("Lüks seçimler:", pahaliUrunler);

const aranan = sepet.find(item => item.urun === "Çorap");
console.log("Aranan bulundu:", aranan);

const toplam = sepet.reduce((kasa, item) => kasa + item.fiyat, 0);
console.log("Kasaya ödenecek:", toplam);

const bedavaVarMi = sepet.some(item => item.fiyat === 0);
console.log("Bedava ürün var mı?:", bedavaVarMi);

const uygunMu = sepet.every(item => item.fiyat < 1000);
console.log("Bütçeye uygun mu?:", uygunMu);

const liste = sepet.filter(i => i.fiyat > 100).map(i => i.urun);
console.log("Alınacaklar:", liste);

const arkadaslar = ["Ali", "Veli", "Ayşe"];
console.log("Ali burada mı?:", arkadaslar.includes("Ali"));

arkadaslar.push("Fatma");
console.log("Güncel liste:", arkadaslar);