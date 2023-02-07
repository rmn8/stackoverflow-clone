// since using type = module in package.json
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js';

const app = express();

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

app.get("/", (req,res)=>{
    res.send("This is a stackoverflow clone api")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb://127.0.0.1:27017/stack-overflow-clone";
mongoose.set('strictQuery', false);
mongoose.connect( CONNECTION_URL , {useNewUrlParser: true , useUnifiedTopology:true} )
        .then(()=> app.listen(PORT, ()=>{
          console.log(`Server running on post: ${PORT}`)  
        }))
        .catch((err)=> console.log(err.message))