// protected route
import jwt from "jsonwebtoken"


/** @type {import("express").RequestHandler} */
export default function authenticate(req, res, next) {
    const token = req.cookies.auth_token;
    if (!token) {
        return res.status(401).send("Access Denied");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid Token");
            req.user = user;
        }
        next();
    })
}