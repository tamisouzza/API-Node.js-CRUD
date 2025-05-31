const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API CRUD Node.js com SQLite está funcionando! 🚀');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});