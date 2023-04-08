import Time from "./scripts/time.js";

const arrowSubmit = document.querySelector(".submit");

const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");

function formatedDate() {
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  
  const year = inputYear.value;
  const month = inputMonth.value -1 ;
  const day = inputDay.value;

  return `${year} ${months[month]} ${day}`;
}

function submit() {
  const date = formatedDate();

  const time = new Time(date);
  year.innerText = `${time.total.year} `;
  month.innerText = `${time.total.month} `;
  day.innerText = `${time.total.day} `;
}

arrowSubmit.addEventListener("click", submit);
