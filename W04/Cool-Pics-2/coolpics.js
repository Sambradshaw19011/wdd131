const menuButton = document.getElementById("menuButton");
const navList = document.getElementById("navList");

const modalOverlay = document.getElementById("modalOverlay");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

function openMenu() {
    navList.classList.add("open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close menu");
}

function closeMenu() {
    navList.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
});

function openModal(fullSrc, altText) {
    modalImg.src = fullSrc;
    modalImg.alt = altText || "";
    modalOverlay.hidden = false;
    modalOverlay.setAttribute("aria-hidden", "false");
}

function closeModal() {
    modalOverlay.hidden = true;
    modalOverlay.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    modalImg.alt = "";
}

document.querySelectorAll(".gallery-img").forEach((img) => {
    img.addEventListener("click", () => {
        const fullSrc = img.dataset.full || img.src;
        openModal(fullSrc, img.alt);
    });
});

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.hidden === false) closeModal();
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 700px)").matches) closeMenu();
});
