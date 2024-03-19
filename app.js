const express = require("express");
const app = express();
const path = require("path"); 
const bodyParser = require("body-parser");

const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/userlogin", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "loginUser.html"));
});

app.get("/caretakerlogin", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "loginCareTaker.html"));
});

app.get("/caretakersignup", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "signupCareTaker.html"));
});

app.get("/usersignup", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "signupUser.html"));
});

app.get("/userHome", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "userpage.html"));
});

app.get("/careTakeHome", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "caretakerpage.html"));
});

app.get("/hireCaretaker", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "customerDetails.html"));
});

app.get("/careTakerDetails", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "babySitterDetails.html"));
});

app.get("/bookingAccepted", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "careTakerAcceptedBooking.html"));
});

app.get("/bookingRejected", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "rejectionReason.html"));
});

app.get("/rejectedReason", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "respondedSuccessfully.html"));
});

app.get("/appliedForCertification", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "applicationSuccess.html"));
});

app.listen(port, function () {
    console.log("App is Running on Port",port);
});