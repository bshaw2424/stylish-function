const messageCheckBox = document.querySelectorAll(".message-checkbox");
const trashcan = document.querySelectorAll("message-center_delete");

messageCheckBox.forEach(item => {
  item.addEventListener("click", e => {
    console.log(e);
  });
});
