function validacion() 
{
 	valor1 = document.getElementById("nombre").value;
 	valor2 = document.getElementById("apellido").value;
 	valor5 = document.getElementById("email").value;
 	valor6 = document.getElementById("contraseña").value;
	valor7 = document.getElementById("contraseña2").value;
	valor8 = document.getElementById("id_usr").value; 


	if( valor1 == null || valor1.length == 0 || /^\s+$/.test(valor1) ) 
	{  
	  alert('Debes rellenar el campo Nombre');
	  return false;
	}
    if(valor1.length>25)
	{
	    alert('Debes introducir menos de 25 caracteres en el campo Nombre')
	    return false;
	}


	if( valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2) ) 
	{
	  alert('Debes rellenar el campo Apellido');
	  return false;
	}
	 	
	var mayuscula = false;
	var minuscula = false;
	var numero = false;
	var caracter_raro = false;			
	for(var i = 0;i<valor6.length;i++)
	{
		if(valor6.length>15 || valor6.length<7)
		{
			alert('Debes introducir menos entre 7 y 15 caracteres en el campo contraseña');
			return false
		}

		if(valor6.charCodeAt(i) >= 65 && valor6.charCodeAt(i) <= 90)
		{
			mayuscula = true;
		}
		else 
		if(valor6.charCodeAt(i) >= 97 && valor6.charCodeAt(i) <= 122)
		{
			minuscula = true;
		}
		else 
		if(valor6.charCodeAt(i) >= 48 && valor6.charCodeAt(i) <= 57)
		{
			numero = true;
		}
		else
		{
			caracter_raro = true;
		}
	}
	if(mayuscula == false || minuscula == false || caracter_raro == false || numero == false)
	{
		alert('Debes introducir una contraseña correcta, mínimo 1 mayúscula, 1 mínuscula, 1 dígito y 1 caracter especial')
		return false;
	}

	if (valor6 != valor7) 
	{
	    alert("Las contraseñas deben de coincidir");
	   	return false;
	} 
	
	caracter_raro2 = false;
	for(var i = 0;i<valor8.length;i++)
	{
		if(valor8.charCodeAt(i) >= 32 && valor8.charCodeAt(i) <= 47)
		{
			caracter_raro2 = true;
		}
		if(valor8.charCodeAt(i) >= 58 && valor8.charCodeAt(i) <= 64)
		{
			caracter_raro2 = true;
		}
		if(valor8.charCodeAt(i) >= 91 && valor8.charCodeAt(i) <= 96)
		{
			caracter_raro2 = true;
		}
		if(valor8.charCodeAt(i) >= 123 && valor8.charCodeAt(i) <= 255)
		{
			caracter_raro2 = true;
		}
	}
	if(caracter_raro2 == false)
	{
		
		return true;
	}
	else
	{
		alert("El nombre de usuario no puede contener caracteres raros");
		return false;
	}
    return true;
}