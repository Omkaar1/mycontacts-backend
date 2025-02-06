const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userContaroller");
const validateToken = require("../middleware/validateTokenHandle");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
