const jwt = require("jsonwebtoken");
const { constants } = require("../constants/constants");

exports.checkToken = (req, res, next) => {
  try {
    const { authorization } = req?.headers;

    if (!authorization) return res.status(401).send("Not Authorized !");

    jwt.verify(authorization, constants.JWT_SECRET);

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send("Not Auhtorized !");
  }
};
