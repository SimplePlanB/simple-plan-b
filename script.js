
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear().toString();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMenu() {
  mobileNav.style.display = "none";
  mobileNav.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  mobileNav.style.display = "block";
  mobileNav.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
}

menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

mobileNav.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "A") closeMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Copy promo line
const copyBtn = document.getElementById("copyBtn");
const promoLine = document.getElementById("promoLine");
const copyStatus = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(promoLine.textContent.trim());
    copyStatus.textContent = "Copied!";
    setTimeout(() => (copyStatus.textContent = ""), 1200);
  } catch {
    copyStatus.textContent = "Copy failed — select the text and copy manually.";
    setTimeout(() => (copyStatus.textContent = ""), 2000);
  }
});
