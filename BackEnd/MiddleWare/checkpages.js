import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import cors from "cors";
import upload from './Uplodeimgs.js';
import multer from 'multer';


const checkpages = express();
checkpages.use(express.Router());
checkpages.use(cors());


checkpages.post('/checkpage1',
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'),
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('phone').notEmpty().withMessage('Not a valid phone number'),
    body('national_id').notEmpty().withMessage('nationalId is required').isLength({ min: 14, max: 14 }).withMessage('nationalId must be at least 14 chars long'),
    body('dateOfBirth').notEmpty().withMessage('dateOfBirth is required'),
    body('gender').notEmpty().withMessage('gentder is required'),
    body('military_status').notEmpty().withMessage('milatryStatus is required').isInt().withMessage('milatryStatus must be a number'),
    body('level').notEmpty().withMessage('level is required').isInt().withMessage('level must be a number'),
    body('department').notEmpty().withMessage('department is required').isInt().withMessage('department must be a number'),
    body('faculty').notEmpty().withMessage('faculty is required').isInt().withMessage('Faculty must be a number'),
    body('program').notEmpty().withMessage('program is required').isInt().withMessage('program must be a number'),

    async (req, res) => {
        try {
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg) }});
            }


            const sqlSelect = "SELECT * FROM students WHERE national_id = ?";
            await query(sqlSelect, [req.body.national_id], async (err, result) => {
                if (err) {
                    return res.status(400).json({ errors: [{ msg: err }], "msg": "Server Error" });
                }
                if (result.length > 0) {
                    return res.status(400).json({ errors: { msg: "Student already exists" } });
                }

                res.status(200).json({ msg: "ok" });
            }
            );
        } catch (err) {
            console.log(err);
            res.status(500).json({ errors: {"msg": "Server Error" }});
        }
    }
);




// var maxFileSize = 2 * 1024 * 1024;
// var sizeinMB = maxFileSize / (1024 * 1024);


// checkpages.post('/checkpage2',
//     upload,

//     async (req, res) => {
//         try {
//             const errors = validationResult(req);
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
//             }

            
//             if (!req.files) {
//                 return res.status(400).json({ errors: [{ msg: "Please upload this require file" }] });
//             }

//             // if(req.files.image1[0].size > maxFileSize ){
//             //     return res.status(400).json({ errors: [{ msg: `Please upload a file less than ${sizeinMB} MB `}] });
//             // }

//             for (let i = 1; i <= 4 ; i++) {
//                 if(!req.files[`image${i}`]){
//                     return res.status(400).json({ errors: [{ msg: `Please upload a image number ${i} `}] });
//                 }
//                 let file = req.files[`image${i}`][0].size || 0;
//                 if(file > maxFileSize ){
//                         return res.status(400).json({ errors: [{ msg: `Please upload a image number ${i} less than ${sizeinMB} MB `}] });
//                     }
//             }
            


//             res.status(200).json({ msg: "ok" ,file:req.files});

//         } catch (err) {
//             console.log(err);
//             res.status(500).json({ errors: [{ msg: err }], "msg": "Server Error" });
//         }
//     }
// );








export default checkpages;
