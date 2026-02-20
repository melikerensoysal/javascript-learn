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