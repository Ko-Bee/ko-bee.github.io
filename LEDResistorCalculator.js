checkVF();
clearAll();
document.getElementById("vfSelector").addEventListener("click", checkVF);
document.getElementById("vin").addEventListener("input", validateSeriesVin);
document.getElementById("ledNO").addEventListener("input", validateSeriesNoOfLEDs);
document.getElementById("iForward").addEventListener("input", validateSeriesIforward);
document.getElementById("Vf").addEventListener("input", validataSeriesVF);
document.getElementById("vin").addEventListener("input", calculateValues);
document.getElementById("ledNO").addEventListener("input", calculateValues);
document.getElementById("iForward").addEventListener("input", calculateValues);
document.getElementById("Vf").addEventListener("input", calculateValues);
document.getElementById("series").addEventListener("click", clearAll);
document.getElementById("parallel").addEventListener("click", clearAll);
document.getElementById("series").addEventListener("click", clearAlerts);
document.getElementById("parallel").addEventListener("click", clearAlerts);
var standardResistorValues = [1,1.1,1.2,1.3,1.5,1.6,1.8,2,2.2,2.4,2.7,3,3.3,3.6,3.9,4.3,4.7,5.1,5.6,6.2,6.8,7.5,8.2,9.1,10,11,12,13,
    15,16,18,20,22,24,27,30,33,36,39,43,47,51,56,62,68,75,82,91,100,110,120,130,150,160,180,200,220,240,270,300,330,360,390,430,470,
    510,560,620,680,750,820,910,1000,1100,1200,1300,1500,1600,1800,2000,2200,2400,2700,3000,3300,3600,3900,4300,4700,5100,5600,6200,
    6800,7500,8200,9100,10000,11000,12000,13000,15000,16000,18000,20000,22000,24000,27000,30000,33000,36000,39000,43000,47000,51000,
    56000,62000,68000,75000,82000,91000,100000,110000,120000,130000,150000,160000,180000,200000,220000,240000,270000,300000,330000,
    360000,390000,430000,470000,510000,560000,620000,680000,750000,820000,910000,1000000,1100000,1200000,1300000,1500000,1600000,
    1800000,2000000,2200000,2400000,2700000,3000000,3300000,3600000,3900000,4300000,4700000,5100000,5600000,6200000,6800000,
    7500000,8200000,9100000];

function clearAll(){
    document.getElementById("vin").value='';
    document.getElementById("iForward").value='';
    document.getElementById("ledNO").value='';
    document.getElementById("Vf").value='';
}


function validateSeriesVin(){
    var Vin = document.getElementById("vin").value;
    var noOfLEDs = document.getElementById("ledNO").value;
    var forwardVoltage = document.getElementById("Vf").value;
    var radioSelection = document.getElementById("series").checked;
    var paraVoltage = parseInt(forwardVoltage)+0.5;
    // console.log("in vin vali");
    switch(radioSelection){
        case true:
            if(noOfLEDs=="") {
                if(isNaN(Vin)){
                    document.getElementById('vinAlertBody').innerText = 'Must be a positive number';
                    document.getElementById('vinAlertArrow').style.display = 'block';
                    document.getElementById('vinAlertBody').style.display = 'block';
                }
                else if(Vin > 32){
                    document.getElementById('vinAlertBody').innerText = 'Voltage must be below 32V';
                    document.getElementById('vinAlertArrow').style.display = 'block';
                    document.getElementById('vinAlertBody').style.display = 'block';
                }
                else if(Vin=="")
                {
                    clearAlerts();
                }
            }
            else{
                if(Vin=="")
                {
                    clearAlerts();
                }
                else if((Vin-(forwardVoltage*noOfLEDs))>0){
                    // console.log("validateSeriesVin -> noOfLEDs", noOfLEDs)
                    clearAlerts();
                }
                else if(isNaN(Vin)){
                    document.getElementById('vinAlertBody').innerText = 'Must be a positive number';
                    document.getElementById('vinAlertArrow').style.display = 'block';
                    document.getElementById('vinAlertBody').style.display = 'block';
                }
                else if(Vin > 32){
                    document.getElementById('vinAlertBody').innerText = 'Voltage must be below 32V';
                    document.getElementById('vinAlertArrow').style.display = 'block';
                    document.getElementById('vinAlertBody').style.display = 'block';
                }
                else if((Vin-(forwardVoltage*noOfLEDs))<0){
                    console.log(Vin-(forwardVoltage*noOfLEDs));
                    document.getElementById('noOfLEDsAlertBody').innerText = 'Combined LED voltage less than Vin. Reduce No. of LEDs or increase Vin';
                    document.getElementById('noOfLEDsAlertArrow').style.display = 'block';
                    document.getElementById('noOfLEDsAlertBody').style.display = 'block';
                }
                }
                break;
        default :
        // console.log("in vin vali para");
                if(isNaN(Vin)){
                    document.getElementById('vinAlertBody').innerText = 'Must be a positive number';
                    document.getElementById('vinAlertArrow').style.display = 'block';
                    document.getElementById('vinAlertBody').style.display = 'block';
                }
                else if(Vin=="")
                {
                    clearAlerts();
                }
                else if(Vin<paraVoltage){
                    document.getElementById('vinAlertBody').innerText = 'Vin must be higher than the LED forward voltage +0.5V';
                    document.getElementById('vinAlertArrow').style.display = 'block';
                    document.getElementById('vinAlertBody').style.display = 'block';
                }
                else if(Vin > 32){
                    document.getElementById('vinAlertBody').innerText = 'Voltage must be below 32V';
                    document.getElementById('vinAlertArrow').style.display = 'block';
                    document.getElementById('vinAlertBody').style.display = 'block';
                }
//                else if(Vin>=paraVoltage){
//                    clearAlerts();
//                }
                break;

                }

    }

function validateSeriesNoOfLEDs(){
    var Vin = document.getElementById("vin").value;
    var noOfLEDs = document.getElementById("ledNO").value;
    var forwardVoltage = document.getElementById("Vf").value;
    var radioSelection = document.getElementById("series").checked;
    // console.log("in no, of leds");
    switch(radioSelection){
        case true:
            if(Vin=="") {
                if(isNaN(noOfLEDs)){
                    document.getElementById('noOfLEDsAlertBody').innerText = 'Must be a positive number';
                    document.getElementById('noOfLEDsAlertArrow').style.display = 'block';
                    document.getElementById('noOfLEDsAlertBody').style.display = 'block';
                }
                else if(noOfLEDs > 32){
                    document.getElementById('noOfLEDsAlertBody').innerText = 'Must be less than 32 LEDs';
                    document.getElementById('noOfLEDsAlertArrow').style.display = 'block';
                    document.getElementById('noOfLEDsAlertBody').style.display = 'block';
                }
                else if(Vin=="")
                {
                    clearAlerts();
                }
            }
            else{
                if(noOfLEDs=="")
                {
                    clearAlerts();
                }
                else if(isNaN(noOfLEDs)){
                    document.getElementById('noOfLEDsAlertBody').innerText = 'Must be a positive number';
                    document.getElementById('noOfLEDsAlertArrow').style.display = 'block';
                    document.getElementById('noOfLEDsAlertBody').style.display = 'block';
                }
                else if(noOfLEDs > 32){
                    document.getElementById('noOfLEDsAlertBody').innerText = 'Must be less than 32 LEDs';
                    document.getElementById('noOfLEDsAlertArrow').style.display = 'block';
                    document.getElementById('noOfLEDsAlertBody').style.display = 'block';
                }
                else if((Vin-(forwardVoltage*noOfLEDs))<0){
                    document.getElementById('noOfLEDsAlertBody').innerText = 'Combined LED voltage less than Vin. Reduce No. of LEDs or increase Vin';
                    document.getElementById('noOfLEDsAlertArrow').style.display = 'block';
                    document.getElementById('noOfLEDsAlertBody').style.display = 'block';
                }
                }
        default :
            // this is where parallel goes
            // console.log("in no of leds default");
                break;
    }
}

function validateSeriesIforward(){
    var Vin = document.getElementById("vin").value;
    var noOfLEDs = document.getElementById("ledNO").value;
    var forwardVoltage = document.getElementById("Vf").value;
    var forwardCurrent = document.getElementById("iForward").value;
    var radioSelection = document.getElementById("series").checked;
    // console.log("in vali if");
    switch(radioSelection){
        case true:
            if(isNaN(forwardCurrent)){
                document.getElementById('iForwardAlertBody').innerText = 'Must be a positive number';
                document.getElementById('iForwardAlertArrow').style.display = 'block';
                document.getElementById('iForwardAlertBody').style.display = 'block';
            }
            else if(forwardCurrent=="")
            {
                clearAlerts();
            }
            break;
        default:
            if(isNaN(forwardCurrent)){
                document.getElementById('iForwardAlertBody').innerText = 'Must be a positive number';
                document.getElementById('iForwardAlertArrow').style.display = 'block';
                document.getElementById('iForwardAlertBody').style.display = 'block';
            }
            else if(forwardCurrent=="")
            {
                clearAlerts();
            }
            break;
    }
}

function validataSeriesVF(){
    var Vin = document.getElementById("vin").value;
    var noOfLEDs = document.getElementById("ledNO").value;
    var forwardVoltage = document.getElementById("Vf").value;
    var forwardCurrent = document.getElementById("iForward").value;
    var radioSelection = document.getElementById("series").checked;
    // console.log("in vali vf");
    switch(radioSelection){
        case true:
            if(isNaN(forwardVoltage)){
                document.getElementById('vForwardAlertBody').innerText = 'Must be a positive number';
                document.getElementById('vForwardAlertArrow').style.display = 'block';
                document.getElementById('vForwardAlertBody').style.display = 'block';
            }
            if(forwardVoltage>10){
                document.getElementById('vForwardAlertBody').innerText = 'Must be less than 10V';
                document.getElementById('vForwardAlertArrow').style.display = 'block';
                document.getElementById('vForwardAlertBody').style.display = 'block';
            }
            else if(forwardVoltage=="")
            {
                clearAlerts();
            }
            break;
        default:
            if(isNaN(forwardVoltage)){
                document.getElementById('vForwardAlertBody').innerText = 'Must be a positive number';
                document.getElementById('vForwardAlertArrow').style.display = 'block';
                document.getElementById('vForwardAlertBody').style.display = 'block';
            }
            if(forwardVoltage>10){
                document.getElementById('vForwardAlertBody').innerText = 'Must be less than 10V';
                document.getElementById('vForwardAlertArrow').style.display = 'block';
                document.getElementById('vForwardAlertBody').style.display = 'block';
            }
            else if(forwardVoltage=="")
            {
                clearAlerts();
            }
            break;
    }
}

function clearAlerts(){
    // console.log("clear alerts");
    document.getElementById('vinAlertArrow').style.display = 'none';
    document.getElementById('vinAlertBody').style.display = 'none';
    document.getElementById('noOfLEDsAlertBody').style.display = 'none';
    document.getElementById('noOfLEDsAlertArrow').style.display = 'none';
    document.getElementById('iForwardAlertBody').style.display = 'none';
    document.getElementById('iForwardAlertArrow').style.display = 'none';
    document.getElementById('vForwardAlertBody').style.display = 'none';
    document.getElementById('vForwardAlertArrow').style.display = 'none';
    document.getElementById("exactCalculatedResistorResult").innerText='';
    document.getElementById("nearestStandardResistorResult").innerText='';
    document.getElementById("actualCurrentThroughLEDResult").innerText='';
    document.getElementById("circuitTotalCurrentResult").innerText='';
    document.getElementById("powerDissipatedResistorResult").innerText='';
    document.getElementById("wattageRecommendationResult").innerText='';
    document.getElementById("circuitTotalWattageResult").innerText='';
    document.getElementById("powerDissipatedLEDResult").innerText='';
}

function checkVF() {
    var vfValue = document.getElementById("vfSelector").value;
    switch (vfValue) {
        case "1":
            document.getElementById("vfSelector").style.backgroundColor = "#EA2027";
            document.getElementById("vfSelector").style.color = "white";
            document.getElementById("Vf").value = "2";
            document.getElementById("Vf").style.display= 'none'
            document.getElementById("vfSelector").style.width= '85%'
            break;
        case "2":
            document.getElementById("vfSelector").style.backgroundColor = "#9980FA";
            document.getElementById("vfSelector").style.color = "white";
            document.getElementById("Vf").value = "1.7";
            document.getElementById('Vf').style.display= 'none'
            document.getElementById('vfSelector').style.width= '85%'            
            break;
        case "3":
            document.getElementById("vfSelector").style.backgroundColor = "#fff200";
            document.getElementById("vfSelector").style.color = "#3d3d3d";
            document.getElementById("Vf").value = "2.1";
            document.getElementById('Vf').style.display= 'none'
            document.getElementById('vfSelector').style.width= '85%'
            break;
        case "4":
            document.getElementById("vfSelector").style.backgroundColor = "#ff9f1a";
            document.getElementById("vfSelector").style.color = "#3d3d3d";
            document.getElementById("Vf").value = "2.2";
            document.getElementById('Vf').style.display= 'none'
            document.getElementById('vfSelector').style.width= '85%'
            break;
        case "5":
            document.getElementById("vfSelector").style.backgroundColor = "#009432";
            document.getElementById("vfSelector").style.color = "#3d3d3d";
            document.getElementById("Vf").value = "3";
            document.getElementById('Vf').style.display= 'none'
            document.getElementById('vfSelector').style.width= '85%'
            break;
        case "6":
            document.getElementById("vfSelector").style.backgroundColor = "white";
            document.getElementById("vfSelector").style.color = "#3d3d3d";
            document.getElementById("Vf").value = "3.6";
            document.getElementById('Vf').style.display= 'none'
            document.getElementById('vfSelector').style.width= '85%'
            break;
        case "7":
            document.getElementById("vfSelector").style.backgroundColor = "#0652DD";
            document.getElementById("vfSelector").style.color = "white";
            document.getElementById("Vf").value = "3.6";
            document.getElementById('Vf').style.display= 'none'
            document.getElementById('vfSelector').style.width= '85%'
            break;
        case "8":
            document.getElementById("vfSelector").style.backgroundColor = "#CCCCCC";
            document.getElementById("vfSelector").style.color = "#3d3d3d"
            document.getElementById("Vf").value = "";
            document.getElementById('Vf').style.display= 'initial'
            document.getElementById('vfSelector').style.width= '45%'
            break;
    }
}


function calculateValues (){
    var radioSelection = document.getElementById("series").checked;
    var Vin = document.getElementById("vin").value;
    var ledForwardVoltage = document.getElementById("Vf").value;
    var ledForwardCurrent = document.getElementById("iForward").value / 1000;
    var noOfLEDs = document.getElementById("ledNO").value;
    var remainingVoltage = Vin-(noOfLEDs*ledForwardVoltage);
    // console.log(remainingVoltage);
    // console.log("in calc values");
    switch(radioSelection) {
        case true:
            // console.log("in series < if");
            if(noOfLEDs!="" && Vin!="" && ledForwardCurrent!="" && remainingVoltage>=0)
            {
            // console.log("in series");
            var remainingVoltage = Vin-(noOfLEDs*ledForwardVoltage);
            var rawResistorValue = (remainingVoltage / ledForwardCurrent);
            var standardResistorValueResult = standardResistorValues[findNextHighest(standardResistorValues, 1.05*rawResistorValue)];
            var actualResistorCurrent = (remainingVoltage / standardResistorValueResult);
            var resistorPowerDissipation = remainingVoltage * actualResistorCurrent;
            var reccomendedResistorPower = wattageRecommendation(resistorPowerDissipation);
            var totalPower = (actualResistorCurrent*noOfLEDs) + resistorPowerDissipation;
            var LEDPowerDissipation = actualResistorCurrent * ledForwardVoltage;
            document.getElementById("exactCalculatedResistorResult").innerText = (Math.round(((rawResistorValue) + Number.EPSILON) * 10)/10) + " Ω";
            document.getElementById("nearestStandardResistorResult").innerText = standardResistorValueResult + " Ω";
            document.getElementById("actualCurrentThroughLEDResult").innerText = (Math.round(((actualResistorCurrent*1000) + Number.EPSILON) * 10)/10) + " mA";
            document.getElementById("circuitTotalCurrentResult").innerText = (Math.round(((actualResistorCurrent*1000) + Number.EPSILON) * 10)/10) + " mA";
            document.getElementById("powerDissipatedResistorResult").innerText = (Math.round(((resistorPowerDissipation*1000) + Number.EPSILON) * 10)/10) + " mW";
            document.getElementById("wattageRecommendationResult").innerText = (reccomendedResistorPower) + " W";
            document.getElementById("circuitTotalWattageResult").innerText = (Math.round(((totalPower*1000) + Number.EPSILON) * 10)/10) + " mW";
            document.getElementById("powerDissipatedLEDResult").innerText = (Math.round(((LEDPowerDissipation*1000) + Number.EPSILON) * 10)/10) + " mW";
            // console.log("remainingVoltage= " + remainingVoltage);
            // console.log("resistor= " + rawResistorValue);
            // console.log("standardResValue= " + standardResistorValueResult);
            }
            else
            {
                document.getElementById("exactCalculatedResistorResult").innerText='';
                document.getElementById("nearestStandardResistorResult").innerText='';
                document.getElementById("actualCurrentThroughLEDResult").innerText='';
                document.getElementById("circuitTotalCurrentResult").innerText='';
                document.getElementById("powerDissipatedResistorResult").innerText='';
                document.getElementById("wattageRecommendationResult").innerText='';
                document.getElementById("circuitTotalWattageResult").innerText='';
                document.getElementById("powerDissipatedLEDResult").innerText='';
            }
            break;
        default:
            var remainingVoltagePara = Vin-(parseInt(ledForwardVoltage)+0.5);
            console.log(remainingVoltagePara);
            // console.log("in parallel<vf");
            if(noOfLEDs!="" && Vin!="" && ledForwardCurrent!="" && remainingVoltagePara>=0)
            {
            // console.log("in parallel");
            var remainingVoltage = Vin-ledForwardVoltage;
            var rawResistorValue = (remainingVoltage / (ledForwardCurrent*noOfLEDs));
            var standardResistorValueResult = standardResistorValues[findNextHighest(standardResistorValues, 1.05*rawResistorValue)];
            var actualResistorCurrent = (remainingVoltage / standardResistorValueResult);
            var resistorPowerDissipation = remainingVoltage * actualResistorCurrent;
            var reccomendedResistorPower = wattageRecommendation(resistorPowerDissipation);
            var totalPower = (actualResistorCurrent) + resistorPowerDissipation;
            var LEDPowerDissipation = actualResistorCurrent * ledForwardVoltage;
            document.getElementById("exactCalculatedResistorResult").innerText = (Math.round(((rawResistorValue) + Number.EPSILON) * 10)/10) + " Ω";
            document.getElementById("nearestStandardResistorResult").innerText = standardResistorValueResult + " Ω";
            document.getElementById("actualCurrentThroughLEDResult").innerText = (Math.round((((actualResistorCurrent/noOfLEDs)*1000) + Number.EPSILON) * 10)/10) + " mA";
            document.getElementById("circuitTotalCurrentResult").innerText = (Math.round(((actualResistorCurrent*1000) + Number.EPSILON) * 10)/10) + " mA";
            document.getElementById("powerDissipatedResistorResult").innerText = (Math.round(((resistorPowerDissipation*1000) + Number.EPSILON) * 10)/10) + " mW";
            document.getElementById("wattageRecommendationResult").innerText = (reccomendedResistorPower) + " W";
            document.getElementById("circuitTotalWattageResult").innerText = (Math.round(((totalPower*1000) + Number.EPSILON) * 10)/10) + " mW";
            document.getElementById("powerDissipatedLEDResult").innerText = (Math.round(((LEDPowerDissipation*1000) + Number.EPSILON) * 10)/10) + " mW";
            // console.log("remainingVoltage= " + remainingVoltage);
            // console.log("resistor= " + rawResistorValue);
            // console.log("standardResValue= " + standardResistorValueResult);
            }
            else
            {
                document.getElementById("exactCalculatedResistorResult").innerText='';
                document.getElementById("nearestStandardResistorResult").innerText='';
                document.getElementById("actualCurrentThroughLEDResult").innerText='';
                document.getElementById("circuitTotalCurrentResult").innerText='';
                document.getElementById("powerDissipatedResistorResult").innerText='';
                document.getElementById("wattageRecommendationResult").innerText='';
                document.getElementById("circuitTotalWattageResult").innerText='';
                document.getElementById("powerDissipatedLEDResult").innerText='';
            }
            break;
    }
}





function findNextHighest(arr, value){
    var i = arr.length;
    while (arr[--i] > value);
    return ++i; 
}

function wattageRecommendation(x){
    x = x*1.4*1000;
    if(x<125) {
        return "1/8"
    }
    else if(x>=125 && x <250) {
        return "1/4"
    }
    else if(x>=250 && x <500) {
        return "1/2"
    }
    else if(x>=500 && x <1000) {
        return "1"
    }
    else{
        return "2"
    }
}