const pass = "123456";
console.log("Şifre kaç haneli?:", pass.length);


const uyari = "dikkat";
console.log(uyari.toUpperCase() + "!");


const input = "   mert@mail.com   ";
console.log("Temiz e-posta:", input.trim());


const hobiler = "Yüzme,Koşu,Kitap";
console.log("Hobi Listesi:", hobiler.split(","));


const tel = "05551112233";
console.log("Alan kodu:", tel.slice(0, 4));


const yorum = "Bu film çok kötü.";
console.log("Düzenlenen yorum:", yorum.replace("kötü", "fena değil"));


const mesaj = "Selam, nasılsın?";
console.log("Selam kelimesi var mı?:", mesaj.includes("Selam"));


const url = "https://google.com";
console.log("Güvenli mi?:", url.startsWith("https"));


const ad = "JavaScript";
console.log("İlk harf nedir?:", ad.charAt(0));


const goooool = "Gol ";
console.log(goooool.repeat(5) + "!"); 