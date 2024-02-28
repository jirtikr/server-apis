const playlistService = require('../services/playlist.service');

exports.getcourseplaylist = async(req,res,next)=>{
    try{
        const {courseid} = req.body;
        const a = await playlistService.getany(courseid);
        if(!a){
            res.status(200).json({status:false,message:"no data found"});
        } else{
            res.status(200).json({status:true,data:a});
        }
    } catch (e){
        console.log(e)
        res.json({status:false,sucess:"server error controller login"});
    }
}
