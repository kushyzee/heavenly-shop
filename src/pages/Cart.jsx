import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import { useCart } from "../context/CartProvider";
import { convertMoney } from "../utils/convertMoney";
import { formatPrice } from "../utils/formatPrice";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import CartIsEmpty from "../components/CartIsEmpty";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };
  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <PageSection>
      {cart.length === 0 ? (
        <CartIsEmpty />
      ) : (
        <div>
          <PageTitle title={"Cart"} />
          <div className="mt-14 relative">
            <div className="mb-4 flex items-center justify-between font-semibold">
              <p className="text-sm">subtotal</p>
              <p className="text-lg">
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
                    <div className="h-14 w-14">
                      <img
                        className="h-full w-full object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className="text-sm">{item.name}</p>
                      <p className="font-semibold">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p
                      className="cursor-pointer text-xs font-semibold text-red-600 transition-colors duration-300 hover:text-red-700"
                      onClick={() => {
                        handleRemove(item.id);
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
                          className={`size-7 text-red-600 transition-all duration-300 hover:scale-105 hover:text-red-700 ${
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
                        className="size-7 cursor-pointer text-red-600 transition-all duration-300 hover:scale-105 hover:text-red-700"
                        onClick={() => {
                          handleIncrease(item.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <OrderSummary state={state} />
            <button className="w-full sticky bottom-2">
              <Link className="mt-6 bg-red-600 w-full inline-block rounded-md py-2.5 text-zinc-50 transition-colors duration-300 hover:bg-red-700" to="/checkout">Checkout <span className="text-sm">({formatPrice(convertMoney(state.total, "toNaira"))})</span> </Link>
            </button>
          </div>
        </div>
      )}
    </PageSection>
  );
};

export default Cart;
