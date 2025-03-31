document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".numbercount");
    let observerTriggered = false; // Ensure it runs only once

    function animateCountUp(counter) {
        const target = +counter.innerText;
        let count = 0;
        const increment = Math.ceil(target / 100); // Adjust speed

        function updateCounter() {
            count += increment;
            if (count < target) {
                counter.innerText = count;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    }

    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !observerTriggered) {
                observerTriggered = true;
                counters.forEach(animateCountUp);
            }
        });
    }

    const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
    observer.observe(document.querySelector(".why-choose-duroair"));
});
