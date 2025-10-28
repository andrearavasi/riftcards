import type Card from './models/card';
import type Rank from './models/rank';
import type Suit from './models/suit';

const suits: Suit[] = [
   { id: 1, name: 'Hearts', code: 'H' },
   { id: 2, name: 'Diamonds', code: 'D' },
   { id: 3, name: 'Clubs', code: 'C' },
   { id: 4, name: 'Spades', code: 'S' }
];

const ranks: Rank[] = [
   { id: 1, name: 'Ace', code: 'A' },
   { id: 2, name: '2', code: '2' },
   { id: 3, name: '3', code: '3' },
   { id: 4, name: '4', code: '4' },
   { id: 5, name: '5', code: '5' },
   { id: 6, name: '6', code: '6' },
   { id: 7, name: '7', code: '7' },
   { id: 8, name: '8', code: '8' },
   { id: 9, name: '9', code: '9' },
   { id: 10, name: '0', code: '0' },
   { id: 11, name: 'Jack', code: 'J' },
   { id: 12, name: 'Queen', code: 'Q' },
   { id: 13, name: 'King', code: 'K' }
];

function createDeck(): Card[] {
   const deck: Card[] = [];
   for (const suit of suits) {
      for (const rank of ranks) {
         const card: Card = {
            id: `${rank.code}${suit.code}`,
            idSuit: suit.id,
            idRank: rank.id,
            codeSuit: suit.code,
            codeRank: rank.code,
            imageUrl: `https://deckofcardsapi.com/static/img/${rank.code}${suit.code}.png`
         };
         deck.push(card);
      }
   }
   return deck;
}

export const deck: Card[] = createDeck();