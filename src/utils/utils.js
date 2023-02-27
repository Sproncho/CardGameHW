export class CardClass {
    constructor(suit,num) {
        this.suit=suit;
        this.num=num;
    }
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
export function generateDeck(){
    const cards=[];
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 13; j++) {
            cards.push(new CardClass(i,j));
        }
    }
    shuffle(cards);
    const deck = {
        firstPlayerCards : cards.slice(0,26),
        secondPlayerCards: cards.slice(26,52)
    }
    return deck;
}