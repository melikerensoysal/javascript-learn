// block scope
{
    let kitap = "Nutuk";
    const yazar = "Atatürk";
}


// yeniden değer atama
let skor = 10;
skor = 15;
const tcNo = "12345678910";


// hoisting farkı
let sehir = "Ankara";

// const ile obje İçeriğini Değiştirme
const araba = { marka: "Tesla", model: "Model 3" };
araba.model = "Model Y";


//
const diller = ["JS", "Python"];
diller.push("Rust");


//
let kullanici = "Ali";

// for döngüsünde let kullanımı
for (let i = 0; i < 3; i++) {
}

// 
let x = 5; 

// shadowing
let hava = "Güneşli";
{
    let hava = "Yağmurlu";
    console.log("İçerde:", hava);
}
console.log("Dışarda:", hava);

//
const IS_ADMIN = true;
