function nm() {
	var firstName = document.getElementById('firstName');

	if (firstName.value == "") {
		alert("please enter first name");
		document.getElementById('firstName').focus();
		return false;
	}
	var lastName = document.getElementById('lastName');

	if (lastName.value == "") {
		alert("please enter last name");
		document.getElementById('lastName').focus();
		return false;
	}
	var email = document.getElementById('email');

	if (email.value == "") {
		alert("please enter email");
		document.getElementById('email').focus();
		return false;
	}
	var Mobile = document.getElementById('Mobile');

	if (Mobile.value == "") {
		alert("please enter Mobile");
		document.getElementById('Mobile').focus();
		return false;
	}
	var Adrs = document.getElementById('Adrs');

	if (Adrs.value == "") {
		alert("please enter Address");
		document.getElementById('Adrs').focus();
		return false;
	}
	var country = document.getElementById('country');

	if (country.value == "") {
		alert("please enter country");
		document.getElementById('country').focus();
		return false;
	}
	var pin = document.getElementById('pin');

	if (pin.value == "") {
		alert("please enter pin");
		document.getElementById('pin').focus();
		return false;
	}
	var pin = document.getElementById('pin');

	if (pin.value == "") {
		alert("please enter pin");
		document.getElementById('pin').focus();
		return false;
	}
	var Qualification = document.getElementById('Qualification');

	if (Qualification.value == "") {
		alert("please enter Qualification");
		document.getElementById('Qualification').focus();
		return false;
	}
	var password = document.getElementById('password');

	if (password.value == "") {
		alert("please enter password");
		document.getElementById('password').focus();
		return false;
	}
	

}