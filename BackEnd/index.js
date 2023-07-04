import express from 'express';
import cors from 'cors';
import query from './Database/DBConnection.js';
import dotenv from 'dotenv';
import checkpages from './MiddleWare/checkpages.js';
import newApp from './Authentication/newApplecation.js';
import student from './Router/studentCURD.js';
import auth from './Authentication/login.js';
import faculty from './Router/facultyCRUD.js';
import department from './Router/departmaenCRUD.js';
import program from './Router/program.js';





const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/imgs'));


app.use('/checkpages', checkpages);

app.use('/newapp', newApp);
app.use('', auth);

app.use('/student',student);
app.use('',faculty);
app.use('',department);
app.use('',program);









dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});