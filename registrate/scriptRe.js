// function getSelectValue(){
//     var selectedValue = document.getElementById("inputDelegacion").value;
// }

function SelectDelegacion() {

    var selectedValue = document.getElementById('inputDelegacion');
    var value = inputDelegacion.options[inputDelegacion.selectedIndex].value;
    
    if (value === cuauhtemoc) {
        alert("it equals colonias bien")
    }
    else if (value === miguelhidalgo) {
        alert("it equals microphone")
    }
    }

    // aun por aplicar el filtro de la seleccion