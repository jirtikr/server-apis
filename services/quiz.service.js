const quizmodel = require('../model/quiz.modal');

class QuizService{
    static async registerquiz(courseid,title,duration,questionanswer,user){
         try{
             const cretequiz = new quizmodel({courseid,title,duration,questionanswer,user});
             return await cretequiz.save();
         } catch(e){
             console.log(e)
             res.json({status:false,sucess:"server error service register"});
         }
    }

    static async getonequiz(courseid){
        try{
            return await quizmodel.findOne({courseid});
        } catch(e){
            console.log(e)
                res.json({status:false,sucess:"server error service chcekuser"});
        }
    }

    static async updateusers(courseid,user){
        try{
            return await quizmodel.findOneAndUpdate(
                { courseid: courseid },
                { $set: { user: user } }
            );
        } catch(e){
            console.log(e)
                res.json({status:false,sucess:"server error service chcekuser"});
        }
    }

}
 
module.exports = QuizService;