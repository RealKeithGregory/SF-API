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
    },
    'Not A Character':{
        'name': 'Not A Character',
        'age': 'Not A Character',
        'birthPlace': 'Not A Character',
        'specialMove': 'Not A Character' 
    }

}


app.get('/',(request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/characters/:characterName',(request, response) => {
    const charactersName = request.params.characterName
    if(characters[charactersName]){
        response.json(characters[charactersName])
    }else{
        response.json(characters['notACharacter'])
    }
    // response.json(characters)
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})