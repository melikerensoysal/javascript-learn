// async/await temeli
function bekle(ms) {
    return new Promise(r => setTimeout(r, ms));
}
async function basla() {
    console.log("Başlıyor...");
    await bekle(1000);
    console.log("1 saniye sonra bitti.");
}
basla();

// try catch ile hata yakalama
async function veriCek() {
    try {
        const yanit = await Promise.reject("Veri tabanı kapalı");
        console.log(yanit);
    } catch (hata) {
        console.log("Hata yakalandı:", hata);
    }
}
veriCek();

// sıralı işlemler
async function siraliIslem() {
    await bekle(500);
    console.log("Adım A tamam");
    await bekle(500);
    console.log("Adım B tamam");
    await bekle(500);
    console.log("Adım C tamam");
}
siraliIslem();

// fonksiyondan değer döndürür
async function isimGetir() {
    return "Mehmet";
}
isimGetir().then(isim => console.log("Async fonksiyon sonucu:", isim));

// değişken atama
async function hesapla() {
    const s1 = await Promise.resolve(10);
    const s2 = await Promise.resolve(20);
    console.log(`Toplam: ${s1 + s2}`);
}
hesapla();

// paralel işleme
async function cokluVeri() {
    console.time("Süre");
    const [v1, v2] = await Promise.all([
        bekle(1000).then(() => "Veri 1"),
        bekle(1000).then(() => "Veri 2")
    ]);
    console.log(v1, v2);
    console.timeEnd("Süre"); 
}
cokluVeri();

//  arrow function ile async
const girisYap = async (kullaniciAdi) => {
    await bekle(500);
    return `${kullaniciAdi} giriş yaptı.`;
};
girisYap("Admin").then(console.log);

//
(async () => {
    await bekle(100);
    console.log("IIFE Async çalıştı");
})();

//döngü çinde wait
const sureler = [100, 200, 300];
async function donguTest() {
    for (const sure of sureler) {
        await bekle(sure);
        console.log(`${sure} ms beklendi.`);
    }
    console.log("Döngü bitti.");
}
donguTest();

// kullanıcı siparişleri
const getKullanici = () => Promise.resolve({ id: 1, ad: "Burak" });
const getSiparisler = (id) => Promise.resolve(["Laptop", "Mouse"]);

async function dashboardOlustur() {
    try {
        console.log("Kullanıcı aranıyor...");
        const user = await getKullanici();
        console.log(`Kullanıcı bulundu: ${user.ad}`);
        
        console.log("Siparişler çekiliyor...");
        const orders = await getSiparisler(user.id);
        console.log(`Siparişler: ${orders.join(", ")}`);
    } catch (error) {
        console.error("Dashboard hatası:", error);
    }
}
dashboardOlustur();