import React from "react";

const InputField = ({ label, type, labelFor, value, handleChange, textArea=false }) => {
  return (
    <div>
      <label htmlFor={labelFor} className="mb-1.5 lg:mb-2 inline-block text-sm lg:text-base font-semibold leading-tight text-zinc-700">
        {label}
      </label>
      {textArea ? <textarea className="inline-block w-full rounded-md border border-zinc-300 py-2 pl-3 focus:border-zinc-500 focus:ring-zinc-500" name={labelFor} id={labelFor} value={value} onChange={handleChange} cols="30" rows="5"></textarea> : <input
        id={labelFor}
        name={labelFor}
        type={type}
        value={value}
        onChange={handleChange}
        className="inline-block w-full rounded-md border border-zinc-300 py-2 pl-3 focus:border-zinc-500 focus:ring-zinc-500"
      />}
      
    </div>
  );
};

export default InputField;
