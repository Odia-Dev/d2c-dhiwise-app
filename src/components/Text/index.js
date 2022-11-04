import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[35px] xl:text-[44px] text-[50px] 3xl:text-[60px]",
  h2: "font-semibold lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h3: "font-semibold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h4: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h5: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h6: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body1: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body2: "lg:text-[10px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body3: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body4: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
