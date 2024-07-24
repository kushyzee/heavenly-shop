import React from "react";

const RadioButton = () => {
  return (
      <div className="mt-6">
        <label
          htmlFor="paystack"
          className="flex cursor-pointer gap-3 w-fit justify-center rounded-lg border border-gray-100 px-3 py-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-red-600"
        >
          <input
            type="radio"
            name="paystack"
            value="paystack"
            id="paystack"
            className="size-5 border-gray-300 text-red-600 focus:ring-0"
            defaultChecked
          />
          <div>
            <p className="text-base font-medium">Pay with Cards, bank transfer or USSD</p>

            <p className="mt-1 text-xs text-zinc-500">you will be redirected to paystack platform</p>
          </div>
        </label>
      </div>
  );
};

export default RadioButton;
