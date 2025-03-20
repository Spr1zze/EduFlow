/* Barcode popupform */
function openPopupLogin() {
    document.getElementById("popup-login").classList.add("active");
}

function closePopupLogin() {
    document.getElementById("popup-login").classList.remove("active");
}


// TESTING BUTTONS
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("testing").addEventListener("click", function() {
      alert("Does it work?");
  });
});




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


/* Barcode popupform */
function openPopupBarcode() {
  document.getElementById("popup-barcode").classList.add("active");
}

function closePopupBarcode() {
  document.getElementById("popup-barcode").classList.remove("active");
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



/* Chart testing */
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },

    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
}); 