const form = document.getElementById('idFormulario');

function gotoInit() {
    window.location.href = "index.html";
}

// URL de la hoja de cálculo
const spreadsheetUrl = "https://sheet.best/api/sheets/2d2624b0-e57b-4664-aba5-53219f80f1b8";

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const numContratc = document.getElementById('input-numContratc').value;
  const link = document.getElementById('input-link').value;

  const data = {
    "NroContrato": numContratc,
    "Link SECOP II": link
  };

  fetch(spreadsheetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    
  })

  document.getElementById('input-numContratc').value = '';
  document.getElementById('input-link').value = '';
  window.location.href = "exitoso.html";
});

