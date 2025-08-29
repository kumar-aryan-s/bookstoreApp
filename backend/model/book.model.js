import mongoose, { mongo } from "mongoose";
const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    catergory:String,
    image:String,
    title:String
})

const Book=mongoose.model("book",bookSchema);

export default Book;