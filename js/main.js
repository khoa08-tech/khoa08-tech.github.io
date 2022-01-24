function init() {
	var usd = document.getElementById("USD");
	usd.onclick = btnClick;
}

function btnClick() {
	var usDollar = document.getElementById("usd").value;
	var vnd = usDollar * 23000;
	showMessage(usDollar, vnd);
}

function showMessage(usDollar, vnd) {
	var message = document.getElementById("mes");
	message.textContent = "You entered: " + usDollar + " USD, this is converted to " + vnd + " VND."
}

window.onload = init;