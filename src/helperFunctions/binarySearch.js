let data = require('../data/wordSorted.json')

const binarySearch = (word)=>{
 
  let leftPointer = 0;
  let rightPointer = data.length-1;
 while(leftPointer<=rightPointer){
   
  let midPointer = Math.floor((rightPointer+leftPointer)/2)
 
  if(data[midPointer]===word){
    return true;
  }
console.log()
  if(data[midPointer]<word){
     leftPointer=midPointer+1
     
  }else{
    
    rightPointer=midPointer-1;
  }

 }

  return false;
}


 export default binarySearch