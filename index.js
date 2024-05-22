const express = require('express');
const path = require('path')
const app = express();
const userModel = require('./models/user')
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/read', async(req, res)=>{
    const readuser =await userModel.find();

    res.render('read' ,{users:readuser})
})


app.post('/create',async (req,res)=>{
    const createuser =await userModel.create({
        name:req.body.name,
        email:req.body.email,
        imageurl:req.body.imageurl
    })

    res.redirect('/read')
})

app.get('/edit/:id', async (req,res)=>{
    const useredit = await userModel.findOne({_id:req.params.id})

    res.render('edit',{useredit})
})
app.post('/update/:id',async (req,res)=>{
    const {email, name, imageurl} = req.body;
    const useredit = await userModel.findOneAndUpdate({_id:req.params.id },{email,name,imageurl},{new:true} )

    res.redirect("/read")
})

app.get('/delete/:id',async(req,res)=>{
    const userdelete = await userModel.findOneAndDelete({_id:req.params.id})
    res.redirect('/read')
})

app.listen(5000  ,()=>{
    console.log('server in running at poar ' + 5000)
});