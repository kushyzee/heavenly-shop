import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { useCart } from "../context/CartProvider";
import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import { formatPrice } from "../utils/formatPrice";
import Loader from "../lib/loader";
import { convertMoney } from "../utils/convertMoney";

const Products = () => {
  const {state, dispatch} = useCart()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*")

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  },[]);

  const addToCart = (product ) => {
    const convertedPrice = convertMoney(product.price, "toKobo")
    dispatch({
      type: "ADD_TO_CART",
      payload: {...product, quantity: 1, koboPrice: convertedPrice},
    });
  }

  console.log(state)

  return (
    <PageSection>
      <div>
        <PageTitle title="Our Products" />
        <p className="mt-2 text-lg">
          Explore our wide range of homemade cakes, cookies and pastries
        </p>
      </div>

      {/* Products grid */}
      {loading ? <Loader /> :  <section className="mx-auto mt-9 grid max-w-md grid-cols-2 items-center justify-between gap-2 sm:max-w-full sm:grid-cols-3 lg:grid-cols-4 md:gap-4 md:gap-y-4 min-h-svh">
        {products.map((product) => (
          <div
            key={product.name}
            className="grow rounded-md border border-neutral-300 bg-white shadow md:p-4 min-h-60"
          >
            <img
              className="h-36 w-full rounded-se-md rounded-ss-md object-cover object-center"
              src={product.image}
              alt={product.name}
            />
            <div className="p-2">
              <p className="text-sm font-medium text-gray-500">{product.name}</p>
              <p className="text-xl font-semibold">
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
      </section>}
    </PageSection>
  );
};
export default Products;
