const jobappliedmodel = require('../model/jobapplied.modal');

class jobappliedService{
    static async registerjobapplied(addedby,title,des,companyname,salary,appliedby,status,date,time){
         try{
             const cretejob = new jobappliedmodel({addedby,title,des,companyname,salary,appliedby,status,date,time});
             return await cretejob.save();
         } catch(e){
             console.log(e)
             res.json({status:false,sucess:"server error service register"});
         }
    }

    static async getalljobapplied(){
        try{
            return await jobappliedmodel.find();
        } catch(e){
            console.log(e)
            res.json({status:false,sucess:"server error service register"});
        }
   }

   static async updatejobapplied(addedby,appliedby,status,date,time){
    try{
        return await jobappliedmodel.findOneAndUpdate({addedby:addedby,appliedby:appliedby},
            {$set:{status:status,date:date,time:time}});
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service register"});
    }
}

   static async deletejobapplied(addedby,appliedby){
    try{
        return await jobappliedmodel.deleteOne({addedby:addedby,appliedby:appliedby});
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service register"});
    }
}
}
 
module.exports = jobappliedService;