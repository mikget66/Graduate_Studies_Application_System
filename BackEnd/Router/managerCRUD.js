import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';
import fs from 'fs';
import user from "../MiddleWare/checkStudent.js";
import checkmanager from "../MiddleWare/checkManager.js";


const manager = express();
manager.use(express.Router());



// manager.get('/allaaplicationinfaculty',
//     async (req, res) => {
//         try {
//             let search = "";
//             if (req.query.search) {
//                 search = `where faculty.faculty_id LIKE '%${req.query.search}%'`;
//             }

//             const managerdetails = await query(`SELECT  faculty.faculty_name , application.status ,application.submission_date , students.* ,departments_of_faculty.department_name , programs_of_department.program_name FROM application inner join students on application.student_id = students.student_id inner join faculty on application.faculty_id = faculty.faculty_id inner join departments_of_faculty on application.department_id = departments_of_faculty.department_id inner join programs_of_department on application.program_id = programs_of_department.program_id ${search}`);

//             res.status(200).json(managerdetails);
//         } catch (err) {
//             console.log(err);
//             res.status(500).json({ msg: "Server Error" });
//         }
//     });
manager.get('/allaaplication',
    checkmanager,
    async (req, res) => {
        try {
            console.log(req.faculty_id);
            let search = "";
            if (req.query.search) {
                search = `where faculty.faculty_id LIKE '%${req.query.search}%'`;
            }

            const managerdetails = await query(`SELECT  faculty.faculty_name , application.status ,application.submission_date , students.* ,departments_of_faculty.department_name , programs_of_department.program_name FROM application inner join students on application.student_id = students.student_id inner join faculty on application.faculty_id = faculty.faculty_id inner join departments_of_faculty on application.department_id = departments_of_faculty.department_id inner join programs_of_department on application.program_id = programs_of_department.program_id where faculty.faculty_id = ${req.faculty_id}`);
            delete managerdetails[0].password;
            res.status(200).json(managerdetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });



manager.post('/adddepartment',
    checkmanager,
    body('department_name').notEmpty().withMessage('department_name is required'),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg) }});
            }

            const sqlcheck = "SELECT * FROM departments_of_faculty WHERE department_name = ? AND faculty_id = ?";
            const value = [req.body.department_name, req.faculty_id];
            const department = await query(sqlcheck, value);
            if (department[0]) {
                return res.status(400).json({ errors: [{ msg: "department is already exists !" }] });
            }

            const departmentData = {
                department_name: req.body.department_name,
                faculty_id: req.faculty_id,
            };

            const sqlInsert = "INSERT INTO departments_of_faculty SET ?";
            const values = [departmentData];
            await query(sqlInsert, values, (err, result) => {
                if (err) {
                    return res.status(400).json({ errors: [{ msg: `Error: ${err} ` }] });
                } else {
                    res.status(200).json({ msg: "department Added Successfully" });
                }
            });

        } catch (err) {
            res.status(500).json({ errors: [{ msg: `Error: ${err} ` }] });
        }
    });

manager.get('/alldepartment',
    checkmanager,
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where faculty.faculty_id LIKE '%${req.query.search}%'`;
            }

            const managerdetails = await query(`SELECT  faculty.faculty_name , departments_of_faculty.* FROM departments_of_faculty inner join faculty on departments_of_faculty.faculty_id = faculty.faculty_id where faculty.faculty_id = ${req.faculty_id}`);
            res.status(200).json(managerdetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });




manager.put('/updatedepartment/:id',
    body('department_name').notEmpty().withMessage('department_name is required'),
    body('faculty_id').notEmpty().withMessage('faculty_id is required'),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg) }});
            }

            

            const sqlcheck1 = "SELECT * FROM departments_of_faculty WHERE department_id = ?";
            const value1 = [req.params.id];
            const department1 = await query(sqlcheck1, value1);

            if (!department1[0]) {
                return res.status(404).json({ errors: [{ msg: "department not found !" }] });
            }

            const departmentData = {
                department_name: req.body.department_name,
            };

            const sqlUpdate = "UPDATE departments_of_faculty SET ?  WHERE department_id = ?";
            const values = [departmentData, req.params.id];
            await query(sqlUpdate, values, (err, result) => {
                if (err) {
                    return res.status(400).json({ errors: [{ msg: `Error: ${err} ` }] });
                } else {
                    res.status(200).json({ msg: "department Updated Successfully" });
                }
            });

        } catch (err) {
            res.status(500).json({ errors: [{ msg: `Error: ${err} ` }] });

        }

    });    


manager.delete('/deletedepartment/:id',
    async (req, res) => {
        try {

            const sqlcheck = "SELECT * FROM departments_of_faculty WHERE department_id = ?";
            const value = [req.params.id];
            const department = await query(sqlcheck, value);

            if (!department[0]) {
                return res.status(404).json({ errors: [{ msg: "department not found !" }] });
            }

            const sqlDelete = "DELETE FROM departments_of_faculty WHERE department_id = ?";
            const values = [department[0].department_id];
            await query(sqlDelete, values);
            res.status(200).json({ msg: "department delete successfully" });
        } catch (err) {

            return res.status(500).json(err);

        }

    });


manager.post('/addprogram',
    body('program_name').notEmpty().withMessage('program_name is required'),
    body('department_id').notEmpty().withMessage('department_id is required'),
    body('level').notEmpty().withMessage('level is required'),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg) }});
            }


            const sqlcheck = "SELECT * FROM programs_of_department WHERE program_name = ? AND department_id = ? AND level = ?";
            const value = [req.body.program_name, req.body.department_id, req.body.level];
            const program = await query(sqlcheck, value);
            if (program[0]) {
                return res.status(400).json({ errors: [{ msg: "program is already exists !" }] });
            }

            const programData = {
                program_name: req.body.program_name,
                department_id: req.body.department_id,
                level: req.body.level,
            };

            const sqlInsert = "INSERT INTO programs_of_department SET ?";
            const values = [programData];
            await query(sqlInsert, values, (err, result) => {
                if (err) {
                    return res.status(400).json({ errors: [{ msg: `Error: ${err} ` }] });
                } else {
                    res.status(200).json({ msg: "program Added Successfully" });
                }
            });

        } catch (err) {
            res.status(500).json({ errors: [{ msg: `Error: ${err} ` }] });
        }

    });

manager.get('/allprogram',
    checkmanager,
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where faculty.faculty_id LIKE '%${req.query.search}%'`;
            }
            
            const managerdetails = await query(`SELECT  faculty.faculty_name , departments_of_faculty.department_name , programs_of_department.* FROM programs_of_department inner join departments_of_faculty on programs_of_department.department_id = departments_of_faculty.department_id inner join faculty on departments_of_faculty.faculty_id = faculty.faculty_id where faculty.faculty_id = ${req.faculty_id}`);
            res.status(200).json(managerdetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });

    
manager.put('/updateprogram/:id',
    body('program_name').notEmpty().withMessage('program_name is required'),
    body('department_id').notEmpty().withMessage('department_id is required'),
    body('level').notEmpty().withMessage('level is required'),
    async (req, res) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg) }});
            }

            const sqlcheck1 = "SELECT * FROM programs_of_department WHERE program_id = ?";
            const value1 = [req.params.id];
            const program1 = await query(sqlcheck1, value1);

            if (!program1[0]) {
                return res.status(404).json({ errors: [{ msg: "program not found !" }] });
            }

            const programData = {
                program_name: req.body.program_name,
                department_id: req.body.department_id,
                level: req.body.level,
            };

            const sqlUpdate = "UPDATE programs_of_department SET ?  WHERE program_id = ?";
            const values = [programData, req.params.id];
            await query(sqlUpdate, values, (err, result) => {
                if (err) {
                    return res.status(400).json({ errors: [{ msg: `Error: ${err} ` }] });
                } else {
                    res.status(200).json({ msg: "program Updated Successfully" });
                }

            });

        } catch (err) {

            res.status(500).json({ errors: [{ msg: `Error: ${err} ` }] });

        }

    });



manager.delete('/deleteprogram/:id',
    async (req, res) => {
        try {

            const sqlcheck = "SELECT * FROM programs_of_department WHERE program_id = ?";
            const value = [req.params.id];
            const program = await query(sqlcheck, value);
            if (!program[0]) {
                return res.status(404).json({ errors: [{ msg: "program not found !" }] });
            }

            const sqlDelete = "DELETE FROM programs_of_department WHERE program_id = ?";
            const values = [program[0].program_id];
            await query(sqlDelete, values);
            res.status(200).json({ msg: "program delete successfully" });

        } catch (err) {
            res.status(500).json({ errors: [{ msg: `Error: ${err} ` }] });
        }

});


manager.put('/updatestatus/:id',
    body('status').notEmpty().withMessage('status is required'),
    body('student_id').notEmpty().withMessage('student_id is required'),
    body('faculty_id').notEmpty().withMessage('faculty_id is required'),
    body('department_id').notEmpty().withMessage('department_id is required'),
    body('program_id').notEmpty().withMessage('program_id is required'),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg) }});
            }

            const sqlcheck1 = "SELECT * FROM application WHERE application_id = ?";
            const value1 = [req.params.id];
            const application1 = await query(sqlcheck1, value1);
            if (!application1[0]) {
                return res.status(404).json({ errors: [{ msg: "application not found !" }] });
            }

            const applicationData = {
                student_id: req.body.student_id,
                faculty_id: req.body.faculty_id,
                department_id: req.body.department_id,
                program_id: req.body.program_id,
                status: req.body.status,
            };

            const sqlUpdate = "UPDATE application SET ?  WHERE application_id = ?";
            const values = [applicationData, req.params.id];
            await query(sqlUpdate, values, (err, result) => {
                if (err) {
                    return res.status(400).json({ errors: [{ msg: `Error: ${err} ` }] });
                } else {
                    res.status(200).json({ msg: "application Updated Successfully" });
                }

            });

        } catch (err) {

            res.status(500).json({ errors: [{ msg: `Error: ${err} ` }] });

        }

    });













export default manager;

