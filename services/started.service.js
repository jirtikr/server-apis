const startedmodel = require('../model/started.modek');

class startedService{
    static async registerstarted(number,title,vnum){
        try{
            const cretestarted = new startedmodel({number,title,vnum});
            return await cretestarted.save();
        } catch(e){
            console.log(e)
            res.json({status:false,sucess:"server error service register"});
        }
   }

   static async getstartedlength(number,title){
    try{
        return await startedmodel.find({number:number,title:title});
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service adver"});
    }
   }

   static async getstartedbynumber(number){
    try{
        return await startedmodel.find({number});
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service adver"});
    }
   }

   static async getstarted(number,title){
    try{
        return await startedmodel.find({number,title});
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service adver"});
    }
   }


}

module.exports = startedService;
