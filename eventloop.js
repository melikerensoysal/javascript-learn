
//senkron ve asenkron akışı
console.log("1. Başla");
setTimeout(() => console.log("2. Zamanlayıcı"), 0);
console.log("3. Bitiş");

// 0 gecikme ve stack bloklanması 
console.log("A");
setTimeout(() => console.log("B (Bekleyen)"), 0);
for (let i = 0; i < 1000000; i++) {} 
console.log("C");

// microtask vs macrotask önceliği 
setTimeout(() => console.log("Timeout (Macro)"), 0);
Promise.resolve().then(() => console.log("Promise (Micro)"));

//zincirleme microtask 
Promise.resolve()
  .then(() => {
    console.log("Microtask 1");
    return Promise.resolve();
  })
  .then(() => console.log("Microtask 2"));

// async/await 
async function asyncAkis() {
  console.log("Async Başladı");
  await Promise.resolve();
  console.log("Await Sonrası");
}
asyncAkis();
console.log("Global Kod Sonu");

//
setTimeout(() => console.log("Macrotask"), 0);
async function karma() {
  console.log("Async 1");
  await null;
  console.log("Async 2");
}
karma();
Promise.resolve().then(() => console.log("Microtask"));
console.log("Senkron Son");

// iç içe macrotask 
setTimeout(() => {
  console.log("Dış Macrotask");
  setTimeout(() => console.log("İç Macrotask"), 0);
}, 0);
setTimeout(() => console.log("Bağımsız Macrotask"), 0);

// 
new Promise((resolve) => {
  console.log("Promise Executor (Senkron)");
  setTimeout(() => resolve("Resolve Sonucu (Asenkron)"), 0);
}).then((res) => console.log(res));

//  iç içe microtask 
queueMicrotask(() => {
  console.log("Microtask A");
  queueMicrotask(() => console.log("Microtask A Alt"));
});
queueMicrotask(() => console.log("Microtask B"));

// modern microtask api
console.log("Akış Başladı");
queueMicrotask(() => console.log("Manuel Microtask"));
setTimeout(() => console.log("Zamanlayıcı"), 0);


//
console.log("Sistem kontrolü başladı...");

Promise.reject("Bağlantı Hatası!")
  .catch((hata) => {
    console.log("Hata yakalandı:", hata);
    return "Kurtarma başarılı";
  })
  .then((mesaj) => console.log("Sonuç:", mesaj));

console.log("Sistem kontrolü devam ediyor...");



// setTimeout
let sayac = 0;
function gorevBaslat() {
  console.log("Görev çalıştı, Sayı: " + sayac);
  sayac++;
  if (sayac < 3) {
    setTimeout(gorevBaslat, 1000); 
  }
}
gorevBaslat();


// 
setTimeout(() => console.log("Zamanlayıcı (Macrotask)"), 0);

requestAnimationFrame(() => {
  console.log("Animasyon Çerçevesi: Ekran güncellenmeden hemen önce çalışır");
});

console.log("Ana kod akışı bitti.");


// async/await ilr sıralı döngü

async function adimlariIsle() {
  const adimlar = ["Hazırlık", "Yükleme", "Tamamlama"];
  for (const adim of adimlar) {
    await Promise.resolve();
    console.log("İşlem adımı bitti: " + adim);
  }
}
adimlariIsle();
console.log("Döngü başladı, kod devam ediyor...");


// sahte api isteği 

const veriGetir = () => {
  return new Promise((resolve) => {
    console.log("Sunucuya istek gönderildi...");
    setTimeout(() => resolve({ id: 101, kullanıcı: "eren" }), 500);
  });
};

veriGetir().then((sonuc) => console.log("Gelen Veri:", sonuc.kullanıcı));
console.log("Arayüz diğer işlemlere hazır.");




// 
async function parcaliAkis() {
  console.log("Bölüm 1 (Senkron)");
  await null; 
  console.log("Bölüm 2 (Microtask 1)");
  await null;
  console.log("Bölüm 3 (Microtask 2)");
}
parcaliAkis();



// promise.race 

const hizli = new Promise((r) => setTimeout(() => r("Hızlı Görev"), 100));
const yavas = new Promise((r) => setTimeout(() => r("Yavaş Görev"), 500));

Promise.race([hizli, yavas]).then((kazanan) => {
  console.log("Yarışı kazanan:", kazanan);
});



// Microtask  bitmeden macrotask  çalışmaz
setTimeout(() => console.log("Sıradaki Macrotask"), 0);

queueMicrotask(() => {
  console.log("Ana Microtask");
  queueMicrotask(() => console.log("İç içe Microtask (Yine de Macrotask'tan önce)"));
});



// 
const butonSimulasyonu = { click: () => console.log("Buton Tetiklendi (Senkron)") };

setTimeout(() => console.log("Zamanlayıcı Beklemedeydi"), 0);
butonSimulasyonu.click();
Promise.resolve().then(() => console.log("Promise (Microtask)"));



// 
const denetleyici = new AbortController();

setTimeout(() => denetleyici.abort(), 100);

const uzunIslem = new Promise((resolve, reject) => {
  denetleyici.signal.addEventListener("abort", () => reject("İşlem durduruldu!"));
  setTimeout(() => resolve("Başarılı!"), 1000);
});

uzunIslem
  .then((s) => console.log(s))
  .catch((hata) => console.log("Sonuç:", hata));