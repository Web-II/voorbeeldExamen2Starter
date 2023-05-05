'use strict';
/**
 * ===== Vraag 2 [12 punten]=====
 * 2.1 Voeg value1, value2 vooraan toe aan arr en voeg values achteraan toe,
 * zodat je de volgende array bekomt:
 *    [10, '', undefined, 'test', Infinity, Array(0), 0, 'def', null, 'true', false]
 
 * 2.2 Gebruik reduce() en de conditional (ternary) operator om te tellen 
 * hoeveel elementen uit arr er een bools equivalent true hebben.
 * Ken het resultaat toe aan een variabele 'aantal'.
 * Voor deze vraag mag je dus geen for-loop en
 * geen gewoon if-statement gebruiken!
 */

let arr = [undefined];
const value1 = 10;
const value2 = '';
const values = ['test', Infinity, [], 0, 'def', null, 'true', false];

// Oplossing 2.1

// Voorbeeld
console.log(arr); // [10, '', undefined, 'test', Infinity, Array(0), 0, 'def', null, 'true', false]

// Oplossing 2.2

// Voorbeeld
console.log(aantal); // 6
