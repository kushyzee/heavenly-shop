import { useCart } from "../context/CartProvider";
import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import OrderSummary from "../components/OrderSummary";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const { state, dispatch } = useCart();

  return (
    <PageSection>
      <div>
        <div>
          <PageTitle title={"Checkout"} />
          <div className="mt-6">
            <CheckoutForm dispatch={dispatch} />
          </div>
        </div>
        <OrderSummary state={state} />
      </div>
    </PageSection>
  );
};

export default Checkout;
