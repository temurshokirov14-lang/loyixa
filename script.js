
let ism = prompt("O'quvchi ismini kiriting:");
let yosh = prompt("O'quvchi yoshini kiriting:");


let matematika = prompt("Matematika bahosini kiriting (0 dan 100 gacha):");
let fizika = prompt("Fizika bahosini kiriting (0 dan 100 gacha):");
let onaTili = prompt("Ona tili bahosini kiriting (0 dan 100 gacha):");


matematika = Number(matematika);
fizika = Number(fizika);
onaTili = Number(onaTili);


let ortacha = Math.round((matematika + fizika + onaTili) / 3);


let maxBaho = Math.max(matematika, fizika, onaTili);
let minBaho = Math.min(matematika, fizika, onaTili);


let natijaXabari = ortacha >= 80 ? "A'lo" : ortacha >= 60 ? "Yaxshi" : "Qoniqarsiz";


let kattaIsm = ism.toUpperCase();


let ismUzunligi = ism.length;

let yoshTuri = (Number(yosh) % 2 === 0) ? "Juft" : "Toq";


let maxFan = "";
if (maxBaho === matematika) maxFan = "Matematika";
else if (maxBaho === fizika) maxFan = "Fizika";
else maxFan = "Ona tili";


console.log("--- O'QUVCHI NATIJALARI ---");
console.log(`Ism: ${kattaIsm}`);
console.log(`Ism uzunligi: ${ismUzunligi} ta harf`);
console.log(`Yosh: ${yosh} (${yoshTuri} son)`);
console.log(`O'rtacha baho: ${ortacha}`);
console.log(`Natija: ${natijaXabari}`);
console.log(`Eng yuqori baho: ${maxBaho} (${maxFan} fanidan)`);
console.log(`Eng past baho: ${minBaho}`);

