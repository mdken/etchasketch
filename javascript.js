$(document).ready(function(){
	var squares = 16;
	var count = 0;  

	$('body').append('<button type="button" id="reset">Reset</button>');
	$('body').append('<div id="container"></div>');

function load() {
		while (count < squares) {
			count += 1;
			$('#container').append('<div class = "screen" id="row'+ count + '"></div>');
			var count1 = 0;
			while (count1 < squares) {
				$('#row' + count).append ('<div class = "screen">');
				count1 += 1;
			}
		}
	}

	load();

	$(document).on('click',':button', function screenReload() {
		squares = prompt("Please input the size of the new screen. 1 - 128","16");
		while (squares < 1 || squares > 128) {
			squares = prompt("Please input the size of the new screen.1 - 128","16");
		}
		$('#container').empty();
		$(".screen").css('background-color','#454343');
		var dimension = 500 / squares;
		count = 0;
		load();
		$(".screen").css('height',dimension);		
		$(".screen").css('width',dimension);
		pen();
});




	function pen() {
		$('.screen').hover(function () {
			$(this).css('background-color', "#000");
		});
	}

	pen();

});
