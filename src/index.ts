import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sort = new Sorter(numbersCollection);
// sort.sort();
// console.log(numbersCollection.data);

// const characterCollection = new CharactersCollection('Xaayb');
// const sort = new Sorter(characterCollection);
// sort.sort();
// console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sort = new Sorter(linkedList);
sort.sort();
linkedList.print();
