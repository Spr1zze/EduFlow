/* Barcode popupform */
function openPopupLogin() {
    document.getElementById("popup-login").classList.add("active");
}

function closePopupLogin() {
    document.getElementById("popup-login").classList.remove("active");
}


/* Login to Frontpage. Accept always works, just simulation */
function loginToMain () {
    location.href = 'main.html';
}