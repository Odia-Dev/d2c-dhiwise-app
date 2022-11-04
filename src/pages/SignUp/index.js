import React from "react";

import { Column, Row, Img, Text, Button, Input } from "components";

const SignUpPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:p-[24px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[92%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_21.svg"
              className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[13%]"
              alt="Group10392"
            />
            <Row className="items-start justify-center lg:ml-[202px] xl:ml-[253px] 2xl:ml-[285px] 3xl:ml-[342px] py-[1px] w-[29%]">
              <Row className="items-start justify-between mt-[1px] w-[27%]">
                <Text className="rowproducts" variant="body1">
                  Products
                </Text>
                <Img
                  src="images/img_arrowdown_24X24.svg"
                  className="arrowdown"
                  alt="arrowdown"
                />
              </Row>
              <Row className="items-start justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[1px] w-[28%]">
                <Text className="rowproducts" variant="body1">
                  Resouces
                </Text>
                <Img
                  src="images/img_arrowdown_24X24.svg"
                  className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] arrowdown"
                  alt="arrowdown One"
                />
              </Row>
              <Text className="rowrequestademo" variant="body1">
                Request a demo
              </Text>
            </Row>
            <Row className="items-center justify-between lg:ml-[160px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] rounded-radius6 w-[17%]">
              <Text
                className="font-medium text-gray_900 w-[auto]"
                variant="body1"
              >
                Sign in
              </Text>
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[67%]"
                shape="RoundedBorder6"
              >
                Sign up for free
              </Button>
            </Row>
          </Row>
        </header>
        <Column className="items-center justify-start lg:mb-[258px] xl:mb-[323px] 2xl:mb-[364px] 3xl:mb-[437px] lg:mt-[56px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[39%]">
          <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
            Create Account
          </Text>
          <Column className="items-center justify-end lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Column className="rounded-radius8 w-[48%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  First Name
                </Text>
                <Input
                  className="placeholder:text-bluegray_700 Group101982"
                  wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                  name="Group10198"
                  placeholder="jane"
                  shape="RoundedBorder8"
                  size="md"
                ></Input>
              </Column>
              <Column className="mt-[1px] rounded-radius8 w-[48%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Last Name
                </Text>
                <Input
                  className="placeholder:text-bluegray_700 Group101982"
                  wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                  name="Group10198 One"
                  placeholder="Jnson"
                  shape="RoundedBorder8"
                  size="md"
                ></Input>
              </Column>
            </Row>
            <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius8 w-[100%]">
              <Text
                className="font-medium text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Mobile Number
              </Text>
              <Input
                className="placeholder:text-bluegray_700 Group101982"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[7px]"
                name="mobileNo"
                placeholder="+91 1234567890"
                shape="RoundedBorder8"
                size="md"
              ></Input>
            </Column>
            <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[100%]">
              <Text
                className="font-medium text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Input
                className="placeholder:text-bluegray_700 Group101982"
                wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                type="email"
                name="email"
                placeholder="jane@gmail.com"
                shape="RoundedBorder8"
                size="md"
              ></Input>
            </Column>
            <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[100%]">
              <Text
                className="font-medium text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Set Password
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                type="password"
                name="Group10198 Two"
                placeholder="Set password"
                shape="RoundedBorder8"
                size="lg"
              ></Input>
            </Column>
            <Button
              className="font-medium lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
              shape="RoundedBorder6"
            >
              Save
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignUpPage;
