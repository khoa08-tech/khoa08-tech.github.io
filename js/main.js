function init() {
	var purchase = document.getElementById("purchase");
	purchase.onsubmit = validation;
	prefillData();
	var reset = document.getElementById("reset");
	reset.onclick = clearData;
}

function validation() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var Age = document.getElementById("Age").value;
	var phone = document.getElementById("phone_number").value;
	var email = document.getElementById("email").value;
	var windows = document.getElementById("windows").checked;
	var office = document.getElementById("office").checked;
	var kis = document.getElementById("kis").checked;
	var payment_methods = document.getElementById("payment_methods").value;
	sessionStorage.firstname = firstname;
	sessionStorage.lastname = lastname;
	sessionStorage.Age = Age;
	sessionStorage.phone_number = phone;
	sessionStorage.email = email;
	sessionStorage.windows = windows;
	sessionStorage.office = office;
	sessionStorage.kis = kis;
	sessionStorage.payment_methods = payment_methods;

	var occupationList = document.getElementById("occupation_choices").getElementsByTagName("input");
	for (var i = 0; i < occupationList.length; i++) {
		if (occupationList[i].checked == true) {
			sessionStorage.occupation = occupationList[i].value;
		}
	}

	var errorMsg = "";
	if (firstname.match("^[A-Z a-z]{1,29}$") == null) {
		errorMsg += "- First name has to contain only alphabetic characters and length must be between 1 and 30 characters. <br/>";
	}
	if (lastname.match("^[A-Z a-z]{1,29}$") == null) {
		errorMsg += "- Last name must contain only alphabetic characters and length must be between 1 and 30 characters. <br/>";
	}
	if (phone.match("^(0|\\+84)\\d{9}$") == null) {
		errorMsg += "- Phone number must begin with +84 or 0, followed by 9 digits. <br/>";
	}
	if (email.match("^[a-zA-z0-9]*@[a-zA-z.]*$") == null) {
		errorMsg += "- Email must not exclude @ character and include special characters. <br/>";
	}
	if (Age.match("^(((\\d)|(\\d\\d)|(1[0-4][0-9]))|(150))$") == null) {
		errorMsg += "- Maximum age is 150. <br/>";
	}
	if (sessionStorage.occupation == document.getElementById("highschool").value) {
		if (parseInt(Age) > 18) {
			errorMsg += "- Maximum age for highschool is 18. <br/>";
		}
	}
	if (errorMsg == "") {
		return true;
	} else {
		document.getElementById("error").innerHTML = errorMsg;
		return false;
	}
	// Pattern:
	// 	Every pattern needs to have ^ at the start and $ at the end
	// 	For special chars add \\
	// 	[A-Za-z]: chars range
	// 	[num1-num_n]: nums range
	// 	\d: digit (adding digits by adding \d)
	// 	|: or
	// 	*: unlimited chars
	// 	{}: number of times can loop
}

function prefillData() {
	if (sessionStorage.firstname != null) {
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lastname").value = sessionStorage.lastname;
		document.getElementById("Age").value = sessionStorage.Age;
		document.getElementById("phone_number").value = sessionStorage.phone_number;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("payment_methods").value = sessionStorage.payment_methods;
	} /* Confirm this is the first input */
	if (sessionStorage.occupation == document.getElementById("highschool").value) {
		document.getElementById("highschool").checked = true;
	}
	if (sessionStorage.occupation == document.getElementById("university").value) {
		document.getElementById("university").checked = true;
	}
	if (sessionStorage.occupation == document.getElementById("working").value) {
		document.getElementById("working").checked = true;
	}
	if (sessionStorage.occupation == document.getElementById("retired").value) {
		document.getElementById("retired").checked = true;
	}
	if (sessionStorage.windows == "true") {
		document.getElementById("windows").checked = true;
	}
	if (sessionStorage.office == "true") {
		document.getElementById("office").checked = true;
	}
	if (sessionStorage.kis == "true") {
		document.getElementById("kis").checked = true;
	}
}

function clearData() {
	sessionStorage.clear();
}

window.onload = init;