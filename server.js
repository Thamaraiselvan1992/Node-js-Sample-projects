
const express=require('express')
const app=express()
const expresslayout=require('express-ejs-layouts')
const mongoose=require('mongoose')
const indexRouter=require('./routes/index')
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expresslayout)
app.use(express.static('public'))
mongoose.connect("mongodb+srv://Thamaraiselvan:/* pAssword */@cluster0-66r7n.mongodb.net/test?retryWrites=true",{
    useNewUrlParser:true
})
const db=mongoose.connection;
db.on('error',error=>{
console.error(error)
});
db.once('open',()=>{
    console.log('mongoose connected')
})
app.use('/',indexRouter)
app.listen(process.env.PORT||3000)
