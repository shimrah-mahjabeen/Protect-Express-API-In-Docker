exports.getCurrentTime = (req, res) => {
  try {
    const currentTime = new Date().getTime();
    return res.status(200).json({ currentTime });
  } catch (error) {
    console.log("err", error);
    return res.status(500).send(error.message);
  }
};
