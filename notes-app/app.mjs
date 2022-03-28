import notes from './notes.mjs';
import validator from 'validator';

notes();

console.log(validator.isEmail("mamunramdhan@gmail.com"));
console.log(validator.isURL("https://qmun14.github.io"));










// import fs from 'fs';

// fs.writeFileSync("./notes.txt", "Hello My Name is Ma'mun");

// fs.appendFileSync("./notes.txt", "\r\nHope u enjoy my style cmiiw..");