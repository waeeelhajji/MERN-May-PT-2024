const express = require("express");
const app = express();

require('dotenv').config();

const port = process.env.PORT;

require("./config/mongoose.config.js")

const AllMoviesRoutes = require("./routes/movies.routes.js")(app)
AllMoviesRoutes

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );