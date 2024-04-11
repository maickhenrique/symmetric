import express from 'express';
import cors from 'cors';
import { Client } from '@vercel/postgres'; // Importe o cliente Postgres do @vercel/postgres

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Crie uma conexão com o banco de dados Postgres
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect(); // Conecte-se ao banco de dados

app.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;
  const bcrypt = require('bcrypt');

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const result = await client.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)', [nome, email, hashedPassword]);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ message: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const bcrypt = require('bcrypt');

  try {
    const result = await client.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).send('Invalid email or password');
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (isMatch) {
      res.json({ message: 'Login successful!', user });
    } else {
      return res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
