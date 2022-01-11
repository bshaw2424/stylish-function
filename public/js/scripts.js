const messageDeleteButtons = document.querySelectorAll(
  ".message-delete-button .material-icons",
);
const collection_items = document.querySelectorAll(".collection-item");
// messages
const message_counter = document.querySelector("#message-checkbox-counter");
const messageCheckBoxes = document.querySelectorAll(".message-checkbox");
const checkAllButton = document.querySelector("#delete-all");

// IIFE function calls
(() => {
  collectionsToShowAndHideDeleteIcon();
  checkboxValueTrueOrFalseStatus();
})();

function collectionsToShowAndHideDeleteIcon() {
  for (let i = 0; i < collection_items.length; i++) {
    let collections = collection_items[i];
    let deleteButtons = messageDeleteButtons[i];
    collections.addEventListener("mouseenter", () => {
      deleteButtons.style.visibility = "visible";
    });

    collections.addEventListener("mouseleave", () => {
      deleteButtons.style.visibility = "hidden";
    });
  }
}

function checkboxValueTrueOrFalseStatus() {
  let counter = 0;
  // get individual checkboxes
  for (checkboxes of messageCheckBoxes) {
    checkboxes.addEventListener("change", e => {
      if (e.target.checked) {
        message_counter.innerText = ++counter;
      } else {
        message_counter.innerText = --counter;
        if (counter === 0) {
          message_counter.innerText = "-";
        }
      }
    });
  }
}

function checkboxCounter() {
  let count = 0;
  checkAllButton.addEventListener("change", () => {
    for (let checkboxes of messageCheckBoxes) {
      if (checkAllButton.checked) {
        checkboxes.checked = true;
        message_counter.innerText = messageCheckBoxes.length;
      } else {
        checkboxes.checked = false;
        message_counter.innerText = "-";
      }
    }
  });
  checkboxValueTrueOrFalseStatus();
}
checkboxCounter();
