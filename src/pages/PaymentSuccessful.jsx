import { FaCircleCheck } from "react-icons/fa6";
import PageSection from "../components/PageSection";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import { useCart } from "../context/CartProvider";

const PaymentSuccessful = () => {

  return (
    <PageSection>
      {}
      <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-300 p-10">
        <FaCircleCheck className="size-28 text-green-600" />
        <h1 className="mb-3 mt-5 text-xl font-medium text-zinc-900">
          Order Confirmed
        </h1>
        <p className="text-zinc-900">You will get your order soon!</p>
        <Link className="mt-8 bg-zinc-900 text-zinc-50 px-5 inline-block rounded-md py-2.5 transition-colors duration-300 hover:bg-zinc-700" to="/">Back to home</Link>
      </div>
    </PageSection>
  );
};

export default PaymentSuccessful;
