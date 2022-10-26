# Frontend oppgaver

### Oppgave 1
**Legg til flere oppgaver i listen**
Når du trykke på pluss-knappen (`<button>`) skal addNewTask-funksjonen kjøres, hvor det skal legges til en ny oppgave i oppgave-listen. Navnet på oppgaven skal være det som står i input-feltet (`<input type="text">`). Oppgaven skal legges i tasks.

***Hint***
 - Push (https://www.w3schools.com/jsref/jsref_push.asp)
 - Event på button (Se https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf --> Actions/Events)

***Bonus***
 - Tøm input-feltet når den nye oppgaven er lagt til i tasks.
 - Kjør addNewTask funksjonen når du trykker enter mens du skriver i input-feltet. Se https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf

### Oppgave 2
**Legg nye oppgaver til i databasen**
Endre addNewTask-funskjonen til å bruke addTask-funksjonen som er kommentert ut.
 ```sh
 addNewTask() {
     return addTask(task)
        .then(newTask => {
            // Koden fra oppgave 1
        });
}
 ```

### Oppgave 3
**Endre getTasks til å bruke backend**
Bruk koden som er kommentert ut i get-tasks.js-filen. Resten kan fjernes.
Sjekk at alt fortsatt fungerer som det skal.

### Oppgave 4
**Oppdater oppgaven**
Når du trykker på avmerkingsboksen `<input type="checkbox">`) til en oppgave skal verdien av completed endres, og lagres i databasen. Bruk updateTask-funksjonen som er kommentert ut i changeTask-funksjonen.

***Hint***
 - @change på avmerkingsboks
 - Completed skal settes til den motsatte verdien av det den var. For å få den motsatte verdien av en boolean, kan man skrive et utropstegn (!) foran verdien.
```sh
task.completed = !task.completed
```


### Ekstra-oppgaver
- Endre styling etter eget ønske (farger, gradienter, animasjoner, bilder)
- Redigere gjøremål
- Legge til mer data på hvert gjøremål
    - Dato
    - Tid
    - Sted
    - Notat
    - Url
- Filtrere gjøremål
    - Vise/skjule ferdige gjøremål
- Statistikk
    - Totalt antall gjøremål
    - Antall uferdige gjøremål
    - Antall ferdige gjøremål
- Kategorisere gjøremål
    - Kategori
    - Legge til farger
    - Legge til ikoner
- Slett gjøremål
    - Slett ett gjøremål
    - Slett alle gjøremål
    - Slett alle ferdige gjøremål
- Sette prioritet på gjøremål
- Sortere gjøremål etter prioritet
