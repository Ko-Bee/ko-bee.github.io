checkHowMany();
clearAll();
clearResults();
document.getElementById("errorClearButton").addEventListener("click", clearAll);
document.getElementById("errorClearButton").addEventListener("click", checkHowMany);
document.getElementById("vin").addEventListener("input", checkHowMany)
document.getElementById("iin").addEventListener("input", checkHowMany)
document.getElementById("pin").addEventListener("input", checkHowMany)
document.getElementById("r1").addEventListener("input", checkHowMany)
//document.getElementById("vin").addEventListener("input", calculateValues)
//document.getElementById("iin").addEventListener("input", calculateValues)
//document.getElementById("pin").addEventListener("input", calculateValues)
//document.getElementById("r1").addEventListener("input", calculateValues)

function clearAll(){
    document.getElementById("vin").value='';
    document.getElementById("iin").value='';
    document.getElementById("r1").value='';
    document.getElementById("pin").value='';
}

function clearResults(){
    document.getElementById("powerResult").innerText = "";
    document.getElementById("currentResult").innerText = "";
    document.getElementById("resistanceResult").innerText = "";
    document.getElementById("voltageResult").innerText = "";
}

function checkHowMany(){
    var vinInput = document.getElementById("vin").value;
    var iinInput = document.getElementById("iin").value;
    var r1Input = document.getElementById("r1").value;
    var pinInput = document.getElementById("pin").value;
    var vinInputCheck = 0;
    var iinInputCheck = 0;
    var r1InputCheck = 0;
    var pinInputCheck = 0;

     if(vinInput!=""){vinInputCheck = 1}
     if(iinInput!=""){iinInputCheck = 1}
     if(r1Input!=""){r1InputCheck = 1}
     if(pinInput!=""){pinInputCheck = 1}

     var howManyChecked = vinInputCheck+iinInputCheck+r1InputCheck+pinInputCheck;
     if(howManyChecked<2){
        document.getElementById("voltageResultDiv").style.backgroundColor = "#FED700";
        document.getElementById("voltageResultDiv").style.color = "#4E5153";
        document.getElementById("voltageResultP").style.color = "#4E5153";
        document.getElementById("resistanceResultDiv").style.backgroundColor = "#FED700";
        document.getElementById("resistanceResultDiv").style.color = "#4E5153";
        document.getElementById("resistanceResultP").style.color = "#4E5153";
        document.getElementById("currentResultDiv").style.backgroundColor = "#FED700";
        document.getElementById("currentResultDiv").style.color = "#4E5153";
        document.getElementById("currentResultP").style.color = "#4E5153";
        document.getElementById("powerResultDiv").style.backgroundColor = "#FED700";
        document.getElementById("powerResultDiv").style.color = "#4E5153";
        document.getElementById("powerResultP").style.color = "#4E5153";
        document.getElementById("pin").style.backgroundColor = "white";
        document.getElementById("pin").style.borderColor = "#CCCCCC";
        document.getElementById("pLabel").style.color = "#4E5153";
        document.getElementById("sizeSelectorP").style.color = "#4E5153";
        document.getElementById("sizeSelectorP").style.borderColor = "#CCCCCC";
        document.getElementById("pin").disabled = false;
        document.getElementById("r1").style.backgroundColor = "white";
        document.getElementById("r1").style.borderColor = "#CCCCCC";
        document.getElementById("rLabel").style.color = "#4E5153";
        document.getElementById("sizeSelectorR1").style.color = "#4E5153";
        document.getElementById("sizeSelectorR1").style.borderColor = "#CCCCCC";
        document.getElementById("r1").disabled = false;
        document.getElementById("iin").style.backgroundColor = "white";
        document.getElementById("iin").style.borderColor = "#CCCCCC";
        document.getElementById("iLabel").style.color = "#4E5153";
        document.getElementById("sizeSelectorI").style.color = "#4E5153";
        document.getElementById("sizeSelectorI").style.borderColor = "#CCCCCC";
        document.getElementById("iin").disabled = false;
        document.getElementById("vin").style.backgroundColor = "white";
        document.getElementById("vin").style.borderColor = "#CCCCCC";
        document.getElementById("vLabel").style.color = "#4E5153";
        document.getElementById("vlabel2").style.color = "#4E5153";
        document.getElementById("vlabel2").style.borderColor = "#CCCCCC";
        document.getElementById("vin").disabled = false;
     }
     if(howManyChecked==2){
        if(vinInput==1&&iinInput==1){
            document.getElementById("pin").style.backgroundColor = "#ECEFF1";
            document.getElementById("pin").style.borderColor = "#ECEFF1";
            document.getElementById("pLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorP").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorP").style.borderColor = "#ECEFF1";
            document.getElementById("pin").disabled = true;
            document.getElementById("r1").style.backgroundColor = "#ECEFF1";
            document.getElementById("r1").style.borderColor = "#ECEFF1";
            document.getElementById("rLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.borderColor = "#ECEFF1";
            document.getElementById("r1").disabled = true;
        }
        else if(vinInput==1&&r1Input==1){
            document.getElementById("pin").style.backgroundColor = "#ECEFF1";
            document.getElementById("pin").style.borderColor = "#ECEFF1";
            document.getElementById("pLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorP").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorP").style.borderColor = "#ECEFF1";
            document.getElementById("pin").disabled = true;
            document.getElementById("iin").style.backgroundColor = "#ECEFF1";
            document.getElementById("iin").style.borderColor = "#ECEFF1";
            document.getElementById("iLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.borderColor = "#ECEFF1";
            document.getElementById("iin").disabled = true;
        }
        else if(pinInput==1&&r1Input==1){
            document.getElementById("vin").style.backgroundColor = "#ECEFF1";
            document.getElementById("vin").style.borderColor = "#ECEFF1";
            document.getElementById("vLabel").style.color = "#ECEFF1";
            document.getElementById("vlabel2").style.color = "#ECEFF1";
            document.getElementById("vlabel2").style.borderColor = "#ECEFF1";
            document.getElementById("vin").disabled = true;
            document.getElementById("iin").style.backgroundColor = "#ECEFF1";
            document.getElementById("iin").style.borderColor = "#ECEFF1";
            document.getElementById("iLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.borderColor = "#ECEFF1";
            document.getElementById("iin").disabled = true;
        }
        else if(pinInput==1&&iinInput==1){
            document.getElementById("vin").style.backgroundColor = "#ECEFF1";
            document.getElementById("vin").style.borderColor = "#ECEFF1";
            document.getElementById("vLabel").style.color = "#ECEFF1";
            document.getElementById("vlabel2").style.color = "#ECEFF1";
            document.getElementById("vlabel2").style.borderColor = "#ECEFF1";
            document.getElementById("vin").disabled = true;
            document.getElementById("r1").style.backgroundColor = "#ECEFF1";
            document.getElementById("r1").style.borderColor = "#ECEFF1";
            document.getElementById("rLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.borderColor = "#ECEFF1";
            document.getElementById("r1").disabled = true;
        }
        else if(pinInput==1&&vinInput==1){
            document.getElementById("iin").style.backgroundColor = "#ECEFF1";
            document.getElementById("iin").style.borderColor = "#ECEFF1";
            document.getElementById("iLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.borderColor = "#ECEFF1";
            document.getElementById("iin").disabled = true;
            document.getElementById("r1").style.backgroundColor = "#ECEFF1";
            document.getElementById("r1").style.borderColor = "#ECEFF1";
            document.getElementById("rLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.borderColor = "#ECEFF1";
            document.getElementById("r1").disabled = true;
        }
        else if(iinInput==1&&r1Input==1){
            document.getElementById("iin").style.backgroundColor = "#ECEFF1";
            document.getElementById("iin").style.borderColor = "#ECEFF1";
            document.getElementById("iLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorI").style.borderColor = "#ECEFF1";
            document.getElementById("iin").disabled = true;
            document.getElementById("r1").style.backgroundColor = "#ECEFF1";
            document.getElementById("r1").style.borderColor = "#ECEFF1";
            document.getElementById("rLabel").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.color = "#ECEFF1";
            document.getElementById("sizeSelectorR1").style.borderColor = "#ECEFF1";
            document.getElementById("r1").disabled = true;
        }
     }

     
     if(howManyChecked>2){
        document.getElementById('errorClearButtonDiv').style.display = 'block';
        clearResults();
     }
     else{
        document.getElementById('errorClearButtonDiv').style.display = 'none';
        calculateValues();
        if(vinInputCheck == 1){
            document.getElementById("voltageResultDiv").style.backgroundColor = "#ECEFF1";
            document.getElementById("voltageResultDiv").style.color = "#ECEFF1";
            document.getElementById("voltageResultP").style.color = "#ECEFF1";
        }
        if(iinInputCheck == 1){
            document.getElementById("currentResultDiv").style.backgroundColor = "#ECEFF1";
            document.getElementById("currentResultDiv").style.color = "#ECEFF1";
            document.getElementById("currentResultP").style.color = "#ECEFF1";
        }
        if(r1InputCheck == 1){
            document.getElementById("resistanceResultDiv").style.backgroundColor = "#ECEFF1";
            document.getElementById("resistanceResultDiv").style.color = "#ECEFF1";
            document.getElementById("resistanceResultP").style.color = "#ECEFF1";
        }
        if(pinInputCheck == 1){
            document.getElementById("powerResultDiv").style.backgroundColor = "#ECEFF1";
            document.getElementById("powerResultDiv").style.color = "#ECEFF1";
            document.getElementById("powerResultP").style.color = "#ECEFF1";
        }
     }

}

function calculateValues(){
    var vinInput = document.getElementById("vin").value;
    console.log("calculateValues -> vinInput", vinInput)
    var iinInput = document.getElementById("iin").value;
    console.log("calculateValues -> iinInput", iinInput)
    var r1Input = document.getElementById("r1").value;
    console.log("calculateValues -> r1Input", r1Input)
    var pinInput = document.getElementById("pin").value;
    console.log("calculateValues -> pinInput", pinInput)
    var powerResult = "";
    var currentResult = "";
    var resistanceResult = "";
    var voltageResult = "";
    console.log("im here")

    if(vinInput!=""){
        console.log("in the volts");
        if(iinInput!="")
        {
            console.log("in here at least");
            powerResult=vinInput*iinInput;
            console.log("calculateValues -> powerResult", powerResult)
            resistanceResult=vinInput/iinInput;
            console.log("calculateValues -> resistanceResul", resistanceResult)
        }
        else if(r1Input!="")
        {
            currentResult=vinInput/r1Input;
            powerResult=((vinInput*vinInput)/r1Input);
        }
        else if(pinInput!="")
        {
            resistanceResult=((vinInput*vinInput)/pinInput);
            currentResult=pinInput/vinInput;
        }
    }
    else if(iinInput!=""){
        if(r1Input!="")
        {
            powerResult=r1Input*(iinInput*iinInput);
            voltageResult=iinInput*r1Input;
        }
        if(pinInput!="")
        {
            resistanceResult=pinInput/(iinInput*iinInput);
            voltageResult=pinInput/iinInput;
        }
    }
    else if(r1Input!=""){
        currentResult=Math.sqrt(pinInput/r1Input);
        voltageResult=Math.sqrt(pinInput*r1Input);
    }

    if(powerResult!="")
    {
        checkPower(powerResult);
    }
    else
    {
        document.getElementById("powerResult").innerText = "";
    }


    if(voltageResult!="")
    {
        document.getElementById("voltageResult").innerText = Math.round((voltageResult + Number.EPSILON) * 100) / 100 + " V";
    }
    else
    {
        document.getElementById("voltageResult").innerText = "";
    }


    if(resistanceResult!="")
    {
        checkResistance(resistanceResult);
    }
    else
    {
        document.getElementById("resistanceResult").innerText = "";
    }


    if(currentResult!="")
    {
        checkCurrent(currentResult);
    }
    else
    {
        document.getElementById("currentResult").innerText = "";
    }
}

function checkPower(p){
    if(p>=1000)
    {
        document.getElementById("powerResult").innerText = Math.round(((p/1000) + Number.EPSILON) * 1000) / 1000 + " kW";
    }
    else if(p<1){
        document.getElementById("powerResult").innerText = Math.round(((p*1000) + Number.EPSILON) * 1000) / 1000 + " mW";
    }
    else
    {
        document.getElementById("powerResult").innerText = Math.round((p + Number.EPSILON) * 1000) / 1000 + " W";
    }
}

function checkResistance(r){
    if(r>=1000 && r<1000000)
    {
        document.getElementById("resistanceResult").innerText = Math.round(((r/1000) + Number.EPSILON) * 1000) / 1000 + " kΩ";
    }
    else if(r>=1000000){
        document.getElementById("resistanceResult").innerText = Math.round(((r/1000000) + Number.EPSILON) * 1000) / 1000 + " MΩ";
    }
    else
    {
        document.getElementById("resistanceResult").innerText = Math.round((r + Number.EPSILON) * 1000) / 1000 + " Ω";
    }
}

function checkCurrent(i){
    if(i<1)
    {
        document.getElementById("currentResult").innerText = Math.round(((i*1000) + Number.EPSILON) * 1000) / 1000 + " mA";
    }
    else
    {
        document.getElementById("currentResult").innerText = Math.round((i + Number.EPSILON) * 1000) / 1000 + " A";
    }
}

