const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

console.log('=========================================');
console.log('        🎯 ADIVINHE O NÚMERO 🎯          ');
console.log('=========================================');
console.log('Estou pensando em um número entre 1 e 100.');
console.log('Tente adivinhar!\n');

function tentarAdivinhar() {
  rl.question('Digite seu palpite: ', (entrada) => {
    const palpite = parseInt(entrada);

    if (isNaN(palpite)) {
      console.log('Digite um número válido!\n');
      tentarAdivinhar();
      return;
    }

    tentativas++;

    if (palpite < numeroSecreto) {
      console.log(`⬆️  Muito baixo! Tente um número MAIOR.\n`);
      tentarAdivinhar();
    } else if (palpite > numeroSecreto) {
      console.log(`⬇️  Muito alto! Tente um número MENOR.\n`);
      tentarAdivinhar();
    } else {
      console.log('=========================================');
      console.log(`🏆 PARABÉNS! Você acertou!`);
      console.log(`O número era ${numeroSecreto}.`);
      console.log(`Você precisou de ${tentativas} tentativa(s).`);
      console.log('=========================================');
      rl.close();
    }
  });
}

tentarAdivinhar();
