const calculateArithmeticAverage = (list) => {
  // let addList =  0;
  // for ( let i = 0; i < list.length; i++ ) {
  //   addList = addList + addList[i];
  // }

  const addList = list.reduce(
    function (accumulatedValue = 0, newElement ) {
      return accumulatedValue + newElement;
    }
  );

  const averageList = addList / list.length;
  return averageList;
}





function datosUsuario () {
    let valorNumeroDatos =  numeroDatos ();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = inputDatoUsuario = document.getElementById(id);
        let valueDato = parseInt(dato.value);
        let aggElemento = listaUsuario.push(valueDato);
    }
}


function calcularMediaAritmetica () {
    //borrar datos del array 
    listaUsuario = [];

    datosUsuario ();

    const sumaLista = listaUsuario.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / listaUsario.length;

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio es: " + promedioLista;
}

function numeroDatos () {
    //saber cuantos input son
    const inputNumeroDatos = document.getElementById("numeroDatos");
    const value = parseInt(inputNumeroDatos.value);
    return value;
}

function aggInput () {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("aggInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    //quitar respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";

    //colocar los imput
    let valorNumeroDatos =  numeroDatos ();

  for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = '<label for="' + i + '">dato: </label> <input id="' + i + '"type="number"></input>';
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', '<button type="button" onclick="calcularMediaAritmetica()">Calcular</button>');
}



