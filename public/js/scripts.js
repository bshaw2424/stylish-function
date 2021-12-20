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
const card = document.querySelectorAll(".card");
const title = document.querySelectorAll(".card-content .card-title");

search_filter.addEventListener("input", getCard);
function getCard() {
  for (cards of card) {
    console.log(card);
  }
}

hamburger_menu.addEventListener("click", () => {
  mobile_nav_links.classList.toggle("hidden");
  document.body.classList.toggle("scroll");
});

messageCheckBox.forEach(function (messageItem) {
  messageItem.addEventListener("mouseenter", e => {
    const deleteIcon = e.target.querySelector("#message-delete-button button");
    deleteIcon.style.visibility = "visible";
  });

  messageItem.addEventListener("mouseleave", e => {
    const deleteIcon = e.target.querySelector("#message-delete-button button");
    deleteIcon.style.visibility = "hidden";
  });
});

// check and uncheck message checkbox
delete_all_checkbox.addEventListener("change", function (e) {
  if (e.target.checked === false) {
    checkAllCheckBoxes(false);
    clickedUnclickedMessageCounter();
  } else {
    checkAllCheckBoxes();
    clickedUnclickedMessageCounter();
  }
});

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
