/*
	Radius by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$headerr = $('#headerr'),
			$headerl = $('#headerl'),
			$footer = $('#footer');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			$header.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');

				button.click(function(e) {

					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});

			});


			$headerr.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');

				button.click(function(e) {

					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});

			});


			$headerl.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');

				button.click(function(e) {

					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});

			});



		// Footer.
			$footer.each( function() {

				var t 		= jQuery(this),
					inner 	= t.find('.inner'),
					button 	= t.find('.info');

				button.click(function(e) {
					t.toggleClass('show');
					e.preventDefault();
				});

			});

	});

})(jQuery);


var count=0;
var yr=0;
var month=0;
function TmyFunction()
{	
	// alert("Way to go!");
	document.getElementById("htime").innerHTML = "Time = "+yr+" Years, "+ month+" Months";
	setInterval(myTime,15000);
};
function myTime()
{
	count=count+1;
	yr=parseInt(count/12);
	month=parseInt(count-yr*12);
	document.getElementById("htime").innerHTML = "Time = "+yr+" Years, "+ month+" Months";
	if(((month)%4==0 && (yr<1))||(month==0 && yr==1))
	{
		// alert("Month mod 4");
		modalcall();
		setTimeout(function(){$('#texModal').modal('hide');},15000);
	}
	if(month==4 && yr==0){
		document.getElementById("oppr").innerHTML = "There is a chartered plane costing 10 Lakh Rupees, Do you wanna buy it?";
	}
	else if(month==8 && yr==0){
		document.getElementById("oppr").innerHTML = "A helping-the-poor NGO needs Rs.5 Lakhs immediately, Will you donate?";
	}
	else if(month==0 && yr==1){
		document.getElementById("oppr").innerHTML = "A world tour offer costs Rs. 20 Lakhs. Do you wanna claim it?";
	}
};
function modalcall(){
 $('#texModal').modal('show');
 
};

function claimonclick(){
	alert("You have Claimed It!");

	if(month>=4 && month<=6 && yr==0){
		var txt="1000000";
	    $.get(yourUrl+"/withdraw/"+thisUser+"/"+txt, function(result){});
	}
	if(month>=8 && month<=11 && yr==0){
		var txt="500000";
	    $.get(yourUrl+"/withdraw/"+thisUser+"/"+txt, function(result){});
	}
	if(yr==1){
		var txt="2000000";
	    $.get(yourUrl+"/withdraw/"+thisUser+"/"+txt, function(result){});
	}

	document.getElementById("claimclose").click();
};