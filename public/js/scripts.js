const filterTitles = document.querySelectorAll(".category");
const sortFilterList = document.querySelectorAll(".sort");
const sortNav = document.querySelectorAll(".sort-nav");
const category = document.querySelectorAll(".category-nav");

// event listeners
filterTitles.forEach((item) => item.addEventListener("click", showCategory));
sortFilterList.forEach((item) => item.addEventListener("click", showSortList));

// event functions
function showCategory() {
	toggleList(category);
}

function showSortList() {
	toggleList(sortNav);
}

function toggleList(ele, e) {
	ele.forEach((e) => {
		if (e.classList.toggle("hide")) {
			console.log(e.classList);
		} else {
			console.log(false);
		}
	});
}

//
