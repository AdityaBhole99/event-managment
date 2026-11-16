const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config();
const app=express();
app.use(cors());
mongoose.connect(process.env.URL)
.then(()=>{
    console.log("connected succesfully");
})
.catch((error)=>{
    console.log("error connecting",error);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});

