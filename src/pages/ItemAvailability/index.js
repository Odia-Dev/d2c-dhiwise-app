import React from "react";

import { Column, Row, Img, Input, Text, Line, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ItemAvailabilityPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img src="images/img_group.svg" className="Group" alt="Group" />
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
                  src="images/img_arrowdown_24X24.svg"
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
                  src="images/img_arrowdown_24X24.svg"
                  className="arrowdown"
                  alt="arrowdown One"
                />
              </Row>
            </Row>
            <Img src="images/img_cart.svg" className="cart" alt="cart" />
          </Row>
        </header>
        <Row className="items-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[88%]">
          <Column className="bg-white_A700 items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 shadow-bs1 w-[67%]">
            <Column className="justify-start pt-[4px] w-[96%]">
              <Input
                className="placeholder:text-black_902 FrameSeventySeven"
                wrapClassName="w-[100%]"
                name="FrameSeventySeven"
                placeholder="Order Summary"
                size="2xl"
                variant="UnderLineBluegray100"
              ></Input>
              <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[77%]">
                <Img
                  src="images/img_pngwing1.png"
                  className="pngwingOne1"
                  alt="pngwingOne"
                />
                <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] lg:pb-[4px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] w-[65%]">
                  <Text
                    className="font-medium text-black_902 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text className="filesize" as="h6" variant="h6">
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[23%]">
                    <Text
                      className="font-medium text-black_902 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Color:
                    </Text>
                    <Text className="Blue" as="h6" variant="h6">
                      Blue
                    </Text>
                  </Row>
                  <Row className="font-opensans items-end lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[40%]">
                    <Text className="price3" as="h4" variant="h4">
                      <span className="text-colors font-gilroy font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        $
                      </span>
                      <span className="text-colors2 font-gilroy font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        555.29
                      </span>
                    </Text>
                    <Text className="oldPrice1" variant="body1">
                      <span className="text-colors3 font-gilroy font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        $6
                      </span>
                      <span className="text-colors3 font-gilroy font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        55.99
                      </span>
                    </Text>
                  </Row>
                  <Text
                    className="font-medium lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-red_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Currently Unavailable
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="items-center justify-start lg:mb-[27px] xl:mb-[33px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] pt-[4px] w-[96%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="font-medium text-black_902 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Delivery Address
                </Text>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
              </Column>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
                <Row className="items-start justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] pb-[3px] w-[67%]">
                  <Img
                    src="images/img_radiobutton.svg"
                    className="RadioButton"
                    alt="RadioButton"
                  />
                  <Column className="justify-start pt-[2px] w-[88%]">
                    <Row className="items-start w-[42%]">
                      <Text className="rowinputplaceho" as="h5" variant="h5">
                        Jone Cooper
                      </Text>
                      <Button
                        className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[27%]"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="FillBluegray100"
                      >
                        Work
                      </Button>
                    </Row>
                    <Text className="columninputplaceho" as="h5" variant="h5">
                      2118 Thornridge Cir. Syracuse, Connecticut 35624
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium text-blue_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Edit
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
                <Img
                  src="images/img_search.svg"
                  className="RadioButton"
                  alt="search"
                />
                <Column className="2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pt-[2px] w-[61%]">
                  <Row className="items-start w-[41%]">
                    <Text className="rowinputplaceho" as="h5" variant="h5">
                      Jone Cooper
                    </Text>
                    <Button
                      className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[28%]"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillBluegray100"
                    >
                      Home
                    </Button>
                  </Row>
                  <Text
                    className="columninputplaceho_three"
                    as="h5"
                    variant="h5"
                  >
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
                <Img
                  src="images/img_search.svg"
                  className="RadioButton"
                  alt="search One"
                />
                <Column className="2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[54%]">
                  <Text
                    className="font-medium text-black_902 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Jone Cooper
                  </Text>
                  <Text
                    className="columninputplaceho_three"
                    as="h5"
                    variant="h5"
                  >
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </Text>
                </Column>
              </Row>
              <Input
                className="placeholder:text-black_902 Frame9986"
                wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[17px] w-[100%] xl:mt-[21px]"
                name="Frame9986"
                placeholder="Add Address"
                prefix={
                  <Img
                    src="images/img_plus.svg"
                    className="lg:w-[25px] lg:h-[26px] lg:ml-[9px] lg:mr-[17px] xl:w-[32px] xl:h-[33px] xl:ml-[11px] xl:mr-[21px] 2xl:w-[36px] 2xl:h-[37px] 2xl:ml-[13px] 2xl:mr-[24px] 3xl:w-[43px] 3xl:h-[44px] 3xl:ml-[15px] 3xl:mr-[28px] my-[auto]"
                    alt="plus"
                  />
                }
                shape="RoundedBorder4"
                size="xl"
              ></Input>
            </Column>
          </Column>
          <Column className="bg-white_A700 items-center justify-end lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 shadow-bs1 w-[31%]">
            <Column className="items-center justify-start mt-[1px] pb-[2px] w-[91%]">
              <Input
                className="placeholder:text-black_902 FrameSeventySeven"
                wrapClassName="w-[100%]"
                name="Group235"
                placeholder="Price Details"
                size="3xl"
                variant="UnderLineBluegray100"
              ></Input>
              <Column className="items-center justify-end lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] py-[4px] w-[100%]">
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
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
              <Row className="items-start justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                <Text className="TotalAmount" as="h4" variant="h4">
                  Total Amount
                </Text>
                <Text className="price_Three" as="h4" variant="h4">
                  $1120.58
                </Text>
              </Row>
            </Column>
            <Button
              className="font-semibold lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[91%]"
              shape="RoundedBorder6"
            >
              Checkout
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ItemAvailabilityPage;
