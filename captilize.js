// Jaden Smith, the son of Will Smith, is the star of films such as The Karate k
// Example:



// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase=function(){
    let words=this.split(" ")
     console.log(words)
    for(let i =0;i<words.length;i++){
        let word=words[i]
       let captilized= word.charAt(0).toUpperCase()+word.slice(1)
        console.log(captilized)
        words[i]=captilized
    }
//    console.log(`hi${this}`) 
return words.join(" ")

}
console.log("shami is good girl".toJadenCase())
