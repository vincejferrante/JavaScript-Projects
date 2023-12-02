const card_obj = {
    // Diamonds
    "Ace_of_Diamonds": 11,
    "Two_of_Diamonds": 2,
    "Three_of_Diamonds": 3,
    "Four_of_Diamonds": 4,
    "Five_of_Diamonds": 5,
    "Six_of_Diamonds": 6,
    "Seven_of_Diamonds": 7,
    "Eight_of_Diamonds": 8,
    "Nine_of_Diamonds": 9,
    "Ten_of_Diamonds": 10,
    "Jack_of_Diamonds": 10,
    "Queen_of_Diamonds": 10,
    "King_of_Diamonds": 10,

    // Hearts
    "Ace_of_Hearts": 11,
    "Two_of_Hearts": 2,
    "Three_of_Hearts": 3,
    "Four_of_Hearts": 4,
    "Five_of_Hearts": 5,
    "Six_of_Hearts": 6,
    "Seven_of_Hearts": 7,
    "Eight_of_Hearts": 8,
    "Nine_of_Hearts": 9,
    "Ten_of_Hearts": 10,
    "Jack_of_Hearts": 10,
    "Queen_of_Hearts": 10,
    "King_of_Hearts": 10,

    // Clubs
    "Ace_of_Clubs": 11,
    "Two_of_Clubs": 2,
    "Three_of_Clubs": 3,
    "Four_of_Clubs": 4,
    "Five_of_Clubs": 5,
    "Six_of_Clubs": 6,
    "Seven_of_Clubs": 7,
    "Eight_of_Clubs": 8,
    "Nine_of_Clubs": 9,
    "Ten_of_Clubs": 10,
    "Jack_of_Clubs": 10,
    "Queen_of_Clubs": 10,
    "King_of_Clubs": 10,

    // Spades
    "Ace_of_Spades": 11,
    "Two_of_Spades": 2,
    "Three_of_Spades": 3,
    "Four_of_Spades": 4,
    "Five_of_Spades": 5,
    "Six_of_Spades": 6,
    "Seven_of_Spades": 7,
    "Eight_of_Spades": 8,
    "Nine_of_Spades": 9,
    "Ten_of_Spades": 10,
    "Jack_of_Spades": 10,
    "Queen_of_Spades": 10,
    "King_of_Spades": 10,
};

const button = document.querySelector(".btn");



function drawCard(deck){
    const randomIndex = Math.floor(Math.random() * deck.length);
    const selectedCard = deck[randomIndex];
    deck.splice(randomIndex, 1); // Remove the selected card from the deck
    return selectedCard;
}

function Cards(){
    const cardNames = Object.keys(card_obj);
    const deck = cardNames.slice(); // Copy the array to create a deck

    const random_card1 = drawCard(deck);
    const random_card2 = drawCard(deck);
    const random_card3 = drawCard(deck);
    const random_card4 = drawCard(deck);

    //Selecting random cards
    const dealerCard1 = [random_card1, card_obj[random_card1]];
    const UserCard1 = [random_card2, card_obj[random_card2]];
    const dealerCard2 = [random_card3, card_obj[random_card3]];
    const UserCard2 = [random_card4, card_obj[random_card4]];

    //The Dealers and Users hands
    const UserCards = UserCard1.concat(UserCard2)
    const DealerCards = dealerCard1.concat(dealerCard2)

    const Users_Hand_Total = DealerCards.reduce((sum, card) => sum + (typeof card === "number" ? card : 0), 0);
    const Dealers_Hand_Total = UserCards.reduce((sum, card) => sum + (typeof card === "number" ? card : 0), 0);

    console.log("Dealer's Hand:")
    console.log(DealerCards, Dealers_Hand_Total)
    console.log("User's Hand:")
    console.log(UserCards, Users_Hand_Total)

    let user_new_total = Users_Hand_Total
    //Dealer Hits
    let dealer_hits = 0;
    let Dealers_New_Total = Dealers_Hand_Total

    button.addEventListener("click", ()=> {
        let user_new_Card = drawCard(deck);
        let user_newhand = [user_new_Card, card_obj[user_new_Card]];
        user_new_total+=user_newhand[1]
        console.log(user_new_total)

   
        //Dealer new hand
        if (17 > Dealers_New_Total) {
            let new_Card = drawCard(deck);
            let newhand = [new_Card, card_obj[new_Card]];
            Dealers_New_Total+=newhand[1]
            dealer_hits+=1
            console.log("New Card: ", newhand[0])
            console.log("New Total", Dealers_New_Total)
            console.log("Dearler Hits: ", dealer_hits)
        }
    })

    
    
    
    //console.log(Dealers_Hand_Total)
    
    //console.log(Mycards())
    if (Users_Hand_Total > Dealers_New_Total || Dealers_New_Total > 21){
        console.log("You win")
    } else if (Users_Hand_Total === Dealers_New_Total){
        console.log("It's a Tie")
    } 
    
}

Cards()
