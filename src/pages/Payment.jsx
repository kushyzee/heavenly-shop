import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../context/CartProvider";
import RadioButton from "../components/RadioButton";
import { useNavigate } from "react-router-dom";
import toastify from "../utils/toastify";
import { PaystackButton } from "react-paystack";
import NotFound from "./NotFound";

const Payment = () => {
  const { state, dispatch } = useCart();
  const { firstName, lastName, email, phoneNumber } = state.checkoutDetails;
  const navigate = useNavigate();

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLICKEY;

  const componentProps = {
    email,
    amount: state.total,
    metadata: {
      "first name": firstName,
      "last name": lastName,
      phone: phoneNumber,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      navigate("/order-confirmed");
      dispatch({ type: "CLEAR_CART" });
    },
    onClose: () => toastify("Payment cancelled", "error", 4000),
  };

  return (
    <PageSection>
      {state.cart.length === 0 ? (
        <NotFound />
      ) : (
        <div className="max-w-screen-sm mx-auto lg:max-w-2xl">
          <PageTitle title="Payment method" />

          <div>
            <div className="gap-7 md:flex md:items-start md:justify-between lg:gap-10">
              <RadioButton />
              <OrderSummary state={state} />
            </div>
          </div>
          <PaystackButton
            className="mt-10 lg:mt-16 w-full rounded-lg bg-red-600 px-4 py-2.5 text-center text-base font-normal text-neutral-50"
            {...componentProps}
          />
        </div>
      )}
    </PageSection>
  );
};

export default Payment;
