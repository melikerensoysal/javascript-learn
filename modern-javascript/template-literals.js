const mesaj = `Merhaba, ben ${ad}.`;


const adres = `
    Mahalle: Merkez
    Sokak: Gül
    Şehir: ${sehir}
`;


const sepet = `Toplam: ${100 + 250} TL`;


const durum = `Kullanıcı ${ad ? "Giriş Yaptı" : "Anonim"}`;


const buyukHarf = (metin) => metin.toUpperCase();
const bilgi = `İsim: ${buyukHarf(ad)}`;


const html = `<div class="card"><h3>${ad}</h3></div>`;


const puan = 80;
const sonuc = `Notunuz: ${puan > 50 ? `Başarılı (${puan})` : "Başarısız"}`;


const diller = ["JS", "Python", "C#"];
const liste = `Bildiğim diller: ${diller.join(" - ")}`;


const id = 5;
const api = `https://api.test.com/users/${id}`;


const tırnak = `JavaScript'te \` (backtick) kullanmak çok kolaydır.`;