import express from 'express';
import jwt from 'jsonwebtoken';


const key = "secretkey";


const user = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ user: false, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            jwt.verify(token, key, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ user: false, msg: err});
                }
                req.student_id = decoded.student_id;
                req.national_id = decoded.national_id;
                
                next();
            }
            );
        }



    } catch (err) {
        console.log(err);
        return res.status(500).json("user Error");
    }
}

export default user;