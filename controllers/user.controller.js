const userService = require("../services/user/user.js")

exports.createUser = async (req, res) => {
    user = await userService.create(req.body);

    data = {
        data: {
            user: user
        }
    }

    res.send(data);
};

exports.loginUser = async (req, res) => {
    const user = await userService.loginUser(req.body);
    res.send(user);
}