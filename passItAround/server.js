const express = require ('express')
const app = express()
const port = 3000

/*
- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.
*/

app.get('/99', (req, res) => {
    res.send("99 Bottles of Root Beer on the Wall" + `<a href = "http://localhost:3000/98"> Take one down </a>`)
})

app.get('/0', (req, res) => {
    res.send("ZERO Bottles of Root Beer Remain, are you okay? ")
})

app.get('/:remaining', (req, res) => {
    var x = req.params.remaining - 1 
    res.send((req.params.remaining) + " Bottles of Root Beer on the Wall" + `<a href = "${x}" > Take one down </a>`)
})

app.listen(port,() => {
    console.log('listening on port' , port);
})