const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;
// Aquí es donde puedes empezar a dibujar tu imagen utilizando métodos de canvas



// Descargar la imagen
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "mi-imagen.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
