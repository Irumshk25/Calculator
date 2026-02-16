function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = 
            eval(document.getElementById("display").value);
    } catch {
        alert("Invalid Expression");
    }
}

function backspace() {
    let currentcacValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}



