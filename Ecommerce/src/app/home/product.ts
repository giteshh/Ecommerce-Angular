export interface Product {
  id: number,
  name: string,
  description: string,
  rate: number,
  quantity: number,
  imageUrl: string
}


export const products =
  [
    {
      id: 1,
      name: "OnePlus 9 Pro 5G ",
      description: "Morning Mist, 12GB RAM, 256GB Storage",
      rate:  69999,
      imageUrl: "/assets/pics/m1.jpg"
    },
    {
      id: 2,
      name: "Apple iPhone 12",
      description: "Color-Green, 8GB RAM, 128GB Storage",
      rate: 70900,
      imageUrl: "/assets/pics/ipo.jpg"
    },
    {
      id: 3,
      name: "Google Pixel 4a ",
      description: "Just Black, 6GB RAM, 128GB Storage",
      rate: 26990,
      imageUrl: "/assets/pics/go.jpg"
    },
    {
      id: 4,
      name: "Samsung Galaxy M12",
      description: "Color: Blue,4GB RAM, 64GB Storage",
      rate: 10499,
      imageUrl: "/assets/pics/sam.jpg"
    }
  ]


