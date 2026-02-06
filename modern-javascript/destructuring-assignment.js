const renkler = ["Kırmızı", "Mavi", "Yeşil"];


const [r1, r2] = renkler;


const [bir, , uc] = [1, 2, 3];


const [x, y = 10] = [5];


const kullanici = { isim: "Ece", yas: 22, konum: "Ankara" };


const { isim, yas } = kullanici;


const { isim: adSoyad } = kullanici;


const kurs = { baslik: "JS", hoca: { ad: "Ahmet" } };
const { hoca: { ad: hocaAdi } } = kurs;


function profilGoster({ isim, yas }) {
    console.log(`${isim} - ${yas} yaşında`);
}
profilGoster(kullanici);


const veri = [{ id: 1 }, { id: 2 }];
const [{ id: ilkId }] = veri;


const [ilkSayi, ...digerSayilar] = [1, 2, 3, 4, 5];


let a = 1, b = 2;
[a, b] = [b, a];