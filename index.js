// Write a JavaScript program to display the current day and time in the following format.  
// arr.forEach((element)=>{
    // //console.log(element)
    // if(element==date){
        //     console.log(date)
        // }
    
            let Day=new Date()
            
            //console.log(Day)
            let date=Day.getDay()
            //console.log(date)
            let arr=["sunday","monday","tues","wed","thurs","friday","saturday"];
            //console.log(arr)
            for(let i =0;i<arr.length;i++){
                    if([i]==date){
                        //console.log(arr[i])
}
 }
 arr.forEach(function callback(value, index) {
//console.log(index)
if(index==date){
    console.log(value)
}
 })

