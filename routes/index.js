var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("https://rubenvillar.net");
});

router.get("/:slug", function (req, res, next) {
  const { slug } = req.params;
  if (slug === "portfolio-wp") {
    res.redirect(
      "https://www.notion.so/Portfolio-WordPress-4c15e7418b154e7baf2d9f0b14253938"
    );
  } else if (slug === "mis-recetas-android") {
    res.redirect(
      "https://play.google.com/store/apps/details?id=net.rubenvillar.mis_recetas.twa"
    );
  } else {
    res.redirect("https://rubenvillar.net");
  }
});

module.exports = router;
