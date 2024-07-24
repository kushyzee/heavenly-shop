import { Link } from "react-router-dom";

const CartIsEmpty = ({ heading }) => {
  return (
    <div className="mb-56 flex flex-col items-center justify-center gap-10">
      <h1 className="text-center text-2xl font-semibold lg:text-3xl">
        {heading}
      </h1>
      <Link
        className="mx-auto block rounded-md bg-red-600 px-5 py-2.5 text-center font-medium text-zinc-50 transition-colors duration-200 hover:bg-red-700"
        to="/products"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default CartIsEmpty;
