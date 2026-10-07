//console.log("hello");

    
  //  let age=20;
  //  console.log(age);

   // age=50;
  //  console.log(age);

  //  const customerList=["Saman","kamal", "nimal"];
  //  console.log(customerList);

  //  customerList.push ("Kumara");
  //  customerList.reverse();
  //  console.log(customerList);

  const productList=[
    {name:"bun", instock:true, price: 100},
    {name:"milk", instock:true, price: 200},
    {name:"egg", instock:false, price: 300},
    {name:"bread", instock:true, price: 400},
    {name:"butter", instock:false, price: 500},
  ];

  console.log(productList);

  //let inStockProducts=productList.filter(
  //  function (product){
   //     return product.instock==true;

   // }
 // );

  
 // console.log(inStockProducts);



 //3rd step
 
 //let inStockProducts =
 //productList.filter(product=> product.instock==true);

 //console.log(inStockProducts);

 


 //function

 //method 1

 function addNumbers(num1, num2){
    return num1+num2;
 }

  
 console.log(addNumbers(10,20));

//method 2
let getSum=function(num1, num2){
    return num1+num2;

}

console.log(getSum(10,20));


//method 3
let getTotal=(num1, num2) =>{
    return num1+ num2;
}
console.log(getTotal(10,20));



