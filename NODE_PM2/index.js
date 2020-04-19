let express = require('express')
let app = express()

app.get('/',(req,res) => {
    console.log('Hello world')
    res.send('>Hello world\n>Suraiya Baring\n>5735512165')
})

app.get('/crash', (req, res) => {
    console.log('Cras!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT,
    ()=>console.log('Server is running at ', process.env.PORT))
    