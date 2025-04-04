document.addEventListener("DOMContentLoaded", function () {
    const objectElements = document.querySelectorAll(".beyond-compliance-item-icon object");

    objectElements.forEach(objectElement => {
        objectElement.addEventListener("load", function () {
            const svgDoc = objectElement.contentDocument;
            if (svgDoc) {
                const pathElements = svgDoc.querySelectorAll("path"); // Select all <path> elements
                pathElements.forEach(path => {
                    path.classList.add("custom-path-class"); // Add class to each <path>
                    path.style.strokeWidth = "2px"; // Set stroke-width directly via JS
                });
            }
        });
    });
});



    $(document).ready(function () {
      $(".show-decribe-data-one, .show-decribe-data-two, .show-decribe-data-third").on("click", function (e) {
        e.preventDefault();

        const targetClass = $(this).data("target");
        const $target = $("." + targetClass);

        // Agar target section already visible hai toh use band karo
        if ($target.is(":visible")) {
          $target.slideUp();
        } else {
          // Pehle sabhi sections band karo
          $(".show-describe-data-list-one, .show-describe-data-list-two, .show-describe-data-list-third").slideUp();
          // Fir clicked wale section ko toggle karo
          $target.stop(true, true).slideDown();
        }
      });
    });