
//senkron ve asenkron akışı
console.log("1. Başla");
setTimeout(() => console.log("2. Zamanlayıcı"), 0);
console.log("3. Bitiş");

// 0 gecikme ve stack bloklanması 
console.log("A");
setTimeout(() => console.log("B (Bekleyen)"), 0);
for (let i = 0; i < 1000000; i++) {} 
console.log("C");

// microtask vs macrotask önceliği 
setTimeout(() => console.log("Timeout (Macro)"), 0);
Promise.resolve().then(() => console.log("Promise (Micro)"));

//zincirleme microtask 
Promise.resolve()
  .then(() => {
    console.log("Microtask 1");
    return Promise.resolve();
  })
  .then(() => console.log("Microtask 2"));

// async/await 
async function asyncAkis() {
  console.log("Async Başladı");
  await Promise.resolve();
  console.log("Await Sonrası");
}
asyncAkis();
console.log("Global Kod Sonu");

//
setTimeout(() => console.log("Macrotask"), 0);
async function karma() {
  console.log("Async 1");
  await null;
  console.log("Async 2");
}
karma();
Promise.resolve().then(() => console.log("Microtask"));
console.log("Senkron Son");

// iç içe macrotask 
setTimeout(() => {
  console.log("Dış Macrotask");
  setTimeout(() => console.log("İç Macrotask"), 0);
}, 0);
setTimeout(() => console.log("Bağımsız Macrotask"), 0);

// 
new Promise((resolve) => {
  console.log("Promise Executor (Senkron)");
  setTimeout(() => resolve("Resolve Sonucu (Asenkron)"), 0);
}).then((res) => console.log(res));

//  iç içe microtask 
queueMicrotask(() => {
  console.log("Microtask A");
  queueMicrotask(() => console.log("Microtask A Alt"));
});
queueMicrotask(() => console.log("Microtask B"));

// modern microtask api
console.log("Akış Başladı");
queueMicrotask(() => console.log("Manuel Microtask"));
setTimeout(() => console.log("Zamanlayıcı"), 0);