// Function for REGISTER
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Register = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SEC
      ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(404).json(error);
  }
};

const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(500).json({ message: 'User not exist' });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;
    if (originalPassword != inputPassword) {
      return res.status(401).json({ message: 'Wrong Credentials' });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { Register, Login };
