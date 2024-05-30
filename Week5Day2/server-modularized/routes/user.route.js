

const users = require("../modules/user.module")

module.exports = (exp) => {
    
    // GET ALL
    exp.get("/api/users", (req, res) => {
        res.json(users)
        // console.log(req)
    })
    
    
    // CREATE
    exp.post("/api/users", (req, res) => {
        // console.log(req.body) 
        users.push(req.body)
        res.json(users)
    })
    
    // GET ONE
    exp.get("/api/users/:id", (req, res) => {
        console.log(req.params.id)
        res.json(users[req.params.id])
    })
    
    //Update
    
    exp.patch("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        const id = req.params.id;
        // assuming this id is the index of the users array we can replace the user like so
        users[id] = req.body;
        // we always need to respond with something
        res.json( users[id]);
    });
    
    
    // DELETE
    
    exp.delete("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        const id = req.params.id;
        // assuming this id is the index of the users array we can remove the user like so
        users.splice(id, 1);
        // we always need to respond with something
        res.json( { status: "ok" } );
    });
}
