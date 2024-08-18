const User = require("./../models/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const userList = await User.find({});
    return res.status(200).json({ status: 1, data: userList });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 0, msg: "Server error" });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User.create({ name: name, email: email, phone: phone });

    return res.status(200).json({ status: 1, data: user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 0, msg: "Server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(id, { name, email, phone });
    return res.status(200).json({ status: 1, data: updateUser });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 0, msg: "Server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteUser = await User.findOneAndDelete({ _id: id });
    return res.status(200).json({ status: 1, data: deleteUser });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 0, msg: "Server error" });
  }
};
