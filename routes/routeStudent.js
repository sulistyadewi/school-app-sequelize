const router = require("express").Router();
const controllerStudent = require("../controllers/controllerStudent");

router.get("/", controllerStudent.showAll);
router.get("/add", controllerStudent.formAdd);
router.post("/add", controllerStudent.saveData);
router.get("/:id/delete", controllerStudent.deleteData);
router.get("/:id/edit", controllerStudent.formEdit);
router.post("/:id/edit", controllerStudent.saveEdit);

module.exports = router;
