const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const Todolist=require('./routes/Todolist');
app.use(Todolist);
const Auth=require('./routes/Auth');
const { errorhandler } = require('./services/errors/errorhandl');
app.use(Auth);



app.use(errorhandler)
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});