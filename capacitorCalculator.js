unusedArrayAchiever();
document.getElementById("c1").addEventListener("input", checkHowMany);
document.getElementById("c2").addEventListener("input", checkHowMany);
document.getElementById("c3").addEventListener("input", checkHowMany);
document.getElementById("c4").addEventListener("input", checkHowMany);
document.getElementById("c5").addEventListener("input", checkHowMany);
document.getElementById("c6").addEventListener("input", checkHowMany);
document.getElementById("c7").addEventListener("input", checkHowMany);
document.getElementById("c8").addEventListener("input", checkHowMany);
document.getElementById("c9").addEventListener("input", checkHowMany);
document.getElementById("c10").addEventListener("input", checkHowMany);
document.getElementById("sizeSelectorC1").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC2").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC3").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC4").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC5").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC6").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC7").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC8").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC9").addEventListener("click", checkHowMany);
document.getElementById("sizeSelectorC10").addEventListener("click", checkHowMany);
document.getElementById("parallel").addEventListener("click", checkHowMany);
document.getElementById("series").addEventListener("click", checkHowMany);
document.getElementById("noOfCapacitors").addEventListener("change", clearAllValues);
document.getElementById("noOfCapacitors").addEventListener("change", unusedArrayAchiever);

function unusedArrayAchiever() {
    var capacitorList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < capacitorList.length; i++) {
        capacitorList[i] = 0;
    }
    var noOfCapacitors = document.getElementById("noOfCapacitors").value;
    for (i = 0; i < noOfCapacitors; i++) {
        capacitorList[i] = 1;
    }
    for (i = 0; i < capacitorList.length; i++) {
        var str1 = "C";
        var str2 = "paragraphSection";
        var c = parseInt(i) + 1;
        var str3 = c.toString(10);
        var validID = str1.concat(str3, str2);
        if (capacitorList[i] == "0") {
            var x = document.getElementById(validID);
            x.style.display = "none";
        } else {
            var x = document.getElementById(validID);
            x.style.display = "block";
        }
    }
}

function clearAllValues(){
    document.getElementById("c1").value='';
    document.getElementById("c2").value='';
    document.getElementById("c3").value='';
    document.getElementById("c4").value='';
    document.getElementById("c5").value='';
    document.getElementById("c6").value='';
    document.getElementById("c7").value='';
    document.getElementById("c8").value='';
    document.getElementById("c9").value='';
    document.getElementById("c10").value='';
    document.getElementById("resultOut2").innerText = '';
    
}

function checkHowMany() {
    var noOfCapacitors = document.getElementById("noOfCapacitors").value;
    switch (noOfCapacitors) {
        case "2":
            computeCapacitors("2");
            break;
        case "3":
            computeCapacitors("3");
            break;
        case "4":
            computeCapacitors("4");
            break;
        case "5":
            computeCapacitors("5");
            break;
        case "6":
            computeCapacitors("6");
            break;
        case "7":
            computeCapacitors("7");
            break;
        case "8":
            computeCapacitors("8");
            break;
        case "9":
            computeCapacitors("9");
            break;
        case "10":
            computeCapacitors("10");
            break;
    }
}

function computeCapacitors(x, y) {
    switch (x) {
        case "2":
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var R4 = inputConvert(parseInt(document.getElementById("c4").value), document.getElementById("sizeSelectorC4").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var R4 = inputConvert(parseInt(document.getElementById("c4").value), document.getElementById("sizeSelectorC4").value);
            var R5 = inputConvert(parseInt(document.getElementById("c5").value), document.getElementById("sizeSelectorC5").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var R4 = inputConvert(parseInt(document.getElementById("c4").value), document.getElementById("sizeSelectorC4").value);
            var R5 = inputConvert(parseInt(document.getElementById("c5").value), document.getElementById("sizeSelectorC5").value);
            var R6 = inputConvert(parseInt(document.getElementById("c6").value), document.getElementById("sizeSelectorC6").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var R4 = inputConvert(parseInt(document.getElementById("c4").value), document.getElementById("sizeSelectorC4").value);
            var R5 = inputConvert(parseInt(document.getElementById("c5").value), document.getElementById("sizeSelectorC5").value);
            var R6 = inputConvert(parseInt(document.getElementById("c6").value), document.getElementById("sizeSelectorC6").value);
            var R7 = inputConvert(parseInt(document.getElementById("c7").value), document.getElementById("sizeSelectorC7").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var R4 = inputConvert(parseInt(document.getElementById("c4").value), document.getElementById("sizeSelectorC4").value);
            var R5 = inputConvert(parseInt(document.getElementById("c5").value), document.getElementById("sizeSelectorC5").value);
            var R6 = inputConvert(parseInt(document.getElementById("c6").value), document.getElementById("sizeSelectorC6").value);
            var R7 = inputConvert(parseInt(document.getElementById("c7").value), document.getElementById("sizeSelectorC7").value);
            var R8 = inputConvert(parseInt(document.getElementById("c8").value), document.getElementById("sizeSelectorC8").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var R4 = inputConvert(parseInt(document.getElementById("c4").value), document.getElementById("sizeSelectorC4").value);
            var R5 = inputConvert(parseInt(document.getElementById("c5").value), document.getElementById("sizeSelectorC5").value);
            var R6 = inputConvert(parseInt(document.getElementById("c6").value), document.getElementById("sizeSelectorC6").value);
            var R7 = inputConvert(parseInt(document.getElementById("c7").value), document.getElementById("sizeSelectorC7").value);
            var R8 = inputConvert(parseInt(document.getElementById("c8").value), document.getElementById("sizeSelectorC8").value);
            var R9 = inputConvert(parseInt(document.getElementById("c9").value), document.getElementById("sizeSelectorC9").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            var R1 = inputConvert(parseInt(document.getElementById("c1").value), document.getElementById("sizeSelectorC1").value);
            var R2 = inputConvert(parseInt(document.getElementById("c2").value), document.getElementById("sizeSelectorC2").value);
            var R3 = inputConvert(parseInt(document.getElementById("c3").value), document.getElementById("sizeSelectorC3").value);
            var R4 = inputConvert(parseInt(document.getElementById("c4").value), document.getElementById("sizeSelectorC4").value);
            var R5 = inputConvert(parseInt(document.getElementById("c5").value), document.getElementById("sizeSelectorC5").value);
            var R6 = inputConvert(parseInt(document.getElementById("c6").value), document.getElementById("sizeSelectorC6").value);
            var R7 = inputConvert(parseInt(document.getElementById("c7").value), document.getElementById("sizeSelectorC7").value);
            var R8 = inputConvert(parseInt(document.getElementById("c8").value), document.getElementById("sizeSelectorC8").value);
            var R9 = inputConvert(parseInt(document.getElementById("c9").value), document.getElementById("sizeSelectorC9").value);
            var R10 = inputConvert(parseInt(document.getElementById("c10").value), document.getElementById("sizeSelectorC10").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch (radioSelection) {
                case false:
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
            x = x / 1000000000000;
            return x
            break;
        case "2":
            x = x / 1000000000;
            return x
            break;
        case "3":
            x = x / 1000000;
            return x
            break;
        case "4":
            x = x / 1000;
            return x
            break;
        case "5":
            return x;
            break;
    }
}

function finalOutputFunction(x) {
    if (isNaN(x)) {
        document.getElementById("resultOut2").innerText = "";
    } else {
        x = x;

        if (x <1 && x >=0.00099) {
            var y = x * 1000;
            document.getElementById("resultOut2").innerText = Math.round((y + Number.EPSILON) * 100) / 100 + " mF";
        } 
        else if (x <0.00099 && x >=0.00000099) {
            var y = x * 1000000;
            document.getElementById("resultOut2").innerText = Math.round((y + Number.EPSILON) * 100) / 100 + " µF";
        } 
        else if (x <0.00000099 && x >=0.00000000099) {
            var y = x * 1000000000;
            document.getElementById("resultOut2").innerText = Math.round((y + Number.EPSILON) * 100) / 100 + " nF";
        } 
        else if (x< 0.00000000099 && x >=0.00000000000000000099) {
            var y = x * 1000000000000;
            document.getElementById("resultOut2").innerText = Math.round((y + Number.EPSILON) * 100) / 100 + " pF";
        } 
        else {
            document.getElementById("resultOut2").innerText = Math.round((x + Number.EPSILON) * 100) / 100 + " F";
        }
    }
}
