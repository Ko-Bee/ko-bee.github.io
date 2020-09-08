computeValue();
document.getElementById("radioNoLoad").addEventListener("click", computeValue);
document.getElementById("radioAcrossLoad").addEventListener("click", computeValue);









function computeValue() {
    var radioSelection = document.getElementById("radioNoLoad").checked;
    switch(radioSelection) {
        case true:
            var Vin = parseInt(document.getElementById("vin").value);
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var noLoadResult = ((Vin*R2)/(R1+R2));
            finalOutputFunction(noLoadResult);
            break;
        default:
            var Vin = parseInt(document.getElementById("vin").value)
            var R1 = inputConvert(parseInt(document.getElementById("r1").value), document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value), document.getElementById("sizeSelectorR2").value);
            var Rl = inputConvert(parseInt(document.getElementById("rl").value), document.getElementById("sizeSelectorRl").value);
            var outputCircuitVoltage = (Vin*((R2*Rl)/(R2+Rl)))/(R1+((R2*Rl)/(R2+Rl)));
            var powerByVin = (Vin*Vin)/(R1+(R2*Rl/(R2+Rl)));
            var powerAtLoad = (outputCircuitVoltage*outputCircuitVoltage)/Rl;
            var powerLoss = (1-(powerAtLoad/powerByVin))*100;
            finalOutputFunctionLoaded(outputCircuitVoltage,"1");
            finalOutputFunctionLoaded(powerByVin,"2");
            finalOutputFunctionLoaded(powerAtLoad,"3");
            finalOutputFunctionLoaded(powerLoss,"4");
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
    if(isNaN(x)) {
        document.getElementById("noLoadResult").innerText = "";
    } else {
        x = x;
        document.getElementById("noLoadResult").innerText = Math.round((x + Number.EPSILON) * 100) / 100 + " V";
    }
}

function finalOutputFunctionLoaded(x, y) {
    if(isNaN(x)) {
        document.getElementById("noLoadResult").innerText = "";
    } else {
        switch(y)
        {
            case "1":
                x = x;
                document.getElementById("voltageOutputResult").innerText = Math.round((x + Number.EPSILON) * 100) / 100 + " V";
                break
            case "2":
                x = x;
                document.getElementById("powerBySupplyResult").innerText = Math.round((x + Number.EPSILON) * 100) / 100 + " W";
                break
            case "3":
                x = x;
                document.getElementById("powerToLoadResult").innerText = Math.round((x + Number.EPSILON) * 100) / 100 + " W";
                break
            case "4":
                x = x;
                document.getElementById("lossResultResult").innerText = Math.round((x + Number.EPSILON) * 100) / 100 + " %";
                break
        }
    }
}