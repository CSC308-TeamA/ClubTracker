module.exports = app => {
    const rosters = require("../controllers/roster.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Roster
    router.post("/", rosters.create);
  
    // Retrieve all Rosters
    router.get("/", rosters.findAll);
  
    // Retrieve a single Roster with id
    router.get("/:id", rosters.findOne);
  
    // Update a Roster with id
    router.put("/:id", rosters.update);
  
    // Delete a Roster with id
    router.delete("/:id", rosters.delete);
  
    // Create a new Roster
    router.delete("/", rosters.deleteAll);
  
    app.use('/api/rosters', router);
  };