const messageCheckBox = document.querySelectorAll(".collection-item");
const messagebox = document.querySelectorAll(".message-checkbox");
const delete_all_checkbox = document.getElementById("delete-all");
let message_counter = document.getElementById("message-checkbox-counter");
const delete_message = document.getElementById("delete-all-icon");

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
    messageCounter();
  } else {
    checkAllCheckBoxes();
    messageCounter();
  }
});

messagebox.forEach(checkbox => {
  checkbox.addEventListener("change", e => {
    messageCounter();
  });
});

function checkAllCheckBoxes(checked = true) {
  messagebox.forEach(checkedbox => (checkedbox.checked = checked));
}

function messageCounter() {
  let counter = 0;
  for (let i = 0; i < messagebox.length; i++) {
    if (messagebox[i].checked === true) {
      counter++;
    }
  }

  counter === 0
    ? (message_counter.innerText = " - ")
    : (message_counter.innerText = counter);
}
