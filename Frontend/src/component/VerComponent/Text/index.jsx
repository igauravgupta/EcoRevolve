import React from "react";

const sizeClasses = {
  txtInterMedium14Indigo400: "font-inter font-medium",
  txtInterMedium14Bluegray400: "font-inter font-medium",
  txtInterMedium14Deeporange300: "font-inter font-medium",
  txtInterBold28: "font-bold font-inter",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterMedium14Bluegray900: "font-inter font-medium",
  txtInterBold24: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
