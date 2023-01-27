function init() {
	loadDataAndCalcPrice();
	var cancel = document.getElementById("cancel");
	cancel.onclick = cancellation;
}

function loadDataAndCalcPrice() {
	var name = document.getElementById("confirm-name");
	var age = document.getElementById("confirm-age");
	var phone = document.getElementById("confirm-phone-number");
	var email = document.getElementById("confirm-email");
	var occupation = document.getElementById("confirm-occupation");
	var software = document.getElementById("confirm-software");
	var yourSoftware = "";
	var payment_methods = document.getElementById("confirm-payment-methods");
	var confirm_total_money = document.getElementById("confirm-total");
	var totalPrice = 0;
	var count = 0;

	name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
	age.textContent = sessionStorage.Age;
	phone.textContent = sessionStorage.phone_number;
	email.textContent = sessionStorage.email;
	occupation.textContent = sessionStorage.occupation;

	if (sessionStorage.windows == "true") {
		totalPrice += 85;
		yourSoftware += "Windows 10 Home Retail, ";
		count += 1;
	}
	if (sessionStorage.office == "true") {
		totalPrice += 70;
		yourSoftware += "Microsoft 365 for enterprise, ";
		count += 1;
	}
	if (sessionStorage.kis == "true") {
		totalPrice += 25;
		yourSoftware += "Kaspersky Internet Security, ";
		count += 1;
	}
	if (count == 3) {
		totalPrice = totalPrice * 80 / 100;
	}
	if (sessionStorage.occupation == "High School") {
		totalPrice = totalPrice * 90 / 100;
	}
	if (sessionStorage.payment_methods == "Paypal") {
		totalPrice = totalPrice * 105 / 100;
	}
	yourSoftware = yourSoftware.substring(0, yourSoftware.length - 2); /* Eliminate space and comma at the end of string */
	software.textContent = yourSoftware;
	payment_methods.textContent = sessionStorage.payment_methods;
	confirm_total_money.textContent = totalPrice; 
} /* textContent displays data on the screen */

function cancellation() {
	window.location = "index.html"; /* Redirect to index.html */
}

window.onload = init;