if (document.querySelector(".burger")) {
    document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("burger--active");
    document.querySelector(".nav").classList.toggle("nav--active");
    document.body.classList.toggle("scroll");
    document.querySelector('.overlay').classList.toggle("overlay--active")
});

document.querySelector(".nav").querySelectorAll(".nav-list-item").forEach(function (element) {
    element.addEventListener("click", function () {
    document.querySelector(".burger").classList.toggle("burger--active");
    document.querySelector(".nav").classList.toggle("nav--active");
    document.body.classList.remove("scroll");
    document.querySelector('.overlay').classList.remove("overlay--active")
});
});

document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("burger") && !event.target.closest(".nav-list") && !event.target.closest(".pets-slide") && !event.target.closest(".modal-content")) {
        document.querySelector(".burger").classList.remove("burger--active");
        document.querySelector(".nav").classList.remove("nav--active");
        document.body.classList.remove("scroll");
        document.querySelector('.overlay').classList.remove("overlay--active")
    };
});
};