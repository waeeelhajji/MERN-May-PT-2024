const express = require("express")

const app = express()
const PORT = 5000 



// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// we can hard code some users like this
// later on we will want to store users in a database



// req is shorthand for request
// res is shorthand for response

const userRoutes = require("./routes/user.route")
userRoutes(app)





//! to start our application (server) at the Very BOTTOM of the file 
// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`>>> Server is up to running on PORT ${PORT} and it listening FOR REQuest to RESponce 📡📡📡📡`) );
