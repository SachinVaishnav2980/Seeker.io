import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});

const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
    origin:'http//localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));


const PORT= process.env.PORT  ||3000;
app.listen(PORT, (req, res)=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})