const express = require('express');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config(); 

const app = express();
app.use(express.json());

const port = process.env.PORT
app.listen(port, () => {
    console.log(`${port}번에서 HTTP Web Server 실행`);
});