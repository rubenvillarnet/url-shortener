const express = require("express");
const QRCode = require("qrcode");
const urls = require("../urls.json");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("https://rubenvillar.net");
});

router.get("/:slug", function (req, res, next) {
  const { slug } = req.params;
  const { qr } = req.query;
  if (urls[slug]) {
    if (qr === "true") {
      QRCode.toDataURL(urls[slug], function (err, qr) {
        res.render("qr", { url: urls[slug], qr, slug });
      });
    } else {
      res.redirect(urls[slug]);
    }
  } else {
    res.redirect("https://rubenvillar.net");
  }
});

module.exports = router;
