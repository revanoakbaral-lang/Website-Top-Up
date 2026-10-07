function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}


function selectGame(game) {

  const select = document.getElementById("gameSelect");

  select.value = game;

  document.querySelector(".topup-section").scrollIntoView({
    behavior: "smooth"
  });
}


function chooseNominal(nominal) {

  document.querySelectorAll(".nominal-grid button")
    .forEach(button => {
      button.style.background = "white";
      button.style.color = "#087cff";
    });

  event.target.style.background = "#087cff";
  event.target.style.color = "white";

  window.selectedNominal = nominal;
}


function orderNow() {

  const game = document.getElementById("gameSelect").value;
  const userId = document.getElementById("userId").value;
  const serverId = document.getElementById("serverId").value;
  const phone = document.getElementById("phone").value;

  if (!game) {
    alert("Silakan pilih game terlebih dahulu.");
    return;
  }

  if (!userId) {
    alert("Silakan masukkan User ID.");
    return;
  }

  if (!window.selectedNominal) {
    alert("Silakan pilih nominal top up.");
    return;
  }

  if (!phone) {
    alert("Silakan masukkan nomor WhatsApp.");
    return;
  }

  const message =
    "Halo Admin PANOWZ TOPUP,%0A%0A" +
    "Saya ingin melakukan top up.%0A%0A" +
    "Game: " + encodeURIComponent(game) + "%0A" +
    "User ID: " + encodeURIComponent(userId) + "%0A" +
    "Server ID: " + encodeURIComponent(serverId || "-") + "%0A" +
    "Nominal: " + encodeURIComponent(window.selectedNominal) + "%0A" +
    "Nomor WhatsApp: " + encodeURIComponent(phone);

  window.open(
    "https://wa.me/6285135080137?text=" + message,
    "_blank"
  );
}