//Introduction to Array;

//Creating an array;

let superhero = ['Spiderman', 'Sailor Moon', 'Scarlet Witch', 'Homelander', 'Batman'];

console.log('Hero: 1', superhero[0]);
console.log('Hero 2:', superhero[1]);
console.log('The last hero in my list:', superhero[superhero.length - 1]);

//Modifying array elements
superhero[3] = 'Iron Man';
superhero.push('Captain Planet');
//to remove the last one, see below.
superhero.pop();

console.log(superhero);

//Array Iteration;
for (let i=0; i < superhero.length; i++) {
    console.log("The hero is", superhero[i]);
}

superhero.forEach(function(hero) {
    console.log("This hero is", hero);
})

//Array methods

//length
console.log('Array length: ', superhero.length);

//indexOf
console.log('Index of a value:', superhero.indexOf('Sailor Moon'));

// includes 
console.log('Includes a value:', superhero.includes('Scarlet Witch'));

// join, joins the array separated by what in the (); here it's a ' - '; 
console.log('Joned array', superhero.join(' - '))

//slice (starting point, ending point)
let slicedARray = superhero.slice(1, 4);
console.log('Sliced Array:', slicedArray);
console.log(superhero);

//splice 
//2nd element is what you want to remove after
let removedElements = superhero.splice(2, 3);
console.log('Removed elements:', removedElements);
console.log(superhero);