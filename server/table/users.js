const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // უნდა იყოს აქ

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'გთხოვთ შეიყვანეთ ელ-ფოსტა'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, 'გთხოვთ შეიყვანეთ სრული სახელი'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'გთხოვთ შეიყვანეთ პაროლი'],
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

// ჰეშირება პაროლის გადარჩენის წინ უნდა იყოს აქ, სანამ მოდელს გავიგზავნი
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', userSchema);
