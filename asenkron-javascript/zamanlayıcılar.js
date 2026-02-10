// setTimeout
setTimeout(() => {
    console.log("3 saniye sonra bu mesaj görünecek");
}, 3000);

// parametre gönderme
function selamla(isim) {
    console.log(`Merhaba ${isim}, biraz geç kaldım!`);
}
setTimeout(selamla, 2000, "Ahmet");

// setInterval
let sayac = 0;
const intervalID = setInterval(() => {
    sayac++;
    console.log(`Saniye: ${sayac}`);
}, 1000);

//  clearInterval
setTimeout(() => {
    clearInterval(intervalID);
    console.log("Sayaç durduruldu.");
}, 5500);

// clearTimeout
const bomba = setTimeout(() => {
    console.log("BOOM! (Bu hiç çalışmayacak)");
}, 5000);

// bomba patlamadan imha
clearTimeout(bomba);
console.log("Bomba imha edildi.");

//event loop mantığı
console.log("Başlangıç");
setTimeout(() => {
    console.log("Bu kod 0ms olsa bile en sonda çalışır");
}, 0);
console.log("Bitiş"); 

//  Recursive

let i = 0;
function tekrarla() {
    i++;
    console.log(`Tekrar: ${i}`);
    if (i < 3) {
        setTimeout(tekrarla, 1000);
    }
}
tekrarla();

//
const rastgeleSure = Math.floor(Math.random() * 3000) + 1000;
setTimeout(() => {
    console.log(`Bu işlem ${rastgeleSure} ms sürdü.`);
}, rastgeleSure);

//  loading bar simülasyonu
let yukleme = 0;
const yuklemeCubugu = setInterval(() => {
    yukleme += 20;
    console.log(`Yükleniyor: %${yukleme}`);
    if (yukleme >= 100) {
        clearInterval(yuklemeCubugu);
        console.log("Yükleme Tamamlandı!");
    }
}, 500);

//  saat 
const saatGoster = setInterval(() => {
    const simdi = new Date();
    console.log("Saat: " + simdi.toLocaleTimeString());
     //3 kez çalışsın
}, 1000);
setTimeout(() => clearInterval(saatGoster), 3000);