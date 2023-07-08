package es.dsw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.dsw.models.Resultado;


@Controller
public class MainController {

	@GetMapping(value= {"/", "/index"})
	public String index() {
		return "index";
	}
	
	@GetMapping(value = {"/ejemplo1"})
	public String ejemplo1() {
		
		return "subviews/ejemplo1";
	}
	
	@PostMapping(value = {"/ejemplo2"})
	public String ejemplo2(@RequestParam("nombre") String nombre, @RequestParam(name="edad", required=false, defaultValue = "-1") int edad, Model objModel) {
		 
		objModel.addAttribute("nombre", nombre);
		objModel.addAttribute("edad", edad);
		
		if ((nombre == "") || (edad < 0)) {
			objModel.addAttribute("error", true);
		} else {
			objModel.addAttribute("error", false);
		}
		
		return "subviews/ejemplo2";
	}
	
	//Esta forma de devolver un Json no requiere de ninguna dependencia adicional. Se devuelve un JSON construido de forma manual. (no recomendable)
	@PostMapping(value = "/ejemplo3", produces="application/json")
	@ResponseBody
	public String ejemplo3(@RequestParam("organizacion") String empresa, @RequestParam("cif") String cif, @RequestParam(name="antiguedad", required=false, defaultValue = "-1") int antiguedad) {
				String RespuestaError = "";
				
				if (empresa.equals("")) {
					RespuestaError = RespuestaError + "Organización, ";
				}
				
				if (cif.equals("")) {
					RespuestaError = RespuestaError + "Cif, ";
				}
				
				if (antiguedad < 0) {
					RespuestaError = RespuestaError + "Antiguedad, ";
				}
				
				if (!RespuestaError.equals("")) {
					RespuestaError = "Faltan campos por rellenar: " + RespuestaError+"end";
					RespuestaError = RespuestaError.replace(", end", "");
					return "{\"error\":\"true\",\"mensaje\":\""+RespuestaError+"\"}";  
				} else {
					return "{\"error\":\"false\",\"mensaje\":\"OK\"}";  
				}
			    
	} 
	
	//Mapeo por Get que recibe parámetros y devuelve un JSON partiendo de un objeto el cual se serializa. Esta es la forma habitual de generar respuestas JSON (serializando objetos).
	@GetMapping(value = "/ejemplo4", produces="application/json")
	@ResponseBody
	public Resultado ejemplo4(@RequestParam(name="organizacion", defaultValue = "") String empresa, @RequestParam(name="cif", defaultValue = "") String cif, @RequestParam(name="antiguedad", required=false, defaultValue = "-1") int antiguedad) {
				String RespuestaError = "";
				Resultado objResultado = new Resultado();
				
				if (empresa.equals("")) {
					RespuestaError = RespuestaError + "Organización, ";
				}
				
				if (cif.equals("")) {
					RespuestaError = RespuestaError + "Cif, ";
				}
				
				if (antiguedad < 0) {
					RespuestaError = RespuestaError + "Antiguedad, ";
				}
				
				if (!RespuestaError.equals("")) {
					objResultado.setError(true);
					RespuestaError = "Faltan campos por rellenar: " + RespuestaError+"end";
					RespuestaError = RespuestaError.replace(", end", "");
				}
				
				objResultado.setMsgMensaje(RespuestaError);
				objResultado.setAntiguedad(antiguedad);
				objResultado.setCif(cif);
				objResultado.setNomEmpresa(empresa);
				
				return objResultado;	    
	} 
	
	//Misma lógica que el anterior. Mapeo por Post que recibe parámetros y devuelve un JSON partiendo de un objeto el cual se serializa.
	@PostMapping(value = "/ejemplo5", produces="application/json")
	@ResponseBody
	public Resultado ejemplo5(@RequestParam(name="organizacion", defaultValue = "") String empresa, @RequestParam(name="cif", defaultValue = "") String cif, @RequestParam(name="antiguedad", required=false, defaultValue = "-1") int antiguedad) {
				String RespuestaError = "";
				Resultado objResultado = new Resultado();
				
				if (empresa.equals("")) {
					RespuestaError = RespuestaError + "Organización, ";
				}
				
				if (cif.equals("")) {
					RespuestaError = RespuestaError + "Cif, ";
				}
				
				if (antiguedad < 0) {
					RespuestaError = RespuestaError + "Antiguedad, ";
				}
				
				if (!RespuestaError.equals("")) {
					objResultado.setError(true);
					RespuestaError = "Faltan campos por rellenar: " + RespuestaError+"end";
					RespuestaError = RespuestaError.replace(", end", "");
				}
				
				objResultado.setMsgMensaje(RespuestaError);
				objResultado.setAntiguedad(antiguedad);
				objResultado.setCif(cif);
				objResultado.setNomEmpresa(empresa);
				
				//Simula un retardo de 4 segundos para poder mostrar la animación de carga. (Obviamente esto no se debe hacer nunca)
				try {Thread.sleep(4000);}catch (InterruptedException ex) {}
				
				return objResultado;	    
	} 
}
