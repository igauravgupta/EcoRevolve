import React from "react";

import { Img, Text } from "component/HomeComponent";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center mb-6 ml-[161px] mr-[164px] mt-[35px] w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col gap-[46px] items-start justify-start mb-[30px] w-[51%] md:w-full">
              <div className="flex flex-row gap-4 items-end justify-start ml-0.5 md:ml-[0] w-[21%] md:w-full">
                {/*  */}
                <Text
                  className="mb-[5px] mt-2 text-base text-colors"
                  size="txtCinzelDecorativeBold16Cyan300"
                >
                  Eco-Resolve
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pb-[3px] w-[53%] md:w-full">
                <Text
                  className="leading-[26.00px] ml-0.5 md:ml-[0] text-base text-white-A700 w-full"
                  size="txtChivoRegular16"
                >
                  Empower Your Business, Sustainable Growth with E-Waste Solutions
                </Text>
                <div className="flex flex-row gap-2.5 items-end justify-start mt-[29px] w-[78%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Text
                    className="mb-0.5 mt-[5px] text-base text-white-A700"
                    size="txtChivoRegular16"
                  >
                    hello@dhuhacreative.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-4 w-[77%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                  <Text
                    className="mt-[3px] text-base text-white-A700"
                    size="txtChivoRegular16"
                  >
                    Join our slack community
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-evenly md:mt-0 mt-[53px] py-0.5 w-1/2 md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-white-A700"
                  size="txtChivoBold16WhiteA700"
                >
                  Product
                </Text>
                <Text
                  className="mt-6 text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Landingpages
                </Text>
                <Text
                  className="mt-[22px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Pricing
                </Text>
                <Text
                  className="mt-5 text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Benefits
                </Text>
                <Text
                  className="mt-[22px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Features
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:mt-0 my-0.5">
                <Text
                  className="text-base text-white-A700"
                  size="txtChivoBold16WhiteA700"
                >
                  Company
                </Text>
                <Text
                  className="mt-[18px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  About
                </Text>
                <Text
                  className="mt-[23px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Privacy Policy
                </Text>
                <Text
                  className="mt-5 text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Terms & Conditions
                </Text>
                <Text
                  className="mt-[22px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Partners
                </Text>
                <Text
                  className="mt-[21px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Contact
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-white-A700"
                  size="txtChivoBold16WhiteA700"
                >
                  Resources
                </Text>
                <Text
                  className="mt-5 text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Guides and resources
                </Text>
                <Text
                  className="mt-[23px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Blog
                </Text>
                <Text
                  className="mt-5 text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Tools
                </Text>
                <Text
                  className="mt-[23px] text-base text-bluegray-100"
                  size="txtChivoRegular16Bluegray100"
                >
                  Support
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
            <Text
              className="md:mt-0 mt-2 text-sm text-white-A700_a2"
              size="txtChivoRegular14"
            >
               All Right Reserved
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[752px] w-6"
              src="images/img_bxbxlinstagra.svg"
              alt="bxbxlinstagra"
            />
            <Img
              className="h-6 ml-8 md:ml-[0] w-6"
              src="images/img_twitter.svg"
              alt="twitter"
            />
            <Img
              className="h-6 ml-8 md:ml-[0] w-6"
              src="images/img_linkedin.svg"
              alt="linkedin"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
