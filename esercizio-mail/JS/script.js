// CHIEDO LA MAIL fatto
// CREO UN ARRAY CON LA LISTA DELLE MAIL PRESENTI  fatto
// CONTROLLO SE NELLA LISTA HO LA MAIL CHE HA INSERITO  
// STAMPO OUTPUT CON ESITO DEL CONTROLLO

let promptEmail = prompt("Inserisci la tua e-mail");
const listaMail = ["pippo@gmail.com", "boolean@gmail.com", "dipende@gmail.com", "florian@gmail.com", "clelia@gmail.com", "flavio@gmail.com", "alessandro@gmail.com"];

/* console.log(listaMail); */


for (i = 0; i < listaMail.length; i++) {
    listaMail[i];
    console.log(" posizione " + i + " Elemento: " + listaMail[i]);
    const mailCorrente = listaMail[i];



    if (promptEmail === mailCorrente) {
        console.log("email corretta");
        /* alert("Benvenuto"); */
    }

    if (promptEmail !== mailCorrente) {
        console.log("email errata");
        /* alert("errore"); */
    }


}

// NON RIESCO A STAMPARE SOLO UN RISULATO NEL CONSOLE.LOG


