



$(document).ready(function(){


	//contact section form validation
	$(".contact-container input#submit").click(function(){

		var name	= $("input#name").val();
		var email	= $("input#email").val();
		var message = $("textarea#message").val();


		// name
		if( name == "" ){

			$("input#name").css("border","1px solid red");

		}else{

			$("input#name").css("border","1px solid #273a71");

		}
		// email
		if( email == "" ){

			$("input#email").css("border","1px solid red");

		}else{

			$("input#email").css("border","1px solid #273a71");

		}
		// message
		if( message == "" ){

			$("textarea#message").css("border","1px solid red");

		}else{

			$("textarea#message").css("border","1px solid #273a71");

		}

		return false

	})


});