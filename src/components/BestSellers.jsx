import products from "../assets/products";
import { Link } from "react-router-dom";
import velvetCake from "../assets/images/velvet-cake-homepage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const filteredProducts = products.filter(
  (product) => product.id === 1 || product.id === 3,
);
let redVelvet = products.find((product) => product.id === 2);
const bestProducts = [
  {
    ...filteredProducts[0],
    desc: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
  },
  {
    ...redVelvet,
    image: velvetCake,
    desc: "Delicious red velvet cupcakes with a tangy cream cheese frosting.",
  },
  {
    ...filteredProducts[1],
    desc: "A refreshing lemon tart with a buttery crust and a tangy lemon filling.",
  },
];

const BestSellers = () => {
  return (
    <section>
      <h2 className="mb-6 text-center text-2xl lg:text-3xl font-semibold text-neutral-900">
        Our Best Sellers
      </h2>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-center md:justify-between md:gap-4">
        {bestProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-neutral-300 p-4 sm:max-w-96 md:max-w-max"
          >
            <div className="h-52 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <p className="mt-4 text-lg lg:text-xl font-semibold">{product.name}</p>
            <p className="mb-5">{product.desc}</p>
            <Link to="/products" className="text-red-600 hover:text-red-700 flex items-center gap-1">
              Order <MdKeyboardArrowRight className="text-xl" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
