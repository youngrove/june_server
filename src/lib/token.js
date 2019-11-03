const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const generateToken = async payload => {
  try {
    const token = await jwt.sign(payload, secret);
    return token;
  } catch (e) {
    console.error(e);
  }
};
module.exports = generateToken;
