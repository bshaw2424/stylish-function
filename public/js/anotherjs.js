 $(document).ready(function(){
     //open and close mobile navigation...hamburger icon
     $(".nav-trigger").on("click", () =>{
         $(".sub-nav").toggle();
     })
  });
  
//info section keyframes
let page = document.querySelector("#about-section");
window.addEventListener("scroll", function(e){
    let wind = window.screenY;
    if (wind === "560px") {
        page.style.display = "none"
    }
})



// sticky navigation bar
let nav = document.querySelector("#navigation");

window.addEventListener("scroll", stickyNavbar);

function stickyNavbar() {
    var sticky = nav.offsetTop;
    console.log(nav.offsetTop)
    if (window.pageYOffset !== sticky) {
        nav.classList.add("sticky")
        nav.style.background = "rgba(0,0,0, 0.5)"
        nav.style.transition = "background 2.5s ease-in"
      } else {
        nav.style.background = "#ee6e73";
        nav.classList.remove("sticky");
        nav.style.transition = "background 1s ease-out"
        
      }
};
  

      


