import express from 'express';
import cors from 'cors';
import query from './Database/DBConnection.js';
import dotenv from 'dotenv';
import checkpages from './MiddleWare/checkpages.js';






const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/imgs'));


app.use('/checkpages', checkpages);









dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});