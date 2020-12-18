// Get current hour of the day.
var currentHour = parseInt( moment().format( 'HH' ) );
// Get a JQuery object with all editable text areas.
var textAreas = $( ".description" );
// Add the current day to the header.
$( "#currentDay" ).text( moment().format('dddd, MMMM Do, YYYY') );
// Retrieve any stored data.
for ( var i = 9; i <= 17; i++ ) {
    var sched = "hour-" + i;
    var item;
    if ( item = localStorage.getItem( sched ) ) {
        $( `#${ sched }` ).text( item );
    }
}
// Iterate over all elements in textAreas to determine whether their current time is in the past, present, or future.
textAreas.each( function( index ) {
    var hourIndex = $( textAreas[ index ] ).attr( "data-index" );

    if ( hourIndex > currentHour ) {
        $( textAreas[ index ] ).addClass( "future" );
    } else if ( hourIndex < currentHour ) {
        $( textAreas[ index ] ).addClass( "past" );
    } else {
        $( textAreas[ index ] ).addClass( "present" );
    }
});
// Store the contents of a text area by clicking it's neighboring button.
$( ".saveBtn" ).click( function() {
    localStorage.setItem( $( this ).prev().attr( "id" ), $( this ).prev().text() );
})
// Save disc in the save button now turns black when mouse enters it's button, and turns white again when mouse leaves.
$( ".saveBtn" ).hover( function( event ) {
    $( event.target ).children().first().attr( "fill", "black" );
}, function( event ) {
    $( event.target ).children().first().attr( "fill", "white" );
});
// Add the cool clicking effect to mimic a real-life button press.
$( ".saveBtn" ).mousedown( function( event ) {
    $( this ).css( "border-style", "inset" );
    $( this ).css( "background-color", "#00657c" );
});
$( ".saveBtn" ).mouseup( function( event ) {
    $( this ).css( "border-style", "outset" );
    $( this ).css( "background-color", "#06AED5" );
});