import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-md" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    teal_400: "bg-teal-400 text-white-A700",
  },
};
const sizes = { xs: "p-[15px]", sm: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "teal_400"]),
};

export { Button };
