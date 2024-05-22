const express = require("express");
const { getBioProfile, followUser,unfollowUser, getSingleUser, getAllUsers,searchUsers,updateUserProfile} = require("../controller/userController");
const router = express.Router();
const authMiddleWare = require("../middleware/auth");

// serach all user
router.get("/search",searchUsers)
// single user  by id
router.get('/', authMiddleWare, getBioProfile);

router.post("/follow/:followersId", authMiddleWare, followUser);
// unfollow user
router.post("/unfollow/:followersId", authMiddleWare, unfollowUser);

// single user
router.get("/userprofile/:userId", getSingleUser);
// all user
router.get("/all",getAllUsers)
// update userprofile
router.patch('/update-profile',authMiddleWare,updateUserProfile);

module.exports = router