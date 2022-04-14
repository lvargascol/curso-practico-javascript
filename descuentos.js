const coupons = [
    {
    coupon : "BETANIA",
    discount : 40,
},
{
    coupon : "BAGHEERA",
    discount : 30,
},
{
    coupon : "LEONARDO",
    discount : 5,
}
];

function aplicarCupon(couponString){
    
    let couponDiscount = 0;
    for (i=0; i < coupons.length; i++){
        if(coupons[i].coupon === couponString){
            couponDiscount = coupons[i].discount;
        };        
    };
    return couponDiscount;    
};

function descuentoAplicado(descuento,cupon){
    return descuento + cupon;
};


function aplicarDescuento(precioOriginal,descuento,cupon){
    return precioOriginal * ((100 - descuento - cupon) / 100);

};



function onClickButtonDiscount(){
    const input1 = document.getElementById("InputPrice");
    const input2 = document.getElementById("InputDiscount");
    const input3 = document.getElementById("InputCoupon");
    const price = Number(input1.value);
    const discount = Number(input2.value); 
    const coupon = aplicarCupon(input3.value); 
    const precioFinal = aplicarDescuento(price,discount,coupon);
    const descuentoTotal = descuentoAplicado(discount,coupon);   
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = ("El precio final es $" + precioFinal);
    const resultDiscount = document.getElementById("ResultDiscount");
    resultDiscount.innerText = ("Descuento total aplicado es " + descuentoTotal + "%");
 };
