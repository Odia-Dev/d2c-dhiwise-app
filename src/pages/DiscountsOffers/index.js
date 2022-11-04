import React from "react";

import { Column, Row, Img, Input, Text, Stack, List, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DiscountsOffersPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-start mx-[auto] lg:pb-[29px] xl:pb-[37px] 2xl:pb-[42px] 3xl:pb-[50px] w-[100%]">
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
        <Column className="font-chivo items-center justify-start lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[88%]">
          <Column
            className="bg-cover bg-repeat justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius16 w-[100%]"
            style={{ backgroundImage: "url('images/img_group5883.png')" }}
          >
            <Stack className="bg-white_A700 lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius1714 w-[17%]">
              <Img
                src="images/img_image62.png"
                className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[76%]"
                alt="imageSixtyTwo"
              />
            </Stack>
            <Text
              className="leading-[normal] lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mr-[544px] xl:mr-[680px] 2xl:mr-[765px] 3xl:mr-[918px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] text-white_A700 w-[34%]"
              as="h1"
              variant="h1"
            >
              Get extra 20% off on Gadgets
            </Text>
          </Column>
          <Column className="font-gilroy items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[100%]">
            <Row className="items-center justify-between lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[100%]">
              <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
                Offers For You
              </Text>
              <Img src="images/img_clock.svg" className="clock" alt="clock" />
            </Row>
            <List
              className="lg:gap-[19px] xl:gap-[24px] 2xl:gap-[28px] 3xl:gap-[33px] grid grid-cols-4 min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 items-end justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs1 w-[100%]">
                <Stack className="lg:h-[138px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                  <Img
                    src="images/img_pngwing1.png"
                    className="pngwingOne"
                    alt="pngwingOne"
                  />
                  <Button
                    className="absolute capitalize font-medium left-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center top-[0] w-[26%]"
                    size="sm"
                    variant="FillGreen600"
                  >
                    30% OFF
                  </Button>
                </Stack>
                <Column className="justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[91%]">
                  <Text className="Amazone" as="h6" variant="h6">
                    Amazone
                  </Text>
                  <Text className="boAtAirdopesOne" as="h4" variant="h4">
                    boAt Airdopes 131
                  </Text>
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                    <Row className="items-end justify-between mt-[1px] w-[51%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        <span className="text-colors font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          $
                        </span>
                        <span className="text-colors1 font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          49.99
                        </span>
                      </Text>
                      <Text className="oldPrice" variant="body1">
                        $99.99
                      </Text>
                    </Row>
                    <Row className="border border-amber_500 border-solid font-opensans items-center justify-between p-[4px] rounded-radius3 w-[13%]">
                      <Img
                        src="images/img_star1_3.svg"
                        className="StarOne"
                        alt="StarOne"
                      />
                      <Text className="rowstarone" variant="body3">
                        4
                      </Text>
                    </Row>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Buy Now
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-end justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs1 w-[100%]">
                <Stack className="lg:h-[138px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                  <Img
                    src="images/img_pngwing1_194X248.png"
                    className="pngwingOne"
                    alt="pngwingOne One"
                  />
                  <Button
                    className="absolute capitalize font-medium left-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center top-[0] w-[26%]"
                    size="sm"
                    variant="FillGreen600"
                  >
                    30% OFF
                  </Button>
                </Stack>
                <Column className="justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[91%]">
                  <Text className="Amazone" as="h6" variant="h6">
                    TataCLiQ
                  </Text>
                  <Text className="boAtAirdopesOne" as="h4" variant="h4">
                    HP Envy 13 x360
                  </Text>
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                    <Row className="items-end justify-between mt-[1px] w-[51%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        <span className="text-colors font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          $
                        </span>
                        <span className="text-colors1 font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          49.99
                        </span>
                      </Text>
                      <Text className="oldPrice" variant="body1">
                        $99.99
                      </Text>
                    </Row>
                    <Row className="border border-amber_500 border-solid font-opensans items-center justify-between p-[4px] rounded-radius3 w-[13%]">
                      <Img
                        src="images/img_star1_4.svg"
                        className="StarOne"
                        alt="StarOne One"
                      />
                      <Text className="rowstarone" variant="body3">
                        4
                      </Text>
                    </Row>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Buy Now
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-end justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs1 w-[100%]">
                <Stack className="lg:h-[138px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                  <Img
                    src="images/img_pngwing1_1.png"
                    className="pngwingOne"
                    alt="pngwingOne Two"
                  />
                  <Button
                    className="absolute capitalize font-medium left-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center top-[0] w-[26%]"
                    size="sm"
                    variant="FillGreen600"
                  >
                    30% OFF
                  </Button>
                </Stack>
                <Column className="justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[91%]">
                  <Text className="Amazone" as="h6" variant="h6">
                    Amazone
                  </Text>
                  <Text className="weight" as="h4" variant="h4">
                    OnePlus 10R 5G
                  </Text>
                  <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                    <Row className="items-end justify-between mt-[1px] w-[51%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        <span className="text-colors font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          $
                        </span>
                        <span className="text-colors1 font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          49.99
                        </span>
                      </Text>
                      <Text className="oldPrice" variant="body1">
                        $99.99
                      </Text>
                    </Row>
                    <Row className="border border-amber_500 border-solid font-opensans items-center justify-between p-[4px] rounded-radius3 w-[13%]">
                      <Img
                        src="images/img_star1_5.svg"
                        className="StarOne"
                        alt="StarOne Two"
                      />
                      <Text className="rowstarone" variant="body3">
                        4
                      </Text>
                    </Row>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Buy Now
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-end justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs1 w-[100%]">
                <Stack className="lg:h-[138px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                  <Img
                    src="images/img_pngwing1_2.png"
                    className="pngwingOne"
                    alt="pngwingOne Three"
                  />
                  <Button
                    className="absolute capitalize font-medium left-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center top-[0] w-[26%]"
                    size="sm"
                    variant="FillGreen600"
                  >
                    30% OFF
                  </Button>
                </Stack>
                <Column className="justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[91%]">
                  <Text className="Amazone" as="h6" variant="h6">
                    TataCLiQ
                  </Text>
                  <Text className="weight" as="h4" variant="h4">
                    APPLE iPad
                  </Text>
                  <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                    <Row className="items-end justify-between mt-[1px] w-[51%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        <span className="text-colors font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          $
                        </span>
                        <span className="text-colors1 font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          49.99
                        </span>
                      </Text>
                      <Text className="oldPrice" variant="body1">
                        $99.99
                      </Text>
                    </Row>
                    <Row className="border border-amber_500 border-solid font-opensans items-center justify-between p-[4px] rounded-radius3 w-[13%]">
                      <Img
                        src="images/img_star1_6.svg"
                        className="StarOne"
                        alt="StarOne Three"
                      />
                      <Text className="rowstarone" variant="body3">
                        4
                      </Text>
                    </Row>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Buy Now
                  </Button>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DiscountsOffersPage;
