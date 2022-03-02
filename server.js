const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('')
})
app.get('/greeting/:firstname', (req, res) => {
    console.log(req.params);
    res.send('Hello ' + req.params.firstname + '. How is your day going?' )
})

// app.get('/tip/:total/:percent', (req, res)=>{

// })
app.listen(port,() => {
    console.log('listening on port' , port);
});