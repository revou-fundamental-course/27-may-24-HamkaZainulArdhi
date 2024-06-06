// togel class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar unutuk hilang nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
//fungsional dari form atau contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const resultMessage = document.getElementById("resultMessage");

  // Pengecekan ketika halaman dimuat dan meminta nama pengguna
  window.addEventListener("load", function () {
    const userName = prompt("Selamat datang! Silakan masukkan nama Anda:");
    if (userName) {
      alert(
        `Halo, ${userName}! Harap isi form kontak jika ingin mengirim pesan.`
      );
    } else {
      alert("Selamat datang! Harap isi form kontak jika ingin mengirim pesan.");
    }
  });
  //fungsional ketika sudah mengisi form dan mengklik submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const birthDate = document.getElementById("birthDate").value.trim();
    const message = document.getElementById("message").value.trim();

    //output pengisian form di tampilkan
    if (name && birthDate && message) {
      resultMessage.value = `terima kasih ${name} telah mengirim pesan ini \nPesan anda :\n ${message}`;
    } else {
      alert("Harap isi semua bidang.");
    }
  });
});
