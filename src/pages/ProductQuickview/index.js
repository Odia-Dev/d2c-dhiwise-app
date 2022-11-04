import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Text,
  Button,
  SelectBox,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ProductQuickviewPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img src="images/img_group_10.svg" className="Group" alt="Group" />
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
        <Row className="items-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[88%]">
          <Column className="justify-start w-[51%]">
            <Row className="items-start w-[96%]">
              <Column className="items-center justify-start rounded-radius6 w-[16%]">
                <Img
                  src="images/img_rectangle1213.png"
                  className="3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] rounded-radius6 3xl:w-[115px] lg:w-[68px] xl:w-[85px] 2xl:w-[96px]"
                  alt="Rectangle1213"
                />
                <Img
                  src="images/img_rectangle1214.png"
                  className="Rectangle1214"
                  alt="Rectangle1214"
                />
                <Img
                  src="images/img_rectangle1215.png"
                  className="Rectangle1214"
                  alt="Rectangle1215"
                />
                <Img
                  src="images/img_rectangle1216.png"
                  className="Rectangle1214"
                  alt="Rectangle1216"
                />
                <Img
                  src="images/img_rectangle1217.png"
                  className="Rectangle1214"
                  alt="Rectangle1217"
                />
              </Column>
              <Img
                src="images/img_rectangle163.png"
                className="lg:h-[365px] xl:h-[456px] 2xl:h-[513px] 3xl:h-[615px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius4 lg:w-[364px] xl:w-[455px] 2xl:w-[512px] 3xl:w-[614px]"
                alt="Rectangle163"
              />
            </Row>
            <Row className="items-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] rounded-radius6 w-[96%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
                shape="RoundedBorder6"
                variant="OutlineBlueA700"
              >
                Add to Cart
              </Button>
              <Button
                className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
                shape="RoundedBorder6"
              >
                Buy Now
              </Button>
            </Row>
          </Column>
          <Column className="justify-start pr-[4px] py-[4px] w-[49%]">
            <Text
              className="font-gilroy font-medium lg:leading-[22px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] mt-[1px] text-bluegray_900 w-[84%]"
              as="h4"
              variant="h4"
            >
              OnePlus 10R 5G (Sierra Black, 12GB RAM, 256GB Storage, 150W
              SuperVOOC)
            </Text>
            <Row className="font-gilroy items-start justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Row className="items-start justify-between w-[46%]">
                <Img
                  src="images/img_star_24X24.svg"
                  className="star"
                  alt="star"
                />
                <Row className="items-start mt-[3px] w-[89%]">
                  <Text
                    className="font-medium text-black_902 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    4.3/5
                  </Text>
                  <Text
                    className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] Discount"
                    as="h6"
                    variant="h6"
                  >
                    (112 Ratings l 94 Reviews)
                  </Text>
                </Row>
              </Row>
              <Img
                src="images/img_share.svg"
                className="arrowdown"
                alt="share"
              />
            </Row>
            <Text
              className="font-hairline font-urbanist italic lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-black_902 w-[auto]"
              as="h4"
              variant="h4"
            >
              <span className="text-colors2 font-gilroy font-semibold lg:text-[19px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px]">
                $499
              </span>
              <span className="text-colors2 font-gilroy lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                {" "}
              </span>
              <span className="text-colors3 font-gilroy font-semibold line-through lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                $599
              </span>
            </Text>
            <Column className="font-gilroy justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] pt-[1px] w-[28%]">
              <SelectBox
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_902 w-[52%]"
                placeholderClassName="text-black_902"
                name="Group9970"
                placeholder="Shades"
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
              <Img
                src="images/img_group9981.svg"
                className="lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                alt="Group9981"
              />
            </Column>
            <List
              className="font-gilroy lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[68%]"
              orientation="horizontal"
            >
              <Column className="items-center justify-start lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] rounded-radius12 w-[100%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[62px] xl:h-[78px] 2xl:h-[88px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder12"
                  size="lgIcn"
                  variant="icbOutlineBluegray101"
                >
                  <Img
                    src="images/img_checkmark_87X87.svg"
                    className="flex items-center justify-center lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px]"
                    alt="checkmark"
                  />
                </Button>
                <Text
                  className="font-medium lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-center text-gray_800 w-[72%]"
                  variant="body3"
                >
                  100% <br />
                  Authentic
                </Text>
              </Column>
              <Column className="items-center justify-start lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] rounded-radius12 w-[100%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[62px] xl:h-[78px] 2xl:h-[88px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder12"
                  size="xlIcn"
                  variant="icbOutlineBluegray101"
                >
                  <Img
                    src="images/img_reply.svg"
                    className="flex items-center justify-center lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px]"
                    alt="reply"
                  />
                </Button>
                <Text
                  className="font-medium lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-center text-gray_800 w-[56%]"
                  variant="body3"
                >
                  15 days
                  <br />
                  Returns
                </Text>
              </Column>
              <Column className="items-center justify-start lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] rounded-radius12 w-[100%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[62px] xl:h-[78px] 2xl:h-[88px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder12"
                  size="2xlIcn"
                  variant="icbOutlineBluegray101"
                >
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center"
                    alt="Group One"
                  />
                </Button>
                <Text
                  className="font-medium lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-center text-gray_800 w-[69%]"
                  variant="body3"
                >
                  COD
                  <br />
                  Available
                </Text>
              </Column>
              <Column className="items-center justify-start pb-[3px] rounded-radius12 w-[100%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[62px] xl:h-[78px] 2xl:h-[88px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder12"
                  size="xlIcn"
                  variant="icbOutlineBluegray101"
                >
                  <Img
                    src="images/img_car_87X87.svg"
                    className="flex items-center justify-center"
                    alt="car"
                  />
                </Button>
                <Text
                  className="font-medium lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-center text-gray_800 w-[60%]"
                  variant="body3"
                >
                  Free
                  <br />
                  Delivery
                </Text>
              </Column>
            </List>
            <Text
              className="font-gilroy font-medium lg:leading-[19px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] 3xl:mb-[111px] lg:mb-[66px] xl:mb-[82px] 2xl:mb-[93px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] text-black_900 w-[100%]"
              variant="body1"
            >
              <span className="text-colors4 font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                About this item
              </span>
              <span className="text-colors4 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                <br />
                <br />
              </span>
              <span className="text-colors3 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera
                with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471
                <br />
                <br />
                Camera Features: Nightscape2.0, Super Macro, UltraShot HDR,
                Smart Scene Recognition, Portrait mode, Pro mode, Panorama,
                Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video
                HDR, Video Portrait Timelapse, Hyperlapse Mode
                <br />
                <br />
                Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X
                1080 pixels 394 ppi; Aspect Ratio: 20:9
                <br />
                <br />
                Display Features: Hyper Touch Mode, Reading Mode, Night Mode,
                Eye Comfort Mode, Auto brightness
                <br />
                <br />
                Operating System: OxygenOS based on Android 12
                <br />
                <br />
                Processor: MTK D8100 Max
                <br />
                <br />
                Battery & Charging: 5000 mAh with 80W SuperVOOC
                <br />
                <br />
                In-Display Fingerprint Sensor
                <br />
                <br />
                Special Features: Hyperboost gaming engine
                <br />
                <br />
                Alexa Hands-Free capable: Download the Alexa app to use Alexa
                hands-free. Play music, make calls, hear news, open apps,
                navigate, and more, all using just your voice, while on-the-go.
                <br />
                <br />
                Show Less
              </span>
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ProductQuickviewPage;
