const data = require("../../data.json");

function friends(id) {
  const user = data.find((item) => item.id === id);
  if (!user) throw new Error("Unable to find requested user");

  return data.filter((item) => user.friends.includes(item.id));
}

function getAllFriendsOfMyFriends(id, myFriends) {
  try {
    return myFriends
      .reduce((acc, item) => {
        const friendsFriends = friends(item.id).filter((f) => f.id !== id);
        return [...acc, ...friendsFriends];
      }, [])
      .sort((a, b) => a.id - b.id);
  } catch (error) {
    throw error;
  }
}

function removeMyDirectFriends(friends, friendsOfFriends) {
  return friendsOfFriends.filter((f) => !exists(friends, f.id));
}

function removeDuplicate(arr) {
  return arr.reduce((acc, item) => {
    if (exists(acc, item.id)) return [...acc];
    return [...acc, item];
  }, []);
}

// I needed this function because basically friends which shows multiple times in the array "friendsOfFriends"
// minus direct friends are suggested friends
function getDuplicates(arr) {
  const numOfInstances = arr.reduce((acc, item) => {
    let id = String(item.id);

    if (acc[id] >= 0) {
      acc[id]++;
    } else {
      acc[id] = 0;
    }
    return acc;
  }, {});

  return removeDuplicate(arr.filter((item) => numOfInstances[item.id] > 0));
}

function exists(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return true;
  }
  return false;
}

module.exports = {
  getAllFriendsOfMyFriends,
  removeMyDirectFriends,
  removeDuplicate,
  getDuplicates,
  exists,
  friends,
};
