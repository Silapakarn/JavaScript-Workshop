const express = require('express');
const mongoose = require('mongoose');
const app = express();
const expressValidator = require('express-validator');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config()



//db 
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => {console.log('DB Connected')})

mongoose.connection.on('error', err => {console.log(`DB Connection Error: ${err.message}`)})


//bring in routes
const postRoutes = require('./routes/post')

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening at ${port}`)
});






