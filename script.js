const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 700;
// Aquí es donde puedes empezar a dibujar tu imagen utilizando métodos de canvas

document.fonts.load('bold 72px "Poppins"').then(drawText);
function drawText() {
  // Configura el estilo del texto
  ctx.font = 'bold 140px "Poppins"';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'red';
  // Dibuja el texto
  ctx.fillText('Pomo Timer', canvas.width / 2, canvas.height / 2);
}

// Descargar la imagen
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "mi-imagen.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
