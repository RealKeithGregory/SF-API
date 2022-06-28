const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

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
    },
    'notachar':{
        'name': 'COMING SOON',
        'age': 'COMING SOON',
        'birthPlace': 'COMING SOON',
        'specialMove': 'COMING SOON'         
    }
}




app.get('/',(request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/characters/:characterName',(request, response) => {
    const charactersName = request.params.characterName.toLowerCase()
    if(characters[charactersName]){
        response.json(characters[charactersName])
    }else{
        response.json(characters['notachar'])
       // figure out how to formulate error msg
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})