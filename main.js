/* creazione array lista della spesa */
const list = [
  "Pane",
  "Pasta",
  "Uova",
  "Insalata",
  "Frutta",
  "Merendine",
  "Formaggio",
  "Prosciutto",
  "Caffé",
];

/* inizializzazione singolo elemento */
let i = 0;
/* seleziono elemento nella lista */
const ulElement = document.querySelector(".list");
/* ciclo while */
while (i < list.length) {
  console.log(list[i]);
  const listItem = document.createElement("li");
  listItem.innerHTML = list[i];
  ulElement.append(listItem);
  i++;
}
