document.getElementById("monostable").addEventListener("click", clearAllValues);
document.getElementById("astable").addEventListener("click", clearAllValues);
document.getElementById("r1").addEventListener("input", computeValues);
document.getElementById("r2").addEventListener("input", computeValues);
document.getElementById("c1").addEventListener("input", computeValues);











function computeValues(){
    var radioSelection = document.getElementById("monostable").checked;
    var resistor1Multiple = document.getElementById("sizeSelectorR1").value;
    var resistor1 = inputConvertResistor(document.getElementById("r1").value, resistor1Multiple);
    console.log("computeValues -> resistor1", resistor1);
    var capacitor1Multiple = document.getElementById("sizeSelectorC1").value;
    var capacitor1 = inputConvertCapacitor(document.getElementById("c1").value, capacitor1Multiple);
    console.log("computeValues -> capacitor1", capacitor1);
    var resistor2Multiple = document.getElementById("sizeSelectorR2").value;
    var resistor2 = inputConvertResistor(document.getElementById("r2").value, resistor2Multiple);
    console.log("computeValues -> resistor2", resistor2);
    switch(radioSelection){
        case true:
            if(resistor1!="" && capacitor1!=""){
            var timeOutDelay = 1.1*resistor1*capacitor1;
            document.getElementById("timeOutDelay").innerText = Math.round((timeOutDelay + Number.EPSILON) * 100000) / 100000 + " Sec";
            }
            else{
                clearResults();
            }
            break;
        default:
            if(resistor1!="" && resistor2!="" && capacitor1!=""){
            var timeHigh = 0.693 * (resistor1 + resistor2) * capacitor1;
            var timeLow = 0.693 * resistor2 * capacitor1;
            var frequency = 1.44 /((resistor1+resistor2+resistor2)*capacitor1);
            var dutyCycle = (timeHigh/(timeHigh + timeLow))*100;
            document.getElementById("timeHighResult").innerText = Math.round((timeHigh + Number.EPSILON) * 1000) / 1000 + " Sec";
            document.getElementById("timeLowResult").innerText = Math.round((timeLow + Number.EPSILON) * 1000) / 1000 + " Sec";
            document.getElementById("frequencyResult").innerText = Math.round((frequency + Number.EPSILON) * 10000) / 10000 + " Hz";
            document.getElementById("dutyCyclePercentageResult").innerText = Math.round((dutyCycle + Number.EPSILON) * 100) / 100 + " %";
            }
            else{
                clearResults();
            }
            break;
    }
}


function inputConvertResistor(x, y) {
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


function inputConvertCapacitor(x, y) {
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

function clearAllValues(){
    document.getElementById("r1").value='';
    document.getElementById("r2").value='';
    document.getElementById("c1").value='';
    document.getElementById("timeOutDelay").innerText = '';
    document.getElementById("dutyCyclePercentageResult").innerText = '';
    document.getElementById("frequencyResult").innerText = '';
    document.getElementById("timeLowResult").innerText = '';
    document.getElementById("timeHighResult").innerText = '';
}


function clearResults(){
    document.getElementById("timeOutDelay").innerText = '';
    document.getElementById("dutyCyclePercentageResult").innerText = '';
    document.getElementById("frequencyResult").innerText = '';
    document.getElementById("timeLowResult").innerText = '';
    document.getElementById("timeHighResult").innerText = '';
}