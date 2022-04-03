console.log(`Client side has on load!`);

fetch('http://localhost:3000/weather?address=').then((response) => {
    response.json().then((data) => {
        if (data.err) {
            return console.log(data.err);
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    })
})