import React from "react";

const PageSection = ({ children }) => {
  return (
    <section className="mx-auto mb-14 mt-28 max-w-xl px-5 text-base text-gray-700 md:mb-20 md:mt-36 md:max-w-5xl md:text-lg lg:mb-36 lg:mt-44">
      {children}
    </section>
  );
};

export default PageSection;
