let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];

function clickBoton(){

    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    if (valorGasto>150){ alert('Se ha registrado un gasto mayor de 150USD')}
    
    console.log(descripcionGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGasto);
   
    console.log(listaNombresGastos);
    console.log(listaDescripcionGastos);

    actualizarListaGastos();
}

function actualizarListaGastos(){
   const listaElementos=  document.getElementById('listaDeGastos');
   let totalElemento = document.getElementById('totalGastos');
   
   let htmllista = '';
    let totalGastos = 0;

        listaNombresGastos.forEach((elemento,posicion)=> {
            const valorGasto = Number(listaValoresGastos[posicion]);
            const showDescripcion = (listaDescripcionGastos[posicion]);
            htmllista += `<li>${elemento}: USD ${valorGasto.toFixed(2)} | Descripción: ${showDescripcion} 
            <button onclick="eliminarGasto(${posicion});">X</button><button onclick="editarGasto(${posicion});">✎</button>
            </li>`;

            //Calculamos total de gastos
            totalGastos += Number(valorGasto);
           
           
        
});

    listaElementos.innerHTML = htmllista;
    totalElemento.innerHTML = totalGastos.toFixed(2);
    document.getElementById('botonFormulario').textContent = 'Agregar Gasto';
    limpiar();

}

function limpiar(){
   document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value ='';
    document.getElementById('descripcionGasto').value ='';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarListaGastos();
 }

 function editarGasto(posicion){
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    
    document.getElementById('botonFormulario').textContent = 'Guardar Cambios';
 }