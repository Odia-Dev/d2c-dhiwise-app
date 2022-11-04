import React from "react";

import { Column, Row, Img, Text, Button, Input, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const HelpCenterPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:p-[24px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[92%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_11.svg"
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
        <Column className="items-center justify-start lg:mb-[166px] xl:mb-[208px] 2xl:mb-[234px] 3xl:mb-[280px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[15px] lg:pt-[9px] w-[69%]">
          <Column className="items-center justify-start w-[63%]">
            <Text className="text-black_900 w-[auto]" as="h2" variant="h2">
              Hello, how can we help?
            </Text>
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="flex w-[84%]"
                name="Group10270"
                placeholder="Search"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer mr-[1px] lg:w-[14px] lg:h-[15px] lg:ml-[24px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[35px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#bac1ce"
                    />
                  ) : (
                    <Img
                      src="images/img_search_20X20.svg"
                      className="cursor-pointer mr-[1px] lg:w-[14px] lg:h-[15px] lg:ml-[24px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[35px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] my-[auto]"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder6"
                variant="srcOutlineBluegray300"
              ></Input>
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[15%]"
                shape="RoundedBorder6"
              >
                Search
              </Button>
            </Row>
          </Column>
          <Column className="items-center justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
            <Row className="items-start justify-evenly py-[1px] w-[100%]">
              <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[97%]">
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  What Is This App & How It Works?
                </Text>
                <Text
                  className="font-normal lg:leading-[18px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-bluegray_400 w-[92%]"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                  augue at fringilla posuere ac, et diam. Augue pulvinar eget
                  purus, iaculis porta adipiscing pulvinar mi ante. Suspendisse
                  ullamcorper etiam natoque et blandit. Adipiscing lacus, vitae
                  morbi sed. Amet, enim vel nec ipsum ac sed. Nulla fermentum
                  turpis penatibus placerat.
                </Text>
              </Column>
              <Img
                src="images/img_menu_32X32.svg"
                className="AppIcon"
                alt="menu"
              />
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Text
                className="font-semibold text-bluegray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="AppIcon"
                alt="plus"
              />
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Text
                className="font-semibold text-bluegray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="AppIcon"
                alt="plus One"
              />
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Text
                className="font-semibold text-bluegray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="AppIcon"
                alt="plus Two"
              />
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Text
                className="font-semibold text-bluegray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="AppIcon"
                alt="plus Three"
              />
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HelpCenterPage;
