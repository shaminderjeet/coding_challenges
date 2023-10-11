
const pluscounter=document.getElementById("increment-counter")
console.log(pluscounter)
const minuscounter=document.getElementById("decrement-counter")
const total=document.getElementById("totalvalue")

let count=0;
total.innerHTML=count;

let increment=()=>{
count++;
total.innerHTML=count;
}
let decrement=()=>{
      if(count==0){
        return
    }
    else{
        count--;
        total.innerHTML=count;
    }
}
    

pluscounter.addEventListener("click",increment)

minuscounter.addEventListener("click",decrement)


