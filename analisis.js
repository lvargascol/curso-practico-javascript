//Helpers

function esPar(num){
    return (num % 2 === 0);
};

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

// Crea array ordenada de salarios a partir de objeto Salarios

function arraySalarios(salarios) {
    const sal = salarios.map(
        function (persona){
            return persona.salary;
        }
    );
    return sal.sort(
        function order(a,b){
            return a-b;
        }
    );
                        
};

//Calculadora de mediana de Salarios

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const data = [lista[mitad-1],lista[mitad]];
        return mediaAritmetica(data);
    }
    else {
        return lista[mitad];
    }
};


//Hace splice de un Array ordenado del margen (top %) superior

function spliceTop(array,top){
    const spliceStart = parseInt(array.length * (100 - top) / 100);
    const spliceCount = array.length - spliceStart;
    return array.splice(spliceStart,spliceCount);
};

//Calculo de mediana de Salarios de Colombia

const salariosCol = arraySalarios(colombia);


const medianaSalariosCol = medianaSalarios(salariosCol);

//Calculo de mediana de Salarios del Top 10% de Colombia

const salariosColTop10 = spliceTop(salariosCol,10);

const medianaSalariosColTop10 = medianaSalarios(salariosColTop10);



// Agregar lo siguiente:
// 1.- Lee numero de periodos 'n'
// 2.- Crea vector con html de los inputs de tasas de interes para cada uno de los 'n' periodos
// 3.- Lee los n tasas de interes y calcula el promedio


function readNumber(input) {
    const value = Number(input.value);
    return value;
};


let input = document.getElementById("periodInput");

let interestForm = document.getElementById("form2");

let result = document.getElementById("result");

input.addEventListener("input", function() { 
    console.log(readNumber(input));
    interestForm.innerHTML = generate(readNumber(input));
});

function generate (number) {    
    const htmlInputs = [];
    if (number > 0) {               
        for (let i = 0; i < number; i++) {
            htmlInputs.push(
                "<label for='interestInput" + (i+1) + "'> Rentabilidad del periodo nro." + (i+1) + " (%) </label>" +
                "<input id='interestInput" + (i+1) + "' type='number'><br>"
                );
        };          
    } else if (number == 0) {
        htmlInputs.push("<p>Ingrese un número mayor a cero</p>");
    };
    htmlInputs.push("<button type='button' onclick='calculateRentability()'>Calcular</button><br>");
    return htmlInputs.reduce(
        function (valorIni = 1, nvoElemento) {
            return valorIni + nvoElemento;
        }
    );  
};

function interestArray(number) {
    const intereses = [];
    if (number > 0) {               
        for (let i = 0; i < number; i++) {
            let inputText = "interestInput" + (i+1);
            let value = Number(document.getElementById(inputText).value);
            intereses.push(
                1 + (value/100)
            );
        };          
    };
    return intereses;
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

function calculateRentability() {
    const media = ~~((mediaGeometrica(interestArray(readNumber(input))) - 1) * 10000) / 100;
    result.innerHTML = ("La rentabilidad media es de " + media + "%");
};


