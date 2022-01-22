const messageDeleteButtons = document.querySelectorAll(
  ".message-delete-button .material-icons",
);
const messageCheckBoxes = document.querySelectorAll(".message-checkbox");
const collection_items = document.querySelectorAll(".collection-item");
const cardTitles = document.querySelectorAll(".card-content .card-title");
const card = document.querySelectorAll(".article-container .col");

const filterInput = document.querySelector(".filter-search #filter-search");
const hamburgerNav = document.getElementById("hamburger-nav-button");
const navLinks = document.querySelector(".index-navigation-links");

(() => {
  collectionsButtonShowOnHover();
  collectionsButtonHideOnHover();
  productFilter();
  window.addEventListener("load", () => {
    console.log("button was clicked");
  });
})();
hamburgerNav.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});
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

function productFilter() {
  filterInput.addEventListener("input", e => {
    const titles = Array.from(cardTitles).slice();
    const cards = Array.from(card).slice();

    const targetValue = e.target.value.toLowerCase();

    const results = [];
    const cardDisplay = [];

    for (let i = 0; i < titles.length; i++) {
      results.push(titles[i]);
      cardDisplay.push(cards[i]);
    }

    const findCards = results.filter((item, index) => {
      if (item.innerText.toLowerCase().includes(targetValue)) {
        cardDisplay[index].style.display = "";
      } else {
        cardDisplay[index].style.display = "none";
      }
    });

    return findCards;
  });
}
