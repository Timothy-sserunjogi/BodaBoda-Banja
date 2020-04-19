const mongoose = require("mongoose");

var salesSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    dob: String,
    emailAd: String,
    super: String,
    dutyDays: String,
    id: String,
    pass: String, 


  });

module.exports = mongoose.model("User", salesSchema);
