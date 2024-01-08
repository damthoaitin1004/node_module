const express = require('express');
const cosr = require("cors");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cosr());
const { body, validationResult,check } = require('express-validator');
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'your_username',  
//   password: 'your_password',
//   database: 'your_database_name'
// });
// // Mở kết nối đến MySQL
// connection.connect(error => {
//   if (error) {
//     return console.error('Error connecting to MySQL database:', error);
//   }
//   console.log('Connected to MySQL database');
// });

// Đừng quên đóng kết nối khi bạn đã hoàn tất
// connection.end();


const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', quantity:250000 },
  { id: 2, title: 'Book 2', author: 'Author 2',quantity:280000 },
  { id: 3, title: 'Book 3', author: 'Author 3',quantity:300000 },

];

const isTitleCapitalized = (value) => {
    if (typeof value !== 'string') return false;
    return /^[A-Z][a-z]*$/.test(value);
  };

app.get('/books', (req, res) => {
  res.status(200).json(books);
});
app.post('/create', [
    // Thực hiện kiểm tra cho req.body.title
    body('title')
      .isLength({ max: 100 }).withMessage('Title không quá 200 ký tự')
      .custom(isTitleCapitalized).withMessage('Title phải viết hoa chữ cái đầu'),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
  
    const receivedData = req.body;
    books.push(receivedData);
    res.status(200).json({ message: 'Data received complete!' });
  });
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
