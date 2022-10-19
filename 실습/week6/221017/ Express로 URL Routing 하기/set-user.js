const users = require("../data/users");
const admins = require("../data/admins");

//setUser는 data 폴더 내의 users와 admins 의 userName을 전달받아서 아래 객체에서 요청된 사용자를 찾아 req 객체에 저장합니다.

//setUser 함수를 관리자 모드에서도 사용할 수 있도록 설정하세요.
//setUser 미들웨어를 ()=> (arrow function)을 추가해서 함수형 미들웨어로 변경하세요. 인자는 type으로 설정합니다.

//풀이1
//--------------------------------------------------------------------------------------
function setUser(type) {
    if (type == "admin") {
        return function (req, res, next) {
            const { userName } = req.query;
            //type이 관리자(admin)일 경우 req.user를 admins의 userName으로 세팅하세요.
            req.user = admins[userName];
            next();
        }

    }
    else {
        return function (req, res, next) {
            const { userName } = req.query;
            //type이 관리자(admin)일 경우 req.user를 admins의 userName으로 세팅하세요.
            req.user = users[userName];
            next();
        }
    }
    
}


//풀이2
//--------------------------------------------------------------------------------------
const setUser = (type) => {
    if (type == "admin") {
        return (req, res, next) => {
            const { userName } = req.query;
            req.user = admins[userName];
            next()
        }
    }
    else {
        return (req, res, next) => {
            const { userName } = req.query;
            req.user = users[userName];
            next()
        }
    }
}



module.exports = setUser;
