setTimeout(() => {
    console.log(`Hello is Time 2 Up second..!`);
}, 2000);

const names = ["Ma'mun", "Ramdhan", "Mikel", "Drex"];
const shortNames = names.filter((name) => {
    return name.length < 5;
});
console.log(shortNames);

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         }

//         callback(data);

//     }, 2000);
// }
// geocode('Jakarta', (data) => {
//     console.log(data);
// });

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num1 + num2;            
        callback(sum);
    }, 2000);

}

add(1, 4 , (sum) => {
    console.log(sum);
});


