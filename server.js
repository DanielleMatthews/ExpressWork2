const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('')
})
//Greeting Stranger 
app.get('/greeting/:firstname', (req, res) => {
    console.log(req.params);
    res.send('Hello ' + req.params.firstname + '. How is your day going?')
})
//Tip Amount
app.get('/tip/:total/:tipPercent', (req, res) => {
    res.send('Tip Amount: $' + (req.params.total * ((req.params.tipPercent)/ 100)) + '.00')
})
//Magic 8-Ball
const rdmResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
    res.send(rdmResponse[Math.floor(Math.random()* rdmResponse.length)]  )
})

app.listen(port,() => {
    console.log('listening on port' , port);
});