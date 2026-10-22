// GANTI nomor berikut dengan nomor WhatsApp kamu. Gunakan kode negara, tanpa tanda + atau spasi.
const WHATSAPP_NUMBER = "62XXXXXXXXXX";
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
if (!WHATSAPP_NUMBER.includes("X")) {
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
} else {
  whatsappLink.addEventListener("click", event => {
    event.preventDefault();
    alert("Ganti WHATSAPP_NUMBER di file script.js dengan nomor WhatsApp kamu terlebih dahulu.");
  });
}

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
      preview.innerHTML = '<div style="padding:28px;color:#c7d2e2;text-align:center;line-height:1.8">Gambar asli belum dipasang.<br>Taruh file kamu di folder <b>assets</b>, lalu sesuaikan nama file di index.html.</div>';
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

// Jika file gambar belum tersedia, tampilkan placeholder yang jelas.
document.querySelectorAll(".portfolio-image").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    const wrap = img.closest(".project-image-wrap");
    if (wrap && !wrap.querySelector(".missing-image")) {
      const msg = document.createElement("div");
      msg.className = "missing-image";
      msg.innerHTML = "<strong>Gambar belum ditambahkan</strong><span>" + img.getAttribute("src").replace("assets/", "") + "</span>";
      wrap.appendChild(msg);
    }
  });
});
