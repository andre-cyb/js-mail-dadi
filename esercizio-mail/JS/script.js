// CHIEDO LA MAIL fatto
// CREO UN ARRAY CON LA LISTA DELLE MAIL PRESENTI  fatto
// CONTROLLO SE NELLA LISTA HO LA MAIL CHE HA INSERITO  
// STAMPO OUTPUT CON ESITO DEL CONTROLLO

const listaMail = ["pippo@gmail.com", "boolean@gmail.com", "dipende@gmail.com", "florian@gmail.com", "clelia@gmail.com", "flavio@gmail.com", "alessandro@gmail.com"];
let promptEmail = prompt("Inserisci la tua e-mail");
console.log(listaMail);
/* let mailTrue = true;
let mailFalse = false; */

for (i = 0; i < listaMail.length; i++) {
    listaMail[i];
    const mailCorrente = listaMail[i];
    console.log(" posizione " + i + ": " + listaMail[i]);

    if (promptEmail === mailCorrente) {
        console.log("email corretta");

    } if (promptEmail !== mailCorrente) {
        console.log("email errata");

    }
}



// NON RIESCO A STAMPARE SOLO UN RISULATO NEL CONSOLE.LOG


