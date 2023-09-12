// Ex 1

// declare a variable and ask for the number of keys and making sure it is integer
var numberOfKeys = parseInt(prompt("How many keys do we have?"));

// use switch case to check the numberOfKeys 
switch(numberOfKeys) {
    case 0: // we have the case of 0 and the output will be "we sank together"
        alert("we sank together");
        break; // will break or stop the switch case if the numberOfKeys is 0
    
    case 30000: // we have the case of 30000 the output will be "we made it"
        alert("we made it");
        break; // will break or stop the switch case if the numberOfKeys 30000

    default:
        alert("we need to swim a little bit more!"); // eveyting between 0 and 30000 will display "we need to swim a little bit more!"
}