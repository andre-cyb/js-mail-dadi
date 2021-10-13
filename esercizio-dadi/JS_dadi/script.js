// GENERARE NUMERO RANDOM DA 1 A 6 SIA PER IL COMPUTER SIA PER L'USER
// COMPARARE I NUMERI PER STABILIRE IL RISULTATO PIU' ALTO


let numberComputer = Math.ceil(Math.random() * 6);
let numberUser = Math.ceil(Math.random() * 6);




console.log("numero estratto Computer " + numberComputer);
console.log("numero estratto user " + numberUser);


if (numberComputer > numberUser) {
    console.log("il computer ha vinto");

} else if (numberUser > numberComputer) {
    console.log("L'user ha vinto");

} /* else (numberComputer = numberUser);
console.log("pareggio"); */
