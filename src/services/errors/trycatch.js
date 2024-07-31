const trycatch= conttroller =>(req,res,next)=>{
    try{
        conttroller(req,res);
    }
    catch(err){
        next(err);
    }
}
module.exports = {trycatch}