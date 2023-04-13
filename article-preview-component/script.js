const buttonShare = document.querySelector("[data-button='share']");
const buttonShareOn = document.querySelector("[data-button='share-on']");
const modalShare = document.querySelector(".modal-share");

function close() {
  modalShare.classList.remove("active");
  buttonShare.classList.remove("active");

  document.removeEventListener("click", close);
}

function toggle() {
  modalShare.classList.add("active");
  buttonShare.classList.add("active");

  setTimeout(() => {
    if (!modalShare.classList.contains("active")) {
      document.removeEventListener("click", close);
    } else {
      document.addEventListener("click", close);
    }
  })
}

buttonShare.addEventListener("click", toggle);
buttonShareOn.addEventListener("click", toggle);
