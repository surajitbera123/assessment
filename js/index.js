let div = document.getElementById("element")

let h2 = document.getElementsByTagName("h2")

let p = document.getElementsByClassName("box")


let h1 = document.getElementById("text")

let a= h1.innerText = "Hello World"
console.log(a) 


function execute()
{
    let button = document.getElementsByTagName("button")
    let div = document.getElementsByClassName("container")[0]
   
   
    div.style.flexDirection = "column"  

    
 }

 function fun(){
    let button = document.getElementsByTagName("button")
    let p = document.getElementsByClassName("text")[0]

    p.innerText = "Welcome to Elevation academy"
     p.style.color = "red";
     p.style.fontSize="40px";
 }

 

// function excute()
// {
//     let select =document.getElementsByTagName("select").value
//     console.log(select);
// }





// let c = document.getElementById("xyz");
// c.addEventListener("")




// var year=document.querySelector("#xyz");
// year.addEventListener("change",changeYear);

// function changeYear(e){

// var val=e.target.value;
// var b=document.querySelector("h2");
// b.innerHTML="You have Selected: "+val;
// b.style.textAlign="center";
// b.style.color="red";

// }














//  function getTime(){
//     let date = new Date();
//     let HH = date.getHours();
//     let MM = date.getMinutes();
//     let SS = date.getSeconds();
//     document.getElementById("HH").innerText = HH;
//     document.getElementById("MM").innerText = MM;
//     document.getElementById("SS").innerText = SS;
//     setTimeout(getTime, 1000);
// }
// getTime();