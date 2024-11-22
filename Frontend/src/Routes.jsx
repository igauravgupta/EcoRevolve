import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "pages/Home";
import NotFound from "pages/NotFound";

const Homepage = React.lazy(() => import("pages/Homepage"));
const Homepage2 = React.lazy(() => import("pages/Homepage2"));
const SellWastePage = React.lazy(() => import("pages/SellWaste"));
const RequirementPage = React.lazy(() => import("pages/Requirement"));
const SmartContactPage = React.lazy(() => import("pages/SmartContact"));
const SigninDefaultPage = React.lazy(() => import("pages/SigninDefault"));
const SigninResetPage = React.lazy(() => import("pages/SigninResetPassword"));
const SigninResetSuccessPage = React.lazy(() =>
  import("pages/SigninResetPasswordSuccessful")
);
const SignupPage = React.lazy(() => import("pages/SignupDefault"));
const SignupVerifiedPage = React.lazy(() => import("pages/SignupDefault"));
const SignupVerifiedPage1 = React.lazy(() =>
  import("pages/SignupVerificationOne")
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" exact element={<Homepage />} />
          <Route path="/user" element={<Homepage2 />} />
          <Route path="/sellwaste" element={<SellWastePage />} />
          <Route path="/requirement" element={<RequirementPage />} />
          <Route path="/smartcontact" element={<SmartContactPage />} />
          <Route path="/signin" element={<SigninDefaultPage />} />
          <Route path="/signinresetpassword" element={<SigninResetPage />} />
          <Route
            path="/signinresetpasswordsuccessful"
            element={<SigninResetSuccessPage />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signupverification" element={<SignupVerifiedPage />} />
          <Route
            path="/signupverificationone"
            element={<SignupVerifiedPage1 />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
