function sumatoria(array){    
    const suma = array.reduce(
        function (valorAcum = 0, nvoElemento) {
            return valorAcum + nvoElemento;
        }
    );
    return suma;
};


function mediaAritmetica(array){
    let prom = sumatoria(array) / array.length;
    return prom;
};

let promLista1 = mediaAritmetica(lista1);





function esPar(nro){
    if (nro % 2 === 0 ){
        return true;
    } else {
        return false;
    }
};

function mediana(array){
    array.sort(function(a,b) {
        return a-b;
    });
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




function count(array){
    const countObject = {};
    array.map(
        function(elemento){
            if (countObject[elemento])
            {
                countObject[elemento] += 1;
            }
            else 
            {
                countObject[elemento] = 1;
            }
            
        }
    );
    return countObject;
};



function countArray(countObject) {
    return Object.entries(countObject).sort(
        function(a,b){
            return a[1] - b[1];
        }
    );
};

function moda(array){
    const countA = countArray(count(array));
    const modaA = countA[countA.length - 1];
    const moda = {
        moda : modaA[0],
        frecuencia : modaA[1]
    };
    return moda;
};

function productoria(array){    

    const producto = array.reduce(
        function (valorIni = 1, nvoElemento) {
            return valorIni * nvoElemento;
        }
    );
    return producto;
};

function mediaGeometrica(array){
    return Math.pow(productoria(array),(1/array.length));
};