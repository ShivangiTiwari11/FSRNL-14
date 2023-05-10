const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {

        if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] == 'JWT') {
            let token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.SECRET_KEY, function (err, payload) {
                console.log(" shivangi err", err);
                console.log("payload", payload);
                if (err) {
                    return res.status(403).send({ message: "Access Denied, user not authenticated" });
                }
                next();
                return;
            })
        }
        else {
            res.status(404).send({ message: "jwt not passed" });
        }

    } catch (err) {
        console.log("cautgh err", err);
        res.send({ message: "returning error" });
    }
}

module.exports = verifyToken;