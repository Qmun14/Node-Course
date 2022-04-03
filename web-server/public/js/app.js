console.log(`Client side has on load!`);

const formWeather = document.querySelector('form')
const search = document.querySelector('input')

formWeather.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location.toString()}`).then((response) => {
        response.json().then((data) => {
            if (data.err) {
                return console.log(data.err);
            } else {
                console.log(data.location);
                console.log(data.forecast);
            }
        })
    })


})