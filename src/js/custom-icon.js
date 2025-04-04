document.addEventListener("DOMContentLoaded", function () {
    const objectElements = document.querySelectorAll(".beyond-compliance-item-icon object");

    objectElements.forEach(objectElement => {
        objectElement.addEventListener("load", function () {
            const svgDoc = objectElement.contentDocument;
            if (svgDoc) {
                const pathElement = svgDoc.querySelector("path");
                if (pathElement) {
                    pathElement.classList.add("custom-path-class"); // Add class to <path>
                }
            }
        });
    });
});
