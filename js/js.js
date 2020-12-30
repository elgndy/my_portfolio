document.querySelector(".sidenav-trigger").addEventListener("click", () => {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
  instances.open;
});

document.addEventListener('DOMContentLoaded', function() {
  var sochial = document.querySelectorAll('.fixed-action-btn');
  var instance = M.FloatingActionButton.init(sochial);
  instance.open;
});

var go_down = document.querySelector(".go_down");

go_down.addEventListener("click" , () => {
  window.scrollTo({ left: 0, top:655, behavior: "smooth" });
})

var hire = document.querySelector(".hire");
hire.addEventListener("click" , () => {
    window.scrollTo({ left: 0, top:10000, behavior: "smooth" });
})
document.querySelector(".hom").addEventListener("click" , () => {
  window.scrollTo({ left: 0, top:0, behavior: "smooth" });
})
document.querySelector(".abou").addEventListener("click" , () => {
  window.scrollTo({ left: 0, top:650, behavior: "smooth" });
})
document.querySelector(".skill").addEventListener("click" , () => {
  window.scrollTo({ left: 0, top:1300, behavior: "smooth" });
})
document.querySelector(".progect").addEventListener("click" , () => {
  window.scrollTo({ left: 0, top:2000, behavior: "smooth" });
})
document.querySelector(".inf").addEventListener("click" , () => {
  window.scrollTo({ left: 0, top:2600, behavior: "smooth" });
})
