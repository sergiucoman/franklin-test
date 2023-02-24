
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

intoCards(document.querySelector("main"));
