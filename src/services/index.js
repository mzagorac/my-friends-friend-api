const {
  getAllFriendsOfMyFriends,
  removeDuplicate,
  removeMyDirectFriends,
  getDuplicates,
  friends,
} = require("../utils");

function getAllfriends(id) {
  return friends(id);
}

function getAllFriendsOfFriends(id) {
  const myFriends = friends(id);

  const allFriendsFriends = removeDuplicate(
    getAllFriendsOfMyFriends(id, myFriends)
  );

  return removeMyDirectFriends(myFriends, allFriendsFriends).sort(
    (a, b) => a.id - b.id
  );
}

function getAllsuggestedFriends(id) {
  const myFriends = friends(id);
  const friendsOfFriends = getAllFriendsOfMyFriends(id, myFriends);

  const fr = removeMyDirectFriends(myFriends, friendsOfFriends);

  return getDuplicates(fr);
}

module.exports = {
  getAllfriends,
  getAllFriendsOfFriends,
  getAllsuggestedFriends,
};
