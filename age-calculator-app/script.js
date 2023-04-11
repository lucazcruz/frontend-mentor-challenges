import Time from "./scripts/time.js";
import Util from "./scripts/util.js";

const form = document.querySelector("form");

const yearElement = document.querySelector(".year");
const monthElement = document.querySelector(".month");
const dayElement = document.querySelector(".day");

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  const validator = Util.validate(formProps);
  if (!validator) return;

  const dateObject = new Time(formProps).obj;
  yearElement.innerText = `${dateObject.year} `;
  monthElement.innerText = `${dateObject.month} `;
  dayElement.innerText = `${dateObject.day} `;
}

form.addEventListener("submit", handleSubmit);
