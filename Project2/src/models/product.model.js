export default class ProductModel{
    constructor(_id, _name, _desc, _price, _imageUrl){
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageUrl = _imageUrl
    }
    static get(){
        return products;
    }
}

var products = [
    new ProductModel(1, 'Product 1', 'Description for product 1' , 19.99 , 'https://m.media-amazon.com/images/I/81F90H7hnML._SY522_.jpg'),    
    new ProductModel(2, 'Product 2', 'Description for product 2' , 19.99 , 'https://m.media-amazon.com/images/I/81F90H7hnML._SY522_.jpg'),    
    new ProductModel(3, 'Product 3', 'Description for product 3' , 19.99 , 'https://m.media-amazon.com/images/I/81F90H7hnML._SY522_.jpg'),    

]