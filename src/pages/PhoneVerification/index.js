import React from "react";

import { Column, Img, Text, Button } from "components";

const PhoneVerificationPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:p-[211px] xl:p-[264px] 2xl:p-[297px] 3xl:p-[356px] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-radius12 w-[64%]">
          <Column className="items-center justify-start w-[40%]">
            <Img
              src="images/img_mobile.svg"
              className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[21%]"
              alt="mobile"
            />
            <Text
              className="font-semibold lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-blue_A700 w-[auto]"
              as="h4"
              variant="h4"
            >
              OTP Verification
            </Text>
          </Column>
          <Text
            className="font-medium lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-gray_700 w-[auto]"
            as="h6"
            variant="h6"
          >
            <span className="text-colors3 font-gilroy lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
              OTP Is Send to
            </span>
            <span className="text-colors7 font-gilroy lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
              {" "}
            </span>
            <span className="text-colors font-gilroy font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
              +91 01234567890
            </span>
          </Text>
          <Img
            src="images/img_group11201.svg"
            className="lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius3 w-[72%]"
            alt="Group11201"
          />
          <Button
            className="font-medium lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[89%]"
            shape="RoundedBorder6"
          >
            Verify OTP
          </Button>
          <Text
            className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] text-blue_A700 w-[auto]"
            variant="body1"
          >
            <span className="text-colors3 font-gilroy lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Didn’t Recieved Code ?
            </span>
            <span className="text-colors font-gilroy lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              {" "}
            </span>
            <span className="text-colors font-gilroy font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Resend{" "}
            </span>
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default PhoneVerificationPage;
