let index = 0;
const slides = document.querySelectorAll(".slider-item");
const dotsContainer = document.querySelector(".dots");

// Create dots dynamically
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", `jumpToSlide(${i})`);
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlide() {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    // Update dot active state
    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === index);
    });
}

function changeSlide(step) {
    index = (index + step + slides.length) % slides.length;
    updateSlide();
}

function jumpToSlide(slideIndex) {
    index = slideIndex;
    updateSlide();
}

// Auto-slide every 3 seconds
function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 3000);
}

autoSlide();


document.getElementById("cart-icon").addEventListener("click", function() {
    document.getElementById("cart-sidebar").classList.add("active");
});

document.getElementById("close-cart").addEventListener("click", function() {
    document.getElementById("cart-sidebar").classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
    // Handle quantity buttons
    document.querySelectorAll(".qty-btn").forEach(button => {
        button.addEventListener("click", function () {
            const qtySpan = this.parentElement.querySelector(".qty");
            let currentQty = parseInt(qtySpan.textContent);

            if (this.classList.contains("plus")) {
                qtySpan.textContent = currentQty + 1;
            } else if (this.classList.contains("minus") && currentQty > 0) {
                qtySpan.textContent = currentQty - 1;
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach((link) => {
        link.addEventListener("click", function () {
            links.forEach((l) => l.classList.remove("active")); // Remove active class from all links
            this.classList.add("active"); // Add active class to the clicked link
        });
    });
});
