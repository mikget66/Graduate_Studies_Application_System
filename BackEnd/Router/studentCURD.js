import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';
import fs from 'fs';
import user from "../MiddleWare/checkStudent.js";


const student = express();
student.use(express.Router());
student.use(cors());



student.get('/allstudentdetails',
    user,
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where application.status LIKE '%${req.query.search}%'`;
            }

            // const studentdetails1 = await query(`SELECT * FROM students inner join application on students.student_id = application.student_id ${search}`);
            const studentdetails = await query(`SELECT  faculty.faculty_name , departments_of_faculty.department_name , programs_of_department.program_name , students.* FROM students inner join application on students.student_id = application.student_id inner join faculty on application.faculty_id = faculty.faculty_id inner join departments_of_faculty on application.department_id = departments_of_faculty.department_id inner join programs_of_department on application.program_id = programs_of_department.program_id ${search}`);

            delete studentdetails[0].password;
            res.status(200).json(studentdetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });


student.get('/studentdetails',
    user,
    async (req, res) => {
        try {
            const sqlShow = "SELECT application.status, application.submission_date, students.*, faculty.faculty_name, departments_of_faculty.department_name, programs_of_department.program_name FROM application INNER JOIN students ON application.student_id = students.student_id INNER JOIN faculty ON application.faculty_id = faculty.faculty_id INNER JOIN departments_of_faculty ON application.department_id = departments_of_faculty.department_id INNER JOIN programs_of_department ON application.program_id = programs_of_department.program_id WHERE application.student_id = ?";
            const values = [req.student_id];

            const studentdetails = await query(sqlShow, values);
            if (!studentdetails[0]) {
                return res.status(404).json({ msg: "student not found !" });
            }
            delete studentdetails[0].password;
            res.status(200).json(studentdetails[0]);
        } catch (err) {
            console.log(err);
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }

    });


student.put('/studentupdate/:id',
    upload,
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'),
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('phone').isInt().withMessage('phone is required'),
    body('national_id').notEmpty().withMessage('nationalId is required'),
    body('dateOfBirth').notEmpty().withMessage('dateOfBirth is required'),
    body('gender').notEmpty().withMessage('gentder is required'),
    body('military_status').notEmpty().withMessage('military_status is required'),
    body("level").notEmpty().withMessage('Educational_level is required'),
    body("faculty").notEmpty().withMessage('faculty_id is required'),
    body("department").notEmpty().withMessage('department_id is required'),
    body("program").notEmpty().withMessage('program_id is required'),
    body("length_of_file").notEmpty().withMessage('length_of_file is required'),


    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                hanleDelUplodes(req);
                return res.status(400).json({ errors: errors.array() });
            }

            
            const sqlcheck = "SELECT * FROM students WHERE student_id = ?";
            const value = [req.params.id];

            const studentdetails = await query(sqlcheck, value);

            if (!studentdetails[0]) {
                hanleDelUplodes(req);
                return res.status(400).json({ msg: "Error: student Not Found!" });
            }

            if (req.body.national_id != studentdetails[0].national_id) {
                hanleDelUplodes(req);
                hanleDelfile(req);
                return res.status(400).json({ errors: [{ msg: "national_id Is Not Allow to Chage !" }] });
            }


            const sqlcheck1 = "SELECT * FROM application WHERE student_id = ?";
            const value1 = [req.params.id];

            const student_status = await query(sqlcheck1, value1);
            console.log(student_status[0].status);

            // if (student_status[0].status != "3") {
            //     hanleDelUplodes(req);
            //     return res.status(400).json({ msg: "Not Allow to Update !" });
            // }          
            


            

            

            if (req.body.length_of_file != Object.keys(req.files).length) {
                hanleDelUplodes(req);
                return res.status(400).json({ errors: [{ msg: "Please upload all the required files" }] });
            }

            const maxFileSize = 1024 * 1024 * 2;
            const sizeinMB = maxFileSize / (1024 * 1024);
            let number_of_files = 9;

            const array_of_filename_photo = [];
            for (let i = 1; i <= number_of_files; i++) {
                if (!req.files[`image${i}`]) {
                    array_of_filename_photo.splice(i, 0);
                    continue;
                }
                let file = req.files[`image${i}`][0].size || 0;
                if (file > maxFileSize) {
                    hanleDelUplodes(req);
                    return res.status(400).json({ errors: [{ msg: `Please upload a image number ${i} less than ${sizeinMB} MB ` }] });
                }
            }

            for (let i = 1; i <= 9; i++) {
                if (!req.files[`image${i}`]) {
                    array_of_filename_photo.splice(i,0,studentdetails[0][`image${i}`]);
                } else {
                    array_of_filename_photo.splice(i,0,req.files[`image${i}`][0].filename);
                }
            }
            console.log(array_of_filename_photo);

            const studentData = {
                student_name: req.body.name,
                national_id: req.body.national_id,
                email: req.body.email,
                phonenumber: req.body.phone,
                gender: req.body.gender,
                level: req.body.level,
                birthdate: req.body.dateOfBirth,
                military_status: req.body.military_status,
                img: array_of_filename_photo[0],
                photo_national_id: array_of_filename_photo[1],
                birth_certificate: array_of_filename_photo[2],
                academic_qualification: array_of_filename_photo[3],
                grade_statement: array_of_filename_photo[4],
                good_conduct_form: array_of_filename_photo[5],
                approval_from_employer: array_of_filename_photo[6],
                position_on_military: array_of_filename_photo[7],
                masters_photo: array_of_filename_photo[8],
            };


            



            const sqlUpdate = "UPDATE students SET ?  WHERE student_id = ?";
            const values = [studentData, req.params.id];
            await query(sqlUpdate, values ,async (err, result) => {
                if (err) {
                    hanleDelUplodes(req);
                    return res.status(400).json({ errors: [{ msg: "Error: student Not Found!!" }] });
                }else{
                    const applicationData = {
                        student_id: req.params.id,
                        faculty_id: req.body.faculty,
                        department_id: req.body.department,
                        program_id: req.body.program,
                        status: "2",
                        submission_date: new Date(),
                    };
                    const sqlUpdate = "UPDATE application SET ?  WHERE student_id = ?";
                    const values = [applicationData, req.params.id];
                    await query(sqlUpdate, values ,(err, result) => {
                        if (err) {
                            hanleDelUplodes(req);
                            return res.status(400).json({ errors: [{ msg: "Error: student Not Found!!!" }] });
                        }else{
                            res.status(200).json({ msg: "student Updated Successfully" });
                        }
                    });
                }
            });



                    


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
            res.status(200).json({ msg: "student delete successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);










export default student;


function hanleDelUplodes(req) {
    let file = req.files;
    if (file) {
        for (let i = 1; i <= 9; i++) {
            if (file[`image${i}`]) {
                fs.unlinkSync(`./public/imgs/${req.body.national_id}/${file[`image${i}`][0].filename}`);
            }
        }
    }
}

// function hanleDelUplodesAfterUpdate(data) {
//     let file = studentdetails[0];
//     if (file) {
//         for (let i = 1; i <= 9; i++) {
//             if (`file.image${i}`) {
//                 fs.unlinkSync(`./public/imgs/${req.body.national_id}/${file[`image${i}`][0].filename}`);
//             }
//         }
//     }
// }


function hanleDelfile(req) {
    let file = req.body.national_id;
    if (file) {
        fs.rmSync(`./public/imgs/${file}`, { recursive: true, force: true });
    }
}