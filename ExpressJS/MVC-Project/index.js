import express from 'express';
import ProductsController from './src/controllers/product.controller.js';
import UserController from './src/controllers/user.controller.js'; // Capitalized name
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import validationMiddleware from './src/middlewares/validation.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';

const app = express();

app.use(express.static('public'));

const productsController = new ProductsController();
const userController = new UserController(); // ✅ create instance with different variable name

app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

// Use the controller instance
app.get('/register', userController.getRegister.bind(userController));

app.get('/login', userController.getLogin.bind(userController));

app.get('/', productsController.getProducts.bind(productsController));
app.get('/add-product', productsController.getAddProduct.bind(productsController));
app.get('/update-product/:id', productsController.getUpdateProductView.bind(productsController));

app.post('/delete-product/:id', productsController.deleteProduct.bind(productsController));

app.post(
  '/',
  uploadFile.single('imageUrl'),
  validationMiddleware,
  productsController.postAddProduct.bind(productsController)
);

app.post('/update-product', productsController.postUpdateProduct.bind(productsController));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
