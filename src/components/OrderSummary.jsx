import { convertMoney } from "../utils/convertMoney"
import { formatPrice } from "../utils/formatPrice"

const OrderSummary = ({state}) => {
  const {subtotal, total, shippingFee, totalItems} = state;

  return (
    <div className="mt-14 p-4 flex-col justify-start items-start gap-6 flex bg-red-50 rounded-xl shadow">
      <h2 className="text-lg font-semibold">Order summary</h2>
      <div className="flex items-center justify-between w-full text-sm border-b border-zinc-300 pb-2">
        <p>Item's total <span>({totalItems})</span> </p>
        <p>{formatPrice(convertMoney(subtotal, "toNaira"))}</p>
      </div>
      <div className="flex items-center justify-between w-full text-sm border-b border-zinc-300 pb-2">
        <p>Delivery fee</p>
        <p>{formatPrice(convertMoney(shippingFee, "toNaira"))}</p>
      </div>
      <div className="flex items-center justify-between w-full font-medium">
        <p>Order total</p>
        <p>{formatPrice(convertMoney(total, "toNaira"))}</p>
      </div>
    </div>
  )
}

export default OrderSummary