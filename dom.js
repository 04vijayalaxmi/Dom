//onevent listener
//let greetBtnEl=document.getElementById("greetBtn");

//greetBtnEl.onclick=function(){
 //   console.log("Hi Rahul");
//}


//addEvent Listener()
//let greetBtnEl=document.getElementById("greetBtn");
//greetBtnEl.addEventListener("click", function(){
  //  console.log("Hi Nandini");
//})


//Key events(Down key)
//let inputElement= document.createElement("input");

//function printKeyDown(){
 //   console.log("key pressed");
//}
//inputElement.addEventListener("keydown", printKeyDown);
//document.body.appendChild(inputElement);

//let inputElement= document.createElement("input");

//function printKeyDown(event){
 //   console.log(event.key);
  
//}
//inputElement.addEventListener("keydown", printKeyDown);
//document.body.appendChild(inputElement);

//let timerEl=document.getElementById("timer");
//let countdown=5;
//let intervalId=setInterval(function(){
  //  countdown=countdown-1;
   // timerEl.textContent=countdown;
    //if(countdown===0){
     //timerEl.textContent="BOOM!!";
     //clearInterval(intervalId);
    //}
   // timerEl.textcontent=countdown;
//}, 1000)


//Marh method

//math.ceil
const calculation=Math.ceil(10.53)
document.write("<h1>Calculation:", calculation)

//math.floor
const calculationn=Math.floor(10.53)
document.write("<h1>Calculation:", calculationn)

//math.round
const calculationnn=Math.round(7.53)
document.write("<h1>Calculation:", calculationnn)

//math.Max
const calc=Math.max(7.53,55,890,5582,11545)
document.write("<h1>Calculation:", calc)

//math.Min
const calcc=Math.min(7.53,55,890,5582,11545)
document.write("<h1>Calculation:", calcc)


//math.random
const calccc=Math.random()*10
document.write("<h1>Calculation:", calccc)


//math.random with floor
const call=Math.floor(Math.random()*10)
document.write("<h1>Calculation:", call)

//math.random with floor
const cal=Math.floor(Math.random()*10)+1
document.write("<h1>Calculation:", cal +"<br>")

//Array
 //   let  sampleArray=["Apple","Mango","Banana",true,99]
//document.write(sampleArray +"<br>")

//const capitals = {
  //  India:"New Delhi",
 //   telangana:"hyderabad",
   // maharastra:"mumbai",
   // location:function(){
  //      return "I live in "+ this.telangana
   // }
//}

//capitals.maharastra="Bombay"
//document.write(capitals.maharastra +"<br>")
//document.write(capitals.India +"<br>")

//document.write(capitals.location())

const fruits = new Object()

fruits.apple="Red"
fruits.mango="yellow"
console.log(fruits)

const Animator = setInterval(sampleAnimation,1000)
let a=0;

function sampleAnimation(){
     a=a+1;
     if(a==5){
        clearInterval(Animator)
     }else{
        const textAnimation = document.getElementById("title")
     textAnimation.style.fontSize= a+"rem"
}
     }
