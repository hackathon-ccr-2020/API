const friendService = require("../services/friends/friends.js");
const userService = require("../services/user/user.js")

exports.getUserHome = async (req, res) => {
    user = await userService.getUserById(req.params.user_id)
    friends = await friendService.getUserFriends(req.params.user_id)

    data = {
        data: {
            user: user,
            friends: friends
        }
    }

    res.send(data);
};
