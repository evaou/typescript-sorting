import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sort = new Sorter(numbersCollection);
// sort.sort();
// console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('Xaayb');
const sort = new Sorter(characterCollection);
sort.sort();
console.log(characterCollection.data);
