const startedService = require('../services/started.service');
const courseService = require('../services/course.service');
const playlistService = require('../services/playlist.service');

exports.registerstarted = async(req,res,next)=>{
    try{
        const {number,title,vnum} = req.body;

        let add = false;
        const data = await startedService.getstarted(number,title)

        for (let i = 0; i < data.length; i++) {
            const item = data[i]; 
            if(item.vnum === vnum){
                add = false;
                break;
            } else{
                add = true;
            }
        }

        if(add){
            await startedService.registerstarted(number,title,vnum);
            res.json({status:true,sucess:"started registered Sucessfully"});
        } else{
            if(data.length === 0){
                await startedService.registerstarted(number,title,vnum);
                res.json({status:true,sucess:"started registered Sucessfully"});
            } else {
                res.json({status:false,sucess:"started registered Sucessfully"});
            }
        }
    } catch (e){
        console.log(e)
        res.json({status:false,sucess:"server error controller register"});
    }
}

exports.getstartedlength = async(req,res,next)=>{
    try{
        const {number,title} = req.body;
        const a = await startedService.getstartedlength(number,title);
        if(!a){
            res.status(200).json({status:false,message:"no data found"});
        } else{
            res.status(200).json({status:true,data:a});
        }
    } catch (e){
        console.log(e)
        res.json({status:false,message:"server error controller login"});
    }
}

exports.getstartedunique = async(req,res,next)=>{
    try{
        const {number} = req.body;
        const data = await startedService.getstartedbynumber(number);
        let f = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i]; 
            if(!f.includes(item.title)){
                f.push(item.title)
            }
        }
        
        let ff = [];
        for (let i = 0; i < f.length; i++) {
            const item = f[i]; 
            const a = await startedService.getstartedlength(number,item);
            const d = await courseService.getbyname(item);
            const aut = await playlistService.getany(d._id.toString());
            ff.push({'title':item,'length':a.length-1,'autl':aut.length,'data':d,})
        }

        res.status(200).json({status:true,data:ff});    
    } catch (e){
        console.log(e)
        res.json({status:false,message:"server error controller login"});
    }
}