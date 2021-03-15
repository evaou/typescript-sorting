import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
const sort = new Sorter(numbersCollection);
sort.sort();
console.log(numbersCollection.data);
