const express=require('express');
const dotenv= require("dotenv");
const cors=require('cors');

dotenv.config();
const connectDB=require('./config/conn.js');

const app=express();

app.use(cors());

app.use(express.json());

connectDB();

//apis imports
const userRoutes=require('./routes/userRoutes.js')
const blogRoutes=require('./routes/blogRoutes.js');

//apis
app.use("/api/users",userRoutes);

app.use("/api/blogs",blogRoutes);


const PORT=process.env.PORT || 5000;

const server=app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})