const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: 'Symmetryc275!', // **Consider using environment variables for sensitive information**
    database: 'symmetric_database',
});

app.post('/cadastro', async (req, res) => {
    const { nome, email, senha } = req.body;
    const bcrypt = require('bcrypt');
    // Validate user data (optional, but recommended for security)
  
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(senha, 10); // Use bcrypt for password hashing
  
    const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    connection.query(query, [nome, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
  
      res.json({ message: 'Registration successful!' });
    });
  });

  app.post('/login', async (req, res) => {
    const { email, senha } = req.body; // Destructure email and senha from the request body
    const bcrypt = require('bcrypt');
    // Validate email and password (optional, but recommended for security)
  
    const query = `SELECT * FROM usuarios WHERE email = ?`;
    connection.query(query, [email], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
  
      if (results.length === 0) {
        return res.status(401).send('Invalid email or password'); // Unauthorized
      }
  
      const user = results[0];
  
      // Compare hashed password with user input
      bcrypt.compare(senha, user.senha, (err, isMatch) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
  
        if (isMatch) {
          // Login successful! (Generate session token or perform other steps)
          res.json({ message: 'Login successful!', user });
        } else {
          return res.status(401).send('Invalid email or password'); // Unauthorized
        }
      });
    });
  });
  

const port = 3001; // Choose a port (avoid using common ports like 80 or 443)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});