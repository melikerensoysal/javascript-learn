// nesne metodu
const araba = {
    marka: "Togg",
    bilgiVer() { console.log(this.marka); }
};
araba.bilgiVer();

// global bağlam
// console.log(this); 

// arrow / dış kapsamı temsil eder
const robot = {
    isim: "Zeki",
    selamla: () => console.log(this.isim)
};

// call() this  bağlamını manuel almak
function renkSoyle() { console.log(`Renk: ${this.renk}`); }
renkSoyle.call({ renk: "Mavi" });

// apply() call gibi ama argümanları dizi olarak alır
function detayYaz(hız, agirlik) { 
    console.log(`${this.tur} hızı: ${hız}, ağırlığı: ${agirlik}`); 
}
detayYaz.apply({ tur: "Uçak" }, ["900km", "50ton"]);

//bind() metodu this sabitlenmiş yeni bir fonksiyon oluşturur
const kisi = { ad: "Can" };
function merhaba() { console.log(`Selam ${this.ad}`); }
const kisiSelamla = merhaba.bind(kisi);
kisiSelamla();

// 
function Oyuncu(isim) {
    this.isim = isim;
}
const oyuncu1 = new Oyuncu("Hakan");

//
// buton.addEventListener("click", function() { console.log(this); });

//  iç içe fonksiyonlarda this kaybolabilir
const sirket = {
    ad: "Yazılım A.Ş.",
    yazdir() {
        const icFunc = function() { console.log(this.ad); };
        icFunc();
    }
};

// başka nesnenin metodunu kullanma
const kosucu = { hiz: 25 };
const bisikletli = { hiz: 40, git() { console.log(this.hiz); } };
bisikletli.git.call(kosucu); 