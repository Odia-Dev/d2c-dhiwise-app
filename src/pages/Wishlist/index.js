import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Text,
  SelectBox,
  Line,
  List,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const WishlistPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img src="images/img_group_15.svg" className="Group" alt="Group" />
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
        <Column className="bg-white_A700 items-center justify-end lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:pt-[21px] xl:pt-[26px] 2xl:pt-[30px] 3xl:pt-[36px] lg:px-[21px] xl:px-[26px] 2xl:px-[30px] 3xl:px-[36px] rounded-radius6 shadow-bs w-[78%]">
          <Column className="items-center justify-start 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
                Wishlist
              </Text>
              <SelectBox
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[11%]"
                placeholderClassName="text-bluegray_900"
                name="Frame9870"
                placeholder="Filter & Sort"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_24X24.svg"
                    className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
          </Column>
          <List
            className="font-opensans gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
            orientation="vertical"
          >
            <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="pngwingOne2"
                  alt="pngwingOne"
                />
                <Column className="py-[2px] w-[82%]">
                  <Row className="items-start justify-between mt-[1px] w-[100%]">
                    <Text className="Input1" as="h4" variant="h4">
                      Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      alt="trash"
                    />
                  </Row>
                  <Text className="columnprice" as="h5" variant="h5">
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <Row className="items-end justify-evenly lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Column className="font-opensans justify-start w-[81%]">
                      <Row className="items-center w-[13%]">
                        <Text className="Color" as="h6" variant="h6">
                          Color:
                        </Text>
                        <Text className="Blue1" as="h6" variant="h6">
                          Blue
                        </Text>
                      </Row>
                      <Row className="items-end lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[22%]">
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
                    <Button
                      className="font-gilroy font-semibold mb-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                      shape="RoundedBorder6"
                    >
                      Move to cart
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
            </Column>
            <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="pngwingOne2"
                  alt="pngwingOne One"
                />
                <Column className="py-[2px] w-[82%]">
                  <Row className="items-start justify-between mt-[1px] w-[100%]">
                    <Text className="Input1" as="h4" variant="h4">
                      Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      alt="trash One"
                    />
                  </Row>
                  <Text className="columnprice" as="h5" variant="h5">
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <Row className="items-end justify-evenly lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Column className="font-opensans justify-start w-[81%]">
                      <Row className="items-center w-[13%]">
                        <Text className="Color" as="h6" variant="h6">
                          Color:
                        </Text>
                        <Text className="Blue1" as="h6" variant="h6">
                          Blue
                        </Text>
                      </Row>
                      <Row className="items-end lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[22%]">
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
                    <Button
                      className="font-gilroy font-semibold mb-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                      shape="RoundedBorder6"
                    >
                      Move to cart
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
            </Column>
            <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="pngwingOne2"
                  alt="pngwingOne Two"
                />
                <Column className="py-[2px] w-[82%]">
                  <Row className="items-start justify-between mt-[1px] w-[100%]">
                    <Text className="Input1" as="h4" variant="h4">
                      Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      alt="trash Two"
                    />
                  </Row>
                  <Text className="columnprice" as="h5" variant="h5">
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <Row className="items-end justify-evenly lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Column className="font-opensans justify-start w-[81%]">
                      <Row className="items-center w-[13%]">
                        <Text className="Color" as="h6" variant="h6">
                          Color:
                        </Text>
                        <Text className="Blue1" as="h6" variant="h6">
                          Blue
                        </Text>
                      </Row>
                      <Row className="items-end lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[22%]">
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
                    <Button
                      className="font-gilroy font-semibold mb-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                      shape="RoundedBorder6"
                    >
                      Move to cart
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
            </Column>
            <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="pngwingOne2"
                  alt="pngwingOne Three"
                />
                <Column className="pt-[3px] w-[82%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="Input1" as="h4" variant="h4">
                      Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="trash"
                      alt="trash Three"
                    />
                  </Row>
                  <Text className="columnprice" as="h5" variant="h5">
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <Row className="items-end justify-evenly lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Column className="font-opensans justify-start w-[81%]">
                      <Row className="items-center w-[13%]">
                        <Text className="Color" as="h6" variant="h6">
                          Color:
                        </Text>
                        <Text className="Blue1" as="h6" variant="h6">
                          Blue
                        </Text>
                      </Row>
                      <Row className="items-end lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[22%]">
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
                        <Text className="oldPrice1" variant="body1">
                          <span className="text-colors3 font-opensans font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                            $
                          </span>
                          <span className="text-colors3 font-opensans font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                            55.99
                          </span>
                        </Text>
                      </Row>
                    </Column>
                    <Button
                      className="font-gilroy font-semibold lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                      shape="RoundedBorder6"
                      size="lg"
                    >
                      Move to cart
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
            </Column>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default WishlistPage;
