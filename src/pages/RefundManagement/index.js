import React from "react";

import { Column, Row, Img, Input, Text, Stack, Line, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const RefundManagementPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:pb-[141px] xl:pb-[177px] 2xl:pb-[199px] 3xl:pb-[238px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img src="images/img_group_7.svg" className="Group" alt="Group" />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[52px] 3xl:ml-[62px] flex lg:ml-[36px] w-[36%] xl:ml-[46px]"
              name="InputField"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search_20X20.svg"
                  className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[3px] lg:mr-[8px] xl:w-[17px] xl:h-[18px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#bac1ce"
                    className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[15px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder6"
              variant="srcOutlineBluegray300"
            ></Input>
            <Row className="items-start justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[29%]">
              <Row className="items-center justify-between lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[27%]">
                <Text className="hover:font-medium roworders" variant="body1">
                  Orders
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="arrowdown"
                  alt="arrowdown"
                />
              </Row>
              <Text className="hover:font-medium rowcategories" variant="body1">
                Categories
              </Text>
              <Row className="items-center justify-between lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[27%]">
                <Text className="hover:font-medium rowmore" variant="body1">
                  More
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="arrowdown"
                  alt="arrowdown One"
                />
              </Row>
            </Row>
            <Img src="images/img_cart.svg" className="cart" alt="cart" />
          </Row>
        </header>
        <Column className="font-opensans items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
          <Row className="bg-white_A700 items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 shadow-bs1 w-[100%]">
            <Img
              src="images/img_pngwing1.png"
              className="pngwingOne2"
              alt="pngwingOne"
            />
            <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] pr-[2px] py-[2px] w-[84%]">
              <Text
                className="font-medium mt-[3px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Samsung Galaxy M12 | 6000 mAh with 8nm Processor
              </Text>
              <Text className="columnprice" as="h5" variant="h5">
                (Blue,6GB RAM, 128GB Storage)
              </Text>
              <Row className="items-center mr-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[9%]">
                <Text className="Color" as="h6" variant="h6">
                  Color:
                </Text>
                <Text className="Blue1" as="h6" variant="h6">
                  Blue
                </Text>
              </Row>
              <Row className="items-end mr-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[15%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  <span className="text-colors font-opensans font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                    $
                  </span>
                  <span className="text-colors5 font-opensans font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                    555.29
                  </span>
                </Text>
                <Text className="oldPrice2" variant="body1">
                  <span className="text-colors3 font-opensans font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    $
                  </span>
                  <span className="text-colors3 font-opensans font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    55.99
                  </span>
                </Text>
              </Row>
            </Column>
          </Row>
          <Row className="font-gilroy items-start justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
            <Column className="bg-white_A700 justify-center lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius6 shadow-bs1 w-[67%]">
              <Text
                className="font-medium lg:mr-[433px] xl:mr-[542px] 2xl:mr-[610px] 3xl:mr-[732px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_902 w-[auto]"
                as="h4"
                variant="h4"
              >
                Track your return
              </Text>
              <Row className="items-center mb-[1px] lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mr-[298px] xl:mr-[373px] 2xl:mr-[420px] 3xl:mr-[504px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] py-[1px] w-[37%]">
                <Stack className="lg:h-[242px] xl:h-[303px] 2xl:h-[341px] 3xl:h-[409px] mb-[1px] w-[8%]">
                  <Line className="absolute bg-bluegray_100 lg:h-[229px] xl:h-[287px] 2xl:h-[323px] 3xl:h-[387px] inset-[0] justify-center m-[auto] w-[4px]" />
                  <Button
                    className="absolute flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center rounded-radius50 top-[0] w-[100%]"
                    size="smIcn"
                    variant="icbOutlineGray50"
                  >
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="checkmark"
                    />
                  </Button>
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]">
                    <Img
                      src="images/img_contrast_20X20.svg"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="contrast"
                    />
                    <Img
                      src="images/img_contrast_20X20.svg"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="contrast One"
                    />
                  </Column>
                  <Img
                    src="images/img_contrast_20X20.svg"
                    className="absolute bottom-[0] lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] inset-x-[0] mx-[auto] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="contrast Two"
                  />
                </Stack>
                <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[86%]">
                  <Text
                    className="font-semibold text-blue_800 w-[auto]"
                    variant="body1"
                  >
                    Return stared
                  </Text>
                  <Text
                    className="font-semibold 3xl:mt-[111px] lg:mt-[66px] xl:mt-[82px] 2xl:mt-[93px] text-bluegray_200 w-[auto]"
                    variant="body1"
                  >
                    Drop off the item by Thu, Mar 1
                  </Text>
                  <Text
                    className="font-semibold 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] text-bluegray_200 w-[auto]"
                    variant="body1"
                  >
                    Refund sent once we get the items
                  </Text>
                  <Text
                    className="font-semibold 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] text-bluegray_200 w-[auto]"
                    variant="body1"
                  >
                    Refund on your card
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="items-center justify-start w-[30%]">
              <Column className="bg-white_A700 justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius6 shadow-bs1 w-[100%]">
                <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] pb-[2px] w-[94%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-medium text-black_902 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Refund Summary
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] py-[4px] w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price (2 items)
                      </Text>
                      <Text
                        className="font-medium text-black_902 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $1110.58
                      </Text>
                    </Row>
                    <Row className="items-start justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                      <Text className="Discount" as="h6" variant="h6">
                        Delivery Charges
                      </Text>
                      <Text className="price_Three" as="h6" variant="h6">
                        $10
                      </Text>
                    </Row>
                  </Column>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  <Row className="items-center justify-between lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                    <Text
                      className="font-semibold mb-[1px] text-black_902 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Total refund
                    </Text>
                    <Text
                      className="font-semibold mt-[1px] text-black_902 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $1120.58
                    </Text>
                  </Row>
                </Column>
                <Column className="justify-start mb-[2px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[45%]">
                  <Text
                    className="font-medium text-blue_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cancel this return
                  </Text>
                  <Text
                    className="font-medium lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] text-blue_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    View order destails
                  </Text>
                </Column>
              </Column>
              <Button
                className="font-semibold lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                shape="RoundedBorder6"
              >
                Continue shopping
              </Button>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default RefundManagementPage;
