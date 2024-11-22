const express = require("express");
const route = new express.Router();
const {registration}= require("../controllers/userRegistrationController")


// registration 
route.post("/register",authorization,registration);

//verification
route.get("/verify",getUserVerified);

//login & logout
route.get("/login",authorization,letUserLogined);
route.get("/logout",deleteCookies);

//enquiry
route.get("/enquiry",authorization,sentEnquiryMail);

// post requirement
route.post("/postReq",authorization,savePostReq);

// sell waste
route.post("/sellWaste",authorization,saaveWasteDetails);




module.exports = route;