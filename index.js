const { objectContaining } = require("expect")

// Code your solution here
function findMatching(drivers, name){
    const found = drivers.filter(element => element.toLowerCase() === name.toLowerCase()) 
    //return drivers.filter(element => element === name)
    //debugger;
    return found    
}
function fuzzyMatch(drivers, str){
   return drivers.filter(driver => driver.toLowerCase().indexOf(str.toLowerCase()) === 0) 
}


//   drivers.filter(function(driver) {
    // code here
// })


 function matchName(drivers, str){
    return drivers.filter(obj => obj.name === str)
  
 }