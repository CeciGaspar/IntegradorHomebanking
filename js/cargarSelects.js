var rubro1 = new Array("-","Telefonía","Internet y Telecomunicaciones","Luz, Agua y Gas","...") 
var rubro2 = new Array("-","Pago de VEP","...") 
var rubro3 = new Array("-","Pago de Préstamo","...") 

var todoslosentes = [
    [],
    rubro1,
    rubro2,
    rubro3
];

function cargarentes(){ 
    //tomo el valor del select del pais elegido 
    var rubro 
    var mirubro
    rubro = document.rubros.rubro[document.rubros.rubro.selectedIndex].value 
    //miro a ver si el pais está definido 
    if (rubro != 0) { 
       //si estaba definido, entonces coloco las opciones de la provincia correspondiente. 
       //selecciono el array de provincia adecuado 
       mirubro=todoslosentes[mirubro] 
       //calculo el numero de provincias 
       numrubros = mirubro.length 
       //marco el número de provincias en el select 
       document.rubros.rubro.length = numrubros 
       //para cada provincia del array, la introduzco en el select 
       for(i=0;i<numrubros;i++){ 
          document.rubros.rubro.options[i].value=mirubro[i] 
          document.rubros.rubro.options[i].text=mirubro[i] 
       }	
    }else{ 
       //si no había provincia seleccionada, elimino las provincias del select 
       document.rubros.rubro.length = 1 
       //coloco un guión en la única opción que he dejado 
       document.rubros.rubro.options[0].value = "-" 
       document.rubros.rubro.options[0].text = "-" 
    } 
    //marco como seleccionada la opción primera de provincia 
    document.rubros.rubro.options[0].selected = true 
}
