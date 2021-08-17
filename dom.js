//!1. 
// let buttom=document.getElementById("clickon");
// console.log(buttom);
// buttom.addEventListener("click", function(){
// buttom.innerText = "it to much time"
// })

//!2. 
// let buttonOne=document.getElementById("buttonId");
// buttonOne.addEventListener("click",function(){
//     alert("one")
// })

// let buttontwo= document.getElementById("buttonIdOne");
// buttontwo.addEventListener("click", function(){
//     alert("two");
// })

// let buttonthree= document.getElementById("buttonIdTwo");
// buttonthree.addEventListener("click", function(){
//     alert("three")
// })

// let buttonfour= document.getElementById("buttonIdThree");
// buttonfour.addEventListener("click", function(){
//     alert("four")
// })

// console.log(buttonOne);
// console.log(buttontwo);
// console.log(buttonthree);
// console.log(buttonfour);

//!3. 
// let printIdByClick=document.getElementById("printerId");
// console.log(printIdByClick);
// let printElementByClick = document.getElementsByClassName("printByList");
// console.log(printElementByClick);

// for (let i = 0; i < printElementByClick.length; i++) {
//     printElementByClick[i].addEventListener("click", function () {   
//     console.log(printElementByClick[i])})

// } 
// //!4. 
// let button = document.getElementById("goUpper");
// let paragraph = document.getElementById("array");
// let buttomDown=document.getElementById("go down");
// console.log(button);
// console.log(paragraph);
// console.log(buttomDown);


// let num = 0;
// while (button) {
//     button.addEventListener("click", function (){
//         paragraph.innerText=num++
//     })
//     break;
// }


//!5.
// let button = document.getElementById("goUpper");
// let paragraph = document.getElementById("array");
// let buttomDown=document.getElementById("go down");
// console.log(button);
// console.log(paragraph);
// console.log(buttomDown);


// let num = 0;
// while (button||buttomDown) if(button || buttomDown){{
//     button.addEventListener ||buttomDown.addEventListener("click", function (){
//         paragraph.innerText=num++
//     })
//     break;
// }
// }

//!7. 
const arrayProucts=[
  car ={
    nameProduct:"mazda",
    ditailes:"the best car",
    price:1000
},
motorbike={
    nameProduct:"yamaha",
    ditailes:"the best motorBike",
    price:3500
},
corkinate={
    nameProduct:"yamaha",
    ditailes:"the best motorBike",
    price:20000
}
]
//!7.a
maxPrice=arrayProucts[0].price;
for( let i=1;i<arrayProucts.length;i++){
    if(maxPrice < arrayProucts[i].price){
        maxPrice = arrayProucts[i].price
    }
} 
    console.log(maxPrice);
// //!7.b
minPrice=arrayProucts[0].price;
for( let i=1;i<arrayProucts.length;i++){
    if(minPrice > arrayProucts[i].price){
        minPrice = arrayProucts[i].price
    }
} 
    console.log(minPrice);
//!7c
for( let i=0;i<arrayProucts.length;i++){
    arrayProucts[i].price *= 0.7;
}
console.log(arrayProucts);