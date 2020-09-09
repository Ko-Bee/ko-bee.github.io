checkVF();
document.getElementById("vfSelector").addEventListener("click", checkVF);
document.getElementById("series").addEventListener("click", alertAlert);

function checkVF() {
    var vfValue = document.getElementById("vfSelector").value;
    switch (vfValue) {
        case "1":
            document.getElementById("vfSelector").style.backgroundColor = "#EA2027";
            document.getElementById("vfSelector").style.color = "white";
            document.getElementById("Vf").value = "2";
            document.getElementById('Vf').style.display= 'none'
            document.getElementById('vfSelector').style.width= '85%'
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

function alertAlert() {
    var vfValue = document.getElementById("Vf").value;
    alert(vfValue);
}