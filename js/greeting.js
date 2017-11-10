/* eslint-disable no-console */

var hello = "hello";
var userName = prompt( "What's your name?" );
var checkUserName = function checkUserName(){
    if( !userName || userName === " " ){
        userName = prompt( "Didn't catch that. What's your name?" );
        checkUserName();
    }
};

checkUserName();

alert( hello + " " + userName );
