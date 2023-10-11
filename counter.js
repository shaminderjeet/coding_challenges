
const pluscounter=document.getElementsById("increment-counter")
console.log(pluscounter)
const minuscounter=document.getElementsById("decrement_counter")
const total=document.getElementsById("totalvalue")

let count=0;
total.innerHTML=count;
console.log(total)
let increment=()=>{
    count++;
}
increment()

increment()
increment()

console.log(count)
