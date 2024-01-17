var massaMark = 78; // em Kg
var alturaMark = 1.69; // Em metros

var massaJohn = 92;
var alturaJohn = 1.96;

var IMCMark = massaMark / (alturaMark * alturaJohn);
var IMCJohn = massaJohn / (alturaJohn * alturaJohn);

console.log("IMC do Mark:", IMCMark);
console.log("IMC do John:", IMCJohn);

var markIMCMaior = IMCMark > IMCJohn;

console.log("O IMC de Mark é maior que o de John? ", markIMCMaior);