var story = {
    "start": {
        "text": "This is your life. You can either fulfill your purpose or totally screw it up. Which will it be, 'purpose' or 'screwed'?",
        "choices": [ "purpose","screwed" ]
    },
    "purpose": {
        "text": "You have chosen the path of least resistance. Enjoy your magic carpet ride. You are walking barefoot through a beautiful garden. You see trees and flowers of every kind and every color. There are natural streams with crystals and stones everywhere you look. The sun is shining.  You feel peaceful as you approach a crystal-clear waterfall. Will you walk 'through' it or 'around' it?",
        "choices": [ "through","around" ]
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


var  runStory = function runStory( branch ){
    var chapter = story[branch];
    var choices = chapter.choices;
    var choice = prompt( chapter.text );

    if( choice === choices[0] ){
    // follow purpose
        choice = prompt( story[choice].text );

        if( choice === story[choices[0]].choices[0] ){
            // through - game over
            document.querySelector( "#output" ).textContent = story[choice].text;
        }
        else if( choice === story[choices[0]].choices[1] ){
            // around - game over
            document.querySelector( "#output" ).textContent = story[choice].text;
        }
        else{
            // handle bad input to run story again but not from start
            runStory( choices[0] );
        }
    }
    else if( choice === choices[1]  ){
    // follow screwed
        choice = prompt( story[choice].text );

        if( choice === story[choices[1]].choices[1] ){
            // game over - output
            document.querySelector( "#output" ).textContent = story[choice].text;
        }
        else if( choice === story[choices[1]].choices[0] ){
            // guides - game over
            document.querySelector( "#output" ).textContent = story[choice].text;
        }
        else{
            // handle bad input to run story again but not from start
            runStory( choices[1] );
        }
    }
    else{
        // handle bad choice by re-running the story from the beginning
        runStory( branch );
    }
};

runStory( "start" );
