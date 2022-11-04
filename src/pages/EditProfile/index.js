import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Stack,
  Button,
  Input,
  Datepicker,
} from "components";

const EditProfilePage = () => {
  return (
    <>
      <Column className="bg-gray_51 font-gilroy items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[98%]">
          <aside className="w-[21%]">
            <div className="">
              <Column className="bg-gray_52 justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
                <Img
                  src="images/img_group10392_17.svg"
                  className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] mx-[auto] w-[64%]"
                  alt="Group10392"
                />
                <Column className="justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] py-[1px] w-[60%]">
                  <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[95%]">
                    <Row className="items-start w-[80%]">
                      <Img
                        src="images/img_save.svg"
                        className="arrowdown"
                        alt="save"
                      />
                      <Text className="rowsave" variant="body1">
                        Dashboard
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[73%]">
                      <Img
                        src="images/img_dollaraltsoli.svg"
                        className="arrowdown"
                        alt="dollaraltSoli"
                      />
                      <Text className="rowdollaraltsoli" variant="body1">
                        Payments
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                      <Img
                        src="images/img_walletoutline.svg"
                        className="arrowdown"
                        alt="walletOutline"
                      />
                      <Text className="rowsave" variant="body1">
                        Wallet & Cards
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[88%]">
                      <Img
                        src="images/img_car.svg"
                        className="arrowdown"
                        alt="car"
                      />
                      <Text className="rowsave" variant="body1">
                        Transactions
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[70%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="arrowdown"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] text-bluegray_700 w-[auto]"
                        variant="body1"
                      >
                        Analytics
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[73%]">
                      <Img
                        src="images/img_menu.svg"
                        className="arrowdown"
                        alt="menu"
                      />
                      <Text className="rowdollaraltsoli" variant="body1">
                        Messages
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[67%]">
                    <Line className="bg-blue_A700 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                    <Img
                      src="images/img_settings.svg"
                      className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] arrowdown"
                      alt="settings"
                    />
                    <Text
                      className="font-semibold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-blue_A700 w-[auto]"
                      variant="body1"
                    >
                      Settings
                    </Text>
                  </Row>
                </Column>
                <Row className="font-opensans items-end lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[339px] xl:mt-[425px] 2xl:mt-[478px] 3xl:mt-[573px] w-[26%]">
                  <Img
                    src="images/img_question.svg"
                    className="arrowdown"
                    alt="question"
                  />
                  <Text
                    className="font-semibold mb-[1px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_700 w-[auto]"
                    variant="body1"
                  >
                    Help
                  </Text>
                </Row>
              </Column>
            </div>
          </aside>
          <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[77%]">
            <header className="w-[100%]">
              <Row className="items-center w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Settings
                </Text>
                <Stack className="bg-white_A700 border border-bluegray_100 border-solid font-opensans lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[582px] xl:ml-[728px] 2xl:ml-[819px] 3xl:ml-[983px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
                  <Img
                    src="images/img_notification.svg"
                    className="absolute inset-[0] justify-center m-[auto] AppIcon"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red_700 border border-bluegray_50 border-solid flex font-semibold items-center lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                    variant="body4"
                  >
                    2
                  </Text>
                </Stack>
                <Column className="border border-blue_A701 border-solid lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                    alt="ProfileImgLarg"
                  />
                </Column>
              </Row>
            </header>
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Stack className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] w-[100%]">
                <Line className="absolute bg-gray_300 bottom-[0] h-[1px] w-[100%]" />
                <Row className="absolute bottom-[0] items-start left-[3%] w-[69%]">
                  <Column className="items-center justify-start mt-[1px] w-[17%]">
                    <Text
                      className="font-medium text-blue_A700 w-[auto]"
                      variant="body1"
                    >
                      My Profile
                    </Text>
                    <Line className="bg-blue_A700 h-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[73%]" />
                  </Column>
                  <Text className="Discount" variant="body1">
                    Notifications
                  </Text>
                  <Text
                    className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] Discount"
                    variant="body1"
                  >
                    Language
                  </Text>
                  <Text
                    className="font-medium lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] mt-[2px] text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    General settings
                  </Text>
                  <Text
                    className="font-medium lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Theme
                  </Text>
                  <Text
                    className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] Discount"
                    variant="body1"
                  >
                    Help and feedback
                  </Text>
                </Row>
              </Stack>
              <Column className="items-center justify-start lg:mt-[41px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[49%]">
                <Stack className="3xl:h-[112px] lg:h-[67px] xl:h-[83px] 2xl:h-[94px] 3xl:w-[111px] lg:w-[66px] xl:w-[82px] 2xl:w-[93px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="absolute 3xl:h-[112px] lg:h-[67px] xl:h-[83px] 2xl:h-[94px] rounded-radius50 w-[100%]"
                    alt="ProfileImgLarg One"
                  />
                  <Button
                    className="absolute bottom-[1%] flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center right-[1%] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                    shape="icbRoundedBorder12"
                    size="smIcn"
                    variant="icbOutlineGray53"
                  >
                    <Img
                      src="images/img_edit.svg"
                      className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                      alt="edit"
                    />
                  </Button>
                </Stack>
                <Column className="items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
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
                  <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Date of Birth
                    </Text>
                    <Datepicker
                      className="placeholder:bg-transparent bg-transparent font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                      name="Group10198 Two"
                      placeholder="08/09/1995"
                    ></Datepicker>
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
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EditProfilePage;
