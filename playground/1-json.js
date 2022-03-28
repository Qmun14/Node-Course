const fs = require('fs');

// Challlange 1
const dataBuffer = fs.readFileSync("./1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data);
const newData = {
    name : data.name = "Ma'mun",
    planet : data.planet,
    age: data.age = 30
} 

// atau bisa langsung di assign data objectnya
// data.name = "Ma'mun";
// data.age = 30;

console.log(newData);
const newDataJSON = JSON.stringify(newData)
fs.writeFileSync("./1-json.json", newDataJSON);


