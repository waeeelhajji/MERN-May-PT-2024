const express = require("express")

const app = express()
const PORT = 5000 



// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


// req is shorthand for request
// res is shorthand for response

// GET ALL
app.get("/api/users", (req, res) => {
    res.json(users)
    // console.log(req)
});


// CREATE
app.post("/api/users", (req, res) => {
    // console.log(req.body) 
    users.push(req.body)
    res.json(users)
})

// GET ONE
app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id)
    res.json(users[req.params.id])
})

//Update

app.patch("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( users[id]);
});


// DELETE

app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});






//! to start our application (server) at the Very BOTTOM of the file 
// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`>>> Server is up to running on PORT ${PORT} and it listening FOR REQuest to RESponce 📡📡📡📡`) );
