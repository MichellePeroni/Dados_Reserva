var codigoIngresso = "ABC123";
var nomeEvento = "Concerto XYZ";
var valorIngresso = 50.0;
var quantidadeIngressos = 2;

var totalReserva = valorIngresso * quantidadeIngressos;

document.getElementById("codigoIngresso").innerText = codigoIngresso;
document.getElementById("nomeEvento").innerText = nomeEvento;
document.getElementById("valorIngresso").innerText = valorIngresso.toFixed(2);
document.getElementById("quantidadeIngressos").innerText = quantidadeIngressos;
document.getElementById("totalReserva").innerText = totalReserva.toFixed(2);
