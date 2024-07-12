import products from "../assets/products";
import { useCart } from "../components/CartProvider";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);
};

const { addToCart, cart } = useCart();
const Products = () => {

  return (
    <main className="mx-auto my-14 px-5 text-base text-gray-700 md:my-20 md:text-lg max-w-6xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          Our Products
        </h1>
        <p className="mt-2 text-lg">
          Explore our wide range of homemade cakes, cookies and pastries
        </p>
      </div>

      {/* Products grid */}
      <section className="mx-auto mt-9 grid max-w-md grid-cols-2 items-center justify-between gap-2 sm:max-w-full sm:grid-cols-3 lg:grid-cols-4 md:gap-4 md:gap-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="grow rounded-md border border-neutral-300 bg-white shadow md:p-4"
          >
            <img
              className="h-36 w-full rounded-se-md rounded-ss-md object-cover object-center"
              src={product.image}
              alt={product.name}
            />
            <div className="p-2">
              <p className="text-sm">{product.name}</p>
              <p className="text-xl font-medium">
                {formatPrice(product.price)}
              </p>
              <button onClick={() => { addToCart(product) }}
                className="mt-5 w-full rounded-lg bg-red-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-red-700"
                type="button"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
console.log(cart);
export default Products;
