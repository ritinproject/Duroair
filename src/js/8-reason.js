document.addEventListener("DOMContentLoaded", function () {
    let accordionItems = document.querySelectorAll(".reasons-accrdn-card");
    let sliderItems = document.querySelectorAll(".reasonert-navfor-slider-inr-item");
    let navItems = document.querySelectorAll(".reason-slider-nav-item");
    let carouselImages = document.querySelectorAll(".carousel-image"); // Add a selector for carousel images

    function activateItem(index) {
        // Remove "active" class from all items
        accordionItems.forEach((el) => {
            el.classList.remove("active");
            el.querySelector(".reasonsaccr-body").style.display = "none"; // Hide content
        });
        sliderItems.forEach((el) => el.classList.remove("active"));
        navItems.forEach((el) => el.classList.remove("active"));
        carouselImages.forEach((el) => el.style.display = "none"); // Hide all carousel images

        // Add "active" class to the clicked index
        accordionItems[index].classList.add("active");
        accordionItems[index].querySelector(".reasonsaccr-body").style.display = "block"; // Show content
        sliderItems[index].classList.add("active");
        navItems[index].classList.add("active");
        carouselImages[index].style.display = "block"; // Show the corresponding image
    }

    // Accordion Click Event
    accordionItems.forEach((item, index) => {
        item.addEventListener("click", () => activateItem(index));
    });

    // Thumbnail Click Event
    navItems.forEach((item, index) => {
        item.addEventListener("click", () => activateItem(index));
    });
});
