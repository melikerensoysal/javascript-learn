// 
const user = { name: "eren", age: 25 };
const userStr = JSON.stringify(user);

// 
const incomingData = '{"product": "Laptop", "price": 15000}';
const product = JSON.parse(incomingData);

// deep clone
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));

// 
const prettyJson = JSON.stringify(user, null, 2);

// 
const colors = ["red", "blue", "green"];
const colorsStr = JSON.stringify(colors);

// 
const numbersStr = "[10, 20, 30]";
const numbers = JSON.parse(numbersStr);

//veri saklama
localStorage.setItem("session", JSON.stringify({ token: "ABC123" }));

// replacer
const filteredJson = JSON.stringify(user, ["name"]);

// tarihler stringe dönüşür
const event = { title: "Meeting", date: new Date() };
const eventStr = JSON.stringify(event);

// hatalı json parsing
try {
    const badJson = JSON.parse("{ wrong: data }");
} catch (e) {
    console.log("json hatası yakalandı!");
}