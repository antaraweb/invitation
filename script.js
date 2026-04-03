// AMBIL NAMA TAMU DARI URL
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
  document.getElementById("guest").innerText = "Kepada Yth. " + guestName;
}

// BUKA UNDANGAN
function openInvite() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  const music = document.getElementById("music");
  music.play();
}

// COUNTDOWN
const target = new Date("June 15, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);

  document.getElementById("countdown").innerHTML =
    d + " Hari " + h + " Jam";
}, 1000);