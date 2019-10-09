let main_image = document.querySelector(".main-image-section > img"),
    grouped_images = document.querySelectorAll(".sub-images"),
    sorted_options = document.getElementById("sorted-options"),
    lead = document.querySelector(".sub-nav"),
    nav = document.querySelector(".nav-trigger");

grouped_images.forEach(img =>
    img.addEventListener("click", switchMainProductPicture)
);

function switchMainProductPicture(e) {
    main_image.src = e.target.src;
    e.target.style.border = '1px solid black';
}


// filter category
(function () {
    const filterMenus = document.querySelector(".price-filter");
    const filterMenu = document.querySelector(".price-filter ul");
    filterMenus.addEventListener("click", filterOptions);

    function filterOptions() {
        if (filterMenu.classList.contains("inActive")) {
            filterMenu.classList.remove("inActive");
            filterMenu.classList.add("active");
        } else {
            filterMenu.classList.add("inActive");
            filterMenu.classList.remove("active");
        }
    }
})();