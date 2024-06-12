let count = 0;

function increment() {
    count++;
    document.getElementById('counter').innerText = count;
}

// Função de teste que pode ser chamada manualmente no console do navegador
function testCounter() {
    // Resetar o contador
    count = 0;
    increment();
    if (count !== 1) {
        console.error('Teste falhou: O contador não incrementou corretamente.');
    } else {
        console.log('Teste passou: O contador incrementou corretamente.');
    }

    increment();
    if (count !== 2) {
        console.error('Teste falhou: O contador não incrementou corretamente.');
    } else {
        console.log('Teste passou: O contador incrementou corretamente.');
    }
}

// Instruções para chamar a função de teste
console.log('Para testar o contador, abra o console do navegador e chame a função testCounter().');