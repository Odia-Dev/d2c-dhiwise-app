import React from "react";

import { Column, Img, Text, Input, Row, Button } from "components";

const PasswordStrengthPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:p-[108px] xl:p-[135px] 2xl:p-[152px] 3xl:p-[182px] w-[100%]">
        <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[46%]">
          <Img
            src="images/img_group_1.svg"
            className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[129px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] w-[31%]"
            alt="Group"
          />
          <Text
            className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:mt-[41px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] text-bluegray_900 w-[auto]"
            as="h3"
            variant="h3"
          >
            Password Verificatin
          </Text>
          <Column className="justify-end lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
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
            <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
              <Text
                className="font-medium text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Password
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] flex lg:mt-[4px] w-[100%] xl:mt-[5px]"
                type="password"
                name="Group10198 One"
                placeholder="Enter Password"
                suffix={
                  <Img
                    src="images/img_eye_1.svg"
                    className="lg:w-[14px] lg:h-[15px] lg:ml-[24px] lg:mr-[3px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] xl:mr-[4px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[35px] 2xl:mr-[5px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] 3xl:mr-[6px] my-[auto]"
                    alt="eye"
                  />
                }
                shape="RoundedBorder8"
                size="md"
              ></Input>
            </Column>
            <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[1px] w-[100%]">
              <Row className="items-start justify-between w-[100%]">
                <Text
                  className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                  variant="body1"
                >
                  Password Strength:
                </Text>
                <Row className="items-end justify-evenly w-[16%]">
                  <Img
                    src="images/img_file_1.svg"
                    className="arrowdown"
                    alt="file"
                  />
                  <Text
                    className="font-medium mb-[3px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-amber_700 w-[auto]"
                    variant="body3"
                  >
                    Average
                  </Text>
                </Row>
              </Row>
              <div
                className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] overflow-hidden relative w-[100%]"
                name="Group10751"
              >
                <div className="w-full h-full absolute bg-gray_200"></div>
                <div
                  className="h-full absolute bg-amber_700"
                  style={{ width: "43%" }}
                ></div>
              </div>
              <Text
                className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                variant="body3"
              >
                Your password is not hard to guess.
              </Text>
            </Column>
            <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] py-[1px] w-[68%]">
              <Row className="items-start w-[95%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="arrowdown"
                  alt="checkmark"
                />
                <Text className="rowcheckmark" variant="body1">
                  Password must contain a lower case letter
                </Text>
              </Row>
              <Row className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="arrowdown"
                  alt="checkmark One"
                />
                <Text className="rowcheckmark_one" variant="body1">
                  Password must contain an upper case letter
                </Text>
              </Row>
              <Row className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[97%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="arrowdown"
                  alt="checkmark Two"
                />
                <Text className="rowcheckmark_one" variant="body1">
                  Password must contain a special character
                </Text>
              </Row>
              <Row className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[77%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="arrowdown"
                  alt="checkmark Three"
                />
                <Text className="rowcheckmark" variant="body1">
                  Password must contain a number
                </Text>
              </Row>
              <Row className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                <Img
                  src="images/img_checkmark_24X24.svg"
                  className="arrowdown"
                  alt="checkmark Four"
                />
                <Text className="rowcheckmark" variant="body1">
                  Password must contain at least 8 characters
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
              shape="RoundedBorder6"
            >
              Reset Password
            </Button>
            <Row className="font-poppins items-start justify-center lg:ml-[129px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[31%]">
              <Img
                src="images/img_arrowleft.svg"
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

export default PasswordStrengthPage;
