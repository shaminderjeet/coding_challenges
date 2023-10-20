
// const pluscounter=document.getElementById("increment-counter")
// console.log(pluscounter)
// const minuscounter=document.getElementById("decrement-counter")
// const total=document.getElementById("totalvalue")

// let count=0;
// total.innerHTML=count;

// let increment=()=>{
// count++;
// total.innerHTML=count;
// }
// let decrement=()=>{
//       if(count==0){
//         return
//     }
//     else{
//         count--;
//         total.innerHTML=count;
//     }
// }
    

// pluscounter.addEventListener("click",increment)

// minuscounter.addEventListener("click",decrement)

function ABC(dish,beast){
    let first_letter=dish[0]
    let last_letter=dish[dish.length-1]
    let second_letter=beast[0]
    let last_secondletter=beast[beast.length-1]
    // console.log(first_letter)
    // console.log(last_letter)
    // console.log(second_letter)
    // console.log(last_secondletter)
    if((first_letter== second_letter) && (last_letter==last_secondletter)){
    return true;
    }
    else{
      return false
    }
}
function lovefunc(flower1,flower2){
    if (flower1%2!==0&&flower2%2==0) {
        return true;
    }else if(flower1%2==0&&flower2%2!==0){
        return true;
    }else return false;
}
 function toDayOfYear(arr) {
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((arr[2] % 100 !== 0 && arr[2] % 4 === 0) || arr[2] % 400 === 0) {
          months[1] = 29;
        }
        let days = 0;
        for (let i = 0; i < arr[1] - 1; i += 1) {
          days += months[i];
        }
        return arr[0] + days;
      }