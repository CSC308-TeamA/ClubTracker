module.exports = mongoose => {
    const Roster = mongoose.model(
      "roster",
      mongoose.Schema(
        {
        //   name: String,
        //   status: String,
        //   role: String,
        //   position: String,
        //   specialization: String
        title: String,
        description: String,
        published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Roster;
  };