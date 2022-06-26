const express = require('express')
const app = express()
const PORT = 8000
const characters = {
    'ryu':{
        'name': 'Ryu',
        'age': 57,
        'birthPlace': 'Japan',
        'specialMove': 'Hadouken'
    },
    'sagat':{
        'name': 'Sagat',
        'age': 58,
        'birthPlace': 'Thailand',
        'specialMove': 'Tiger Knee'
    },
    'm.bison':{
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
    const charactersName = request.params.characterName.toLowerCase
    if(characters[charactersName]){
        response.json(characters[charactersName])
    }else{
        response.alert('That is not a Character in this API!')
    }
    // response.json(characters)
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})