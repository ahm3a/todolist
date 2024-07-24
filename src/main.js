const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const Todolist=require('./routes/todolist');
app.use(Todolist);
const Auth=require('./routes/Auth');
app.use(Auth);



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});