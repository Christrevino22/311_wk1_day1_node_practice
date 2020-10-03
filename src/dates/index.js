// import moment here; use this package in each function

const moment = require("moment")

const today = () => {
  // write code for dates.today
  let today = moment().format('dddd');  

  return today;
  
}

const calendar = () => {
  // write code for dates.calendar
  let fullDate = moment().format("MMMM Do, YYYY");
  return fullDate;

}

const currentTime = () => {
  // write code for dates.currentTime
let theTime = moment().format('hh:mm:ss A');
return theTime;
}

module.exports = {
  today,
  calendar,
  currentTime
}