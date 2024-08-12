const express = require('express')
const logger = require('morgan')

const app = express()



// setup
app.use(express.json())
app.use(logger('dev'))



// routes
app.get('/api/clubs', (req, res) => {

    const clubsData = [
        {
            name: 'Paddle Sports Home',
            city: 'Madrid'
        },
        {
            name: 'Paddle Fun',
            city: 'Gijón'
        }
    ]

    res.json(clubsData)
})

app.get('/api/clubs/2', (req, res) => {

    const clubData = {
        name: 'Paddle Fun',
        city: 'Gijón'
    }

    res.json(clubData)
})

app.get('*', (req, res) => {
    res.sendStatus(404)
})



// listen
app.listen(5005, () => console.log('server running on port 5005'))