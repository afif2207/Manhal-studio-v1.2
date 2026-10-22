// GANTI nomor berikut dengan nomor WhatsApp kamu. Gunakan kode negara, tanpa tanda + atau spasi.
const WHATSAPP_NUMBER = "6283138524282";
const WHATSAPP_MESSAGE = "Halo Manhal Studio! Saya tertarik menggunakan jasa desain. Boleh diskusi tentang project saya?";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.textContent = opened ? "×" : "☰";
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const whatsappLink = document.getElementById("whatsapp-link");
whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const lightbox = document.getElementById("lightbox");
const preview = document.querySelector(".lightbox-preview");
const lightboxTitle = document.getElementById("lightbox-title");
document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    const imagePath = project.dataset.image;
    const title = project.dataset.title;
    preview.innerHTML = "";
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = title;
    img.onerror = () => {
      img.alt = "Gambar portofolio tidak tersedia";
      img.classList.add("image-unavailable");
    };
    preview.appendChild(img);
    lightboxTitle.textContent = title;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });
