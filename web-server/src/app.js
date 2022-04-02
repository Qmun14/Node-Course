const path = require('path')
const express = require('express')
const hbs = require ('hbs')

const app = express();

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebar and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather App',
        name : "Ma'mun Ramdhan"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About Page',
        name : `Ma'mun Ramdhan`
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'Help Page',
        list : {
            list1 : 'User Guide',
            list2 : 'Navigation',
            list3 : 'Contact Administrator'
        }
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast : {
            temp : '30 degree Celcius',
            feelslike :  '32 degree Celcius'
        },
        location : {
            city : 'Jakarta',
            state : 'Indonesia'
        }
    })
})

app.get('/help/*', (req, res) => {
    res.render('article-not-found', {
        title : 'Article Not Found!',
        errorMessage : `This WebApp not contain Help Article at this moment, Maybe will be available soon.`
    })
})

app.get('*', (req, res) => {
    res.render('404-error', {
        title : '404 Not Found!',
        errorMessage : 'You just access forbiden Page/Method Please Go Back'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})