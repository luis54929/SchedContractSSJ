

var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
document.onreadystatechange = function () {
  myModal.show();
};

const formulario = document.getElementById('idBuscador')
formulario.addEventListener('submit',(e)=>{
  e.preventDefault();
});
function irAAddContract() {
    window.location.href = "addContract.html";
}