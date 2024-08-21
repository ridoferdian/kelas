window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.add("hidden");
  }
});

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

feather.replace();

var typed = new Typed(".auto-type", {
  strings: ["XII TKJ 1", "SMUHERO"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function getHariTanggalDanJam() {
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const today = new Date();
  const namaHari = hari[today.getDay()];
  const tanggal = today.getDate();

  const jam = today.getHours().toString().padStart(2, "0");
  const menit = today.getMinutes().toString().padStart(2, "0");
  const detik = today.getSeconds().toString().padStart(2, "0");
  const waktuSekarang = `${jam}:${menit}:${detik}`;

  const waktuLengkap = `${namaHari} , ${tanggal} , ${waktuSekarang}`;

  document.getElementById("waktuLengkap").textContent = waktuLengkap;
}

// Update jam setiap detik
setInterval(getHariTanggalDanJam, 1000);

// Tampilkan langsung saat halaman dimuat
getHariTanggalDanJam();

function tampilkanJadwal() {
  const hariIni = new Date().getDay(); // Mendapatkan hari sekarang (0 untuk Minggu, 1 untuk Senin, dst.)
  const jadwalHariIni = document.querySelector(`[data-hari="${hariIni}"]`);

  if (jadwalHariIni) {
    jadwalHariIni.classList.remove("hidden");
  }
}

// Panggil fungsi saat halaman dimuat
window.addEventListener("DOMContentLoaded", tampilkanJadwal);

const struktur = document.getElementById("struktur");
const jadwal = document.getElementById("jadwal");
const elementStruktur = document.getElementById("elementStruktur");
const elementJadwal = document.getElementById("elementJadwal");

struktur.addEventListener("click", function () {
  elementStruktur.classList.remove("hidden");
  elementJadwal.classList.add("hidden");

  // Saat "Struktur" aktif
  struktur.classList.add("text-primary", "dark:text-main");
  jadwal.classList.remove("text-primary", "dark:text-main");
  jadwal.classList.add("dark:text-white"); // Mengembalikan warna teks default ke putih
});

jadwal.addEventListener("click", function () {
  elementJadwal.classList.remove("hidden");
  elementStruktur.classList.add("hidden");

  // Saat "Jadwal" aktif
  jadwal.classList.add("text-primary", "dark:text-main");
  struktur.classList.remove("text-primary", "dark:text-main");
  struktur.classList.add("dark:text-white"); // Mengembalikan warna teks default ke putih
});


var galeriSwiper = new Swiper(".swiper-galeri", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".slide-content", {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  fade: true,
  spaceBetween: 25,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
