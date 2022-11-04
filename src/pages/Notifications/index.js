import React from "react";

import { Column, Row, Text, Button, List, Img, Stack } from "components";

const NotificationsPage = () => {
  return (
    <>
      <Column
        className="bg-cover bg-repeat bg-white_A700 font-gilroy items-center justify-end mx-[auto] lg:pt-[137px] xl:pt-[171px] 2xl:pt-[193px] 3xl:pt-[231px] w-[100%]"
        style={{ backgroundImage: "url('images/img_automatedemail.png')" }}
      >
        <Column className="justify-start w-[100%]">
          <Column className="bg-white_A700 items-center justify-start 3xl:ml-[1174px] lg:ml-[695px] xl:ml-[870px] 2xl:ml-[978px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[30%]">
            <Row className="items-center rounded-radius5 w-[94%]">
              <Text
                className="font-normal not-italic text-black_900 w-[auto]"
                variant="body2"
              >
                Notifications
              </Text>
              <Button
                className="2xl:ml-[109px] 3xl:ml-[130px] items-center justify-center lg:ml-[77px] text-center w-[23%] xl:ml-[96px]"
                shape="RoundedBorder6"
                size="md"
                variant="Outline"
              >
                <div className="bg-white_A700 font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center">
                  <div className="2xl:ml-[109px] 3xl:ml-[130px] items-center justify-center lg:ml-[77px] text-center w-[23%] xl:ml-[96px]">
                    Settings
                  </div>
                </div>
              </Button>
              <Button
                className="2xl:ml-[14px] 3xl:ml-[16px] items-center justify-center lg:ml-[9px] text-center w-[23%] xl:ml-[12px]"
                shape="RoundedBorder6"
                size="md"
                variant="Outline"
              >
                <div className="bg-white_A700 font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center">
                  <div className="2xl:ml-[14px] 3xl:ml-[16px] items-center justify-center lg:ml-[9px] text-center w-[23%] xl:ml-[12px]">
                    Clear All
                  </div>
                </div>
              </Button>
            </Row>
            <List
              className="gap-[0] lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]"
              orientation="vertical"
            >
              <Column className="justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                <Column className="items-center justify-start xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mr-[9px] w-[97%]">
                  <Row className="items-center justify-between w-[98%]">
                    <Row className="items-start w-[34%]">
                      <Img
                        src="images/img_appicon.png"
                        className="AppIcon"
                        alt="AppIcon"
                      />
                      <Text className="rowappicon" variant="body1">
                        One Outlook
                      </Text>
                    </Row>
                    <Row className="items-start justify-between w-[25%]">
                      <Text className="rowmeeting" variant="body2">
                        Meeting
                      </Text>
                      <Img
                        src="images/img_appicon_28X28.png"
                        className="AppIcon_One"
                        alt="AppIcon One"
                      />
                    </Row>
                  </Row>
                  <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                    </Text>
                    <Text className="Clicktoseemo" variant="body2">
                      Click to see more details
                    </Text>
                  </Column>
                </Column>
                <Text className="columntime_one" variant="body2">
                  6:00 PM
                </Text>
              </Column>
              <Column className="justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                <Column className="items-center justify-start xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mr-[9px] w-[97%]">
                  <Row className="items-center justify-between w-[98%]">
                    <Row className="items-start w-[34%]">
                      <Img
                        src="images/img_appicon.png"
                        className="AppIcon"
                        alt="AppIcon One"
                      />
                      <Text className="rowappicon" variant="body1">
                        One Outlook
                      </Text>
                    </Row>
                    <Row className="items-start justify-between w-[25%]">
                      <Text className="rowmeeting" variant="body2">
                        Meeting
                      </Text>
                      <Img
                        src="images/img_appicon_28X28.png"
                        className="AppIcon_One"
                        alt="AppIcon One One"
                      />
                    </Row>
                  </Row>
                  <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                    </Text>
                    <Text className="Clicktoseemo" variant="body2">
                      Click to see more details
                    </Text>
                  </Column>
                </Column>
                <Text className="columntime_one" variant="body2">
                  6:00 PM
                </Text>
              </Column>
              <Column className="justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                <Column className="items-center justify-start xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mr-[9px] w-[97%]">
                  <Row className="items-center justify-between w-[98%]">
                    <Row className="items-start w-[34%]">
                      <Img
                        src="images/img_appicon.png"
                        className="AppIcon"
                        alt="AppIcon Two"
                      />
                      <Text className="rowappicon" variant="body1">
                        One Outlook
                      </Text>
                    </Row>
                    <Row className="items-start justify-between w-[25%]">
                      <Text className="rowmeeting" variant="body2">
                        Meeting
                      </Text>
                      <Img
                        src="images/img_appicon_28X28.png"
                        className="AppIcon_One"
                        alt="AppIcon One Two"
                      />
                    </Row>
                  </Row>
                  <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                    </Text>
                    <Text className="Clicktoseemo" variant="body2">
                      Click to see more details
                    </Text>
                  </Column>
                </Column>
                <Text className="columntime_one" variant="body2">
                  6:00 PM
                </Text>
              </Column>
              <Column className="justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                <Column className="items-center justify-start xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mr-[9px] w-[97%]">
                  <Row className="items-center justify-between w-[98%]">
                    <Row className="items-start w-[34%]">
                      <Img
                        src="images/img_appicon.png"
                        className="AppIcon"
                        alt="AppIcon Three"
                      />
                      <Text className="rowappicon" variant="body1">
                        One Outlook
                      </Text>
                    </Row>
                    <Row className="items-start justify-between w-[25%]">
                      <Text className="rowmeeting" variant="body2">
                        Meeting
                      </Text>
                      <Img
                        src="images/img_appicon_28X28.png"
                        className="AppIcon_One"
                        alt="AppIcon One Three"
                      />
                    </Row>
                  </Row>
                  <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                    </Text>
                    <Text className="Clicktoseemo" variant="body2">
                      Click to see more details
                    </Text>
                  </Column>
                </Column>
                <Text className="columntime_one" variant="body2">
                  6:00 PM
                </Text>
              </Column>
              <Column className="justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                <Column className="items-center justify-start xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mr-[9px] w-[97%]">
                  <Row className="items-center justify-between w-[98%]">
                    <Row className="items-start w-[34%]">
                      <Img
                        src="images/img_appicon.png"
                        className="AppIcon"
                        alt="AppIcon Four"
                      />
                      <Text className="rowappicon" variant="body1">
                        One Outlook
                      </Text>
                    </Row>
                    <Row className="items-start justify-between w-[25%]">
                      <Text className="rowmeeting" variant="body2">
                        Meeting
                      </Text>
                      <Img
                        src="images/img_appicon_28X28.png"
                        className="AppIcon_One"
                        alt="AppIcon One Four"
                      />
                    </Row>
                  </Row>
                  <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                    </Text>
                    <Text className="Clicktoseemo" variant="body2">
                      Click to see more details
                    </Text>
                  </Column>
                </Column>
                <Text className="columntime_one" variant="body2">
                  6:00 PM
                </Text>
              </Column>
              <Column className="justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                <Column className="items-center justify-start xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mr-[9px] w-[97%]">
                  <Row className="items-center justify-between w-[98%]">
                    <Row className="items-start w-[34%]">
                      <Img
                        src="images/img_appicon.png"
                        className="AppIcon"
                        alt="AppIcon Five"
                      />
                      <Text className="rowappicon" variant="body1">
                        One Outlook
                      </Text>
                    </Row>
                    <Row className="items-start justify-between w-[25%]">
                      <Text className="rowmeeting" variant="body2">
                        Meeting
                      </Text>
                      <Img
                        src="images/img_appicon_28X28.png"
                        className="AppIcon_One"
                        alt="AppIcon One Five"
                      />
                    </Row>
                  </Row>
                  <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                    </Text>
                    <Text className="Clicktoseemo" variant="body2">
                      Click to see more details
                    </Text>
                  </Column>
                </Column>
                <Text className="columntime_one" variant="body2">
                  6:00 PM
                </Text>
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

export default NotificationsPage;
