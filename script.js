function calculate(operation){
 const num1=
 parseFloat(document.getElementById("num1").value);
 const num2=
 parseFloat(document.getElementById("num2").value);

let result=0;
 if(isNaN(num1) || isNaN(num2)){
    alert("Please enter the valid value")
    return;
 }
switch(operation){
    case 'add':
        result=num1+num2;
        break;
    case 'subtract':
        result=num1-num2;
        break;
    case 'multiply':
        result=num1*num2;
        break;
    
    case 'divide':
      if (num2===0){
        alert("you can't divide a number with zero");
      }else{
        result=num1/num2;
      }break;
    default:
        alert("enter the valid number!!")
        return;
}
document.getElementById("result").value=result;
}