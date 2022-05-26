const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.use(express.json())


app.use(require('./routes/students.route.js'));
app.use(require('./routes/students.route.js'));

mongoose.connect("mongodb+srv://admin:1111@cluster0.eazqc.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})