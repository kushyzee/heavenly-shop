import products from "../assets/products";

const Home = () => {
  return (
    <main className="px-5 mt-14 text-gray-700 text-base md:text-lg">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 ">Our Products</h2>
        <p className="">
          Explore our wide range of homemade cakes, cookies and pastries
        </p>
      </div>

      {/* Products */}
      <section className="flex mt-9 max-w-4xl mx-auto gap-4 flex-wrap justify-start">
        {products.map((product) => (
          <div key={product.id} className="basis-40 max-w-60 grow border border-gray-300 rounded-lg">
            <img
              className="w-full h-36 object-cover object-center rounded-tl-lg rounded-tr-lg"
              src={product.image}
              alt={product.name}
            />
            <div className="py-3 px-3">
              <p>{product.name}</p>
              <p className="font-semibold text-2xl">{`$${product.price}.00`}</p>
              <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg w-full hover:bg-red-700 transition-colors duration-200" type="button">Add to cart</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
