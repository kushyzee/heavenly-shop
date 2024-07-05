import products from "../assets/products";

const Home = () => {
  return (
    <main className="px-5 my-14 md:my-20 text-gray-700 text-base md:text-lg max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 ">Our Products</h1>
        <p className="text-lg mt-2">
          Explore our wide range of homemade cakes, cookies and pastries
        </p>
      </div>

      {/* Products */}
      <section className="flex mt-9 max-w-4xl mx-auto flex-wrap justify-center items-center gap-y-2 md:gap-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-1/2 p-2 md:p-4 grow bg-white md:w-1/3 shadow"
          >
            <img
              className="w-full rounded-md h-36 object-cover object-center"
              src={product.image}
              alt={product.name}
            />
            <div className="mt-3">
              <p>{product.name}</p>
              <p className="font-semibold text-2xl">{`$${product.price}.00`}</p>
              <button
                className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg w-full hover:bg-red-700 transition-colors duration-200"
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

export default Home;
