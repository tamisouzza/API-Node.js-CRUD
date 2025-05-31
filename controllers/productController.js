const db = require('../database/database');

// Listar todos os produtos
exports.getAllProducts = (req, res) => {
  db.all('SELECT * FROM products', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ products: rows });
  });
};

// Obter um produto por ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Produto não encontrado' });
      return;
    }
    res.json({ product: row });
  });
};

// Criar um novo produto
exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price) {
    res.status(400).json({ error: 'Name e Price são obrigatórios' });
    return;
  }
  db.run(
    'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
    [name, price, description],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({
        message: 'Produto criado com sucesso',
        product: { id: this.lastID, name, price, description },
      });
    }
  );
};

// Atualizar um produto
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  db.run(
    'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
    [name, price, description, id],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: 'Produto não encontrado' });
        return;
      }
      res.json({ message: 'Produto atualizado com sucesso' });
    }
  );
};

// Deletar um produto
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM products WHERE id = ?', id, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Produto não encontrado' });
      return;
    }
    res.json({ message: 'Produto deletado com sucesso' });
  });
};
