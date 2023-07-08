
//Evento Ready de JQuery, que sobrecarga todos los eventos onClick de interes. 
 $(document).ready(function(){
	
	$("#link1").on("click",function() {
	 	Ejemplo1();
	 });
	 
	$("#F2BtnSend").on("click",function() {
	 	Ejemplo2();
	});
	
	$("#F3BtnSend").on("click",function() {
	 	Ejemplo3();
	});
	
	$("#F4BtnSend").on("click",function() {
	 	Ejemplo4();
	});
	
	$("#F5BtnSend").on("click",function() {
	 	Ejemplo5();
	});
	
	$("#btnWin5").on("click",function() {
	 	OpenWindows5();
	});

	//Inicialización por defecto de las caracteristicas básicas de la ventana jquery del ejemplo 5.
 	$("#Win5").dialog({modal: true, width: 650, height: 422, autoOpen: false, resizable: false});
})

//Método que recarga en la capa con id="CapaEjemplo1" el resultado de la invocación a la controladora /ejemplo1.
function Ejemplo1(){
 $("#CapaEjemplo1").load('./ejemplo1');
}



/*
Método que obtiene los datos del formulario del ejemplo 2 y envía los datos en una petición asíncrona ajax. La respuesta
es una vista que se carga en la capa div con id="CapaEjemplo2".

Estos son algunos de los atributos útiles de la función JQuery Ajax:

	url : URL del servlet / recurso que se invocará.
	method : Tipo de método HTTP como GET, POST, etc.
	success : función de devolución de llamada en la finalización con éxito de la llamada AJAX.
	error : función de devolución de llamada en caso de que se produzca algún error durante la llamada AJAX.
	data : datos que se envían al enviar la solicitud.
	dataType: Establece el tipo de información que se espera recibir como respuesta del servidor. Si no se especifica ningún valor, de forma predeterminada, jQuery revisa el tipo de MIME que posee la respuesta.
	beforeSend : Pre-solicitud de función de devolución de llamada. devolver falso desde esta función cancelará la solicitud.
	complete : Función de devolución de llamada, ejecutada después de finalizar la solicitud (con éxito o error).
	contentType : Solicite el tipo de contenido como: application / x-www-form-urlencoded, multipart / form-data, o text / plain, etc.
	headers : Solicitar encabezados.
	timeout : Establezca un tiempo de espera para la solicitud. Valores en milisegundos.

Documentación del fabricante: https://api.jquery.com/jquery.ajax/
*/

function Ejemplo2(){

 //Se recogen los datos del formulario.
 var data_nombre = $('#F2nombre').val();
 var data_edad = $('#F2edad').val();

 //Se reinicia la capa donde se cargará la respuesta. El método html de jquery permite cargar html de forma dinámica en un contenedor.
 $('#CapaEjemplo2').html('');

 //Se invoca a la función ajax de jquery.
	$.ajax({
		url     : './ejemplo2',
        method  : 'POST',
        data    : {nombre:data_nombre, edad:data_edad},
	    success : function(resultText){
                    $('#CapaEjemplo2').html(resultText);
                  },
        error   : function(){ //function(jqXHR, exception){
                    $('#CapaEjemplo2').html('<p>Ha ocurrido un error fatal.</p>');
                  }
    });
}

/*
Método que obtiene los datos del formulario del ejemplo 3 y envía los datos en una petición asíncrona ajax. La respuesta
es un objeto JSON con el cual se aplica lógica en la cual se termina por modificar el DOM en lo relativo al contenido de la capa div con id="CapaEjemplo3". Note que
con una respuetsa JSON se puede jugar a modificar cualquier zona del DOM de la vista principal propiciando vistas más interactivas y ligeras.

Estos son algunos de los atributos útiles de la función JQuery Ajax:

	url : URL del servlet / recurso que se invocará.
	method : Tipo de método HTTP como GET, POST, etc.
	success : función de devolución de llamada en la finalización con éxito de la llamada AJAX.
	error : función de devolución de llamada en caso de que se produzca algún error durante la llamada AJAX.
	data : datos que se envían al enviar la solicitud.
	dataType: Establece el tipo de información que se espera recibir como respuesta del servidor. Si no se especifica ningún valor, de forma predeterminada, jQuery revisa el tipo de MIME que posee la respuesta.
	beforeSend : Pre-solicitud de función de devolución de llamada. devolver falso desde esta función cancelará la solicitud.
	complete : Función de devolución de llamada, ejecutada después de finalizar la solicitud (con éxito o error).
	contentType : Solicite el tipo de contenido como: application / x-www-form-urlencoded, multipart / form-data, o text / plain, etc.
	headers : Solicitar encabezados.
	timeout : Establezca un tiempo de espera para la solicitud. Valores en milisegundos.

Documentación del fabricante: https://api.jquery.com/jquery.ajax/
*/

function Ejemplo3(){
 
 //Se recogen los datos del formulario.
 var data_organizacion = $('#F3organizacion').val();
 var data_cif = $('#F3cif').val();
 var data_antiguedad = $('#F3antiguedad').val();

 //Se reinicia la capa donde se cargará la respuesta. El método html de jquery permite cargar html de forma dinámica en un contenedor.
 $('#CapaEjemplo3').html('');

 //Se invoca a la función ajax de jquery.
	$.ajax({
		url     : './ejemplo3',
		dataType:"json",
        method  : 'POST',
        data    : {organizacion:data_organizacion, cif:data_cif, antiguedad:data_antiguedad},
	    success : function(data){
					var error=data.error;
                    var mensaje = data.mensaje;
                    
                    if(error=="true"){
        		         $('#CapaEjemplo3').html('<p style="color: red;">Error. '+mensaje+'</p>');
                    }else{
                         $('#CapaEjemplo3').html('<p style="color: green;">'+mensaje+'</p>');
                    }
                  },
        error   : function(){ //function(jqXHR, exception){
                    $('#CapaEjemplo3').html('<p>Ha ocurrido un error fatal.</p>');
                  }
    });
}

//La diferencia con el ejemplo anterior 3, es que la petición es por GET y se obtiene en JSON la respuesta de un objeto más complejo (serializado desde el back-end)
function Ejemplo4(){
 
 //Se recogen los datos del formulario.
 var data_organizacion = $('#F4organizacion').val();
 var data_cif = $('#F4cif').val();
 var data_antiguedad = $('#F4antiguedad').val();

 //Se reinicia la capa donde se cargará la respuesta. El método html de jquery permite cargar html de forma dinámica en un contenedor.
 $('#CapaEjemplo4').html('');

 //Se invoca a la función ajax de jquery.
	$.ajax({
		url     : './ejemplo4',
		dataType:"json",
        method  : 'GET',
        data    : {organizacion:data_organizacion, cif:data_cif, antiguedad:data_antiguedad},
	    success : function(data){
					var error=data.error;
                    var mensaje = data.msgMensaje;
                 
                    if(error){
        		         $('#CapaEjemplo4').html('<p style="color: red;">Error. ' + mensaje + '</p>');
                    }else{
                         $('#CapaEjemplo4').html('<p>Los datos recibidos son:<br>'+
                         							 '<b>Empresa</b>: ' + data.nomEmpresa + '<br>'+
                         							 '<b>Cif</b>: ' + data.cif+ '<br>' +
                         							 '<b>Antiguedad</b>: ' + data.antiguedad + '<br>' +
                         '</p>');
                    }
                  },
        error   : function(){ //function(jqXHR, exception){
                    $('#CapaEjemplo4').html('<p>Ha ocurrido un error fatal.</p>');
                  }
    });
}


/*###############################################################
 *              CÓDIGO JAVASCRIPT: EJEMPLO 5
 *
 *  Documentación del fabricante: https://api.jqueryui.com/dialog/
 *                                https://api.jquery.com/jquery.ajax/
 *
 *###############################################################
 */

//Método que invoca/abre el dialogo de la capa con id="#Win5"
function OpenWindows5() {
	/*
	$(“#Win5”).dialog('open') = abre la ventana.
    $(“#Win5”).dialog('close') = cierra la ventana.
    $(“#Win5”).dialog('isOpen') = devuelve true en caso de que la ventana este abierta
	 */
	$('#F5').css("display","block");
	$('#Espera5').css("display","none");
	$('#Resultado5').html('');
	$('#MensajeError5').html('');
    $('#Win5').dialog('open');
}


function Ejemplo5(){

	 //Se recogen los datos del formulario.
	 var data_organizacion = $('#F5organizacion').val();
	 var data_cif = $('#F5cif').val();
	 var data_antiguedad = $('#F5antiguedad').val();

	$('#F5').css("display","none");
	$('#Espera5').css("display","block");
	$('#Resultado5').html('');
	$('#MensajeError5').html('');
	$.ajax({
	url     : './ejemplo5',
	dataType:"json",
	method     : 'POST',
	data     : {organizacion:data_organizacion, cif:data_cif, antiguedad:data_antiguedad},
	success    : function(data){
						var error=data.error;
	                    var mensaje = data.msgMensaje;
	                 
	                    if(error){
	        		         $('#MensajeError5').html('<p style="color: red;text-align: center;">Error. ' + mensaje + '</p>');
	                    }else{
	                         $('#Resultado5').html('<br><p><b style="color: green;">Los datos recibidos son:</b><br>'+
	                         							 '<b>Empresa</b>: ' + data.nomEmpresa + '<br>'+
	                         							 '<b>Cif</b>: ' + data.cif+ '<br>' +
	                         							 '<b>Antiguedad</b>: ' + data.antiguedad + '<br>' +
	                         '</p>');
	                         $('#Win5').dialog('close');
	                    }
	},
	error   : function(){ //function(jqXHR, exception){
	                    $('#MensajeError5').html('<p style="color: red;text-align: center;">Ha ocurrido un error fatal.</p>');
	                  },
	complete: function(){
	     $('#F5').css("display","block");
		 $('#Espera5').css("display","none");
	   }
	});
}