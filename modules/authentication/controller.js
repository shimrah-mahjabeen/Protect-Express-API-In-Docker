const { generateToken } = require("../../utils/utils");
const JWT_SECRET = "mysecret123";

const mockUserData = [
  {
    name: "john123",
    password: "test123", // this would be encrypted in real word scenario
  },
];

exports.login = (req, res) => {
  const { name, password } = req.body;

  try {
    if (!name || !password)
      return res.status(400).send("Incomplete information!");
    const user = mockUserData.find(
      (user) => user.name === name && user.password === password
    );
    console.log("body", req.body);
    if (!user?.name) {
      return res.status(401).send("Incorrect username or password");
    }

    const token = generateToken(JSON.stringify(user));

    return res.send(token);
  } catch (error) {
    console.log("err", error);
    return res.status(500).send(error.message);
  }
};
