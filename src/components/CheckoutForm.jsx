import InputField from "./InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toastify from "../utils/toastify";

const CheckoutForm = ({ dispatch, checkoutDetails }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(checkoutDetails.firstName || "");
  const [lastName, setLastName] = useState(checkoutDetails.lastName || "");
  const [email, setEmail] = useState(checkoutDetails.email || "");
  const [phoneNumber, setPhoneNumber] = useState(checkoutDetails.phoneNumber || "");
  const [streetAddress, setStreetAddress] = useState(checkoutDetails.streetAddress || "");
  const [city, setCity] = useState(checkoutDetails.city || "");
  const [state, setState] = useState(checkoutDetails.state || "");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleStreetAddressChange = (e) => {
    setStreetAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      streetAddress.trim() === "" ||
      city.trim() === "" ||
      state.trim() === ""
    ) {
      toastify("Please fill in all fields", "error", 4000);
      return;
    }
    dispatch({
      type: "UPDATE_CHECKOUT_DETAILS",
      payload: {
        firstName,
        lastName,
        email,
        phoneNumber,
        streetAddress,
        city,
        state,
      },
    });
    navigate("/payment");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-10 flex flex-col gap-6">
        <InputField
          label="First Name"
          type="text"
          labelFor="first-name"
          value={firstName}
          handleChange={handleFirstNameChange}
        />
        <InputField
          label="Last Name"
          type="text"
          labelFor="last-name"
          value={lastName}
          handleChange={handleLastNameChange}
        />
        <InputField
          label="Email"
          type="email"
          labelFor="email"
          value={email}
          handleChange={handleEmailChange}
        />
        <InputField
          label="Phone Number"
          type="tel"
          labelFor="phone-number"
          value={phoneNumber}
          handleChange={handlePhoneNumberChange}
        />
        <InputField
          label="Street address"
          type="text"
          labelFor="street-address"
          value={streetAddress}
          handleChange={handleStreetAddressChange}
        />
        <InputField
          label="City"
          type="text"
          labelFor="city"
          value={city}
          handleChange={handleCityChange}
        />
        <InputField
          label="State"
          type="text"
          labelFor="state"
          value={state}
          handleChange={handleStateChange}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-center text-base lg:text-lg font-normal text-neutral-50"
      >
        Proceed to payment
      </button>
    </form>
  );
};

export default CheckoutForm;
