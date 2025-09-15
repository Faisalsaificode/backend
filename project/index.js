import express from 'express';
import ProductController from './src/controllers/products_controller.js';

const server = express();

// create an instance of product controller
const productController = new ProductController();

// ✅ Pass the function, bound to the instance
server.get('/', productController.getProducts.bind(productController));

server.use(express.static('src/views'));

server.listen(3400, () => {
  console.log('Server running on http://localhost:3400');
});
