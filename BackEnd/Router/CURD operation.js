import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';
import fs from 'fs';



const student = express();
student.use(express.Router());
student.use(cors());



student.get('/allstudentdetails',
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where student.student-name LIKE '%${req.query.search}%'`;
            }

            const studentdetails = await query(`SELECT *FROM students ${search} `);

            delete studentdetails[0].password;
            res.status(200).json(studentdetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });



student.get('/studentdetails/:id',
    async (req, res) => {
        try {
            const sqlShow = "SELECT *FROM students WHERE student_id =?";
            const values = [req.params.id];

            const studentdetails = await query(sqlShow, values);
            if (!studentdetails[0]) {
                return res.status(404).json({ ms: "student not found !" });
            }
            delete studentdetails[0].password;
            res.status(200).json(studentdetails[0]);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }

    });



student.put('/studentupdate/:id',
    body('name').notEmpty().withMessage('Name is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('national_id').isInt().withMessage('nationalId is required'),
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('phone').isInt().withMessage('phone is required'),
    body('gender').notEmpty().withMessage('gentder is required'),
    body("level").notEmpty().withMessage('Educational_level is required'),
    body('dateOfBirth').notEmpty().withMessage('dateOfBirth is required'),
    body('military_status').notEmpty().withMessage('military_status is required'),


    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const sqlcheck = "SELECT * FROM students WHERE student_id = ?";
            const value = [req.params.id];

            const studentdetails = await query(sqlcheck, value);

            if (!studentdetails[0]) {
                return res.status(400).json({ msg: "Error: student Not Found!" });
            }

            if (req.body.email != studentdetails[0].email) {
                return res.status(400).json({ errors: [{ msg: "Email Is Not Allow to Chage !" }] });
            }

            if (req.body.password) {
                const pass = await bcrypt.hash(req.body.password, 10);
                const sqlUpdate = "UPDATE students SET student_name = ?, email = ?, phonenumber = ?, password = ? WHERE student_id = ?";
                const values = [req.body.student_name, req.body.email, req.body.phonenumber, pass, req.params.id];
                return await query(sqlUpdate, values, (err) => {

                     if (err) {
                            console.log(err);
                        }
                     res.status(200).json({ msg: "Student Updated Successfully" });
                });
            } else {

            const sqlUpdate = "UPDATE students SET ?  WHERE student_id = ?";
            const values = [studentData, req.params.id];
            await query(sqlUpdate, values);

            res.status(200).json({ msg: "Student Updated Successfully" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });



student.delete('/studentdelete/:id',
    async (req, res) => {
        try {
            const studentdetails = await query("SELECT * FROM students WHERE student_id = ?", [req.params.id]);
            if (!studentdetails[0]) {
                return res.status(404).json({ ms: "student not found !" });
            }

            const sqlDelete = "DELETE FROM students WHERE student_id = ?";
            const values = [studentdetails[0].student_id];
            await query(sqlDelete, values);
            res.status(200).json({
                msg: "student delete successfully",
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);


export default student;