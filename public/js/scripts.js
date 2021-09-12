const messageCheckBox = document.querySelectorAll(".collection-item");
const deleteAllButton = document.getElementById("delete-all");
const messages = document.querySelectorAll(".message-checkbox");

// delete button in message section appears/disappears on hover
messageCheckBox.forEach(item => {
  item.addEventListener("mouseenter", e => {
    const form = e.target.querySelector("#message-delete-button button");
    e.preventDefault();
    form.style.visibility = "visible";
  });

  item.addEventListener("mouseleave", e => {
    const form = e.target.querySelector("#message-delete-button button");
    form.style.visibility = "hidden";
  });
});
// checked = "checked";

deleteAllButton.addEventListener("change", function () {
  buttons(messages, this);
});

function buttons(a, deletebtn) {
  for (let i = 0; i < a.length; i++) {
    if (deletebtn.checked === true) {
      a[i].setAttribute("checked", "checked");
    } else {
      a[i].removeAttribute("checked");
    }
  }
}
