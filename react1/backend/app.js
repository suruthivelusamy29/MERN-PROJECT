//build a server
//using express build a server
const express=require("express");
//const { title } = require("process");
//s1-require the package
const mongoose=require("mongoose")
const { rateLimit }=require('express-rate-limit')
const helmet=require('helmet')
const bcrypt=require("bcrypt")
//const finaproducts = require("./models/finaproducts");
const jwt=require("jsonwebtoken")
let secretKey=process.env.SECRETKEY //if we keep like this the scret key is to bee known by everyone when pushed in github but without scret key token not generated
const app=express();
const cors = require("cors");
///dotenv

const dotenv=require("dotenv")
dotenv.config()
//const port=process.env.PORT
const port = process.env.PORT || 5000;

const { type } = require("os");
const { password } = require("pg/lib/defaults");
const { unique } = require("drizzle-orm/gel-core");
const { error } = require("console");
const { finalization } = require("process");
app.use(cors());
//use npmjs.com express-rate-limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)
app.use(helmet())
//design an api
app.use(express.json())
//s2- establish a connection
async function connection(){
    await mongoose.connect(process.env.MONGODBURL)
    console.log(process.env.MONGODBURL)
}
//s3-create a schema
// no id required since in mongodb it auto increment
let productschema=new mongoose.Schema({title:{
    type:String,
    required:true
},price:{
    type:Number,
    required:true
},img:{
    type:String,
    required:true
}})
//s4-create a model
let finaproducts=mongoose.model('products',productschema)


//--------------------------------------Dummy api----------------------------
app.get('/dummy',(req,res)=>{
    const age=req.query.age//params
    const location=req.query.location
    const name=req.query.name
    res.send(`my name is ${name} and age is ${age} and i live in ${location}`)
    
})


//-------------------------USER MODEL-----------------------------------------------//
const userschema= new mongoose.Schema({username:{
type:String,
required:true,unique:true
},email:{
    type:String,
    required:true
},password:{
    type:String,
    required:true
}

})
let usermodel=mongoose.model('users',userschema)
//api-1.2 registration details
app.post('/signups',async(req,res)=>{
    try{
   const{username,email,password}=req.body
   let isuser=await usermodel.findOne({username})
   if(isuser) return res.json({
    msg:"user already exists"

   })
   //usermodel.create(username,email,password)
   let hashedpassword=await bcrypt.hash(password,10)
 await usermodel.create({username,email,password:hashedpassword})
 res.json({
    msg:"Registrtation Successful"
 })
    }
    catch(error){
res.json({
    msg:error.message
})
    }
})




//api-2 fetch all the products
app.get('/productss',async(req,res)=>{
try{
let products=await finalproducts.find()
res.json({
    products
})
}
catch(error){
res.json({
    msg:error.message
})
}

})

// fectch single products

app.get('/product/:id',async(req,res)=>{
    id=req.params.id
  let product=await  finaproducts.findById(id)
    res.json({
        product
    })
//res.send(id)
})
//api-3 delete a product
app.delete('/delete',async(req,res)=>{
    try{
        const{title}=req.body
        let pro=await finaproducts.findOne({title})
        await finaproducts.findByIdAndDelete(pro._id)
        res.json({
            msg:"product has been deleted"
        })
    }
    catch(error){
        res.json({
            msg:error.message
        })

    }
})
//api-4 update a product 
app.put('/update',async(req,res)=>{
    try{
    const{id,title,price}=req.body
    await finalproducts.findByIdAndUpdate(id,{title,price})
    res.json({
        msg:"Product is updated"
    })


    }
    catch(error){
        res.json({
            msg:error.message
        })
    }
})
//----------------signin------------------//
//api for signup
/*app.post('/signin',async(req,res)=>{
const{username,password}=req.body
let userdetails=await usermodel.findOne({username})
if(!userdetails)return res.json({
    msg:"user not found"
})
//--------to check username-------//
//if(userdetails.username===username) return res.json({msg:"enter the password"})
   let checkpassword= bcrypt.compare(password,userdetails.password)//.compare internally compare hashpassword with the password
   if(!checkpassword) return res.json({msg:"username or password is wrong"})

    //token generation
let payload={username:username}

 let token=await jwt.sign(payload,secretKey,{expiresIn:"1hr"})//3 things the jwt will take us parameter
    res.json({
    msg:"login successfull",
    token
   })
})*/
/*app.post('/signin', async(req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ msg: "Username and password required" });

    let userdetails = await usermodel.findOne({ username });
    if (!userdetails) return res.status(400).json({ msg: "User not found" });

    let checkpassword = await bcrypt.compare(password, userdetails.password);
    if (!checkpassword) return res.status(400).json({ msg: "Username or password is wrong" });

    let payload = { username };
    let token = jwt.sign(payload, secretKey || "mysecretkey", { expiresIn: "1h" }); // fallback key

    res.json({ msg: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
});
*/

// signup.js (or in your app.js)

const nodemailer = require("nodemailer");


;

// --- MongoDB User Model ---


// --- Nodemailer transporter ---
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// --- Signup Route ---
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1️⃣ Validate input
    if (!username || !email || !password)
      return res.status(400).json({ msg: "All fields are required" });

    // 2️⃣ Check if user exists
    const existingUser = await usermodel.findOne({ $or: [{ username }, { email }] });
    if (existingUser)
      return res.status(400).json({ msg: "Username or email already exists" });

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Save user
    const newUser = new usermodel({ username, email, password: hashedPassword });
    await newUser.save();
    console.log("✅ User saved:", email);

    // 5️⃣ Send welcome email
    try {
      const info = await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Welcome to Our App 🎉",
        html: `
          <h2>Welcome, ${username}!</h2>
          <p>Your account has been created successfully.</p>
        `,
      });
      console.log("📧 Email sent:", info.response);
    } catch (mailError) {
      console.error("❌ Email failed:", mailError.message);
      // signup still succeeds even if email fails
    }

    // 6️⃣ Send response
    res.status(201).json({ msg: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

// --- Connect to MongoDB & Start server ---
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));








//db in memory database
/*let products=[{
    id:1,title:"premium bag", 
    pricee:"2000",
    img:"https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696461/samples/ecommerce/leather-bag-gray.jpg"

},{id:2,
    title:"chair",
    price:"10000",
    img:"https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696469/samples/chair-and-coffee-table.jpg"
},{
    id:3,
    title:"watch",
    price:"30000",
    img:"https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696459/samples/ecommerce/analog-classic.jpg"

}]*/




//route-> the name after the baseurl is known as route 
// if we don't have the route 404 error->route not found
app.get('/products',(req,res)=>{
    res.json({
        products
    })
})
/*app.post('/submitproduct',(req,res)=>{
    let {id,title,price,img}=req.body
    let newprodut={id,title,price,img}
    products.push(newprodut)
    res.json({
        msg:"Product added sucessfully"
    })
})*/

/*app.post('/product',async(req,res)=>{
    try{
        const {title,price,img}=req.body
        let newproduct={title,price,img}
        await finaproducts.create(newproduct)
        res.status(201).json({
            msg:"products are addedd successfully"
        })
    }
    catch(error){
    res.json({
        msg:error.message
    })
    }
})*/

//-----------------Password encrytion----------------------------------//
async function hashing(){
    let userpassword="Suruthi123"
   let newpassword=await bcrypt.hash(userpassword,10)
   console.log(newpassword)
}





//app.put()
//app.delete()

app.listen(port,async()=>{ console.log(`the server is running on ${port}`) 
connection(); 
console.log("db is connected") 
 await finaproducts.create({title:"premium bag", price:"2000", img:"https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696461/samples/ecommerce/leather-bag-gray.jpg" })

  console.log("product added");
  hashing()
})















// api-1 store products in daatabse using try and catch


