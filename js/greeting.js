/* eslint-disable no-console */

var hello = "hello";
var originalName = prompt( "What's your name?" );

var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "Didn't catch that. What's your name?" );

        checkUserName( userName );
    }
    else{
        originalName = userName;
    }
};

checkUserName( originalName );

document.querySelector( "#subheader" ).textContent = "Hello, " + originalName;
