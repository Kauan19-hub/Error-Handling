// Uma única função para o código funcionar, além da função 'enter'
function calcTotal() {
    const precoPrato = parseInt(document.getElementById('prato').value);
    const quantidade = parseInt(document.getElementById('qntd').value);
    const precoSobremesa = parseInt(document.getElementById('sobremesa').value);
    const precoBebida = parseInt(document.getElementById('bebida').value);
    // Função 'const' usada para melhor desempenho
   
        if (isNaN(precoPrato) && isNaN(precoBebida) && isNaN(precoSobremesa)) {
            document.getElementById('resultado').textContent = "Selecione pelo menos 1 item ou mais";
            return;

        }

        if (quantidade < 1 || quantidade > 10 || !Number.isInteger(quantidade)) {
            document.getElementById('resultado').textContent = "Inválido. O número precisa ser entre 1 e 10"
            return;

        }

        const total = ((precoPrato || 0) + (precoBebida || 0) + (precoSobremesa || 0)) * quantidade;
        document.getElementById('resultado').textContent = `Total a pagar: ${total.toFixed(2)}`;
 


    // Função 'enter' para registrar a resposta ao clicar no enter (forma mais rápida e prática)
    function enter(input, checkFunction) {
        const inputbox = document.getElementById(input)
        inputbox.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                checkFunction()

            }
        })
    };

    enter('qntd', calcTotal)
    
}