let valor = Number(prompt("Digite o valor da compra"));

parcelado= valor/5 ;


document.write(`Você deve pagar 5 parcelas de ${parcelado.toFixed(2)}R$`)