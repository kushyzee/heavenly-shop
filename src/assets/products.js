import cake from "./images/chocolate-cake.jpg";
import lemonTart from "./images/lemon-tart.jpg";
import applePie from "./images/apple-pie.webp";
import velvetCupcake from "./images/red-velvet-cupcake.jpg"
import muffin from "./images/blueberry-muffin.jpg"
import doughnuts from "./images/doughnuts.jpg"


const Products = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 7000,
    image: cake,
  },
  {
    id: 2,
    name: "Red Velvet Cupcake",
    price: 600,
    image: velvetCupcake, 
  },
  {
    id: 3,
    name: "Lemon Tart",
    price: 4000,
    image: lemonTart,
  },
  {
    id: 4,
    name: "Apple Pie",
    price: 4500,
    image: applePie,
  },
  {
    id: 5,
    name: "Blueberry Muffin",
    price: 500,
    image: muffin,
  },
  {
    id: 6,
    name: "Glazed Doughnuts",
    price: 800,
    image: doughnuts, 
  },
];

export default Products;
