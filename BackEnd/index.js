import express from 'express';
import cors from 'cors';



const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));




app.listen(5000, () => {
    console.log("Server is running on port 5000");
});