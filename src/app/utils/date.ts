export default function getTodayDate() {
  //return string
  var returnDate = '';
  //get datetime now
  var today = new Date();
  //split
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //because January is 0!
  var yyyy = today.getFullYear();
  returnDate += yyyy;

  if (mm < 10) {
    returnDate += `-0${mm}`;
  } else {
    returnDate += `-${mm}`;
  }

  //Interpolation date
  if (dd < 10) {
    returnDate += `-0${dd}`;
  } else {
    returnDate += `-${dd}`;
  }

  return returnDate;
}
