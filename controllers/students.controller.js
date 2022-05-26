const {
  findByIdAndDelete,
  findByIdAndRemove
} = require('../models/Student.model');
const Student = require('../models/Student.model')

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find().then((data) => {
      res.json(data)
    })
  },

  postStudents: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age
    }).then((data) => {
      res.json(data)
    })
  },

  deleteStudentsId: (req, res) => {
    Student.findByIdAndRemove(req.params.id).then(() => {
      res.json(`Студен с ID: ${req.params.id} удален`)
    })
  },

  patchStudentsId: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age
    }).then(() => {
      res.json(`Студент с ID: ${req.params.id} изменен`)
    })
  }
};