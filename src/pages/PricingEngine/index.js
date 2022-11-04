import React from "react";

import { Column, Row, Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const PricingEnginePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
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
        <List
          className="gap-[0] min-h-[auto] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[88%]"
          orientation="vertical"
        >
          <Column className="items-center justify-start lg:my-[24px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[42px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
                Best Sellers in Electronics
              </Text>
              <Img src="images/img_clock.svg" className="clock" alt="clock" />
            </Row>
            <Row className="items-center justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_194X248.png"
                  className="pngwingOne3"
                  alt="pngwingOne"
                />
                <Text className="Amazone1" as="h6" variant="h6">
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
                      src="images/img_star1.svg"
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
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_1.png"
                  className="pngwingOne3"
                  alt="pngwingOne One"
                />
                <Text className="Amazone1" as="h6" variant="h6">
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
                      src="images/img_star1_12X12.svg"
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
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_2.png"
                  className="pngwingOne3"
                  alt="pngwingOne Two"
                />
                <Text className="Amazone1" as="h6" variant="h6">
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
                      src="images/img_star1_1.svg"
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
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_3.png"
                  className="pngwingOne3"
                  alt="pngwingOne Three"
                />
                <Text className="Amazone1" as="h6" variant="h6">
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
                      src="images/img_star1_2.svg"
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
            </Row>
          </Column>
          <Column className="items-center justify-end lg:my-[24px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[42px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
                Best Sellers in Electronics
              </Text>
              <Img
                src="images/img_clock.svg"
                className="clock"
                alt="clock One"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_194X248.png"
                  className="pngwingOne3"
                  alt="pngwingOne One"
                />
                <Text className="Amazone_One" as="h6" variant="h6">
                  Amazone
                </Text>
                <Text className="boAtAirdopesOne_One" as="h4" variant="h4">
                  boAt Airdopes 131
                </Text>
                <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-end justify-between w-[51%]">
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
                    <Text className="oldPrice_One" variant="body1">
                      $99.99
                    </Text>
                  </Row>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-evenly p-[2px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1_3.svg"
                      className="StarOne"
                      alt="StarOne One"
                    />
                    <Text
                      className="font-medium text-amber_500 w-[auto]"
                      variant="body3"
                    >
                      4
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder6"
                  size="lg"
                >
                  Buy Now
                </Button>
              </Column>
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_1.png"
                  className="pngwingOne3"
                  alt="pngwingOne One One"
                />
                <Text className="Amazone_One" as="h6" variant="h6">
                  TataCLiQ
                </Text>
                <Text className="boAtAirdopesOne_One" as="h4" variant="h4">
                  HP Envy 13 x360
                </Text>
                <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-end justify-between w-[51%]">
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
                    <Text className="oldPrice_One" variant="body1">
                      $99.99
                    </Text>
                  </Row>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-evenly p-[2px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1_4.svg"
                      className="StarOne"
                      alt="StarOne One One"
                    />
                    <Text
                      className="font-medium text-amber_500 w-[auto]"
                      variant="body3"
                    >
                      4
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder6"
                  size="lg"
                >
                  Buy Now
                </Button>
              </Column>
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_2.png"
                  className="pngwingOne3"
                  alt="pngwingOne Two One"
                />
                <Text className="Amazone_One" as="h6" variant="h6">
                  Amazone
                </Text>
                <Text className="boAtAirdopesOne_One" as="h4" variant="h4">
                  OnePlus 10R 5G
                </Text>
                <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-end justify-between w-[51%]">
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
                    <Text className="oldPrice_One" variant="body1">
                      $99.99
                    </Text>
                  </Row>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-evenly p-[2px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1_5.svg"
                      className="StarOne"
                      alt="StarOne Two One"
                    />
                    <Text
                      className="font-medium text-amber_500 w-[auto]"
                      variant="body3"
                    >
                      4
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder6"
                  size="lg"
                >
                  Buy Now
                </Button>
              </Column>
              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 shadow-bs1 w-[23%]">
                <Img
                  src="images/img_pngwing1_3.png"
                  className="pngwingOne3"
                  alt="pngwingOne Three One"
                />
                <Text className="Amazone_One" as="h6" variant="h6">
                  TataCLiQ
                </Text>
                <Text className="boAtAirdopesOne_One" as="h4" variant="h4">
                  APPLE iPad
                </Text>
                <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-end justify-between w-[51%]">
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
                    <Text className="oldPrice_One" variant="body1">
                      $99.99
                    </Text>
                  </Row>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-evenly p-[2px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1_6.svg"
                      className="StarOne"
                      alt="StarOne Three One"
                    />
                    <Text
                      className="font-medium text-amber_500 w-[auto]"
                      variant="body3"
                    >
                      4
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder6"
                  size="lg"
                >
                  Buy Now
                </Button>
              </Column>
            </Row>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default PricingEnginePage;
