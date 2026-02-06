const dizi1 = [1, 2], dizi2 = [3, 4];
const birlesik = [...dizi1, ...dizi2];


const kopya = [...dizi1];


const araba = { marka: "Tesla", model: "Y" };
const yeniAraba = { ...araba, yil: 2024 };


const rakamlar = [10, 50, 5];
console.log(Math.max(...rakamlar));


const kelime = [..."Merhaba"];


function sonsuzTopla(...sayilar) {
    return sayilar.reduce((acc, curr) => acc + curr, 0);
}


const { marka, ...ozellikler } = { marka: "BMW", model: "M3", renk: "Mavi" };


const [ilk, ikinci, ...gerisi] = [10, 20, 30, 40, 50];

function kisiBilgi(ad, soyad, ...hobiler) {
    console.log(ad, hobiler);
}


const koordinat = [10, 20];
const noktaCiz = (x, y) => console.log(`X: ${x}, Y: ${y}`);
noktaCiz(...koordinat);