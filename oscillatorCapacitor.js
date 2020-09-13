clearAll();
document.getElementById("cl").addEventListener("input", verifyCl);
document.getElementById("cs").addEventListener("input", verifyCs);
document.getElementById("cl").addEventListener("input", calculateC1C2);
document.getElementById("cs").addEventListener("input", calculateC1C2);
document.getElementById("sizeSelectorCl").addEventListener("click", verifyCl);
document.getElementById("sizeSelectorCs").addEventListener("click", verifyCs);
document.getElementById("sizeSelectorCl").addEventListener("click", calculateC1C2);
document.getElementById("sizeSelectorCs").addEventListener("click", calculateC1C2);

function verifyCl() {
    var loadCapacitance = document.getElementById("cl").value;
    if (isNaN(loadCapacitance)) {
        document.getElementById("clAlertBody").innerText = "Must be a positive number";
        document.getElementById("clAlertArrow").style.display = "block";
        document.getElementById("clAlertBody").style.display = "block";
    }
    if (loadCapacitance == "") {
        document.getElementById("clAlertArrow").style.display = "none";
        document.getElementById("clAlertBody").style.display = "none";
    }
}

function verifyCs() {
    var strayCapacitance = document.getElementById("cs").value;
    if (isNaN(strayCapacitance)) {
        document.getElementById("csAlertBody").innerText = "Must be a positive number";
        document.getElementById("csAlertArrow").style.display = "block";
        document.getElementById("csAlertBody").style.display = "block";
    }
    if (strayCapacitance == "") {
        document.getElementById("csAlertArrow").style.display = "none";
        document.getElementById("csAlertBody").style.display = "none";
    }
}

function calculateC1C2() {
    var clSizeSelectState = document.getElementById("sizeSelectorCl").value;
    console.log("clSizeSelectState", clSizeSelectState);
    var csSizeSelectState = document.getElementById("sizeSelectorCs").value;
    console.log("csSizeSelectState", csSizeSelectState);
    var clInput = document.getElementById("cl").value;
    console.log("clInput", clInput);
    var csInput = document.getElementById("cs").value;
    console.log("csInput", csInput);
    var loadCapacitanceValue = inputConvertCapacitor(clInput, clSizeSelectState);
    console.log("loadCapacitanceValue", loadCapacitanceValue);
    var strayCapacitanceValue = inputConvertCapacitor(csInput, csSizeSelectState);
    console.log("strayCapacitanceValue", strayCapacitanceValue);
    var C1C2Result = 2 * loadCapacitanceValue - 2 * strayCapacitanceValue;
    console.log("C1C2Result", C1C2Result);
    if (clInput != "" && csInput != "") {
        finalOutputFunction(C1C2Result);
    } else {
        document.getElementById("C1C2").innerText = "";
    }
}

function inputConvertCapacitor(x, y) {
    switch (y) {
        case "1":
            x = x / 1000000000000;
            return x;
            break;
        case "2":
            x = x / 1000000000;
            return x;
            break;
        case "3":
            x = x / 1000000;
            return x;
            break;
        case "4":
            x = x / 1000;
            return x;
            break;
        case "5":
            return x;
            break;
    }
}

function finalOutputFunction(x) {
    if (isNaN(x)) {
        document.getElementById("C1C2").innerText = "";
    } else {
        x = x;

        if (x < 1 && x >= 0.00099) {
            var y = x * 1000;
            document.getElementById("C1C2").innerText = Math.round((y + Number.EPSILON) * 1) / 1 + " mF";
        } else if (x < 0.00099 && x >= 0.00000099) {
            var y = x * 1000000;
            document.getElementById("C1C2").innerText = Math.round((y + Number.EPSILON) * 1) / 1 + " µF";
        } else if (x < 0.00000099 && x >= 0.00000000099) {
            var y = x * 1000000000;
            document.getElementById("C1C2").innerText = Math.round((y + Number.EPSILON) * 1) / 1 + " nF";
        } else if (x < 0.00000000099 && x >= 0.00000000000000000099) {
            var y = x * 1000000000000;
            document.getElementById("C1C2").innerText = Math.round((y + Number.EPSILON) * 1) / 1 + " pF";
        } else {
            document.getElementById("C1C2").innerText = Math.round((x + Number.EPSILON) * 1) / 1 + " F";
        }
    }
}

function clearAll(){
    document.getElementById("C1C2").innerText = "";
    document.getElementById("cl").value = "";
    document.getElementById("cs").value = "";
}