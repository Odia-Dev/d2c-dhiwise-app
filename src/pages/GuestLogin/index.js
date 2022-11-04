import React from "react";

import { Column, Img, Text, Input, Button } from "components";

const GuestLoginPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:p-[106px] xl:p-[133px] 2xl:p-[150px] 3xl:p-[180px] w-[100%]">
        <Column className="items-center justify-start lg:mb-[236px] xl:mb-[295px] 2xl:mb-[332px] 3xl:mb-[398px] w-[45%]">
          <Img
            src="images/img_group_7.svg"
            className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[32%]"
            alt="Group"
          />
          <Column className="items-center justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
            <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
              Login as a Guest
            </Text>
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
              <Column className="justify-start lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                  wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[7px]"
                  type="email"
                  name="email"
                  placeholder="jane@gmail.com"
                  shape="RoundedBorder8"
                  size="md"
                ></Input>
              </Column>
              <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] py-[3px] w-[100%]">
                <Text className="Input1" as="h6" variant="h6">
                  Password
                </Text>
                <Column className="items-end justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Input
                    className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    type="password"
                    name="password"
                    placeholder="*********"
                    suffix={
                      <Img
                        src="images/img_eye.svg"
                        className="mr-[1px] lg:w-[14px] lg:h-[15px] lg:ml-[24px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[35px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] my-[auto]"
                        alt="eye"
                      />
                    }
                    shape="RoundedBorder8"
                    size="sm"
                  ></Input>
                  <Text
                    className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-blue_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Forgot Password?
                  </Text>
                </Column>
              </Column>
              <Button
                className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                shape="RoundedBorder6"
              >
                Log in
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default GuestLoginPage;
