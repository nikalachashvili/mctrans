const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: "გთხოვ შეავსო ყველა ველი" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "ახალი კონტაქტის განაცხადი",
    html: `
      <p><strong>სახელი:</strong> ${name}</p>
      <p><strong>ნომერი:</strong> ${phone}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "მაილი გაიგზავნა წარმატებით" });
  } catch (error) {
    console.error("შეცდომა:", error);
    res.status(500).json({ message: "მაილის გაგზავნა ვერ მოხერხდა" });
  }
};

module.exports = { sendMail };
