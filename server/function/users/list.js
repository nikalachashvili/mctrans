const table = require("../../table/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  const { email, password } = req.body;

  // ვალიდაცია მინიმალური
  if (!email || !password) {
    return res.status(400).json({ message: "ელფოსტა და პაროლი აუცილებელია" });
  }

  try {
    const user = await table.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "მომხმარებელი არ მოიძებნა" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "პაროლი არასწორია" });
    }

    const jwtSecret = process.env.JWT_SECRET || "yourDefaultSecret";

    const token = jwt.sign(
      { id: user._id, email: user.email },
      jwtSecret,
      { expiresIn: "7d" }
    );

    // პაროლის გამოტანა არ გინდა response-ში
    const userToSend = { ...user._doc };
    delete userToSend.password;

    return res.status(200).json({ user: userToSend, token });
  } catch (error) {
    console.error(error);
    return res.status(500).send("ავტორიზაცია ვერ მოხერხდა");
  }
};

module.exports = { getUser };
