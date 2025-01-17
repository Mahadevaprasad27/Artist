import artists from "../models/artistModel.js";


// artistController.js
export const createArtist = async (req, res) => {
   try {
       const artistData = artists(req.body);
       if (!artistData) {
           return res.status(404).json({ msg: "artists not found" });
       }
       await artistData.save();
       res.status(200).json({ msg: "artists created successfully" });
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
};


    


export const getAllArtists=async (req,res) => {
   try {
    const artistData = await artists.find();
    if(!artistData){
      return res.status(404).json({ msg:"artist not found"});
    }
    res.status(200).json(artistData);
    }
   catch(err){
      res.status(500).json({error: err.message});
   }

}

export const getOneArtist=async (req,res) => {
   try {
    const id = req.params.id;
    const artistData = await artists.findById(id);
    if(!artistData){
      return res.status(404).json({ msg:"artist not found"});
    }
    res.status(200).json({msg: "artist found "});
    }
   catch(err){
      res.status(500).json({error: err.message});
   }

}

export const updateArtist=async (req,res) => {
   try {
    const id = req.params.id;
    const artistExist = await artists.findById(id);
    if(!artistExist){
      return res.status(404).json({ msg:"artist not found"});
    }
    const updatedData= await artists.findByIdAndUpdate(id,req.body, { new: true})
    res.status(200).json({msg: "artist found "});
    }
   catch(err){
      res.status(500).json({error: err.message});
   }

}


export const deleteArtist=async (req,res) => {
   try {
    const id = req.params.id;
    const artistExist = await artists.findById(id);
    if(!artistExist){
      return res.status(404).json({ msg:"artist not found"});
    }
    await artists.findByIdAndDelete(id);
    res.status(200).json({msg: "artist deleted successfully "});
    }
   catch(err){
      res.status(500).json({error: err.message});
   }

}


