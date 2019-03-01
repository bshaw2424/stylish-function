 $(document).ready(function(){
     //open and close mobile navigation...hamburger icon
     $(".nav-trigger").on("click", () =>{
         $(".sub-nav").toggle();
     })
  });
  




// sticky navigation bar
let nav = document.querySelector("#navigation");

window.addEventListener("scroll", stickyNavbar);

function stickyNavbar() {
    var sticky = nav.offsetTop;
    console.log(sticky)
    if (window.pageYOffset !== sticky) {
        nav.classList.add("sticky")
      } else {
        nav.classList.remove("sticky");
      }
};
  

      


