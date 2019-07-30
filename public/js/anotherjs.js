 $(document).ready(function () {
     //open and close mobile navigation...hamburger icon
     $('.nav-trigger').click(function () {
         $('.sub-nav').slideToggle();
     })
 });

 let main_image = document.querySelector(".image-section > img"),
     grouped_images = document.querySelectorAll(".sub-images"),
     sorted_options = document.getElementById("sorted-options"),
     lead = document.querySelector(".sub-nav"),
     nav = document.querySelector('.nav-trigger');





 grouped_images.forEach(img => img.addEventListener("click", switchMainProductPicture))

 function switchMainProductPicture(e) {

     main_image.src = e.target.src;

 }