import React from "react";

import { Column, Img, Text, Input, Button, Row } from "components";

const ForgotPasswordPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:p-[106px] xl:p-[133px] 2xl:p-[150px] 3xl:p-[180px] w-[100%]">
        <Column className="items-center justify-start lg:mb-[266px] xl:mb-[333px] 2xl:mb-[375px] 3xl:mb-[450px] w-[46%]">
          <Img
            src="images/img_group_1.svg"
            className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[31%]"
            alt="Group"
          />
          <Column className="items-center justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[67%]">
            <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
              Forgot your password
            </Text>
            <Text
              className="font-normal lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-bluegray_500 w-[auto]"
              as="h6"
              variant="h6"
            >
              No worries, we’ll send you reset instructions.
            </Text>
          </Column>
          <Column className="items-center justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
            <Column className="justify-start rounded-radius8 w-[100%]">
              <Text
                className="font-medium text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                type="email"
                name="Group10198"
                placeholder="Enter Your Email"
                shape="RoundedBorder8"
                size="md"
              ></Input>
            </Column>
            <Button
              className="font-medium lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
              shape="RoundedBorder6"
            >
              Reset Password
            </Button>
            <Row className="font-poppins items-start justify-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[31%]">
              <Img
                src="images/img_arrowleft_24X24.svg"
                className="star"
                alt="arrowleft"
              />
              <Text className="rowarrowleft" as="h6" variant="h6">
                Back to Sign in
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ForgotPasswordPage;
