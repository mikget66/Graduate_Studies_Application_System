import express from 'express';
import cors from 'cors';
import query from './Database/DBConnection.js';
import dotenv from 'dotenv';
import checkpages from './MiddleWare/checkpages.js';
import newApp from './Authentication/newApplecation.js';
import bodyParser from 'body-parser';
import e from 'express';






const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/imgs'));


app.use('/checkpages', checkpages);
app.use('/newapp', newApp);









dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});