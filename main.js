$(document).ready(function(){
	$("#login_form").on("submit",function(){
		$.ajax({
			type:"POST",
			url:"https://reqres.in/api/login",
			data:$(this).serialize(),
			success:function(response, responseText){
				console.log(response);
				let token = response.token;
				document.cookie = token;
				alert("Se inicio sesión correctamente");
				window.location.href = "pagina.html";

			},
			error: function(response,responseText){
				console.log(response.responseText);
			},
		});
		return false
	});

});