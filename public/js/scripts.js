const messageCheckBox = document.querySelectorAll(".collection-item");

// delete button in message section appears/disappears on hover
messageCheckBox.forEach(item => {
  item.addEventListener("mouseenter", e => {
    const form = e.target.querySelector("#message-delete-button button");
    e.preventDefault();
    form.style.display = "block";
  });

  item.addEventListener("mouseleave", e => {
    const form = e.target.querySelector("#message-delete-button button");
    form.style.display = "none";
  });
});
