const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1> You done messed up! 404 Error!");
});

module.exports = router;
