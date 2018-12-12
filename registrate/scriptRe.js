// function getSelectValue(){
//     var selectedValue = document.getElementById("inputDelegacion").value;
// }

function SelectDelegacion() {

    var selectedValue = document.getElementById('inputDelegacion');
    var value = s.options[s.selectedIndex].value;
    
    if (value === cuauhtemoc) {
        alert("it equals camera")
    }
    else if (value === miguelhidalgo) {
        alert("it equals microphone")
    }
    }

    // aun por aplicar el filtro de la seleccion