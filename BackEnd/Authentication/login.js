import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";


const auth = express();
auth.use(express.Router());
auth.use(cors());


const key = "secretkey";



auth.post('/login',
    body('national_id').isInt().withMessage('nationalId is required').isLength({ min: 14, max: 14 }).withMessage('nationalId must be at least 14 chars long'),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 chars long!"),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }



            const user = await query("SELECT * FROM students WHERE national_id = ?", [req.body.national_id]);
            if (user.length === 0) {
                error.push({ msg: "Student Does Not Exist" });
                return res.status(400).json({ login: false, errors: error });
            }



            const checkpassword = await bcrypt.compare(req.body.password, user[0].password);


            if (!checkpassword) {
                error.push({ msg: "Password is incorrect" });
                return res.status(400).json({ login: false, errors: error });
            }

            delete user[0].password;
            
            const user_id = user[0].user_id;
            const token =jwt.sign({ user_id , national_id:user[0].national_id }, key);
            res.status(200).cookie("token",`Bearer${token}`, { httpOnly: true , expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1)}).json({ login: true });
        } catch (err) {
            console.log(err);
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
    });

export default auth;