const express = require("express");
const { sendMail } = require("../function/mail/sendMail");

const sendMailRouter = express.Router();

sendMailRouter.post("/", sendMail);

module.exports = sendMailRouter;
