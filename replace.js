function DNAtoRANA(dna){
    let words=dna.split("")
    //  console.log(words)
    for(let i=0;i<words.length;i++){
       if(words[i]==="t"){
        words[i]="u"
          
        }
    }
        return words.join("")
    } 
   
console.log(DNAtoRANA("tttt"))