var dayDate = moment().format('dddd, MMMM Do, YYYY');
var currentHour = parseInt( moment().format( 'HH' ) );

var hourHeaders = $( ".hour" );

hourHeaders.each( function( index ) {
    var hourIndex = $( hourHeaders[ index ] ).attr( "data-index");
    if ( hourIndex < 13 ) {
        $( hourHeaders[ index ] ).text( `${ hourIndex }AM` );
    } else {
        $( hourHeaders[ index ] ).text( `${ hourIndex - 12 }PM` );
    }

    if ( hourIndex > currentHour ) {
        $( hourHeaders[ index ] ).next().addClass( "future" );
    } else if ( hourIndex < currentHour ) {
        $( hourHeaders[ index ] ).next().addClass( "past" );
    } else {
        $( hourHeaders[ index ] ).next().addClass( "present" );
    }
});

$(".saveBtn").click(function () {
    console.log( $( this ).prev().text() );
})

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