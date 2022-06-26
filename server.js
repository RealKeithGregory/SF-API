const express = require('express')
const app = express()
const PORT = 8000
const characters = {
    'Ryu':{
        'name': 'Ryu',
        'age': 57,
        'birthPlace': 'Japan',
        'specialMove': 'Hadouken'
    },
    'Sagat':{
        'name': 'Sagat',
        'age': 58,
        'birthPlace': 'Thailand',
        'specialMove': 'Tiger Knee'
    },
    'M.Bison':{
        'name': 'M.Bison',
        'age': 'Unknown',
        'birthPlace': 'Unknown',
        'specialMove': 'Psycho Crusher' 
    }

}


app.get('/',(request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/characters/:characterName',(request, response) => {
    request.params.characterName
    response.json(characters)
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})