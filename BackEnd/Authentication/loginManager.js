import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import user from '../MiddleWare/checkStudent.js';


const authmanager = express();
authmanager.use(express.Router());





const key = "secretkey";



authmanager.post('/login',
    body('manager_email').notEmpty().withMessage('Email is required'),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 chars long!"),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }



            const manager = await query("SELECT * FROM manager WHERE manager_email = ?", [req.body.manager_email]);
            if (user.length === 0) {
                error.push({ msg: "manager Does Not Exist" });
                return res.status(400).json({ login: false, errors: error });
            }


            console.log(manager[0]);

            // const checkpassword = await bcrypt.compare(req.body.password, user[0].password);


            // if (!checkpassword) {
            //     error.push({ msg: "Password is incorrect" });
            //     return res.status(400).json({ login: false, errors: error });
            // }

            delete manager[0].password;
            
            const payload = {
                manager_id: manager[0].manager_id,
                manager_email: manager[0].manager_email,
                faculty_id: manager[0].faculty_id,
            };
            const token =jwt.sign(payload, key);
            req.session.token ="Bearer "+ token;
            res.status(200).json({ login: true });
            // res.status(200).cookie("token",`Bearer ${token}`, { httpOnly: true }).json({ login: true });
        } catch (err) {
            console.log(err);
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
    });

authmanager.get('/logout',
    user,
    async (req, res) => {
        try {
            req.session.destroy();
            res.status(200).json({ login: false, msg: "logout" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
    });


export default authmanager;