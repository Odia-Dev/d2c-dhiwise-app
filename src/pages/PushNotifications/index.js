import React from "react";

import { Column, List, Row, Img, Text, Stack } from "components";

const PushNotificationsPage = () => {
  return (
    <>
      <Column
        className="bg-cover bg-repeat bg-white_A700 font-gilroy items-center justify-end mx-[auto] lg:pt-[507px] xl:pt-[635px] 2xl:pt-[714px] 3xl:pt-[857px] w-[100%]"
        style={{ backgroundImage: "url('images/img_automatedemail.png')" }}
      >
        <Column className="justify-start w-[100%]">
          <Column className="bg-white_A700 items-center justify-start 2xl:ml-[1014px] 3xl:ml-[1217px] lg:ml-[721px] xl:ml-[902px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius13 w-[28%]">
            <List
              className="gap-[0] min-h-[auto] rounded-radius4 w-[100%]"
              orientation="vertical"
            >
              <Column className="items-center justify-start lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius4 w-[100%]">
                <Row className="items-end justify-between rounded-radius4 w-[100%]">
                  <Row className="items-start rounded-radius4 w-[26%]">
                    <Img
                      src="images/img_image3.png"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius4 lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="imageThree"
                    />
                    <Text className="rowappname" variant="body4">
                      Puffy Bakery
                    </Text>
                  </Row>
                  <Text className="rowdistance" variant="body4">
                    3m ago
                  </Text>
                </Row>
                <Row className="items-start justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] py-[2px] rounded-radius4 w-[100%]">
                  <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mt-[3px] w-[86%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Near Puffy Bakery?
                    </Text>
                    <Text
                      className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_400 w-[100%]"
                      variant="body3"
                    >
                      Check out review to see what other people would it here !
                    </Text>
                  </Column>
                  <Img
                    src="images/img_image2.png"
                    className="rounded-radius4 RadioButton"
                    alt="imageTwo"
                  />
                </Row>
              </Column>
              <Column className="items-center justify-start lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius4 w-[100%]">
                <Row className="items-end justify-between rounded-radius4 w-[100%]">
                  <Row className="items-start rounded-radius4 w-[26%]">
                    <Img
                      src="images/img_image3.png"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius4 lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="imageThree One"
                    />
                    <Text className="rowappname" variant="body4">
                      Puffy Bakery
                    </Text>
                  </Row>
                  <Text className="rowdistance" variant="body4">
                    3m ago
                  </Text>
                </Row>
                <Row className="items-start justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] py-[2px] rounded-radius4 w-[100%]">
                  <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mt-[3px] w-[86%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Near Puffy Bakery?
                    </Text>
                    <Text
                      className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_400 w-[100%]"
                      variant="body3"
                    >
                      Check out review to see what other people would it here !
                    </Text>
                  </Column>
                  <Img
                    src="images/img_image2.png"
                    className="rounded-radius4 RadioButton"
                    alt="imageTwo One"
                  />
                </Row>
              </Column>
            </List>
          </Column>
          <footer className="bg-bluegray_900_7f font-poppins lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
            <Row className="items-center justify-between lg:ml-[408px] xl:ml-[511px] 2xl:ml-[575px] 3xl:ml-[690px] lg:mr-[14px] xl:mr-[17px] 2xl:mr-[20px] 3xl:mr-[24px] my-[4px] w-[59%]">
              <Row className="items-center justify-between w-[35%]">
                <Img src="images/img_start.png" className="Start" alt="Start" />
                <Img
                  src="images/img_search.png"
                  className="Start"
                  alt="Search"
                />
                <Img
                  src="images/img_desktop.png"
                  className="Start"
                  alt="Desktop"
                />
                <Img
                  src="images/img_widgets.png"
                  className="Start"
                  alt="Widgets"
                />
                <Column
                  className="bg-cover bg-repeat items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[14%]"
                  style={{
                    backgroundImage: "url('images/img_explorericon.png')",
                  }}
                >
                  <div className="bg-gradient1  lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[53%]"></div>
                </Column>
                <Stack className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]">
                  <Column className="absolute bg-white_A700_0c border border-solid border-white_A700_0c lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] items-center justify-end px-[1px] rounded-radius4 w-[100%]">
                    <div className="bg-white_A700_87 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rounded-radius1 w-[41%]"></div>
                  </Column>
                  <Img
                    src="images/img_placeyouricon.png"
                    className="absolute lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] inset-[0] justify-center m-[auto] lg:w-[17px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="PlaceYourIcon"
                  />
                </Stack>
              </Row>
              <Row className="items-center justify-between pt-[2px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowdown"
                  alt="arrowup"
                />
                <Row className="items-center justify-center w-[43%]">
                  <Img
                    src="images/img_signal.svg"
                    className="arrowdown"
                    alt="signal"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="volume"
                    alt="volume"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="volume"
                    alt="videocamera"
                  />
                </Row>
                <Column className="items-end w-[26%]">
                  <Text className="DateTime" variant="body4">
                    11:55 PM
                  </Text>
                  <Text className="mt-[3px] DateTime" variant="body4">
                    10/6/2021
                  </Text>
                </Column>
              </Row>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default PushNotificationsPage;
