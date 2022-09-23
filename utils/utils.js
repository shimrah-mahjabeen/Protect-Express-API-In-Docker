const jwt = require("jsonwebtoken");
const { constants } = require("../constants/constants");

exports.generateToken = (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET || constants.JWT_SECRET);
  } catch (error) {
    throw new Error(error);
  }
};
