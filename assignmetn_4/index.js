const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/conn');

//middlewares
app.use(express.json());

//routes
const blogRoutes = require('./routes/blog');
const homeRoutes = require('./routes/home');
app.use('/api/v1/blog', blogRoutes);
app.use('/', homeRoutes);

//running server
const start = async () => {
    await connectDB(process.env.MONGO_URL);
    console.log("mongoDB Connected!");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server Running Successfully at Port : ${port} `);
    });
};

start();