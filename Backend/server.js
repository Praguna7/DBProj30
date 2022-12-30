import express from 'express';
import testData from './testData.js';

const exp = express();
exp.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

exp.get('/api/products', (req, res) => {
  res.send(testData.products);
});

exp.get('/api/products/:slug/', (req, res) => {
  const product = testData.products.find((a) => a.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
});

const port = process.env.PORT || 8000;
exp.listen(port, () => {
  console.log(`server running port : ${port}`);
});
