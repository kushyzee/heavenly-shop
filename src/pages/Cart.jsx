import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import { useCart } from "../context/CartProvider";
import { convertMoney } from "../utils/convertMoney";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;
  console.log(state);

  return (
    <PageSection>
      <PageTitle title={"Cart"} />
      <div className="mt-14">
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
                <p className="text-xs font-semibold text-red-600">Remove</p>
                <div className="flex items-center gap-4">
                  <p className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-600 text-xl font-medium text-zinc-50">
                    -
                  </p>
                  <p>{item.quantity}</p>
                  <p className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-600 text-xl font-medium text-zinc-50">
                    +
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Cart;
