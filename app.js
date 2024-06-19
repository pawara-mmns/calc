function calc() {
    let number1 = document.getElementById("firstNumber").value;
    let number2 = document.getElementById("secondNumber").value;
    let operators = document.getElementById("operators").value;
    let output = document.getElementById("output");
    let result;
    switch(operators){
      case "+":
        result=parseInt(number1)+parseFloat(number2);
        break;
      case "-":
        result=parseInt(number1)-parseInt(number2);
        break;
      case "*":
        result=parseInt(number1)*parseInt(number2);
        break;
      case "/":
        result=parseInt(number1)/parseInt(number2);
        break;
      default :
        result="invalid operator"

    }
    output.innerHTML=result;




  }