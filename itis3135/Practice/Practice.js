var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	var total = 0;
	//add onclick event handler for each image
	document.getElementById('Esp_pic').onclick = Esp_click;
	function Esp_click() {
		document.getElementById('Espresso').innerHTML = "$1.95 - Espresso - Delicious espresso. Wanna try it?";
		total += 1.95;
	}
	document.getElementById('Cap_pic').onclick = Cap_click;
	function Cap_click() {
		document.getElementById('Cappuccino').innerHTML = "$3.45 - Cappuccino - Delicious Cappuccino!";
		total += 3.45;
	}
	// for click event add item to order and update total
	document.getElementById('place_order').onclick = Pla_order;
	function Pla_order() {
		document.getElementById('total').innerHTML = "$"+ total;
	}
	// display order and total
	document.getElementById('clear_order').onclick = Cle_order;
	function Cle_order() {
		total = 0;
		document.getElementById('total').innerHTML = "...";
		document.getElementById('Cappuccino').innerHTML = "...";
		document.getElementById('Espresso').innerHTML = "..."
	}
	
		
}; // end onload