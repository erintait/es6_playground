import * as math from './math';
import { addToDom } from './helpers';

console.log('Math: ', math);

addToDom('h1', `23 + 67 = ${math.add(23, 67)}`);

addToDom('h1', `56 - 14 = ${math.subtract(56, 14)}`);

addToDom('h1', `12 * 5 = ${math.multiply(12, 5)}`);

addToDom('h1', `50 / 10 = ${math.divide(50, 10)}`);

addToDom('h1', `12 / 0 = ${math.divide(12, 0)}`);