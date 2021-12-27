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
  if (e.target.checked === false) {
    checkAllCheckBoxes(false);
    clickedUnclickedMessageCounter();
  } else {
    checkAllCheckBoxes();
    clickedUnclickedMessageCounter();
  }
}

// checkbox click/unclick counter
messagebox.forEach(checkbox => {
  checkbox.addEventListener("change", e => clickedUnclickedMessageCounter());
});

const checkAllCheckBoxes = (checked = true) => {
  messagebox.forEach(checkedbox => (checkedbox.checked = checked));
};

const clickedUnclickedMessageCounter = () => {
  let counter = 0;
  for (let message of messagebox) {
    message.checked === true ? counter++ : null;
  }
  counter === 0
    ? (message_counter.innerText = " - ")
    : (message_counter.innerText = counter);
};

search_filter.addEventListener("input", cardSearchFilter);

function cardSearchFilter() {
  const searchValue = search_filter.value.toUpperCase();
  for (let i = 0; i < cards.length; i++) {
    const titles = cards[i].querySelector(".card-content .card-title");
    if (titles.innerText.toUpperCase().indexOf(searchValue) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
cardSearchFilter();

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
