// Código del cuadrado
function squarePerimeter(lado){
    return lado * 4;
};

function squareArea(lado){
    return lado * lado;
};


// Código del Triágulo
function trianglePerimeter(lado1,lado2,base){
    return lado1 + lado2 + base;
};

function triangleArea(alto,base){
    return (alto * base) / 2
};

// Código del círculo
const pi = Math.PI;

function circunference(radius){
    return radius * 2 * pi;
};


function circleArea(radius){
    return radius * radius * pi;
}





function calculateSquare(){
    const input = document.getElementById("SquareInput");
    const value = Number(input.value);
    const squarePerim = squarePerimeter(value);
    const squareAre = squareArea(value);
    alert(squarePerim);
    alert(squareAre);
};

function isoceles(lado1,lado2,base){
    if (lado1 === lado2) {
        var h = Math.sqrt((lado1*lado1)-(base*base/4));
        alert("Tiángulo isoceles");
        
    }
    else {
        const input = document.getElementById("triangleHeightInput");
        var h = Number(input.value);
    };
    console.log(h);
    return h;
};

function calculateTriangle(){
    const input1 = document.getElementById("triangleSide1Input");
    const input2 = document.getElementById("triangleSide2Input");
    const input3 = document.getElementById("triangleBaseInput");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const value4 = isoceles(value1,value2,value3);
    const trianglePerim = trianglePerimeter(value1,value2,value3);
    const triangleAre = triangleArea(value4,value3);
    alert(trianglePerim);
    alert(triangleAre);
};


function calculateCircle(){
    const input = document.getElementById("CircleInput");
    const value = Number(input.value);
    const circunf = circunference(value);
    const circleAre = circleArea(value);
    alert(circunf);
    alert(circleAre);
};




