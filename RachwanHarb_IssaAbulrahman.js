// // Ex 1

// // declare a variable and ask for the number of keys and making sure it is integer
// var numberOfKeys = parseInt(prompt("How many keys do we have?"));

// // use switch case to check the numberOfKeys 
// switch(numberOfKeys) {
//     case 0: // we have the case of 0 and the output will be "we sank together"
//         alert("we sank together");
//         break; // will break or stop the switch case if the numberOfKeys is 0
    
//     case 30000: // we have the case of 30000 the output will be "we made it"
//         alert("we made it");
//         break; // will break or stop the switch case if the numberOfKeys 30000

//     default:
//         alert("we need to swim a little bit more!"); // eveyting between 0 and 30000 will display "we need to swim a little bit more!"
// }

// // Ex 2
// // Let's say we have this unsorted array [5, 3, 7, 2, 4, 100, -8]

// var array = [5, 3, 7, 2, 3, 4, 100, -8]; // the array we have
// var minimum = array[0], maximum = array[0]; // let's assume that the first number is the min and the max and we will compare them with other number

// for(let i=1; i < array.length; i ++) { // will loop on the numbers of the array to do 2 checks
//     if(array[i] < minimum) { // if the number less than the minimum
//         minimum = array[i]; // will change the minimun into the new number
//     } else if (array[i] > maximum){ // if the number less than the minimum
//         maximum = array[i];
//     }
// }

// alert("min: " + minimum + ", max: " + maximum); // So will alert "min: -8, max: 100"

// Ex 3

for(let i=1; i <= 6 ;i++) { // we have 6 lines here to print, we use 1 not 0 because we will use it in the inside loop
    var line = ""; // we need to declare a deliver as a line for each time
    for(let j=1; j <= i ;j++) { // here we have form 1 star till 6 stars, start from 1 2 3 ... 6
        line += "*"; // here each time will update the line and assign it to line
    }
    console.log(line);// here will print the line and when do the for loop there will be no value
}