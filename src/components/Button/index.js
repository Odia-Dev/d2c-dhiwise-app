import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  icbRoundedBorder4: "rounded-radius4",
  icbRoundedBorder12: "rounded-radius12",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  FillGreen600: "bg-green_600 text-gray_50",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
  OutlineBluegray400: "border border-bluegray_400 border-solid text-black_902",
  FillBluegray100: "bg-bluegray_100 text-black_902",
  Outline:
    "bg-gradient  bg-white_A700_b2 outline outline-[1px] text-black_900_e4",
  icbOutlineBluegray100: "border border-bluegray_100 border-solid",
  icbOutlineBluegray101: "border border-bluegray_101 border-solid",
  icbOutlineGray50: "bg-blue_A700 outline outline-[1.5px] outline-gray_50",
  icbOutlineGray53: "bg-blue_A700 outline outline-[3.33px] outline-gray_53",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  lg: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  xl: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  smIcn: "p-[4px]",
  mdIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lgIcn: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  xlIcn: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  "2xlIcn": "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "icbRoundedBorder4",
    "icbRoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "FillGreen600",
    "OutlineBlueA700",
    "OutlineBluegray400",
    "FillBluegray100",
    "Outline",
    "icbOutlineBluegray100",
    "icbOutlineBluegray101",
    "icbOutlineGray50",
    "icbOutlineGray53",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBlueA700",
  size: "xl",
};

export { Button };
