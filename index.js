const express = require('express')
const app = express()
const PORT = 5567

app.get('/', function(req,res){
    res.send('ea')
})

app.get('/cecil', function(req,res){
    res.send('priscilla cecil ardelia') 
})

app.listen(PORT, function() {
 console.log('apa kek:', PORT)
})