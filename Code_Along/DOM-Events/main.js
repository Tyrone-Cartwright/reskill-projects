// selecting using getElementById
const firstNum = document.getElementById("first_number");
const secondNum = document.getElementById("second_number");




// selecting using querySelector
const addButton = document.querySelector(".btn");
const main = document.querySelector(".main");
const resultDiv = document.querySelector(".result")


// selecting using querySelectorAll
const numbers = document.querySelectorAll("input");
// adding eventListeners

addButton.addEventListener("click", () => {
    const result = Number(firstNum.value) + Number(secondNum.value);
    // const div = document.createElement("div");
    resultDiv.innerHTML = `${firstNum.value} + ${secondNum.value} = ${result}`;
    
    if (result > 0) {
        resultDiv.className = "positive"
        resultDiv.style.fontSize = "40px"        
    } else {
        resultDiv.className = "negative"
    }

    // main.appendChild(div);
})