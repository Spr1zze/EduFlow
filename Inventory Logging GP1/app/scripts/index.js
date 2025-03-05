/* Back to main page button */
function backToMain () {
    location.href = '../main.html';
}


/* Barcode popupform */
function openPopupBarcode() {
    document.getElementById("popup-barcode").classList.add("active");
}

function closePopupBarcode() {
    document.getElementById("popup-barcode").classList.remove("active");
}


/* Inv popupform */
function openPopupInv() {
    document.getElementById("popup-inv").classList.add("active");
}

function closePopupInv() {
    document.getElementById("popup-inv").classList.remove("active");
}


/* Barcode generator */
function barcodeGenerator(value) {
    JsBarcode('#barcode', value, {
        displayValue: true,
        format: 'code39',
    });
}

/* Barcode printer */
function printBarcode() {
    let printContent = document.getElementById('barcode').outerHTML;
    let originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent; // Replace body with barcode SVG   
    window.print();
    document.body.innerHTML = originalContent; // Restore content
}