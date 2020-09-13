clearAllValues()
document.getElementById("monostable").addEventListener("click", clearAllValues);
document.getElementById("astable").addEventListener("click", clearAllValues);
document.getElementById("r1").addEventListener("input", computeValues);
document.getElementById("r2").addEventListener("input", computeValues);
document.getElementById("c1").addEventListener("input", computeValues);
document.getElementById("sizeSelectorR1").addEventListener("click", computeValues);
document.getElementById("sizeSelectorC1").addEventListener("click", computeValues);
document.getElementById("sizeSelectorR2").addEventListener("click", computeValues);
document.getElementById("r1").addEventListener("input", validataDataR1);
document.getElementById("r2").addEventListener("input", validataDataR2);
document.getElementById("c1").addEventListener("input", validataDataC1);
document.getElementById("sizeSelectorR1").addEventListener("click", validataDataR1);
document.getElementById("sizeSelectorC1").addEventListener("click", validataDataC1);
document.getElementById("sizeSelectorR2").addEventListener("click", validataDataR2);

function validataDataR1(){
    var resistor1 =document.getElementById("r1").value;
    if(isNaN(resistor1)){
        document.getElementById('r1AlertBody').innerText = 'Must be a positive number';
        document.getElementById('r1AlertArrow').style.display = 'block';
        document.getElementById('r1AlertBody').style.display = 'block';
    }
    if(resistor1==""){
        document.getElementById('r1AlertArrow').style.display = 'none';
        document.getElementById('r1AlertBody').style.display = 'none';
    }
}
function validataDataR2(){
    var resistor2 = document.getElementById("r2").value;
    if(isNaN(resistor2)){
        document.getElementById('r2AlertBody').innerText = 'Must be a positive number';
        document.getElementById('r2AlertArrow').style.display = 'block';
        document.getElementById('r2AlertBody').style.display = 'block';
    }
    if(resistor2==""){
        document.getElementById('r2AlertArrow').style.display = 'none';
        document.getElementById('r2AlertBody').style.display = 'none';
    }
}
function validataDataC1(){
    var capacitor1 = document.getElementById("c1").value;
    if(isNaN(capacitor1)){
        document.getElementById('c1AlertBody').innerText = 'Must be a positive number';
        document.getElementById('c1AlertArrow').style.display = 'block';
        document.getElementById('c1AlertBody').style.display = 'block';
    }
    if(capacitor1==""){
        document.getElementById('c1AlertArrow').style.display = 'none';
        document.getElementById('c1AlertBody').style.display = 'none';
    }
}

function computeValues(){
    var radioSelection = document.getElementById("monostable").checked;
    var resistor1Multiple = document.getElementById("sizeSelectorR1").value;
    var resistor1 = parseInt(inputConvertResistor(document.getElementById("r1").value, resistor1Multiple));
    console.log("computeValues -> resistor1", resistor1);
    var capacitor1Multiple = document.getElementById("sizeSelectorC1").value;
    var capacitor1 = inputConvertCapacitor(document.getElementById("c1").value, capacitor1Multiple);
    console.log("computeValues -> capacitor1", capacitor1);
    var resistor2Multiple = document.getElementById("sizeSelectorR2").value;
    var resistor2 = parseInt(inputConvertResistor(document.getElementById("r2").value, resistor2Multiple));
    console.log("computeValues -> resistor2", resistor2);
    switch(radioSelection){
        case true:
            if(resistor1!="" && capacitor1!=""){
            var timeOutDelay = 1.1*resistor1*capacitor1;
            document.getElementById("timeOutDelay").innerText = Math.round((timeOutDelay + Number.EPSILON) * 1000) / 1000 + " Sec";
            }
            else{
                clearResults();
            }
            break;
        default:
            if(document.getElementById("r1").value!="" && document.getElementById("r2").value!="" && capacitor1!=""){
            var timeHigh = 0.693 * (resistor1 + resistor2) * capacitor1;
            console.log("computeValues -> timeHigh", timeHigh)
            var timeLow = 0.693 * resistor2 * capacitor1;
            console.log("computeValues -> timeLow", timeLow)
            var frequency = 1.44 /((resistor1+resistor2+resistor2)*capacitor1);
            console.log("computeValues -> frequency", frequency)
            var dutyCycle = (timeHigh/(timeHigh + timeLow))*100;
            console.log("computeValues -> dutyCycle", dutyCycle)
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
    document.getElementById('r1AlertArrow').style.display = 'none';
    document.getElementById('r1AlertBody').style.display = 'none';
    document.getElementById('c1AlertArrow').style.display = 'none';
    document.getElementById('c1AlertBody').style.display = 'none';
    document.getElementById('r2AlertArrow').style.display = 'none';
    document.getElementById('r2AlertBody').style.display = 'none';
}


function clearResults(){
    document.getElementById("timeOutDelay").innerText = '';
    document.getElementById("dutyCyclePercentageResult").innerText = '';
    document.getElementById("frequencyResult").innerText = '';
    document.getElementById("timeLowResult").innerText = '';
    document.getElementById("timeHighResult").innerText = '';
}

function clearAlerts(){
    document.getElementById('r1AlertArrow').style.display = 'none';
    document.getElementById('r1AlertBody').style.display = 'none';
    document.getElementById('c1AlertArrow').style.display = 'none';
    document.getElementById('c1AlertBody').style.display = 'none';
    document.getElementById('r2AlertArrow').style.display = 'none';
    document.getElementById('r2AlertBody').style.display = 'none';
}