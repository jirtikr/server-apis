const jobmodel = require('../model/job.modal');

class jobService{
    static async registerjob(addedby,title,des,companyname,salary){
         try{
             const cretejob = new jobmodel({addedby,title,des,companyname,salary});
             return await cretejob.save();
         } catch(e){
             console.log(e)
             res.json({status:false,sucess:"server error service register"});
         }
    }

    static async getalljob(){
        try{
            return await jobmodel.find();
        } catch(e){
            console.log(e)
            res.json({status:false,sucess:"server error service register"});
        }
   }
}
 
module.exports = jobService;