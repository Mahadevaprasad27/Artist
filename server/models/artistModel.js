import mongoose from "mongoose";

const artistSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    awards:{
        type:String,
        required:true,
    },
    artist_album:{
        type:String,
        required:true,
    },
    records_label:{
        type:String,
        required:true,
    },
});

export default mongoose.model("artist",artistSchema);