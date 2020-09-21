var express = require("express");
const urls = require("../urls.json");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("https://rubenvillar.net");
});

router.get("/:slug", function (req, res, next) {
  const { slug } = req.params;
  if (urls[slug]) {
    res.redirect(urls[slug]);
  } else {
    res.redirect("https://rubenvillar.net");
  }
});

module.exports = router;
