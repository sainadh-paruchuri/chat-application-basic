const express=require('express')
const chatRoutes=require('./routes/chats')
const mainRoutes=require('./routes/mainPage')

const bodyParser=require('body-parser')


const app=express();

app.use(bodyParser.urlencoded({extended :false}))

app.use('/chat',chatRoutes);
app.use(mainRoutes)


app.listen(8000)