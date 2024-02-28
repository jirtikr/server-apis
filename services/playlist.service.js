const playlistmodel = require('../model/playlist.modal');

class playlistService{
   static async getany(courseid){
    try{
        return await playlistmodel.find({courseid});
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service adver"});
    }
   }
}

module.exports = playlistService;
