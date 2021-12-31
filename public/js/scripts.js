const messageCheckBox = document.querySelectorAll(".collection-item");
const messagebox = document.querySelectorAll(".message-checkbox");
const delete_all_checkbox = document.getElementById("delete-all");
let message_counter = document.getElementById("message-checkbox-counter");
const delete_message = document.getElementById("delete-all-icon");
const contactSendButton = document.getElementById("contact-send-button");
const contactHeader = document.getElementById("contact-header");
const message_search = document.getElementById("message-search");
const mobile_nav_links = document.querySelector(".admin-mobile-nav_links");
const hamburger_menu = document.querySelector(".hamburger");
const search_filter = document.querySelector("#filter-search");
const cards = document.querySelectorAll(".card");
const title = document.querySelectorAll(".card-content .card-title");

hamburger_menu.addEventListener("click", hamburgerMenuToggleButton);

function hamburgerMenuToggleButton() {
  mobile_nav_links.classList.toggle("hidden");
  document.body.classList.toggle("scroll");
}

function visibleDeleteButtonOnHover() {
  messageCheckBox.forEach(messageItem => {
    messageItem.addEventListener("mouseenter", e => {
      const deleteIcon = e.target.querySelector(".message-center_delete");
      deleteIcon.style.visibility = "visible";
    });
  });
}
visibleDeleteButtonOnHover();

function hiddenVisibilityDeleteButtonOnHover() {
  messageCheckBox.forEach(messageItem => {
    messageItem.addEventListener("mouseleave", e => {
      const deleteIcon = e.target.querySelector(".message-center_delete");
      deleteIcon.style.visibility = "hidden";
    });
  });
}
hiddenVisibilityDeleteButtonOnHover();
// check and uncheck message checkbox
delete_all_checkbox.addEventListener("change", deleteAllCheckboxButton);

function deleteAllCheckboxButton(e) {
  e.target.checked === false ? checkAllCheckBoxes(false) : checkAllCheckBoxes();
  clickedUnclickedMessageCounter();
}

function checkedBoxUncheckedCounter() {
  messagebox.forEach(checkbox => {
    checkbox.addEventListener("change", e => clickedUnclickedMessageCounter());
  });
}
checkedBoxUncheckedCounter();

function checkAllCheckBoxes(checked = true) {
  messagebox.forEach(checkedbox => (checkedbox.checked = checked));
}

function clickedUnclickedMessageCounter() {
  let counter = 0;
  for (let message of messagebox) {
    message.checked === true ? counter++ : null;
  }
  counter === 0
    ? (message_counter.innerText = " - ")
    : (message_counter.innerText = counter);
}

const checkboxStatusChange = e => {
  messagebox.forEach(message => {
    message.addEventListener("change", e => {
      let targetValue = e.target;
      targetValue.checked
        ? (targetValue.value = true)
        : (targetValue.value = false);
    });
  });
};
checkboxStatusChange();

search_filter.addEventListener("input", cardFilter);

function cardFilter() {
  const inputSearchValue = search_filter.value.toUpperCase();

  for (let card of cards) {
    const titles = card.querySelector(".card-content .card-title");
    const upperCaseTitles = titles.innerText.toUpperCase();

    if (upperCaseTitles.indexOf(inputSearchValue) > -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}
