const coursemodel = require('../model/course.modal');

class courseService{
   static async getall(){
    try{
        return await coursemodel.find();
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service adver"});
    }
   }

   static async getbyname(title){
    try{
        return await coursemodel.findOne({title});
    } catch(e){
        console.log(e)
        res.json({status:false,sucess:"server error service adver"});
    }
   }
}

module.exports = courseService;
