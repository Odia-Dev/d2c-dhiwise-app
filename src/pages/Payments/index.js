import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Text,
  Stack,
  SelectBox,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const PaymentsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img src="images/img_group_5.svg" className="Group" alt="Group" />
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
        <Stack className="2xl:h-[1012px] 3xl:h-[1214px] lg:h-[719px] xl:h-[900px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[78%]">
          <div className="absolute bg-white_A700 bottom-[6%] lg:h-[505px] xl:h-[631px] 2xl:h-[710px] 3xl:h-[852px] inset-x-[0] mx-[auto] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[95%]"></div>
          <Column className="absolute bg-white_A700 items-center justify-start lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius6 shadow-bs w-[100%]">
            <Column className="items-center justify-start xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[15px] lg:pt-[9px] w-[99%]">
              <Row className="items-start justify-between pt-[1px] w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Payments
                </Text>
                <SelectBox
                  className="font-medium mt-[1px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[11%]"
                  placeholderClassName="text-gray_900"
                  name="Frame9870"
                  placeholder="Filter & Sort"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
            </Column>
            <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[99%]">
              <Row className="items-start w-[27%]">
                <Text className="Input1" as="h6" variant="h6">
                  Available Balance :
                </Text>
                <Text
                  className="font-bold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] text-blue_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  $2,145.00
                </Text>
              </Row>
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                <Row className="bg-blue_50 items-center justify-between xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]">
                  <Text
                    className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] Color"
                    as="h6"
                    variant="h6"
                  >
                    Recent Transactions
                  </Text>
                  <Text
                    className="font-bold 2xl:mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] my-[1px] text-blue_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    View All
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-center py-[2px] w-[96%]">
                      <Column className="mt-[3px] w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text className="time2" variant="body3">
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-red_700 w-[auto]"
                        variant="body1"
                      >
                        -$20.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright"
                        alt="arrowright"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-center py-[2px] w-[96%]">
                      <Column className="mt-[3px] w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text className="time2" variant="body3">
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-green_600 w-[auto]"
                        variant="body1"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright"
                        alt="arrowright One"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-center py-[2px] w-[96%]">
                      <Column className="mt-[3px] w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text className="time2" variant="body3">
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-green_600 w-[auto]"
                        variant="body1"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright"
                        alt="arrowright Two"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-center py-[2px] w-[96%]">
                      <Column className="mt-[3px] w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text className="time2" variant="body3">
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-green_600 w-[auto]"
                        variant="body1"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright"
                        alt="arrowright Three"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-center py-[2px] w-[96%]">
                      <Column className="mt-[3px] w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text className="time2" variant="body3">
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-green_600 w-[auto]"
                        variant="body1"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright"
                        alt="arrowright Four"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-center py-[2px] w-[96%]">
                      <Column className="mt-[3px] w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text className="time2" variant="body3">
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-green_600 w-[auto]"
                        variant="body1"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright"
                        alt="arrowright Five"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-center py-[2px] w-[96%]">
                      <Column className="mt-[3px] w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text className="time2" variant="body3">
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-green_600 w-[auto]"
                        variant="body1"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright"
                        alt="arrowright Six"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Row className="items-start lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[96%]">
                      <Column className="justify-start w-[90%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="font-normal lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-green_600 w-[auto]"
                        variant="body1"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] arrowright"
                        alt="arrowright Seven"
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                </List>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default PaymentsPage;
