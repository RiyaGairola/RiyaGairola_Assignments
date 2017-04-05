$(document).ready(function() {
	var vname = false;
	var email = false;
	var vpadd = false;
	var vcapp = false;
	var vnum = false;
	var vpass1 = false;
	var vpass2 = false;

	$('#fname').on('blur', function() {
		var v_name = $('#fname').val();

		if (v_name.search(/^[a-zA-Z^\S]*$/) === -1) {
			alert("Only alphabet allowed");
			vname = false;

		} else {
			vname = true;
			check();
		}
	});

	$('#myemail').on('blur', function() {

		var v_email = $('#myemail').val();
		if (v_email.search(/[a-z0-9._]+@[a-z]+.[a-z]{2,3}/) === -1) {
			alert("Wrong email Format");
			email = false;


		} else {
			email = true;
			check();

		}
	});

	$('#padd').on('blur', function() {

		var v_padd = $('#padd').val();
		if ((v_padd).length < 1) {
			alert("Address cannot be blank or spaces.");
			vpadd = false;

		} else {
			vpadd = true;
			check();
		}
	});

	$('#pcadd').click(function() {

		var addP = $("#padd").val();
		if ((addP).length < 1) {
			alert("Address cannot be blank or spaces.");
		}
		$("#cadd").val(addP);
		$("#cadd").attr('disabled', true);

	});

	$('#cadd').on('blur', function() {
		if ($("#cadd").val() == "") {
			alert("Current Address cannot be empty");
			vcapp = false;

		} else {
			vcapp = true;
			check();
		}
	});

	$('#no').on('blur', function() {

		var v_num = $('#no').val();
		if (v_num.search("[0-9]+$") === -1) {
			alert("Wrong number Format");
			vnum = false;

		}
		if ((v_num).length != 10) {
			alert("number length should be 10");
			vnum = false;

		} else {
			vnum = true;
			check();
		}
	});

	$('#pass1').on('blur', function() {

		var v_pass1 = $('#pass1').val();
		if ((v_pass1).length < 1) {
			alert("Password cannot be blank or spaces.");
			vpass1 = false;

		}
		if ((v_pass1).length < 8 || (v_pass1).length > 15) {
			alert("Password length should be between 8 to 15");
			vpass1 = false;

		} else {
			vpass1 = true;
			check();
		}
	});

	$('#pass2').on('blur', function() {

		var v_pass2 = $('#pass2').val();
		if ((v_pass2).length < 1) {
			alert("Password cannot be blank or spaces.");
			vpass2 = false;

		}
		if ((v_pass2).length < 8 || (v_pass2).length > 15) {
			alert("Password length should be between 8 to 15");
			vpass2 = false;

		}

		var p1 = $("#pass1").val();
		var c2 = $("#pass2").val();
		if (p1 != c2) {
			alert("Passwords do not match.");
			vpass2 = false;

		} else {
			vpass2 = true;
			check();
		}
	});


	function check() {
		if (email == true && vpadd == true && vnum == true && vpass1 == true && vpass2 == true) {
			$("#Button").removeAttr("disabled");
			update();
		}
	};

	function update() {

		$("#Button").click(function() {
			var fname = $('#fname').val();
			var lname = $('#lname').val();
			var evalue = $("#myemail").val();
			var x = $("#dashBoard").append(fname + " " + lname);
			var y = (x).attr('title', evalue)
		});
	}

});
