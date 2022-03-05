/* 
 * UNAM
 * Desarrollado por: CUAED
 * @marco_caloch
 * 2016
 */
var wwwpublica ="https://ingles.facmed.unam.mx/";
var wwwroot ="https://ingles.facmed.unam.mx/moodle/";

var cursoId = 0; // curso id | 0 si no hay curso
var modPortal = "/portal/";	// debe declararse la variable // var modPortal = "/portal/";	debe declararse la variable si va a un curso 
var shortname = "none";	// shortname = "none";	// debe declararse la variable
var etiqueta = "Contenido"; // debe declararse la variable sin #

var recurso = "SI"
; // SI ->scorm|Contenido   NO->none
var tiporecurso = "none"; //DESKTOP, PORTAL, GENERAL, none

var listaCursos = [];
// si en una pagina se usan mas de un curso
listaCursos[1]=2; // valor arreglo -> valor curso
listaCursos[2]=5; //estufas