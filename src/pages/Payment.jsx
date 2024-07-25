import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../context/CartProvider";
import RadioButton from "../components/RadioButton";
import { useNavigate } from "react-router-dom";
import toastify from "../utils/toastify";
import { PaystackButton } from "react-paystack";
import NotFound from "./NotFound";
import { convertMoney } from "../utils/convertMoney";
import { postOrders } from "../utils/postOrders"
import Loader from "../lib/loader";
import { useState } from "react";

const Payment = () => {
  const { state, dispatch } = useCart();
  const [loading, setLoading] = useState(false)

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    streetAddress,
    city,
    state: customerState,
  } = state.checkoutDetails;
  const navigate = useNavigate();

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLICKEY;

  const orderConfirmed = async () => {
    const products_sold = state.cart.map((item) => {
      return {
        product_id: item.id,
        product_name: item.name,
        quantity: item.quantity,
        amount: item.price * item.quantity,
      };
    });

    const orderDetails = {
      products_sold,
      total_amount: convertMoney(state.total, "toNaira"),
      first_name: firstName,
      last_name: lastName,
      customer_email: email,
      customer_address: `${streetAddress}, ${city}, ${customerState}`,
      customer_phone: phoneNumber,
    };

    setLoading(true)
    await postOrders(orderDetails);
    dispatch({ type: "CLEAR_CART" });
    navigate("/order-confirmed");
    setLoading(false)
  };

  const paymentSuccess = async () => {
    
  };

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
    onSuccess: () => orderConfirmed(),
    onClose: () => toastify("Payment cancelled", "error", 4000),
  };

  if (loading) {
    return <Loader />
  }

  return (
    <PageSection>
      {state.cart.length === 0 ? (
        <NotFound />
      ) : (
        <div className="mx-auto max-w-screen-sm lg:max-w-2xl">
          <PageTitle title="Payment method" />

          <div>
            <div className="gap-7 md:flex md:items-start md:justify-between lg:gap-10">
              <RadioButton />
              <OrderSummary state={state} />
            </div>
          </div>
          <PaystackButton
            className="mt-10 w-full rounded-lg bg-red-600 px-4 py-2.5 text-center text-base font-normal text-neutral-50 lg:mt-16"
            {...componentProps}
          />
        </div>
      )}
    </PageSection>
  );
};

export default Payment;
