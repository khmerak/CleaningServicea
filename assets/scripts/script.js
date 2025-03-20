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




document.addEventListener("DOMContentLoaded", function() {
    // Simulated user authentication (Replace with real authentication logic)
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        document.getElementById("cart-item").style.display = "block";
        document.getElementById("profile-item").style.display = "block";
        document.getElementById("login-item").style.display = "none";
        document.getElementById("signup-item").style.display = "none";
    } else {
        document.getElementById("cart-item").style.display = "none";
        document.getElementById("profile-item").style.display = "none";
        document.getElementById("login-item").style.display = "block";
        document.getElementById("signup-item").style.display = "block";
    }
});

function logout() {
    localStorage.setItem("isLoggedIn", "false"); // Clear login status
    location.reload(); // Reload page to update menu
}

window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000); // Simulate loading time (2 seconds)
};


document.addEventListener("DOMContentLoaded", function () {
    const categoryButton = document.querySelector(".categories button");
    const categoryNav = document.querySelector(".categories nav");

    categoryButton.addEventListener("click", function () {
        categoryNav.classList.toggle("active");
    });

    // Close menu if clicked outside
    document.addEventListener("click", function (event) {
        if (!categoryButton.contains(event.target) && !categoryNav.contains(event.target)) {
            categoryNav.classList.remove("active");
        }
    });
});
