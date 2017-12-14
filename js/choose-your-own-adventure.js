/* eslint-disable no-use-before-define */

var story = {
    "start": {
        "text": "This is your life. You can either fulfill your purpose or totally screw it up. Which will it be, 'purpose' or 'screwed'?",
        "choices": [ "purpose","screwed" ]
    },
    "purpose": {
        "text": "You have chosen the path of least resistance. Enjoy your magic carpet ride. You are walking barefoot through a beautiful garden. You see trees and flowers of every kind and every color. There are natural streams with crystals and stones everywhere you look. The sun is shining.  You feel peaceful as you approach a crystal-clear waterfall. Will you walk 'through' it or 'around' it?",
        "choices": [ "through","around", "guides" ]
    },
    "screwed": {
        "text": "You're starting your journey at the base of a mountain. The good news is, the only way is up.  Will you call on your 'guides' for help or go it 'alone'?",
        "choices": [ "guides","alone" ]
    },
    "alone": {
        "text": "Well, you really screwed that up. Now, didn't you?"
    },
    "through": {
        "text": "You are now walking your purpose. Woohoo."
    },
    "guides": {
        "text": "Great! That was the only way you were going to make it up that mountain. You made it!"
    },
    "around": {
        "text": "I mean...you can't always go around things in life, but hey...you still made it. Congratulations!"
    }
};


function validateChoice( choice, choices ){
    var isValidChoice = false;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}

function handleChoices( chapter, branch ){
    var choice = prompt( chapter.text );

    if( validateChoice( choice, chapter.choices ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
}

runStory( "start" );
