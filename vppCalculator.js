document.getElementById("freq").value = "1";
functionPlot({
    target: '#waveform',
    disableZoom: false,
    height: 300,
    width: 390,
    xAxis: {
      label: 'time(s)',
      domain: [-5, 5]
    },
    yAxis: {
      label: 'voltage',
      domain: [-5, 5]
    },
    data: [{
      fn: "sin(x)"
    }]
  })

document.getElementById("freq").addEventListener("input", plot1)
document.getElementById("vin").addEventListener("input", plot1)
document.getElementById("inputSelectorVin").addEventListener("click", plot1);
document.getElementById("inputSelectorVin").addEventListener("click", calculationOutput);
document.getElementById("freq").addEventListener("input", calculationOutput)
document.getElementById("freq").addEventListener("input", validataDataFreq)
document.getElementById("vin").addEventListener("input", calculationOutput)
document.getElementById("vin").addEventListener("input", validataDataVin)

function validataDataVin(){
    var voltageIn =document.getElementById("vin").value;
    if(isNaN(voltageIn)){
        document.getElementById('vinAlertBody').innerText = 'Must be a positive number';
        document.getElementById('vinAlertArrow').style.display = 'block';
        document.getElementById('vinAlertBody').style.display = 'block';
    }
    if(voltageIn==""){
        document.getElementById('vinAlertArrow').style.display = 'none';
        document.getElementById('vinAlertBody').style.display = 'none';
    }
}

function validataDataFreq(){
    var freqIn =document.getElementById("freq").value;
    if(isNaN(freqIn)){
        document.getElementById('freqAlertBody').innerText = 'Must be a positive number';
        document.getElementById('freqAlertArrow').style.display = 'block';
        document.getElementById('freqAlertBody').style.display = 'block';
    }
    if(freqIn==""){
        document.getElementById('freqAlertArrow').style.display = 'none';
        document.getElementById('freqAlertBody').style.display = 'none';
    }
}

function calculationOutput(){
    var inputFrequency = document.getElementById("freq").value;
    var inputVoltage = document.getElementById("vin").value;
    var period = 1/inputFrequency;
    document.getElementById("periodResult").innerText=Math.round((period + Number.EPSILON) * 1000) / 1000 +" S";
    document.getElementById("periodresult").innerText=Math.round((period + Number.EPSILON) * 1000) / 1000 + " S";
    var vInputSelection = document.getElementById("inputSelectorVin").value;
    console.log("calculationOutput -> vInputSelection", vInputSelection)
    if(vInputSelection==1){
        var vpp=inputVoltage*2;
        document.getElementById("voltage1Result").innerText=Math.round((vpp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1result").innerText=Math.round((vpp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1heading").innerText = "V Peak-Peak:";
        document.getElementById("voltage1Heading").innerText = "V Peak-Peak:";
        document.getElementById("voltage1ResultsPlace").style.border="none";
        document.getElementById("voltage1resultsPlace").style.border="none";
        var vrms=(inputVoltage*2)/(2*Math.sqrt(2));
        document.getElementById("voltage2result").innerText=Math.round((vrms + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2Result").innerText=Math.round((vrms + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2heading").innerText = "Vrms:";
        document.getElementById("voltage2Heading").innerText = "Vrms:";
        document.getElementById("voltage2ResultsPlace").style.border="solid";
        document.getElementById("voltage2ResultsPlace").style.borderColor="green";
        document.getElementById("voltage2resultsPlace").style.border="solid";
        document.getElementById("voltage2resultsPlace").style.borderColor="green";
        var vavg=(inputVoltage*2)/(Math.PI);
        document.getElementById("voltage3result").innerText=Math.round((vavg + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3Result").innerText=Math.round((vavg + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3heading").innerText = "V Average:";
        document.getElementById("voltage3Heading").innerText = "V Average:";
        document.getElementById("voltage3ResultsPlace").style.border="solid";
        document.getElementById("voltage3ResultsPlace").style.borderColor="blue";
        document.getElementById("voltage3resultsPlace").style.border="solid";
        document.getElementById("voltage3resultsPlace").style.borderColor="blue";
    }
    if(vInputSelection==2){
        var vp=inputVoltage/2;
        document.getElementById("voltage1result").innerText=Math.round((vp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1Result").innerText=Math.round((vp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1heading").innerText = "V Peak:";
        document.getElementById("voltage1Heading").innerText = "V Peak:";
        document.getElementById("voltage1ResultsPlace").style.border="solid";
        document.getElementById("voltage1ResultsPlace").style.borderColor="red";
        document.getElementById("voltage1resultsPlace").style.border="solid";
        document.getElementById("voltage1resultsPlace").style.borderColor="red";
        var vrms=(inputVoltage)/(2*Math.sqrt(2));
        document.getElementById("voltage2result").innerText=Math.round((vrms + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2Result").innerText=Math.round((vrms + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2heading").innerText = "Vrms:";
        document.getElementById("voltage2Heading").innerText = "Vrms:";
        document.getElementById("voltage2ResultsPlace").style.border="solid";
        document.getElementById("voltage2ResultsPlace").style.borderColor="green";
        document.getElementById("voltage2resultsPlace").style.border="solid";
        document.getElementById("voltage2resultsPlace").style.borderColor="green";
        var vavg=(inputVoltage)/(Math.PI);
        document.getElementById("voltage3result").innerText=Math.round((vavg + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3Result").innerText=Math.round((vavg + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3heading").innerText = "V Average:";
        document.getElementById("voltage3Heading").innerText = "V Average:";
        document.getElementById("voltage3ResultsPlace").style.border="solid";
        document.getElementById("voltage3ResultsPlace").style.borderColor="blue";
        document.getElementById("voltage3resultsPlace").style.border="solid";
        document.getElementById("voltage3resultsPlace").style.borderColor="blue";
        
    }
    if(vInputSelection==3){
        var vp=inputVoltage*Math.sqrt(2);
        document.getElementById("voltage1result").innerText=Math.round((vp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1Result").innerText=Math.round((vp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1heading").innerText = "V Peak:";
        document.getElementById("voltage1Heading").innerText = "V Peak:";
        document.getElementById("voltage1ResultsPlace").style.border="solid";
        document.getElementById("voltage1ResultsPlace").style.borderColor="red";
        document.getElementById("voltage1resultsPlace").style.border="solid";
        document.getElementById("voltage1resultsPlace").style.borderColor="red";
        var vpp=inputVoltage*Math.sqrt(2)*2;
        document.getElementById("voltage2result").innerText=Math.round((vpp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2Result").innerText=Math.round((vpp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2heading").innerText = "V Peak-Peak:";
        document.getElementById("voltage2Heading").innerText = "V Peak-Peak:";
        document.getElementById("voltage2ResultsPlace").style.border="none";
        document.getElementById("voltage2resultsPlace").style.border="none";
        var vavg=(inputVoltage)/(Math.PI/(2*Math.sqrt(2)));
        document.getElementById("voltage3result").innerText=Math.round((vavg + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3Result").innerText=Math.round((vavg + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3heading").innerText = "V Average:";
        document.getElementById("voltage3Heading").innerText = "V Average:";
        document.getElementById("voltage3ResultsPlace").style.border="solid";
        document.getElementById("voltage3ResultsPlace").style.borderColor="blue";
        document.getElementById("voltage3resultsPlace").style.border="solid";
        document.getElementById("voltage3resultsPlace").style.borderColor="blue";
    }
    if(vInputSelection==4){
        var vp=inputVoltage*(Math.PI/2);
        document.getElementById("voltage1result").innerText=Math.round((vp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1Result").innerText=Math.round((vp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage1heading").innerText = "V Peak:";
        document.getElementById("voltage1Heading").innerText = "V Peak:";
        document.getElementById("voltage1ResultsPlace").style.border="solid";
        document.getElementById("voltage1ResultsPlace").style.borderColor="red";
        document.getElementById("voltage1resultsPlace").style.border="solid";
        document.getElementById("voltage1resultsPlace").style.borderColor="red";
        var vpp=inputVoltage*Math.PI;
        document.getElementById("voltage2result").innerText=Math.round((vpp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2Result").innerText=Math.round((vpp + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage2heading").innerText = "V Peak-Peak:";
        document.getElementById("voltage2Heading").innerText = "V Peak-Peak:";
        document.getElementById("voltage2ResultsPlace").style.border="none";
        document.getElementById("voltage2resultsPlace").style.border="none";
        var vrms=inputVoltage*(Math.PI/(2*Math.sqrt(2)));
        document.getElementById("voltage3result").innerText=Math.round((vrms + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3Result").innerText=Math.round((vrms + Number.EPSILON) * 1000) / 1000 +" V";
        document.getElementById("voltage3heading").innerText = "Vrms:";
        document.getElementById("voltage3Heading").innerText = "Vrms:";
        document.getElementById("voltage3ResultsPlace").style.border="solid";
        document.getElementById("voltage3ResultsPlace").style.borderColor="green";
        document.getElementById("voltage3resultsPlace").style.border="solid";
        document.getElementById("voltage3resultsPlace").style.borderColor="green";
    }
}

function plot1(){
var inputFrequency = document.getElementById("freq").value;
var peakVoltage =peakVoltagefunc();
var plotFunction = peakVoltage+"*sin(2*3.141*"+inputFrequency+"*x)";
var peakVoltagePlot = "x="+peakVoltage;
var rmsVoltagePlot = "x="+(peakVoltage*2)/(2*Math.sqrt(2));
var avgPlot = "x="+(peakVoltage*2)/(Math.PI);
var period = 1/inputFrequency;
var negx = -(period*1.5);
console.log("negx", negx)
var posx = period*1.5;
console.log("posx", posx)
var negy = -(peakVoltage*1.5);
console.log("negy", negy)
var posy = peakVoltage*1.5;
console.log("posy", posy)
functionPlot({
    target: '#waveform',
    disableZoom: false,
    height: 300,
    width: 390,
    xAxis: {
      label: 'time(s)',
      domain: [negx, posx]
    },
    yAxis: {
      label: 'voltage',
      domain: [negy, posy]
    },
    data: [
        {fn: plotFunction, color: 'black'},
        {fn: peakVoltagePlot, nSamples:80, graphType:'scatter', color: 'red'},
        {fn: rmsVoltagePlot, nSamples:80, graphType:'scatter', color: 'green'},
        {fn: avgPlot, nSamples:80, graphType:'scatter', color: 'blue'},
    ]
  })
}

function peakVoltagefunc(){
    var inputVoltage = document.getElementById("vin").value;
    var vInputSelection = document.getElementById("inputSelectorVin").value;
    switch(vInputSelection){
        case "1":
            return inputVoltage
            break;
        case "2":
            return inputVoltage/2;
            break;
        case "3":
            return Math.sqrt(2)*inputVoltage;
            break;
        default:
            return (Math.PI*inputVoltage)*.5;
    }
}