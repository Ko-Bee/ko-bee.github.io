unusedArrayAchiever();
document.getElementById("r1").addEventListener("input", checkHowMany);
document.getElementById("r2").addEventListener("input", checkHowMany);
document.getElementById("r3").addEventListener("input", checkHowMany);
document.getElementById("r4").addEventListener("input", checkHowMany);
document.getElementById("r5").addEventListener("input", checkHowMany);
document.getElementById("r6").addEventListener("input", checkHowMany);
document.getElementById("r7").addEventListener("input", checkHowMany);
document.getElementById("r8").addEventListener("input", checkHowMany);
document.getElementById("r9").addEventListener("input", checkHowMany);
document.getElementById("r10").addEventListener("input", checkHowMany);
document.getElementById("sizeSelectorR1").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR2").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR3").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR4").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR5").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR6").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR7").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR8").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR9").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorR10").addEventListener("click", checkHowMany);
document.getElementById("parallel").addEventListener("click", checkHowMany);
document.getElementById("series").addEventListener("click", checkHowMany);
document.getElementById("noOfResistors").addEventListener("change", clearAllValues);
document.getElementById("noOfResistors").addEventListener("change", unusedArrayAchiever);

function unusedArrayAchiever() {
    var resistorList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < resistorList.length; i++) {
        resistorList[i] = 0;
    }
    var noOfResistors = document.getElementById("noOfResistors").value;
    for (i = 0; i < noOfResistors; i++) {
        resistorList[i] = 1;
    }
    for (i = 0; i < resistorList.length; i++) {
        var str1 = "R";
        var str2 = "paragraphSection";
        var c = parseInt(i) + 1;
        var str3 = c.toString(10);
        var validID = str1.concat(str3, str2);
        if (resistorList[i] == "0") {
            var x = document.getElementById(validID);
            x.style.display = "none";
        } else {
            var x = document.getElementById(validID);
            x.style.display = "block";
        }
    }
}

function clearAllValues(){
    document.getElementById("r1").value='';
    document.getElementById("r2").value='';
    document.getElementById("r3").value='';
    document.getElementById("r4").value='';
    document.getElementById("r5").value='';
    document.getElementById("r6").value='';
    document.getElementById("r7").value='';
    document.getElementById("r8").value='';
    document.getElementById("r9").value='';
    document.getElementById("r10").value='';
    document.getElementById("resultOut2").innerText = '';
    
}

function checkHowMany() {
    var noOfResistors = document.getElementById("noOfResistors").value;
    switch (noOfResistors) {
        case "2":
            computeResistors("2");
            break;
        case "3":
            computeResistors("3");
            break;
        case "4":
            computeResistors("4");
            break;
        case "5":
            computeResistors("5");
            break;
        case "6":
            computeResistors("6");
            break;
        case "7":
            computeResistors("7");
            break;
        case "8":
            computeResistors("8");
            break;
        case "9":
            computeResistors("9");
            break;
        case "10":
            computeResistors("10");
            break;
    }
}

function computeResistors(x, y) {
    switch (x) {
        case "2":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = (R1 * R2) / (R1 + R2);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "3":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "4":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var R4 = inputConvert(parseInt(document.getElementById("r4").value), document.getElementById("sizeSelectorR4").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3 + 1 / R4);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3 + R4;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "5":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var R4 = inputConvert(parseInt(document.getElementById("r4").value), document.getElementById("sizeSelectorR4").value);
            var R5 = inputConvert(parseInt(document.getElementById("r5").value), document.getElementById("sizeSelectorR5").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3 + 1 / R4 + 1 / R5);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3 + R4 + R5;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "6":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var R4 = inputConvert(parseInt(document.getElementById("r4").value), document.getElementById("sizeSelectorR4").value);
            var R5 = inputConvert(parseInt(document.getElementById("r5").value), document.getElementById("sizeSelectorR5").value);
            var R6 = inputConvert(parseInt(document.getElementById("r6").value), document.getElementById("sizeSelectorR6").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3 + 1 / R4 + 1 / R5 + 1 / R6);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3 + R4 + R5 + R6;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "7":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var R4 = inputConvert(parseInt(document.getElementById("r4").value), document.getElementById("sizeSelectorR4").value);
            var R5 = inputConvert(parseInt(document.getElementById("r5").value), document.getElementById("sizeSelectorR5").value);
            var R6 = inputConvert(parseInt(document.getElementById("r6").value), document.getElementById("sizeSelectorR6").value);
            var R7 = inputConvert(parseInt(document.getElementById("r7").value), document.getElementById("sizeSelectorR7").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3 + 1 / R4 + 1 / R5 + 1 / R6 + 1 / R7);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3 + R4 + R5 + R6 + R7;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "8":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var R4 = inputConvert(parseInt(document.getElementById("r4").value), document.getElementById("sizeSelectorR4").value);
            var R5 = inputConvert(parseInt(document.getElementById("r5").value), document.getElementById("sizeSelectorR5").value);
            var R6 = inputConvert(parseInt(document.getElementById("r6").value), document.getElementById("sizeSelectorR6").value);
            var R7 = inputConvert(parseInt(document.getElementById("r7").value), document.getElementById("sizeSelectorR7").value);
            var R8 = inputConvert(parseInt(document.getElementById("r8").value), document.getElementById("sizeSelectorR8").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3 + 1 / R4 + 1 / R5 + 1 / R6 + 1 / R7 + 1 / R8);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3 + R4 + R5 + R6 + R7 + R8;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "9":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var R4 = inputConvert(parseInt(document.getElementById("r4").value), document.getElementById("sizeSelectorR4").value);
            var R5 = inputConvert(parseInt(document.getElementById("r5").value), document.getElementById("sizeSelectorR5").value);
            var R6 = inputConvert(parseInt(document.getElementById("r6").value), document.getElementById("sizeSelectorR6").value);
            var R7 = inputConvert(parseInt(document.getElementById("r7").value), document.getElementById("sizeSelectorR7").value);
            var R8 = inputConvert(parseInt(document.getElementById("r8").value), document.getElementById("sizeSelectorR8").value);
            var R9 = inputConvert(parseInt(document.getElementById("r9").value), document.getElementById("sizeSelectorR9").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3 + 1 / R4 + 1 / R5 + 1 / R6 + 1 / R7 + 1 / R8 + 1 / R9);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3 + R4 + R5 + R6 + R7 + R8 + R9;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
        case "10":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r3").value), document.getElementById("sizeSelectorR3").value);
            var R4 = inputConvert(parseInt(document.getElementById("r4").value), document.getElementById("sizeSelectorR4").value);
            var R5 = inputConvert(parseInt(document.getElementById("r5").value), document.getElementById("sizeSelectorR5").value);
            var R6 = inputConvert(parseInt(document.getElementById("r6").value), document.getElementById("sizeSelectorR6").value);
            var R7 = inputConvert(parseInt(document.getElementById("r7").value), document.getElementById("sizeSelectorR7").value);
            var R8 = inputConvert(parseInt(document.getElementById("r8").value), document.getElementById("sizeSelectorR8").value);
            var R9 = inputConvert(parseInt(document.getElementById("r9").value), document.getElementById("sizeSelectorR9").value);
            var R10 = inputConvert(parseInt(document.getElementById("r10").value), document.getElementById("sizeSelectorR10").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case true:
                    var finalOutputValue = 1 / (1 / R1 + 1 / R2 + 1 / R3 + 1 / R4 + 1 / R5 + 1 / R6 + 1 / R7 + 1 / R8 + 1 / R9 + 1 / R10);
                    finalOutputFunction(finalOutputValue);
                    break;
                default:
                    var finalOutputValue = R1 + R2 + R3 + R4 + R5 + R6 + R7 + R8 + R9 + R10;
                    finalOutputFunction(finalOutputValue);
                    break;
            }
            break;
    }
}

function inputConvert(x, y) {
    switch (y) {
        case "1":
            return x;
            break;
        case "2":
            return x * 1000;
            break;
        case "3":
            return x * 1000000;
            return;
    }
}

function finalOutputFunction(x) {
    if (isNaN(x)) {
        document.getElementById("resultOut2").innerText = "";
    } else {
        x = x;

        if (x >= 1000000) {
            var y = x / 1000000;
            document.getElementById("resultOut2").innerText = Math.round((y + Number.EPSILON) * 100) / 100 + " MΩ";
        } else if (x >= 1000 && x < 1000000) {
            var y = x / 1000;
            document.getElementById("resultOut2").innerText = Math.round((y + Number.EPSILON) * 100) / 100 + " kΩ";
        } else {
            document.getElementById("resultOut2").innerText = Math.round((x + Number.EPSILON) * 100) / 100 + " Ω";
        }
    }
}
