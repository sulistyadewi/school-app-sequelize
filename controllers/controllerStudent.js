const db = require("../models");
const Student = db.student;

class Controller {
  static showAll(req, res) {
    Student.findAll()
      .then((data) => {
        res.render("student", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formAdd(req, res) {
    res.render("addStudent");
  }
  static saveData(req, res) {
    const { first_name, last_name, email, gender, birth_date } = req.body;
    const object = { first_name, last_name, email, gender, birth_date };
    Student.create(object)
      .then((data) => {
        res.redirect("/student");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static deleteData(req, res) {
    const id = req.params.id;
    Student.destroy({
      where: {
        id,
      },
    })
      .then((data) => {
        res.redirect("/student");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formEdit(req, res) {
    const id = req.params.id;
    Student.findByPk(id)
      .then((students) => {
        res.render("editStudent", { students });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static saveEdit(req, res) {
    const id = req.params.id;
    const { first_name, last_name, email, gender, birth_date } = req.body;
    const objectEdit = { first_name, last_name, email, gender, birth_date };
    Student.update(objectEdit, {
      where: {
        id,
      },
    })
      .then((data) => {
        res.redirect("/student");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
