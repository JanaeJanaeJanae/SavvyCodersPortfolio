/* global $ */
var $output = $( "#output" );
var $subtitle = $( "<h3>I'm pretty grossed out!</h3>" );

$output
    .html( "<h1>Ewww a bug!</h1>" )
    .css( {
        "color": "deeppink",
        "font-size": "175%",
        "margin-left": "200px"
    } )

    .append( $subtitle )
    .fadeOut( 3000 )
    .fadeIn()
    .animate( {
        "margin-top": "20%"
    }, {
        "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( "color","violet" );
        }
    } )
;
