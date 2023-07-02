// import express from 'express';
// import query from '../Database/DBConnection.js';
// import { body, validationResult } from "express-validator";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import cors from "cors";
// import upload from '../MiddleWare/Uplodeimgs.js';


// const newApp = express();
// newApp.use(express.Router());
// newApp.use(cors());

// const key = "secretkey";

// newApp.post('/newApp',
//     body('name').notEmpty().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'),
//     body('email').isEmail.notEmpty().withMessage('Email is required'),
//     body('password').notEmpty().withMessage('Password is required'),
//     body('checkpassword').notEmpty().withMessage('checkpassword is required'),
//     body('phone').notEmpty().withMessage('Phone is required'),
//     body('nationalId').notEmpty().withMessage('nationalId is required'),
//     body('dateOfBirth').notEmpty().withMessage('dateOfBirth is required'),
//     body('gentder').notEmpty().withMessage('gentder is required'),
//     body('military_status').notEmpty().withMessage('military_status is required'),
//     upload,
//     async (req, res) => {
//         async (req, res) => {
//             try {
//                 const errors = validationResult(req);
//                 if (!errors.isEmpty()) {
//                     return res.status(400).json({ errors: errors.array() });
//                 }
                
//                 if (req.body.password !== req.body.checkpassword) {
//                     return res.status(400).json({ errors: [{ msg: "Password does not match" }] });
//                 }

//                 const studentData = {
//                     name: req.body.name,
//                     email: req.body.email,
//                     password: await bcrypt.hash(req.body.password, 10),
//                     phone: req.body.phone,
//                     nationalId: req.body.nationalId,
//                     dateOfBirth: req.body.dateOfBirth,
//                     gentder: req.body.gentder,
//                     image: req.file.filename,
//                     military_status	: req.body.military_status,
//                 };

//                 const sqlInsert = "INSERT INTO `student` SET ?";
//                 await query(sqlInsert, studentData , (err, result) => {
//                     delete studentData.password;
//                     if (err) {
//                         return res.status(400).json({ errors: [{ msg: err }] });
//                     }
//                     res.status(200).json({ msg: "Student added successfully", studentData });
//                 });
//             } catch (err) {
//                 console.log(err);
//                 res.status(500).json({ errors: [{ msg: err }] , "msg": "Server Error"});
//             }
//         }
//     });




