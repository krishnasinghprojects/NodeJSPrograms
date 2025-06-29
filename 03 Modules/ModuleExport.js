function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
module.exports={add,subtract}; //Exporting Both Function Inside An Object

//Exports as anonymous functions
exports.multiply = (a,b)=>{ return a*b;}
exports.divide = (a,b)=>{ return a/b;}