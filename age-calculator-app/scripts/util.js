export default class Util {
  static validate({ day, month, year }) {

    const inputElementYear = document.querySelector("#year");
    const inputElementMonth = document.querySelector("#month");
    const inputElementDay = document.querySelector("#day");

    const inputElements = document.querySelectorAll("input");
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const todayDate = new Date();

    console.log(todayDate.getMonth())
    const obj = {
      invalidDay() {
        inputElementDay.parentElement.classList.add("error")
        inputElementDay.nextElementSibling.innerText = "Must be a valid day"
        return  validator = false
      },
      invalidMonth() {
        inputElementMonth.parentElement.classList.add("error")
        inputElementMonth.nextElementSibling.innerText = "Must be a valid month"
        return  validator = false
      },
      invalidYear() {
        inputElementYear.parentElement.classList.add("error")
        inputElementYear.nextElementSibling.innerText = "Must be a valid year."
        return  validator = false
      },
      fieldRequired(input) {
        input.parentElement.classList.add("error");
        const error = input.nextElementSibling;
        error.innerText= "This field is required";
        return validator = false
      },
      removeError(input) {
        input.parentElement.classList.remove("error");
        const error = input.nextElementSibling;
        error.innerText= "";
        return  validator = true
      }
    }

    month--
    let validator = true;

    inputElements.forEach(input => {
      if(!input.value) {
        obj.fieldRequired(input);
      } else {
        obj.removeError(input);
      }
    });
    
    if (validator) {
      if (day < 1 || day > 31) {
        obj.invalidDay();
      }
  
      if (month < 0 || month > 11) {
        obj.invalidMonth();
      }

      if (year < 1900 || year > todayDate.getFullYear()) {
        obj.invalidDay();
        obj.invalidMonth();
        obj.invalidYear();
      }
  
      if (day > monthDays[month]) {
        obj.invalidDay();
      }

      if (day > todayDate.getDate() && month == todayDate.getMonth() && year > todayDate.getFullYear()) {
        obj.invalidDay();
      }

      if (month > todayDate.getMonth() && year == todayDate.getFullYear()) {
        obj.invalidDay();
        obj.invalidMonth();
      }
    }
  
    if (validator) {
        inputElements.forEach(input => {
        obj.removeError(input);
      });
    }

    return validator;
  }
}