import { useCart } from "../context/CartProvider";
import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import OrderSummary from "../components/OrderSummary";
import CheckoutForm from "../components/CheckoutForm";
import NotFound from "./NotFound";

const Checkout = () => {
  const { state, dispatch } = useCart();

  return (
    <PageSection>
      {state.cart.length === 0 ? (
        <NotFound />
      ) : (
        <div>
          <PageTitle title={"Checkout"} />
          <div className="md:flex md:justify-between md:items-start gap-7 lg:gap-10">
            <div className="mt-6 flex-1 md:max-w-xl">
              <CheckoutForm
                dispatch={dispatch}
                checkoutDetails={state.checkoutDetails}
              />
            </div>
            <OrderSummary state={state} />
          </div>
        </div>
      )}
    </PageSection>
  );
};

export default Checkout;
