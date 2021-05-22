const db = require('../models');

const Roster = db.rosters;

// Create and Save a new Roster
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Roster
  const roster = new Roster({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });

  // Save Roster in the database
  roster
    .save(roster)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while creating the Roster.',
      });
    });
};

// Retrieve all Rosters from the database.
exports.findAll = (req, res) => {
  const { title } = req.query;
  const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

  Roster.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving rosters.',
      });
    });
};

// Find a single Roster with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Roster.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: `Not found Roster with id ${id}` });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Error retrieving Roster with id=${id}` });
    });
};

// Update a Roster by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const { id } = req.params;

  Roster.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Roster with id=${id}. Maybe Roster was not found!`,
        });
      } else res.send({ message: 'Roster was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Roster with id=${id}`,
      });
    });
};

// Delete a Roster with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  Roster.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Roster with id=${id}. Maybe Roster was not found!`,
        });
      } else {
        res.send({
          message: 'Roster was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Roster with id=${id}`,
      });
    });
};

// Delete all Rosters from the database.
exports.deleteAll = (req, res) => {
  Roster.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Rosters were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while removing all rosters.',
      });
    });
};
