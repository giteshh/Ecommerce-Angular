interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  mrp: number;
  rating: number;
  discount: number;
  quantity: number
}

const products = [
  {
    "id": 1,
    "name": "Samsung",
    "mrp": 38399,
    "price": 31999,
    "description": "4 GB RAM 64GB ROM",
    "image": "/assets/pics/samsung.jpg",
    "rating": 3.8,
    "discount": 20,
    "quantity": 1
  },
  {
    "id": 2,
    "name": "Apple Iphone",
    "mrp": 78399,
    "price": 69999,
    "description": "6 GB RAM 64GB ROM",
    "image": "/assets/pics/iphone.jpg",
    "rating": 4.6,
    "discount": 12,
    "quantity": 1
  },
  {
    "id": 3,
    "name": "Google Pixel",
    "mrp": 43999,
    "price": 39999,
    "description": "4GB RAM 64GB ROM",
    "image": "/assets/pics/pixel.jpg",
    "rating": 4.0,
    "discount": 10,
    "quantity": 1
  },
  {
    "id": 4,
    "name": "OnePlus 9 Pro",
    "mrp": 87499,
    "price": 69999,
    "description": "8 GB RAM 256GB ROM",
    "image": "/assets/pics/oneplus.jpg",
    "rating": 4.8,
    "discount": 25,
    "quantity": 1
  }
]

// console.log(JSON.parse(JSON.stringify(products)));
export {Product, products}
