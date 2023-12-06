//Variáveis
let balance = 0;

//Laço de repetição e Operadores
for(let victory = 3; victory < 110; victory += 10) {
    balance = balanceVictoryDefeat(victory, 2);
    //Saída
    console.log(`O Herói tem de saldo ${balance} e está no nível ${getLevel(balance)}`);
} 

//Funções
function balanceVictoryDefeat(v, d) {
    return v - d;
}
function getLevel(b) {
    //Estruturas de decisões
    if(b <= 10)
        return "Ferro";
    if(b <= 20)
        return "Bronze";
    if(b <= 50)
        return "Prata";
    if(b <= 80)
        return "Ouro";
    if(b <= 90)
        return "Diamante";
    if(b <= 100)
        return "Lendário";
    return "Imortal";
}