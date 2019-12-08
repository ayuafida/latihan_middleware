const path = require('path')
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.set ('views','views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended : true
}))

//app.get('/',(req, res)=>{
	//res.render('kalku')
//})

require('./router/router')(app)



app.listen(8000,()=>{
	console.log('Berhasil menjalankan server pada port 8000')
})

