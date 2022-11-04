import React from "react";

import { Column, Row, Img, Input, Text, SelectBox, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const OrderdetailviewPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:pb-[233px] xl:pb-[292px] 2xl:pb-[329px] 3xl:pb-[395px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img src="images/img_group_4.svg" className="Group" alt="Group" />
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
        <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[88%]">
          <Row className="items-start justify-between w-[100%]">
            <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
              Order details
            </Text>
            <SelectBox
              className="font-medium mt-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[7%]"
              placeholderClassName="text-blue_A700"
              name="Frame34816"
              placeholder="Invoice"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_1.svg"
                  className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
          </Row>
          <Row className="items-start justify-evenly lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
            <Column className="items-center justify-start w-[69%]">
              <Row className="bg-white_A700 items-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 shadow-bs1 w-[97%]">
                <Text
                  className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-colors4 font-gilroy font-semibold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Order Id:
                  </span>
                  <span className="text-colors4 font-gilroy lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    {" "}
                  </span>
                  <span className="text-colors font-gilroy lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    #21204034879
                  </span>
                </Text>
                <Column className="justify-start mb-[4px] lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[30%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shipping Address
                  </Text>
                  <Text
                    className="font-normal lg:leading-[20px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-bluegray_900 w-[96%]"
                    as="h6"
                    variant="h6"
                  >
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Text>
                </Column>
                <Column className="justify-start lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[18%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Payment Method
                  </Text>
                  <Text
                    className="font-normal lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    BHIM UPI
                  </Text>
                </Column>
              </Row>
              <Column className="bg-white_A700 justify-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 shadow-bs1 w-[97%]">
                <Text
                  className="font-medium mt-[4px] text-green_600 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Delivered 02, May 2022
                </Text>
                <Row className="font-opensans items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] pb-[2px] w-[100%]">
                  <Img
                    src="images/img_pngwing1.png"
                    className="pngwingOne2"
                    alt="pngwingOne"
                  />
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[75%]">
                    <Text
                      className="font-medium lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] text-bluegray_900 w-[84%]"
                      as="h4"
                      variant="h4"
                    >
                      Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                    </Text>
                    <Text
                      className="font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-bluegray_400 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <Row className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[16%]">
                      <Text className="Color" as="h6" variant="h6">
                        Color:
                      </Text>
                      <Text className="Blue1" as="h6" variant="h6">
                        Blue
                      </Text>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[auto]"
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
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius8 shadow-bs1 w-[31%]">
              <Column className="justify-start w-[92%]">
                <Text
                  className="font-medium text-black_902 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Price Details
                </Text>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
              </Column>
              <Column className="items-center justify-end lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] py-[4px] w-[92%]">
                <Row className="items-center justify-between mt-[1px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Price(2 iteam)
                  </Text>
                  <Text
                    className="font-medium text-black_902 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    $1110.58
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                  <Text className="Discount" as="h6" variant="h6">
                    Discount
                  </Text>
                  <Text className="price_Two" as="h6" variant="h6">
                    -$111.98
                  </Text>
                </Row>
                <Row className="items-start justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                  <Text className="Discount" as="h6" variant="h6">
                    Delivery Charges
                  </Text>
                  <Text className="price_Three" as="h6" variant="h6">
                    $10
                  </Text>
                </Row>
              </Column>
              <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[92%]">
                <Text className="Discount" as="h6" variant="h6">
                  <span className="text-colors3 font-gilroy lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Donate{" "}
                  </span>
                  <span className="text-colors6 font-gilroy underline lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Remove
                  </span>
                </Text>
                <Text className="price_Three" as="h6" variant="h6">
                  $2
                </Text>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[92%]" />
              <Row className="items-start justify-between mb-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[91%]">
                <Text className="TotalAmount" as="h4" variant="h4">
                  Total Amount
                </Text>
                <Text className="price_Three" as="h4" variant="h4">
                  $1120.58
                </Text>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default OrderdetailviewPage;
