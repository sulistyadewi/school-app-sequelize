const router = require("express").Router();
const routeStudent = require("./routeStudent");
const routeTeacher = require("./routeTeacher");
const routeMapel = require("./route.Mapel");

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/student", routeStudent);
router.use("/teacher", routeTeacher);
router.use("/mapel", routeMapel);

module.exports = router;
