import multer from 'multer';
import path from "path";


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/imgs');
    },
    filename (req, file, cb) {
       return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const maxSize = 1 * 1024 * 1024;


const upload = multer({
    storage: storage,

    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|webp/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            return cb('Only PNG, JPG, JPEG, WEBP files are allowed!');
        }

    },
   

    
}).fields([
    {"name" : "image1" ,maxCount : 1 },
    {"name" : "image2" ,maxCount : 1 },
    {"name" : "image3" ,maxCount : 1 },
    {"name" : "image4" ,maxCount : 1 }
]);

export default upload;