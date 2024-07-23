import { Link } from "react-router-dom";

const CartIsEmpty = () => {
  return (
    <div className="mb-56 flex flex-col items-center justify-center gap-6">
      <h1 className="text-center text-2xl lg:text-3xl font-semibold">Your cart is empty</h1>
      <Link
        className="lg:mt-8 block mx-auto rounded-md bg-red-600 px-5 py-2.5 text-center font-semibold text-zinc-50"
        to="/products"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default CartIsEmpty;
