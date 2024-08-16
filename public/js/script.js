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


 // Variabel untuk menentukan hari
 let hari = 'Senin';

        // Fungsi untuk menampilkan jadwal berdasarkan hari
        function tampilkanJadwal() {
            const jadwal = document.querySelectorAll('.text-center');
            jadwal.forEach((item) => {
                if (item.querySelector('h1').textContent === `Hari ${hari}`) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Panggil fungsi untuk menampilkan jadwal
        tampilkanJadwal();

        // Event listener untuk mengubah hari
        document.getElementById('ubahHari').addEventListener('click', () => {
            if (hari === 'Senin') {
                hari = 'Selasa';
            } else if (hari === 'Selasa') {
                hari = 'Rabu';
            } else if (hari === 'Rabu') {
                hari = 'Kamis';
            } else if (hari === 'Kamis') {
                hari = 'Jumat';
            } else if (hari === 'Jumat') {
                hari = 'Sabtu';
            } else if (hari === 'Sabtu') {
                hari = 'Minggu';
            } else {
                hari = 'Senin';
            }
            tampilkanJadwal();
        });