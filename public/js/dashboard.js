$(document).ready(function() {
	Materialize.fadeInImage('.list-new-orders');
	Materialize.fadeInImage('.list-category-products');
  Materialize.fadeInImage('.list-events');
	$('.modal-trigger').leanModal();
	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
      }
  	);
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15,
    container: 'body' // Creates a dropdown of 15 years to control year
  });
});							
