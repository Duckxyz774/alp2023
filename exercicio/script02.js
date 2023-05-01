let valor1 = Number(prompt("Digite o primeiro valor"));
let valor2 = Number(prompt("Digite o segundo valor"));

let quant1 = Number(prompt("Digite a primeira quantidade"));
let quant2 = Number(prompt("Digite a segunda quantidade"));

let ipi = Number(prompt("Digite a porcentagem do imposto "));

vt = (valor1*quant1 + valor2*quant2)*(ipi/100 + 1);
vt=vt.toFixed(2);


document.write(`O valor total é ${vt}`)