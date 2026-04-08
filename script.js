producta = {
    name : "apple",
    price : 200
}

productc = {
    name : "ball",
    price : 200
}
productb = {
    name : "electronic",
    price : 193838
}
function isSameProduct(product1 , product2){
if ( product1.price == product2.price)
    console.log(` the product ${product1.name} cost same as  ${product2.name} `)
else {
 if ( product1.price > product2.price)
    console.log(` the product ${product1.name} is price ${product1.price} is higher`)
else {
    
    console.log(` the product ${product2.name} is price ${product2.price} is higher`)
}
}   
}

isSameProduct(producta , productb);
isSameProduct(producta , productc);