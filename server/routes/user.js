const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.json({ message: "Hello fromwewew APasdasads!" });
});

module.exports = router;
