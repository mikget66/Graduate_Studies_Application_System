import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import checkpages from './MiddleWare/checkpages.js';
import newApp from './Authentication/newApplecation.js';
import student from './Router/studentCURD.js';
import manager from './Router/managerCRUD.js';
import auth from './Authentication/login.js';
import authmanager from './Authentication/loginManager.js';
import faculty from './Router/facultyCRUD.js';
import department from './Router/departmaenCRUD.js';
import program from './Router/program.js';
import authadmin from './Authentication/loginِAdmin.js';







const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
    optionsSuccessStatus: 200
}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
    }
}));



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/imgs'));


app.use('/checkpages', checkpages);

app.use('/newapp', newApp);
app.use('', auth);
app.use('/managerlog', authmanager);
app.use('/adminlog', authadmin);

app.use('/student',student);
app.use('/manager',manager);
app.use('',faculty);
app.use('',department);
app.use('',program);









dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});