function calcTotal() {
    let precoPrato = parseInt(document.getElementById('prato').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let precoSobremesa = parseInt(document.getElementById('sobremesa').value);
    let qtd = parseInt(document.getElementById('quantidade').value);
    let precoBebida = parseInt(document.getElementById('bebida').value);
    let quant= parseInt(document.getElementById('quantidade').value);

        if (precoPrato === "") {
            document.getElementById('resultado').textContent = "Selecione um prato"
            
        } else {
            let total = precoPrato * quantidade;
            document.getElementById('resultado').textContent = `Total a pagar: ${total.toFixed(2)}`
            console.log("passou")
          
        }

        if (precoSobremesa === "") {
            document.getElementById('resultado').textContent = "Selecione uma sobremes"

        } else {
            let total = precoSobremesa * qtd;
            document.getElementById('resultado').textContent = `Total a pagar: ${total.toFixed(2)}`
            console.log("passou")
          
        }

        if (precoBebida === "") {
            document.getElementById('resultado').textContent = "Selecione uma bebida"

        } else {
            let total = precoBebida * quant;
            document.getElementById('resultado').textContent = `Total a pagar: ${total.toFixed(2)}`
            console.log("passou")
          
        }

        if (quantidade < 0 && qtd < 0 && quant < 0 && quantidade > 10 && qtd > 10 && quant > 10) {
            document.getElementById('resultado').textContent = "Inválido. O número precisa ser 1 e 10"

        }

        if (!Number.isInteger(quantidade && qtd && quant)) {
              document.getElementById('resultado').textContent = "Inválido. O número precisa ser inteiro"

    }

    function enter(input, checkFunction) {
        const inputbox = document.getElementById(input)
        inputbox.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                checkFunction()

            }
        })
    };

    enter('quantidade', calcTotal)
    
}