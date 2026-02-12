// "Sepete Ekle"  basıldığında mesaj gösterme
const sepetButonu = document.querySelector("#sepet-ekle-btn");
sepetButonu.addEventListener("click", () => {
    console.log("Ürün başarıyla sepete eklendi!");
});

//
const kayitFormu = document.querySelector("#uye-kayit-formu");
kayitFormu.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form verileri sunucuya gönderilmeye hazır.");
});

//
const aramaInput = document.querySelector(".arama-alani");
aramaInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Arama yapılıyor: " + e.target.value);
    }
});

// resmin üzerine gelince opaklığın değişmesi
const profilGorseli = document.querySelector(".kullanici-avatar");
profilGorseli.addEventListener("mouseover", () => {
    profilGorseli.style.opacity = "0.7";
});

// 
profilGorseli.addEventListener("mouseout", () => {
    profilGorseli.style.opacity = "1";
});

//
const sifreAlani = document.querySelector("#sifre-input");
sifreAlani.addEventListener("input", (e) => {
    const uzunluk = e.target.value.length;
    console.log(`Şu anki şifre uzunluğu: ${uzunluk}`);
});

// sayfa kaydırma
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        console.log("Kullanıcı sayfayı bayağı aşağı kaydırdı.");
    }
});

// giriş alanına tıklandığında arka planı renklendirme
const epostaAlani = document.querySelector("input[type='email']");
epostaAlani.addEventListener("focus", () => {
    epostaAlani.style.borderColor = "#3498db";
});

//  çift tıklama listeden bir öğeyi silme
const urunKarti = document.querySelector(".silinebilir-urun");
urunKarti.addEventListener("dblclick", () => {
    alert("Ürünü silmek istediğinize emin misiniz?");
});

// 
window.addEventListener("resize", () => {
    console.log(`Yeni pencere genişliği: ${window.innerWidth}px`);
});