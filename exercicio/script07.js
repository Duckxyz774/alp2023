let custo = Number(prompt("Digite o custo do produto"));
let porc = Number(prompt("Digite a porcentagem da venda:"));


porcentagem = (porc/custo)*100;
venda = porcentagem + custo;


document.write(`O valor de venda é  ${venda}R$.`);


