
let cards = document.querySelectorAll(".cards");
// Initialize variables to keep track of the previously clicked card and its name element
let previousCard, previousName;
let go = false;  // Flag to track if a card has been clicked before

for (let card of cards) {
    card.addEventListener('click', () => {
        // If a card has been clicked before, remove the classes from the previous card and name element
        if (go) {
            if(card==previousCard){
                previousCard.classList.toggle("card2");
                previousName.classList.toggle("visibility");
            }
            else{
                previousCard.classList.remove("card2");
                previousName.classList.remove("visibility");
            }
        }
        go = true;  // Set the flag to true after the first click

        // Find the .cardName element within the clicked card
        let name = card.querySelector(".cardName");

        // If the clicked card is not the same as the previous one, add the classes to the current card
        if (card != previousCard) {
            card.classList.add("card2");
            name.classList.add("visibility");
        }

        // Update the previousCard and previousName variables with the current card and name element
        previousCard = card;
        previousName = name;
    });
}
