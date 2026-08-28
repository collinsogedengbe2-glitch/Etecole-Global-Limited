// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Read More button
const readMoreBtn = document.getElementById("readMoreBtn");
const extraText = document.getElementById("extraText");

readMoreBtn.addEventListener("click", () => {
    extraText.classList.toggle("hidden");

    if (extraText.classList.contains("hidden")) {
        readMoreBtn.textContent = "Read More";
    } else {
        readMoreBtn.textContent = "Read Less";
    }
});


// Animated statistics
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let current = 0;

    const updateCounter = () => {
        const increment = Math.ceil(target / 50);

        if (current < target) {
            current += increment;

            if (current > target) {
                current = target;
            }

            counter.textContent = current;
            setTimeout(updateCounter, 30);
        }
    };

    updateCounter();
});