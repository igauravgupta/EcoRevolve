import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "component/VerComponent";

const SigninResetPasswordSuccessfulPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-center justify-center mx-auto md:px-10 sm:px-5 px-[446px] py-[90px] w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start px-12 md:px-5 py-[59px] rounded-[20px] shadow-bs w-[548px] sm:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Img
                  className="h-[180px] w-[180px]"
                  src="images/img_completed1.svg"
                  alt="completedOne"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                    size="txtInterBold24"
                  >
                    Password has been recovered
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-center w-full">
              <Button
                   className="common-pointer cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-m text-black border border-orange-300 bg-orange-100 hover:bg-orange-200 w-full"
                   onClick={() => navigate("/signin")}
                  >
                    Back to Sign-In
                </Button>
                <div
                  className="common-pointer flex flex-row gap-[7px] items-center justify-start w-auto"
                  onClick={() => navigate("/signindefault")}
                >
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowleft_indigo_400.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="common-pointer text-center text-indigo-400 text-sm w-auto"
                    size="txtInterMedium14Indigo400"
                    onClick={() => navigate("/signin")}
                  >
                    Sign in
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninResetPasswordSuccessfulPage;
