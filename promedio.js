const lista1 = [
    100,
    200,
    300,
    500,
];


function sumatoria(array){    
    const suma = array.reduce(
        function (valorAcum = 0, nvoElemento) {
            return valorAcum + nvoElemento;
        }
    );


    // let suma = 0;
    // for (let i=0; i < array.length; i++){
    //     suma = suma + array[i];
    // };
    return suma;
};


function mediaAritmetica(array){
    let prom = sumatoria(array) / array.length;
    return prom;
};

let promLista1 = mediaAritmetica(lista1);

const lista2 = [
    180,
    200,
    500,
    500000,    
];

const mitadLista = lista2.length / 2;

function esPar(nro){
    if (nro % 2 === 0 ){
        return true;
    } else {
        return false;
    }
};

function mediana(array){
    array.sort();
    let med;
    if (esPar(array.length)) {
        const medianas = [
            array[(array.length / 2)-1],
            array[(array.length / 2)]
        ];
        med = mediaAritmetica(medianas);
    } else {
        med = array[parseInt(array.length / 2)];
    }
    return med;
};

