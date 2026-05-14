import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import connectDb from "./config/db.js";
import authRouter from "./routes/Auth.route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigin = ['http://localhost:5173'];
app.use(cors(
    {origin: allowedOrigin , credentials : true}
));

await connectDb();

const PORT = process.env.PORT;

app.use("/api/auth", authRouter);

app.get("/",(req,res)=>{
    res.send("hello from JobHunt")
})

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})
