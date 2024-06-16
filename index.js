const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

const app = express ();
dotenv.config();

app.use(bodyParser.json())
app.use(express.static('pages'))
app.use(bodyParser.urlencoded({
    extended:true

}
))
mongoose.connect('mongodb://localhost:27017/Bhumika.user')
var db=mongoose.connection
db.on('error',()=> HTMLFormControlsCollection.log("Error in connecting to database"))
db.once('open',()=> console.log("connected to database"))

app.post("signup_sucessful.html",(req,res) => {
    var name= req.body.name
    var age=req.body.age
    var email=req.bogy.email
    var phno=req.body.phno
    var gender=req.body.gender
    var password=req.body.password

    var data={
        "firstname":firstname,
        "lastname":lastname,
        "age":age,
        "email":email,
        "phno":phno,
        "gender":gender,
        "password":password
        }
        db.collection('users').insertOne(data,(err,collection) => {
            if(err){
                throw err;

            }
            console.log("Record Inserted Successful")
        }
        )
        return res.redirect('signup_sucessful.html')
})

// const port = process.env.PORT || 3000;

// app.listen(port, ()=>{
//     console.log(`server is running on port ${port}`);
// })
app.get("/",(req,res) => {
    res.set({
        "Allow-acess-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("listening to port 3000")