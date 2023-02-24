function intoCards(main) {

 main.querySelectorAll(".rows > div")
 .forEach(column => {

   // first level is made up of columns
   column.className = "column"

   let card = document.createElement("div");

   // we need to create a card div
   card.className = "card";

   // move the picture
   column.querySelectorAll("div > p > picture ").forEach(inner => {
     card.appendChild(inner);
   });

   // move the text
   column.querySelectorAll("div > p  ").forEach(inner => {
     card.appendChild(inner);
   });

   column.appendChild(card)

 });

}

function pop(main) {
 main.querySelectorAll(".rows > .column").forEach(column => {
   column.style.display = "block";
 })
}

intoCards(document.querySelector("main"));

await new Promise(r => setTimeout(r, 50));

pop(document.querySelector("main"));
