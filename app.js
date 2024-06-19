function calc() {
    let number1 = document.getElementById("firstNumber").value;
    let number2 =document.getElementById("secondNumber").value;
    let result = parseInt(number1) + parseInt(number2);
    output.innerHTML=result;

  }