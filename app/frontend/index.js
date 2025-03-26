/* Login to Frontpage. Accept always works, just simulation */
function loginToMain () {
  location.href = 'kanban.html';
}

/* Logout knap fra frontpage til login site */
function backToLogin () {
  location.href = 'login.html';
}


/* Sidebar open and close */
function sidebar_open() {
  document.getElementById("sidebar").style.display = "block";
}
function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
}