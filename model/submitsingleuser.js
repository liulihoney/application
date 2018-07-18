const {select,insert} = require('../mysql');
const {USERS_SELECT_USERID,USERS_SELECT_USERNAME,USERS_INSERT} = require('../mysql/sql');
async function dealMysql(userid,username,moneybase,res){
   let userid_info = await select(USERS_SELECT_USERID,[userid]);
   if(userid_info.length===0){
        let username_info = await select(USERS_SELECT_USERNAME,[username]);
        if(username_info.length===0){
            let inser_info = await insert(USERS_INSERT,[userid,username,moneybase]);
            res.send({msg:'创建成功',code:1});
        }else{
            res.send({msg:'用户名重复',code:0}); 
        }
   }else{
        res.send({msg:'用户名id重复',code:0});  
   }
}
module.exports = (req,res,next)=>{
    let {userid,username,moneybase} = req.body;
    if(userid===''||username===''||moneybase===''){
        res.send({msg:'参数有误',code:0});
        return;
    }
    dealMysql(userid,username,moneybase,res);  
}