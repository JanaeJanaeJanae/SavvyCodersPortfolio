/* global $ */

var postsRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $content = $( ".content" );


postsRequest
    .then(
        ( posts ) => posts
            .map(
                ( post ) => "<p>" + post.title + "</p>"
            )
            .forEach(
                ( title ) => $content.append( title )
            )
    )
    .catch(
        () => $content.text( "There was an error!" )
    );

// **for tomorrow 12/5
// could attach an event to this request then handle the data that comes back
// post data to an api that showed a bunch of books
