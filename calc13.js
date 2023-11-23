/*  logica do botão, calcular apertando enter */
document.addEventListener("keypress", function(enter) {
    if(enter.key === 'Enter') {

        var btn = document.querySelector("#calculate");

      btn.click();
    }
  });

  
  /* base aliquota INSS
   
     faixaInicial: 0, faixaFinal: 1320, aliquota: 0.075,
     faixaInicial: 1320.01, faixaFinal: 2571.29, aliquota: 0.09,
     faixaInicial: 2571.30, faixaFinal: 3856.94, aliquota: 0.12,
     faixaInicial: 3856.95, faixaFinal: Infinity, aliquota: 0.14
 */

  /*  função para calcular o decimo terceiro */
  function calcularDecimoTerceiro() {
    const payment = Number(document.getElementById("pay").value);
    const months = Number(document.getElementById("month").value);

    const decimoTerceiro = (payment * months) / 12;

    document.getElementById("result").innerHTML = `Seu décimo terceiro será de: R$ ${decimoTerceiro.toFixed(2)}`;


    const firstParc = decimoTerceiro / 2;
    document.getElementById("firstParc").innerHTML = `Primeira parcela: R$ ${firstParc.toFixed(2)}`;

/*  aqui calcula a aliquota em cima do salario bruto */

    if (decimoTerceiro <= 1320) {
        const desconto = Number((7.5 * payment) / 100);
        const secondParc = Number(firstParc - desconto);
        document.getElementById("secondParc").innerHTML =  `Segunda parcela: R$ ${secondParc.toFixed(2)}`;
        document.getElementById("descont").innerHTML =  `Desconto INSS: R$ ${desconto.toFixed(2)}`;
    } 
    
    else if (decimoTerceiro >= 1320.01 && decimoTerceiro <= 2571.29) {
        const desconto = Number((9 * payment) / 100);
        const secondParc = Number(firstParc - desconto);
        document.getElementById("secondParc").innerHTML =  `Segunda parcela: R$ ${secondParc.toFixed(2)}`;
        document.getElementById("descont").innerHTML =  `Desconto INSS: R$ ${desconto.toFixed(2)}`;
    } 
      
    else if (decimoTerceiro >= 2571.30 && decimoTerceiro <= 3856.94) {
        const desconto = Number((12 * payment) / 100);
        const secondParc = Number(firstParc - desconto);
        document.getElementById("secondParc").innerHTML =  `Segunda parcela: R$ ${secondParc.toFixed(2)}`;
        document.getElementById("descont").innerHTML =  `Desconto INSS: R$ ${desconto.toFixed(2)}`;
    } 

      else if (decimoTerceiro >= 3856.95) {
        const desconto = Number((14 * payment) / 100);
        const secondParc = Number(firstParc - desconto);
        document.getElementById("secondParc").innerHTML =  `Segunda parcela: R$ ${secondParc.toFixed(2)}`;
        document.getElementById("descont").innerHTML =  `Desconto INSS: R$ ${desconto.toFixed(2)}`;
      }
      
      else if (payment < 0 || months <= 0 || months > 12) {
        document.getElementById("result").innerHTML = "Valores invalidos. Verifique o salário e a quantidade de meses trabalhados.";
    }
  
  }