const display=document.getElementById("display");
function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    if (
        (input === "+" || input === "-" || input === "*" || input === "/"|| input === ".") &&
        (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"||lastChar ===".")||
        (lastChar=="")&&(input === "+" || input === "-" || input === "*" || input === "/")
    ) {
    } else {
        display.value += input;
    }
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    display.value= eval(display.value)
} 