/* global $ */

$( "#input" ).on(
    "keypress",
    ( event ) => {
        var value =  $( event.target ).val();
        var $subheader = $( "#subheader" );

        $subheader.html( "<h3>Hello, " + value + "</h3>" );
    }
);

// /* eslint-disable no-console */

//
// var originalName = prompt( "What's your name?" );
//
// var checkUserName = function checkUserName( userName ){
//     if( !userName || userName === " " ){
//         userName = prompt( "Didn't catch that. What's your name?" );
//
//         checkUserName( userName );
//     }
//     else{
//         originalName = userName;
//     }
// };
//
// checkUserName( originalName );
//
// // document.querySelector( "#subheader" ).textContent = "Hello, " + originalName;
//
// $( "#subheader" )..html (
//     "<h3>Hello, " + originalName + "</h3>"
//   );

// function saysClick(){
//     console.log( "click!" );
// }


$( "h1" )
    .on( "dblclick", ( event ) => event.target.textContent = "I've been clicked twice!" );
