// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(4));

const even = {
    name : 'Birthday Party',
    guestList: ["Ma'mun", 'Ramdhan', "Van der Werff"],
    printGuestList() {
        console.log(`Guest list for ${this.name}`);
        this.guestList.forEach( (guest) => {
            console.log(`${guest} is attending ${this.name} `);
        })
    }
}

even.printGuestList()



