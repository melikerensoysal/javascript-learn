let playlist = ["Rap", "Rock", "Jazz"];

// push
playlist.push("Pop");

//  pop
const removedSong = playlist.pop();

// slice
const recentSongs = playlist.slice(-2);

//splice
playlist.splice(1, 1);

// splice
playlist.splice(1, 0, "Haftalık Keşif");

// 
const news = ["Haber 1", "Haber 2", "Haber 3", "Haber 4", "Haber 5", "Haber 6"];
const firstPage = news.slice(0, 5);

// 
const notifications = [];
notifications.push("Yeni bir mesajınız var!");

// 
const tasks = ["Yemek yap", "Ödev yap"];
const currentTask = tasks.pop();

// 
const attendees = ["Ali", "Veli", "Ayşe"];
attendees.splice(1, 1, "Mehmet"); 

// 
const secureCopy = playlist.slice();


// 
const manav = ["Elma", "Armut"];
manav.push("Çilek");

// 
const islemler = ["Kaydet", "Düzenle", "Sil"];
const iptalEdilen = islemler.pop();

// 
const gunler = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const haftaSonu = gunler.slice(5);

// 
const sinif = ["eren", "melik", "hülya"];
sinif.splice(1, 1, "berra"); 

// 5
const sayilar = [10, 20, 30, 40, 50];
const kucukGrup = sayilar.slice(0, 3);

// 
const koleksiyon = ["pul", "taş", "oyuncak"];
koleksiyon.splice(2, 0, "Rozet");

// 
const gecmis = ["Film 1", "Film 2"];
gecmis.push("Film 3");

// 
const harfler = ["A", "B", "C", "D", "E"];
harfler.splice(1, 2); 

// 
const kutu = ["Mesaj 1", "Mesaj 2"];
const sonMesaj = kutu.pop();

// 
const favoriler = ["siyah", "beyaz", "yeşil"];
const kopyaFavoriler = favoriler.slice();


//
const currentTeam = ["jett", "omen", "killjoy"];
currentTeam.push("reyna", "sage"); 

// 
const openTabs = ["github.com", "stackoverflow.com", "youtube.com"];
const closedTab = openTabs.pop(); 

// 
const allProducts = ["klavye", "mouse", "kulaklık", "monitör", "mousepad"];
const featured = allProducts.slice(0, 3); 


//
const myHits = ["yağmurlar", "mayın tarlası", "sigara"];
myHits.splice(1, 1, "dardayım"); 


//
const todoList = ["kod yaz"];
todoList.push("markete git", "kediyi besle");


// 
const pathParts = ["projects", "web", "assets", "logo.png"];
const fileName = pathParts.slice(-1); 



const ilk11 = ["talisca", "asensio", "ederson", "skriniar"];
ilk11.splice(2, 1); 


// 
const pageHistory = ["ana sayfa", "ürünler", "iletişim"];
pageHistory.pop();


//
const feed = ["post 1", "post 2", "post 3"];
feed.splice(1, 0, " kampanyayı kaçırma!"); 



const highScores = [9500, 8200, 7500];
const backupScores = highScores.slice(); 
