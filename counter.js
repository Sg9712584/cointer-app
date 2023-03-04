const increament = document.getElementById("increament");
const decreament = document.getElementById("decreament");
const rest = document.getElementById("rest");
const number_1 =  document.getElementById("number_1");


// for increament 
increament.addEventListener("click",()=>{

    const value = Number(number_1.innerText);
    
    if (value >= 100) {
        alert("10+ values are not allowed");
      } else {
        number_1.innerText = value + 1;
      }
});

// for decreament 

decreament.addEventListener("click",()=>{
    const value = Number(number_1.innerText);

    if (value >0){
        number_1.innerText = value-1;
    }else{
        alert("-ve number is not valid")
    }
})

// for reast

rest.addEventListener("click",()=>{
    number_1.innerText=0;
})