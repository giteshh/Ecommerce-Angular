interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string
}

const products = [
  {
    "id": 1,
    "name": "Samsung",
    "mrp": 34999,
    "price": 31999,
    "description": "4 GB RAM 64GB ROM",
    "image": "/assets/pics/samsung.jpg"
  },
  {
    "id": 2,
    "name": "Apple Iphone",
    "mrp": 79999,
    "price": 69999,
    "description": "6 GB RAM 64GB ROM",
    "image": "/assets/pics/iphone.jpg"
  },
  {
    "id": 3,
    "name": "Google Pixel",
    "mrp": 49999,
    "price": 39999,
    "description": "4GB RAM 64GB ROM",
    "image": "/assets/pics/pixel.jpg"
  },
  {
    "id": 4,
    "name": "OnePlus 9 Pro",
    "mrp": 89999,
    "price": 69999,
    "description": "8 GB RAM 256GB ROM",
    "image": "/assets/pics/oneplus.jpg"
  }
]

// console.log(JSON.parse(JSON.stringify(products)));
export {Product, products}
