import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import { useCart } from "../context/CartProvider";
import { convertMoney } from "../utils/convertMoney";
import { formatPrice } from "../utils/formatPrice";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import CartIsEmpty from "../components/CartIsEmpty";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";
import toastify from "../utils/toastify";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };
  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };
  const handleRemove = (id, name) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toastify(`${name} removed from cart`, "error");
  };

  return (
    <PageSection>
      {cart.length === 0 ? (
        <CartIsEmpty heading="Your cart is empty" />
      ) : (
        <div>
          <PageTitle title={"Cart"} />
          <div className="relative mt-14">
            <div className="items-start justify-between gap-7 md:flex lg:gap-10">
              <div className="flex-1 md:max-w-2xl">
                <div className="mb-4 flex items-center justify-between font-semibold">
                  <p className="text-sm md:text-base">subtotal</p>
                  <p className="text-lg lg:text-xl">
                    {formatPrice(convertMoney(state.subtotal, "toNaira"))}
                  </p>
                </div>

                {/* CART ITEMS */}
                <div className="flex flex-col gap-3.5">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-md border border-zinc-300 px-3.5 py-2.5 shadow"
                    >
                      <div className="flex items-center justify-start gap-3">
                        <div className="h-14 w-14 lg:h-20 lg:w-20">
                          <img height="60px" width="60px"
                            className="h-full w-full object-cover"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <div>
                          <p className="text-sm md:text-base">{item.name}</p>
                          <p className="font-semibold">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p
                          className="cursor-pointer text-xs md:text-sm font-semibold text-red-600 transition-colors duration-300 hover:text-red-700"
                          onClick={() => {
                            handleRemove(item.id, item.name);
                          }}
                        >
                          Remove
                        </p>
                        <div className="flex items-center gap-4">
                          <button
                            disabled={item.quantity === 1}
                            className="cursor-pointer"
                          >
                            <FaSquareMinus
                              className={`size-7 lg:size-8 text-red-600 transition-all duration-300 hover:scale-105 hover:text-red-700 ${
                                item.quantity === 1 &&
                                "cursor-not-allowed opacity-50 hover:scale-100 hover:text-red-600"
                              }`}
                              onClick={() => {
                                handleDecrease(item.id);
                              }}
                            />
                          </button>
                          <p>{item.quantity}</p>
                          <FaSquarePlus
                            className="size-7 lg:size-8 cursor-pointer text-red-600 transition-all duration-300 hover:scale-105 hover:text-red-700"
                            onClick={() => {
                              handleIncrease(item.id);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* ORDER SUMMARY */}
                <OrderSummary state={state} />

            </div>

            <button className="sticky bottom-2 w-full">
              <Link
                className="mt-6 inline-block w-full rounded-md bg-red-600 py-2.5 text-zinc-50 transition-colors duration-300 hover:bg-red-700 md:mt-14"
                to="/checkout"
              >
                Checkout{" "}
                <span className="text-sm">
                  ({formatPrice(convertMoney(state.total, "toNaira"))})
                </span>{" "}
              </Link>
            </button>
          </div>
        </div>
      )}
    </PageSection>
  );
};

export default Cart;
