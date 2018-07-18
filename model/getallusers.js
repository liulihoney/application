const {select} = require('../mysql');
const {USERS_SELECT_ALL} = require('../mysql/sql');
async function dealMysql(res){
    let all_info = await select(USERS_SELECT_ALL,[]);
    res.send({msg:'获取数据成功',code:1,data:all_info});
}
module.exports = (req,res,next)=>{
    dealMysql(res);
}