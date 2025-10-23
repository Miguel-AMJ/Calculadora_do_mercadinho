function calcularDesconto(valorCompra) {
    let descontoPercentual = 0;

    if (valorCompra > 500) {
        descontoPercentual = 20;
    } else if (valorCompra > 300) {
        descontoPercentual = 15;
    } else if (valorCompra > 100) {
        descontoPercentual = 10;
    }

    const valorDesconto = valorCompra * (descontoPercentual / 100);
    const valorFinal = valorCompra - valorDesconto;

    return {
        valorCompra,
        descontoPercentual,
        valorDesconto,
        valorFinal
    };
}

const resultado = calcularDesconto(250);
console.log(resultado);
