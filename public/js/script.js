window.onscroll = function () {
    const header = document.querySelector("section");
    const fixedNav = header.offsetTop;
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
};

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('hidden');
});

feather.replace();

var typed = new Typed(".auto-type", {
    strings: ["XII TKJ 1", "SMUHERO"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

  function getHariTanggalDanJam() {
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const today = new Date();
    const namaHari = hari[today.getDay()];
    const tanggal = today.getDate();
   
    const jam = today.getHours().toString().padStart(2, '0');
    const menit = today.getMinutes().toString().padStart(2, '0');
    const detik = today.getSeconds().toString().padStart(2, '0');
    const waktuSekarang = `${jam}:${menit}:${detik}`;

    const waktuLengkap = `${namaHari} , ${tanggal} , ${waktuSekarang}`;

    document.getElementById("waktuLengkap").textContent = waktuLengkap;
}

// Update jam setiap detik
setInterval(getHariTanggalDanJam, 1000);

// Tampilkan langsung saat halaman dimuat
getHariTanggalDanJam();