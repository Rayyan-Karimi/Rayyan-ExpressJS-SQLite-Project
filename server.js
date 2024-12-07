import express from "express";
// const express = require('express')
import cors from 'cors'
// const cors = require('cors')

const app = express();


var corsRequestOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsRequestOptions))


// Parse requests of content type - application/json
app.use(express.json());
// Parse requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// extended true to allow parsing nested objects


app.get("/", (request, response) => {
    response.json({ message: "Welcome to Rayyan's application." })
})


// require("./app/routes/tutorial.routes.js")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});