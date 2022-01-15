const messageDeleteButtons = document.querySelectorAll(
  ".message-delete-button .material-icons",
);
const messageCheckBoxes = document.querySelectorAll(".message-checkbox");
const collection_items = document.querySelectorAll(".collection-item");
const cardTitles = document.querySelectorAll(".card-content .card-title");

const filterInput = document.getElementById("filter-search");

(() => {
  collectionsButtonShowOnHover();
  collectionsButtonHideOnHover();
})();

function collectionsButtonShowOnHover() {
  for (let i = 0; i < collection_items.length; i++) {
    const collection = collection_items[i];
    const deleteButton = messageDeleteButtons[i];
    collection.addEventListener("mouseenter", () => {
      deleteButton.style.visibility = "visible";
    });
  }
}

function collectionsButtonHideOnHover() {
  for (let i = 0; i < collection_items.length; i++) {
    const collection = collection_items[i];
    const deleteButton = messageDeleteButtons[i];
    collection.addEventListener("mouseleave", () => {
      deleteButton.style.visibility = "hidden";
    });
  }
}

filterInput.addEventListener("input", e => {
  const titles = Array.from(cardTitles);
  for (let title of titles) {
    console.log(title.innerText);
  }
});

// cardTitles.forEach(item => {
//   item.addEventListener("mouseenter", e => {
//     alert(e.target.innerText);
//   });
// });
