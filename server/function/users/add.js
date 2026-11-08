const table = require("../../table/users");

const addUser = async (req, res) => {
  try {
    // უკვე არსებობს?
    const existing = await table.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ message: "მომხმარებელი უკვე არსებობს" });
    }

    const newUser = new table(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send("რეგისტრაცია ვერ მოხერხდა");
  }
};

module.exports = { addUser };
