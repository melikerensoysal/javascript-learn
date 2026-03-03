// yeni bir liste öğesi oluşturup yapılacaklar listesine 
const yeniGorev = document.createElement("li");
yeniGorev.textContent = "JavaScript çalışmaya devam et";
document.querySelector("#gorev-listesi").appendChild(yeniGorev);

//
const takipButonu = document.querySelector(".btn-takip");
takipButonu.innerText = "Takip Ediliyor";

// alert div oluşturma ve stil verme
const uyariMesaji = document.createElement("div");
uyariMesaji.className = "alert-box success";
uyariMesaji.textContent = "Ayarlarınız başarıyla kaydedildi!";
document.body.prepend(uyariMesaji); // Sayfanın en başına ekler

//
const profilResmi = document.querySelector(".user-avatar");
profilResmi.setAttribute("src", "yeni-profil-fotografi.jpg");

// 5. Bir HTML öğesinin içine tamamen yeni bir yapı ekleme (innerHTML)
const urunKarti = document.querySelector(".card-container");
urunKarti.innerHTML = `
    <h3>Kablosuz Kulaklık</h3>
    <p>Fiyat: 1.500 TL</p>
    <button>Satın Al</button>
`;

// mevcut bir elementi sayfadan tamamen siler
const eskiReklam = document.getElementById("banner-reklam");
if (eskiReklam) {
    eskiReklam.remove();
}

// 
const yardimLinki = document.querySelector("#destek-baglantisi");
yardimLinki.href = "https://yardim.merkezi.com";
yardimLinki.target = "_blank";

// 
const anaGövde = document.body;
anaGövde.classList.toggle("dark-mode");

// bir input alanına varsayılan değer atamak
const aramaCubugu = document.querySelector(".search-input");
aramaCubugu.value = "JavaScript DOM Dersleri";

// öğe kopyalar ve başka bir yere ekler
const orijinalKart = document.querySelector(".meyve-karti");
const kopyaKart = orijinalKart.cloneNode(true);
document.querySelector(".sepet-ozeti").appendChild(kopyaKart);



// 
const anaMenu = document.querySelector(".nav-list");
anaMenu.insertAdjacentHTML("afterbegin", "<li><a href='#'>Giriş</a></li>"); 

//
const eskiButon = document.querySelector("#eski-gonder-btn");
const yeniButon = document.createElement("button");
yeniButon.textContent = "Güncel Gönder";
eskiButon.replaceWith(yeniButon);

// 
const fragman = document.createDocumentFragment();
for(let i=1; i<=3; i++) {
    const li = document.createElement("li");
    li.textContent = `Hızlı Seçenek ${i}`;
    fragman.appendChild(li);
}
document.querySelector(".hizli-menu").appendChild(fragman);

//  dinamik Inline stil atama

const ilerlemeCubugu = document.querySelector(".progress-bar");
ilerlemeCubugu.style.width = "75%";
ilerlemeCubugu.style.backgroundColor = "#4CAF50";

//Metadata Atama
const urunResmi = document.querySelector(".product-img");
urunResmi.dataset.productId = "101";
urunResmi.dataset.category = "elektronik";