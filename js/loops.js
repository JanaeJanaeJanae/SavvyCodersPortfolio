/* eslint-disable complexity, no-console, vars-on-top */
var generateEvenListItems = function generateEvenListItems(){
    var evens = document.querySelector( "#evens" );
    var listItemString = "";

    for( var i = 1; i <= 10; i++ ){
        listItemString += "<li>";
        listItemString += i * 2;
        listItemString += "</li>";
    }

    evens.innerHTML = listItemString;
};


var fizzBuzzResult = "";
var fizzBuzz = function fizzBuzz( num ){
    if( num % 15 === 0 ){
        fizzBuzzResult += ", FizzBuzz";
    }
    else if( num % 3 === 0 ){
        fizzBuzzResult += ", Fizz";
    }
    else if( num % 5 === 0 ){
        fizzBuzzResult += ", Buzz";
    }
    else if( num === 1 ){
        fizzBuzzResult += num;
    }
    else{
        fizzBuzzResult += ", " + num ;
    }
};

var fizzBuzzLightyear = function fizzBuzzLightyear( limit ){
    for( var i = 1; i <= limit; i++ ){
        fizzBuzz( i );
    }
};

var makeListItems = function makeListItems(){
    var listItems = document.querySelectorAll( "li" );

    for( var i = 0; i < listItems.length; i++ ){
        listItems[i].textContent = i + 1;
    }
};

makeListItems();
generateEvenListItems();
fizzBuzzLightyear( 100 );

document
    .querySelector( "#fizzbuzz" )
    .textContent = fizzBuzzResult;
