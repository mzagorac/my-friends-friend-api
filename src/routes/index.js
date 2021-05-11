const Router = require("express").Router;
const {
  getFriends,
  getFriendsFriends,
  getSuggestedFriends,
} = require("../controllers");
const router = new Router();

router.get("/:id", getFriends);
router.get("/:id/other-friends", getFriendsFriends);
router.get("/:id/suggested-friends", getSuggestedFriends);

module.exports = router;
