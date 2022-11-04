import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineBluegray300:
    "bg-white_A700 border border-bluegray_300 border-solid",
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  UnderLineBluegray100: "border-b-[1px] border-bluegray_100",
};
const shapes = {
  srcRoundedBorder6: "rounded-radius6",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
};
const sizes = {
  smSrc: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  sm: "lg:pb-[15px] xl:pb-[19px] pb-[22px] 3xl:pb-[26px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] lg:pt-[9px] xl:px-[11px] px-[13px] 3xl:px-[15px] lg:px-[9px]",
  md: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  lg: "xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pb-[9px] lg:pt-[13px] xl:pt-[16px] pt-[19px] 3xl:pt-[22px] xl:px-[12px] px-[14px] 3xl:px-[16px] lg:px-[9px]",
  xl: "lg:pb-[24px] xl:pb-[30px] pb-[34px] 3xl:pb-[40px] lg:pt-[20px] xl:pt-[25px] pt-[29px] 3xl:pt-[34px] lg:px-[20px] xl:px-[25px] px-[29px] 3xl:px-[34px]",
  "2xl": "lg:pb-[11px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px]",
  "3xl": "lg:pb-[13px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder6",
    "RoundedBorder8",
    "RoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineBluegray300",
    "OutlineBluegray100",
    "UnderLineBluegray100",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md", "lg", "xl", "2xl", "3xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineBluegray100",
  size: "smSrc",
};

export { Input };
