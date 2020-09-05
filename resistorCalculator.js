document.getElementById("button1").addEventListener("click", checkHowMany);


function checkHowMany(){
    var noOfResistors = document.getElementById("noOfResistors").value;
    switch(noOfResistors){
        case "2":
            compute2resistors()
            break
        case "3":
            alert("hello")
            break
        default:
            alert("This Sucks")
    }
}

function compute2resistors (){
    var R1 = parseInt(document.getElementById("r1").value);
    var R2 = parseInt(document.getElementById("r2").value);
    alert((R1*R2)/(R1+R2));
}