document.addEventListener("DOMContentLoaded", () => {
        console.log("document succesfully loaded")


        const randomDeckofCards = makeDeckOfCards() ;
        console.log("random Deck: ", makeDeckofCards)
        
        
        //Todo: make random

        randomDeckOfCards.forEach((j, card) =>
            document.getElementById('stackOfCards').append(j + " & " + card)
        );
        //document.getElementById('btnClicky').addEventListener('click', btnClicky)
    }
    );
    

 function makeDeckofCards (){

    // make 52 cards, 4 suits, 13 per.

    // var = ... let or const
    // hard code arrayconst deck = [Kheart, qheart, jheart]

    const suits = ["❤️","♠️","♣️","♦️"]
    let deckOfCards= [];

    for (i = 1; i<=52; i++){

        //ex: fruits.foreach(fruit) => console.log(fruit));
        suits.forEach((suit) => {
            console.log(suit, i);
            deckOfCards.push(suit);
        })
    
    }

}
