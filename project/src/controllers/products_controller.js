import path from 'path';

export default class ProductController {
  static getProducts(req, res) {
    console.log(path.resolve());
    return res.sendFile(path.join(path.resolve(), 'index.html'));
  }
}
