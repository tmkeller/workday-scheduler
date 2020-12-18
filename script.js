var currentHour = parseInt( moment().format( 'HH' ) );
var hourHeaders = $( ".hour" );

// Retrieve any stored data.
for ( var i = 9; i <= 17; i++ ) {
    var sched = "hour-" + i;
    var item;
    if ( item = localStorage.getItem( sched ) ) {
        $( `#${ sched }` ).text( item );
    }
}

hourHeaders.each( function( index ) {
    var hourIndex = $( hourHeaders[ index ] ).attr( "data-index");

    if ( hourIndex > currentHour ) {
        $( hourHeaders[ index ] ).next().addClass( "future" );
    } else if ( hourIndex < currentHour ) {
        $( hourHeaders[ index ] ).next().addClass( "past" );
    } else {
        $( hourHeaders[ index ] ).next().addClass( "present" );
    }
});

$( ".saveBtn" ).click( function() {
    localStorage.setItem( $( this ).prev().attr( "id" ), $( this ).prev().text() );
})

$( "#currentDay" ).text( moment().format('dddd, MMMM Do, YYYY') );

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