let kapıAcikMi = false;
if (kapıAcikMi) {
    console.log("İçeri girebilirsin.");
} else {
    console.log("Önce kapıyı açmalısın.");
}

let derece = 35;
if (derece > 30) {
    console.log("Klima açılmalı.");
} else if (derece > 20) {
    console.log("Hava ideal.");
} else {
    console.log("Montunu almayı unutma.");
}

let saat = 22;
let tema = saat > 19 ? "Karanlık Mod" : "Aydınlık Mod";
console.log("Uygulama teması:", tema);

let durum = "kargoda";
switch (durum) {
    case "hazırlanıyor": console.log("Paketiniz hazırlanıyor."); break;
    case "kargoda": console.log("Paketiniz yolda!"); break;
    default: console.log("Durum bilinmiyor.");
}

for (let i = 1; i <= 5; i++) {
    console.log(`${i}. adım tamamlandı.`);
}

let batarya = 15;
while (batarya > 10) {
    console.log(`Batarya durumu: %${batarya}`);
    batarya--;
}

let takmaAd = "Coder";
for (let harf of takmaAd) {
    console.log("Harf:", harf);
}

for (let gun = 1; gun <= 7; gun++) {
    if (gun % 2 === 0) continue; 
    console.log(`${gun}. gün: Çalışma günü.`);
}

let aranacakSayi = 7;
for (let i = 1; i <= 10; i++) {
    if (i === aranacakSayi) {
        console.log("Sayıyı buldum, arama bitti!");
        break;
    }
}

let hak = 0;
do {
    console.log("Bağlantı kurulmaya çalışılıyor...");
    hak++;
} while (hak < 1);