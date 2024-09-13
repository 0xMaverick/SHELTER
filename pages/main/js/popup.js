var openDivs = document.getElementsByClassName("our-friends-slide");
var modals = document.querySelectorAll(".modal");

for (var i = 0; i < openDivs.length; i++) {
  openDivs[i].addEventListener("click", function() {
    var modalId = this.getAttribute("data-modal");
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.classList.toggle("scroll");
  });
}



var closeBtns = document.getElementsByClassName("close");

for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function() {
    this.closest(".modal").style.display = "none";
    document.body.classList.remove("scroll");
  });
}

window.onclick = function(event) {
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    document.body.classList.remove("scroll");
    }
  }
}

