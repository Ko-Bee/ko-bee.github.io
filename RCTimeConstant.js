clearAll();
document.getElementById("c1").addEventListener("input", verifyC1);
document.getElementById("r1").addEventListener("input", verifyR1);
document.getElementById("vin").addEventListener("input", verifyVin);
document.getElementById("c1").addEventListener("input", calculateT_E);
document.getElementById("r1").addEventListener("input", calculateT_E);
document.getElementById("vin").addEventListener("input", calculateT_E);
document.getElementById("sizeSelectorC1").addEventListener("click", verifyC1);
document.getElementById("sizeSelectorR1").addEventListener("click", verifyR1);
document.getElementById("sizeSelectorC1").addEventListener("click", calculateT_E);
document.getElementById("sizeSelectorR1").addEventListener("click", calculateT_E);

function verifyC1() {
    var loadCapacitance = document.getElementById("c1").value;
    if (isNaN(loadCapacitance)) {
        document.getElementById("c1AlertBody").innerText = "Must be a positive number";
        document.getElementById("c1AlertArrow").style.display = "block";
        document.getElementById("c1AlertBody").style.display = "block";
    }
    if (loadCapacitance == "") {
        document.getElementById("c1AlertArrow").style.display = "none";
        document.getElementById("c1AlertBody").style.display = "none";
    }
}

function verifyR1() {
    var resistorValue = document.getElementById("r1").value;
    if (isNaN(resistorValue)) {
        document.getElementById("r1AlertBody").innerText = "Must be a positive number";
        document.getElementById("r1AlertArrow").style.display = "block";
        document.getElementById("r1AlertBody").style.display = "block";
    }
    if (resistorValue == "") {
        document.getElementById("r1AlertArrow").style.display = "none";
        document.getElementById("r1AlertBody").style.display = "none";
    }
}

function verifyVin() {
    var vinValue = document.getElementById("vin").value;
    if (isNaN(vinValue)) {
        document.getElementById("vinAlertBody").innerText = "Must be a positive number";
        document.getElementById("vinAlertArrow").style.display = "block";
        document.getElementById("vinAlertBody").style.display = "block";
    }
    if (vinValue == "") {
        document.getElementById("vinAlertArrow").style.display = "none";
        document.getElementById("vinAlertBody").style.display = "none";
    }
}

function calculateT_E() {
    var c1SizeSelectState = document.getElementById("sizeSelectorC1").value;
    var r1SizeSelectState = document.getElementById("sizeSelectorR1").value;
    var c1Input = document.getElementById("c1").value;
    var r1Input = document.getElementById("r1").value;
    var vinInput = document.getElementById("vin").value;
    var ConvertedCapacitanceValue = inputConvertCapacitor(c1Input, c1SizeSelectState);
    var ConvertedResistanceValue = inputResistorConvert(r1Input, r1SizeSelectState);
    var energyResultOutput = (vinInput * vinInput) * (ConvertedCapacitanceValue / 2);
    var timeConstantResultOutput = (ConvertedCapacitanceValue * ConvertedResistanceValue)
    if (c1Input != "" && r1Input != "" && vinInput != "") {
        document.getElementById("timeConstantResult").innerText = timeConstantResultOutput + " s";
        document.getElementById("joulesResult").innerText = energyResultOutput + " J";
    } else {
        document.getElementById("timeConstantResult").innerText = "";
        document.getElementById("joulesResult").innerText = "";
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

function inputResistorConvert(x, y) {
    switch (y) {
        case "1":
            return x;
            break;
        case "2":
            return x * 1000;
            break;
        case "3":
            return x * 1000000;
            break;
    }
}

function clearAll(){
    document.getElementById("c1").value = "";
    document.getElementById("r1").value = "";
}
