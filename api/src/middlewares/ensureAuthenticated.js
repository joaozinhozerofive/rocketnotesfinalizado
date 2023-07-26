const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next) {

    const authHeader = request.headers.authorization;

    if (!authHeader){
        throw new AppError("JWT Token não informado.", 401)
    }

    //o split separa e transforma em string tudo o que tiver após o que é colocado nos parenteses, nesse caso, tudo que vier depois do espaço.

    const [, token] = authHeader.split(" "); "Bare xxxxxx"

    try{
        const { sub: user_id } = verify(token, authConfig.jwt.secret)


        request.user = {
            id: Number(user_id),
        };

        return next();
    }catch {
        throw new AppError("JWT Token inválido", 401)
    }

}

module.exports = ensureAuthenticated;