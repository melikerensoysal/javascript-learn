// 
const user = { name: "eren", age: 25 };
const userStr = JSON.stringify(user);

// 
const incomingData = '{"product": "Laptop", "price": 15000}';
const product = JSON.parse(incomingData);

// deep clone
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));

// 
const prettyJson = JSON.stringify(user, null, 2);

// 
const colors = ["red", "blue", "green"];
const colorsStr = JSON.stringify(colors);

// 
const numbersStr = "[10, 20, 30]";
const numbers = JSON.parse(numbersStr);

//veri saklama
localStorage.setItem("session", JSON.stringify({ token: "ABC123" }));

// replacer
const filteredJson = JSON.stringify(user, ["name"]);

// tarihler stringe dönüşür
const event = { title: "Meeting", date: new Date() };
const eventStr = JSON.stringify(event);

// hatalı json parsing
try {
    const badJson = JSON.parse("{ wrong: data }");
} catch (e) {
    console.log("json hatası yakalandı!");
}


//
const kitap = { ad: "Nutuk", yazar: "Mustafa Kemal Atatürk", sayfa: 600 };
const kitapMetni = JSON.stringify(kitap);

// 
const havaDurumuVerisi = '{"sehir": "Ankara", "derece": 15, "durum": "Güneşli"}';
const havaDurumu = JSON.parse(havaDurumuVerisi);

//
const liste = ["Kod yaz", "yemek ye", "Uyu"];
const jsonListe = JSON.stringify(liste);

//
const sepetHamVeri = '{"urunId": 55, "adet": 2, "toplam": 450}';
const sepetDetay = JSON.parse(sepetHamVeri);

//
const temaAyari = { karanlikMod: true, fontBoyutu: "16px" };
const kaydedilecekTema = JSON.stringify(temaAyari);

// 
const notlar = [85, 90, 78];
const notlarJSON = JSON.stringify(notlar);

// 
const sensorVerisi = '{"sicaklik": 24.5, "nem": 50}';
const veriler = JSON.parse(sensorVerisi);

// 
const film = { isim: "masumiyet", yil: 1997, yonetmen: " Zeki Demirkubuz" };
const filmPaketi = JSON.stringify(film);

// 
const sunucuCevabi = '{"basarili": true, "kullaniciAdi": "melik01"}';
const girisBilgisi = JSON.parse(sunucuCevabi);

//
const koordinatlar = [[10, 20], [30, 40]];
const haritaJSON = JSON.stringify(koordinatlar);