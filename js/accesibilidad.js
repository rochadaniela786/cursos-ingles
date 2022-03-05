/*Cambia el archivo CSS*/
function cambiarArchivoCss(archivo) {
document.getElementById('cssArchivoCss').href=archivo;
localStorage.estilos=archivo;
}
if(localStorage.getItem('estilos')==null || localStorage.getItem('estilos')==''){
    //alert('El valor del estilo es '+localStorage.getItem('estilos'));
}else{
   document.getElementById('cssArchivoCss').href=localStorage.getItem('estilos');         
  // alert("la hoja de estilos es: " + localStorage.getItem('estilos')+" y la fuente es de: "+ localStorage.getItem('tamano') );
}
/*Funcion para cambiar el tamaño del texto*/
//function zoomText(Action,Element){
    var obj=document.getElementById(Element); 
    var max = 130
    var min = 90 
    if (obj.style.fontSize==""){ 
        obj.style.fontSize="100%"; 
    }
 var actual=parseInt(obj.style.fontSize); 
   var increment=10;
    if(Action=="restore" ){ 
        obj.style.fontSize="100%" 
    }
    if( Action=="increase" && ((actual+increment) <= max )){
        value=actual+increment;
        obj.style.fontSize=value+"%"
    }
    if( Action=="decrease" && ((actual+increment) >= min )){
        value=actual-increment;
        obj.style.fontSize=value+"%"
    }
   
      
/* Funcion para imprimir*/
function imprimir(){
  var objeto=document.getElementById('informacion');  //obtenemos el objeto a imprimir
  var ventana=window.open('','_blank');  //abrimos una ventana vacía nueva
  ventana.document.writeln('<!DOCTYPE html>');
  ventana.document.writeln('<html><head><title></title>');
  ventana.document.writeln('<link rel="stylesheet" type="text/css" href="css/estilos.css" >');
  ventana.document.writeln('</head><body>');
  ventana.document.write(objeto.innerHTML);  //imprimimos el HTML del objeto en la nueva ventana
  ventana.document.writeln('</body></html>');
  ventana.document.close();  //cerramos el documento
  ventana.print();  //imprimimos la ventana
  ventana.close();  //cerramos la ventana
}