window.onload = function() {
	document.getElementById('fname').onchange = function() {
		vname1 = checkname();
	}

	document.getElementById('myemail').onchange = function() {
		var vmail = checkmail();
	}


	document.getElementById('pcadd').onclick = function() {
		vpadd = pcaddress();
	}

	document.getElementById('padd').onchange = function() {
		vcapp = checkpadd();
	}

	document.getElementById('cadd').onchange = function() {
		vcapp = checkcadd();
	}

	document.getElementById('no').onchange = function() {
		vnum = checknum();
	}
	document.getElementById('pass1').onchange = function() {
		vpass1 = checkpass1();
	}
	document.getElementById('pass2').onchange = function() {
		checkpass2();
	}

	document.getElementById('reset').onclick = function() {
		ResetEverything();
	}
	document.getElementById('Button').onclick = function() {
		EnableButton();
	}
}
var vname1 = false;
var vpadd = false;
var vcapp = false;
var vnum = false;
var vpass1 = false;
var vpass2 = false;

function checkname() {
	if ((document.getElementById('fname').value.indexOf(' ') >= 0) || (document.getElementById("fname").value == "")) {
		alert("First Name cannot have space or blank");
		return false;
		EnableButton();
	}
	EnableButton();
	return true;
}


function checkmail() {
	var email = document.getElementById('myemail');
	var valid_email = /[a-z0-9._]+@[a-z]+.[a-z]{2,3}/;
	var result = valid_email.test(email.value);
	if (result == false) {
		alert("Not a valid email");
		return false;
		EnableButton();
	}
	EnableButton();
	return true;
}



function pcaddress() {
	var temp;
	if (document.getElementById("pcadd").checked == true) {
		document.getElementById("cadd").value = document.getElementById("padd").value;
	} else {
		document.getElementById("cadd").value = "";
	}
	EnableButton();
	return true;
}



function checkpadd() {
	if (document.getElementById("padd").value == "") {
		alert("Permanent Address cannot be empty");
		return false;
		EnableButton();
	}
	EnableButton();
	return true;
}


function checkcadd() {
	if (document.getElementById("cadd").value == "") {
		alert("Current Address cannot be empty");
		return false;
		EnableButton();
	}
	EnableButton();
	return true;
}


function checknum() {
	var pattern = new RegExp("[0-9]+$");
	var res = pattern.test(document.getElementById("no").value);
	if (res == false) {
		alert("Not a valid phone number");
		return false;
		EnableButton();
	}
	if ((no).value.length != 10) {
		alert("Password length should be 10 ");
		return false;
		EnableButton();
	}
	EnableButton();
	return true;
}



function checkpass1() {
	if ((document.getElementById('pass1').value.indexOf(' ') >= 0) || (document.getElementById("pass1").value == "")) {
		alert("PASSWORD cannot have space or blank");
		return false;
		EnableButton();
	}
	if ((pass1).value.length < 8 || (pass1).value.length > 15) {
		alert("Password length should be between 8 to 15 ");
		return false;
		EnableButton();
	}

	EnableButton();
	return true;
}

function checkpass2() {
	if ((document.getElementById('pass2').value.indexOf(' ') >= 0) || (document.getElementById("pass2").value == "")) {
		alert("PASSWORD cannot have space or blank");
		return false;
		EnableButton();
	}
	if ((pass2).value.length < 8 || (pass2).value.length > 15) {
		alert("Password length should be between 8 to 15 ");
		return false;
		EnableButton();
	}
	vpass2 = check_pass();
	EnableButton();
}

function check_pass() {
	var pass = document.getElementById("pass1").value;
	var cpass = document.getElementById("pass2").value;
	if (pass != cpass) {
		alert("Passwords do not match.");
		return false;
	}
	return true;
}


function ResetEverything() {
	document.getElementById("myForm").reset();
}

function update() {
	var x = document.getElementById('fname').value;
	var y = document.getElementById('lname').value;
	var z = document.getElementById('myemail').value;

	var h = document.createElement("h1") // Create a <h1> element
	var t = document.createTextNode(x + " " + y); // Create a text node
	h.appendChild(t);
	document.getElementById("dashBoard").appendChild(h);
	var t3 = document.createTextNode(z); // Create a text node
	//h.appendChild(t3);
	document.getElementById("dashBoard").setAttribute("title", z);
}

/*function update(): hover {
	var x = document.getElementById(fname);
	var y = document.getElementById(lname);
	var z = document.getElementByIdB(myemail);

	document.setElementById("dashBoard") = "x" + "y";
} */

function EnableButton() {

	if (vname1 == true && vpadd == true && vcapp == true && vnum == true && vpass1 == true && vpass2 == true) {
		document.getElementById("Button").removeAttribute("disabled");
		update();
	} else {
		document.getElementById("Button").disabled = true;
	}
}