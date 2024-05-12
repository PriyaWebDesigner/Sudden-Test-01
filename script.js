
function sum(){
    event.preventDefault();
    let product1 = document.getElementById('number1').value;
    let product2 = document.getElementById('number2').value;
    let product3 = document.getElementById('number3').value;

     let result = parseFloat(product1)+parseFloat(product2)+parseFloat(product3);

     document.getElementById('result').innerHTML= 'The Total price is ='+ result;
}
sum();