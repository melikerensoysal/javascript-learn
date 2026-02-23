const car = { brand: "honda", model: "civic", year: 2004, color: "dark blue" };

// 
const keys = Object.keys(car);

// 
const values = Object.values(car); 

// obje boş mu kontrol etme
const isEmpty = Object.keys({}).length === 0;

// 
Object.keys(car).forEach(key => console.log(`${key}: ${car[key]}`));

// değerlerin toplamını bulma
const scores = { math: 90, english: 80, art: 100 };
const total = Object.values(scores).reduce((a, b) => a + b, 0);

// 
const mixed = { id: 1, name: "eren", active: true };
const stringsOnly = Object.values(mixed).filter(val => typeof val === "string");

// 
const upperKeys = Object.keys(car).map(k => k.toUpperCase());

// 
const form = { user: "zeren", pass: "123", email: "" };
const isFormComplete = Object.values(form).every(val => val !== "");

//key sayısını bulma
const propertyCount = Object.keys(car).length;


const hasTesla = Object.values(car).includes("Tesla");