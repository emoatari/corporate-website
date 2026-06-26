//Back to Top Button
window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Update active button
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Filter items
        const filterValue = btn.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
            if (
                filterValue === "all" ||
                item.getAttribute("data-category") === filterValue
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Project details data
const projects = {
    1: {
        title: "E-Commerce Platform",
        img: "/assets/imgs/E-Commerce Platform.webp",
        description:
            "A fully-featured e-commerce platform with payment gateway integration, inventory management, and customer analytics.",
        tech: "React, Node.js, MongoDB, Stripe",
        client: "TechStore Inc.",
    },
    2: {
        title: "Fitness Tracking App",
        img: "/assets/imgs/Fitness Tracking App.webp",
        description:
            "A comprehensive fitness tracking mobile app with workout plans, nutrition tracking, and progress monitoring.",
        tech: "React Native, Firebase, Google Fit API",
        client: "FitLife Health",
    },
    3: {
        title: "Banking App Redesign",
        img: "/assets/imgs/Banking App Redesign.webp",
        description:
            "Complete UI/UX redesign of a banking application focusing on user experience and accessibility.",
        tech: "Figma, Adobe XD, User Testing",
        client: "SecureBank",
    },
    4: {
        title: "Corporate Website",
        img: "/assets/imgs/Corporate Website.webp",
        description:
            "A modern, responsive corporate website for a Fortune 500 company with CMS integration.",
        tech: "WordPress, PHP, MySQL, Bootstrap",
        client: "Global Corp",
    },
    5: {
        title: "Food Delivery App",
        img: "/assets/imgs/Food Delivery App.webp",
        description:
            "On-demand food delivery app with real-time tracking and payment integration.",
        tech: "Flutter, Firebase, Google Maps API",
        client: "Foodie Express",
    },
    6: {
        title: "Dashboard Design",
        img: "/assets/imgs/Dashboard Design.webp",
        description:
            "An analytics dashboard for business intelligence with interactive charts and reports.",
        tech: "React, Chart.js, Material-UI",
        client: "DataVision Analytics",
    },
};

function showProjectDetails(id) {
    const project = projects[id];
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalImg").src = project.img;
    document.getElementById("modalDescription").textContent =
        project.description;
    document.getElementById("modalTech").textContent = project.tech;
    document.getElementById("modalClient").textContent = project.client;
}
// Toggle FAQ answers
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector("i");

    answer.classList.toggle("show");

    if (answer.classList.contains("show")) {
        icon.classList.remove("bi-chevron-down");
        icon.classList.add("bi-chevron-up");
    } else {
        icon.classList.remove("bi-chevron-up");
        icon.classList.add("bi-chevron-down");
    }
}

// Contact form submission
const contactForm = document.getElementById("contactForm");
const successToast = document.getElementById("successToast");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const privacy = document.getElementById("privacy").checked;

    if (name && email && message && privacy) {
        // Show toast
        const toast = new bootstrap.Toast(successToast);
        toast.show();

        // Reset form
        contactForm.reset();

        // Scroll to top of page smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        alert(
            "Please fill in all required fields and accept the privacy policy.",
        );
    }
});
