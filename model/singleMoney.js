const {select}= require('../mysql');
const {USER_SELECT_ALL,LOGS_SELECT_SINGLEMONEY} = require('../mysql/sql');
async function dealMysql(res){
 allUsers = await select(USER_SELECT_ALL,[]);
//  let resArr  = allUsers.map(item=>{
   
//  });
 for( let item of allUsers ){
    let singleMoney = await select(LOGS_SELECT_SINGLEMONEY,[item.userid]);
    let sum  =singleMoneyInfo.reduce((pre,next)=>pre+next.singleMoney,0)
     item.singleMoney = sum+item.moneybase;
     return item;
 }
 res.send({msg:'成功',code:1,data:resArr})
}
module.exports=(req,res,next)=>{
    dealMysql(res)
}