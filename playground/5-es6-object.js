// object property shorthand

const name = "Ma'mun"
const myAge = 30

const user = {
    name,
    age: myAge,
    location: "Bogor"
}

console.log(user);

// Object destructuring

const product = {
    label : 'NoteBook',
    price : 13500000,
    stock : 78,
    salesPrice : undefined
}

// const label = product.label
// const price = product.price

// const {label:productLabel, price, stock, salesPrice, rating = 5} = product

// console.log(productLabel);
// console.log(price);
// console.log(rating);

const transaction = (type, { label, price, stock = 0 } = {}) => {
    console.log(type, label, price, stock );
}

transaction('order', product)


