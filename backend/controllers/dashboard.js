const asyncHandler = require("express-async-handler");
const User = require("../models/User");

module.exports = {
  // Load user dashboard
  loadDashboard: asyncHandler(async (req, res) => {
    const user = await User.findById(req.user);

    if (!user) throw new Error("User not found");

    res.status(200).json({ msg: `Welcome ${user.name}`, user });
  }),
};
