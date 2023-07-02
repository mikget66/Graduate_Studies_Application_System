import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';


const newApp = express();
newApp.use(express.Router());
newApp.use(cors());

const key = "secretkey";

newApp.post('/signup',
    body('name').isString().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'),
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('password').notEmpty().withMessage('Password is required'),
    body('checkpassword').notEmpty().withMessage('checkpassword is required'),
    body('phone').isInt().withMessage('phone is required').isLength({ min: 11, max: 11 }).withMessage('phone must be at least 11 chars long'),
    body('national_id').isInt().withMessage('nationalId is required').isLength({ min: 14, max: 14 }).withMessage('nationalId must be at least 14 chars long'),
    body('dateOfBirth').notEmpty().withMessage('dateOfBirth is required'),
    body('gender').notEmpty().withMessage('gentder is required'),
    body('milatryStatus').notEmpty().withMessage('military_status is required'),
    body("level").notEmpty().withMessage('Educational_level is required'),
    body("faculty_name").notEmpty().withMessage('faculty_name is required'),
    body("department").notEmpty().withMessage('department_name is required'),
    body("program").notEmpty().withMessage('program_name is required'),

    upload,
    async (req, res) => {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty() || !req.files.image1 ) {
                console.log(req.body);
                return res.status(400).json({ errors: errors.array().map((err) => err.msg), msg: "Please fill all the required fields" });
            }


            if (req.body.password !== req.body.checkpassword) {
                return res.status(400).json({ errors: [{ msg: "Password does not match" }] });
            }

            const studentData = {
                name: req.body.name,
                password: await bcrypt.hash(req.body.password, 10),
                nationalId: req.body.nationalId,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                level: req.body.level,
                dateOfBirth: req.body.dateOfBirth,
                military_status: req.body.military_status,
                image: req.files.image1[0].filename,
            };

            res.status(200).json({ msg: "Student added successfully", studentData });


            // const sqlInsert = "INSERT INTO `students` SET ?";
            // await query(sqlInsert, studentData, (err, result) => {
            //     delete studentData.password;
            //     if (err) {
            //         return res.status(400).json({ errors: [{ msg: err }] });
            //     } else {
            //         return res.status(200).json({ msg: "Student added successfully", studentData });
            //     }
            // });
            
        } catch (err) {
            console.log(err);
            res.status(500).json({ errors: [{ msg: err }], "msg": "Server Error" });
        }

    });


export default newApp;


