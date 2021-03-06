const {
  getAllfriends,
  getAllFriendsOfFriends,
  getAllsuggestedFriends,
} = require("../services");

function getFriends(req, res, next) {
  const id = Number(req.params.id);

  if (id < 0 || id > 20) {
    return next("Index out of bounds");
  }

  const result = getAllfriends(id);
  res.json(result);
}

function getFriendsFriends(req, res) {
  const id = req.params.id;
  const result = getAllFriendsOfFriends(Number(id));
  res.json(result);
}

function getSuggestedFriends(req, res) {
  const id = req.params.id;
  const result = getAllsuggestedFriends(Number(id));
  res.json(result);
}

module.exports = {
  getFriends,
  getFriendsFriends,
  getSuggestedFriends,
};
