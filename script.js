var dayDate = moment().format('dddd, MMMM Do, YYYY');
$( "#currentDay" ).text( dayDate );

$( ".saveBtn" ).hover( function( event ) {
    $( event.target ).children().first().attr( "fill", "black" );
}, function( event ) {
    $( event.target ).children().first().attr( "fill", "white" );
});

$( ".saveBtn" ).mousedown( function( event ) {
    $( this ).css( "border-style", "inset" );
    $( this ).css( "background-color", "#00657c" );
});

$( ".saveBtn" ).mouseup( function( event ) {
    $( this ).css( "border-style", "outset" );
    $( this ).css( "background-color", "#06AED5" );
});