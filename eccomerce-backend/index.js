const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const flash = require('express-flash');
const session = require('express-session');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routesHandler);




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
