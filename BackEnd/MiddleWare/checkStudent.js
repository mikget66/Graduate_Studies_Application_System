import express from 'express';
import jwt from 'jsonwebtoken';


const key = "secretkey";


const user = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ user: false, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            let authUser = jwt.verify(token, key);
            req.authUserid = authUser.user_id;
        }

        next();


    } catch (err) {
        console.log(err);
        return res.status(500).json("user Error");
    }
}

export default user;