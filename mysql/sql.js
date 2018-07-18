const USERS_SELECT_USERID = 'USERS_SELECT_USERID';
const USERS_SELECT_USERNAME = 'USERS_SELECT_USERNAME';
const USERS_INSERT = 'USERS_INSERT';
const USERS_SELECT_ALL = 'USERS_SELECT_ALL';
const LOGS_SELECT_SINGLEMONEY='LOGS_SELECT_SINGLEMONEY'
module.exports = {
    [USERS_SELECT_USERID]:'select userid from users where userid=?',
    [USERS_SELECT_USERNAME]:'select username from users where username=?',
    [USERS_INSERT]:'insert into users (userid,username,moneybase) values (?,?,?)',
    [USERS_SELECT_ALL]:'select * from users',
    [LOGS_SELECT_SINGLEMONEY]:'select singleMoney from logs where userid=?'
}