import express from 'express';
import jwt from 'jsonwebtoken';


const key = "secretkey";


const checkmanager = async (req, res, next) => {
    try {
        let token = req.session.token
        if (!token) {
            return res.status(401).json({ manager: false, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            jwt.verify(token, key, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ manager: false, msg: err });
                }
                
                req.faculty_id = decoded.faculty_id;
                req.manager_id = decoded.manager_id;
                req.manager_email = decoded.manager_email;
                console.log(req.manager_id + " " + req.manager_email + " " + req.faculty_id);
                next();
            }
            );
        }



    } catch (err) {
        console.log(err);
        return res.status(500).json("user Error");
    }
}

export default checkmanager;