const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;
// Aquí es donde puedes empezar a dibujar tu imagen utilizando métodos de canvas

// Dibujar un cuadrado con esquinas redondeadas
const cornerRadius = 100; // radio de las esquinas redondeadas
ctx.beginPath();
ctx.moveTo(cornerRadius, 0);
ctx.arcTo(canvas.width, 0, canvas.width, canvas.height, cornerRadius);
ctx.arcTo(canvas.width, canvas.height, 0, canvas.height, cornerRadius);
ctx.arcTo(0, canvas.height, 0, 0, cornerRadius);
ctx.arcTo(0, 0, canvas.width, 0, cornerRadius);
ctx.closePath();

// Crear un degradado lineal
let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, 'white'); // color en la parte superior
gradient.addColorStop(1, 'lightgray'); // color en la parte inferior

ctx.fillStyle = gradient;
ctx.fill();

// Dibujar un aro en el medio
const circleRadius = 180; // radio del aro
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, circleRadius, 0, 2 * Math.PI, false);
ctx.lineWidth = 30; // ancho del aro
ctx.strokeStyle = 'gray'; // color del aro
ctx.lineCap = 'round'; // redondear los extremos de las líneas
ctx.stroke();

// Dibujar una porción del aro en gris
const startAngle = Math.PI * 0.825; // corresponde a las 12 en un reloj
const endAngle = Math.PI * 1.5; // corresponde a las 8 en un reloj
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, circleRadius, startAngle, endAngle, true);
ctx.strokeStyle = 'red'; // color de la porción del aro
ctx.shadowColor = 'red'; // color del sombreado
ctx.shadowBlur = 5; // cantidad de desenfoque del sombreado
ctx.shadowOffsetX = 0; // desplazamiento horizontal del sombreado
ctx.shadowOffsetY = 0; // desplazamiento vertical del sombreado
ctx.stroke();

// Agregar texto en el medio del aro
ctx.font = 'bold 130px Poppins'; // tamaño y tipo de letra
ctx.fillStyle = 'white'; // color del texto
ctx.textAlign = 'center'; // alineación horizontal del texto
ctx.textBaseline = 'middle'; // alineación vertical del texto
ctx.fillText('0:14', canvas.width / 2, canvas.height / 2); // texto y posición

// Cargar la imagen
let img = new Image();
img.src = 'images/timer.png'; // reemplaza esto con la ruta a tu imagen
img.onload = function() {
  // Guardar el estado actual del contexto del canvas
  ctx.save();

  // Desactivar la sombra
  ctx.shadowColor = 'transparent';

  // Dibujar la imagen en la esquina inferior derecha del canvas
  let imgWidth = 110; // puedes ajustar esto para cambiar el tamaño de la imagen
  let imgHeight = 150; // puedes ajustar esto para cambiar el tamaño de la imagen
  let x = 305;
  let y = 315;
  ctx.drawImage(img, x, y, imgWidth, imgHeight);

  // Restaurar el estado del contexto del canvas
  ctx.restore();
};


// Descargar la imagen
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "mi-imagen.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
