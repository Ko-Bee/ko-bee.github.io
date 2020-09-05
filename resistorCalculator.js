document.getElementById("button1").addEventListener("click", checkHowMany);


function checkHowMany(){
    var noOfResistors = document.getElementById("noOfResistors").value;
    switch(noOfResistors){
        case "2":
            computeResistors("2", document.getElementById("parallel").value)
            break
        case "3":
            computeResistors("3", document.getElementById("parallel").value)
            break
        default:
            alert("This Sucks")
    }
}

function computeResistors (x){
    switch(x){
        case "2":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value),document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value),document.getElementById("sizeSelectorR2").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch(radioSelection){
                case true:
                    document.getElementById("resultOut2").innerText = ((R1*R2)/(R1+R2));
                    break
                default:
                    document.getElementById("resultOut2").innerText = (R1+R2);    
            }
        case "3":
            var R1 = inputConvert(parseInt(document.getElementById("r1").value),document.getElementById("sizeSelectorR1").value);
            var R2 = inputConvert(parseInt(document.getElementById("r2").value),document.getElementById("sizeSelectorR2").value);
            var R3 = inputConvert(parseInt(document.getElementById("r2").value),document.getElementById("sizeSelectorR3").value);
            var radioSelection = document.getElementById("parallel").checked;
            switch(radioSelection){
                case true:
                    document.getElementById("resultOut2").innerText = ((R1*R2*R3)/(R1+R2+R3));
                    break
                default:
                    document.getElementById("resultOut2").innerText = (R1+R2+R3);    
            }            

}
}

function inputConvert(x,y){
    switch(y){
        case "1":
            return x;
            break
        case "2":
            return x*1000;
            break
        case "3":
            return x*1000000;
            return
    }
}