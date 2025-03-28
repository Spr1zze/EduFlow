/* Login popupform */
function openPopupLogin() {
  document.getElementById("popup-login").classList.add("active");
}
function closePopupLogin() {
  document.getElementById("popup-login").classList.remove("active");
}


/* Login to Frontpage. Accept always works, just simulation */
function loginToMain () {
  location.href = '../kanban/kanban.html';
}

/* Logout knap fra frontpage til login site */
function backToLogin () {
  location.href = '../login/login.html';
}


/* Sidebar open and close */
function sidebar_open() {
  document.getElementById("sidebar").style.display = "block";
}
function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
}