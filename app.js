let arrayFriend = []

function addFriend() {
    //console.log(document.getElementById('amigo').value.trim() === "" ? "esta vacio" : "no esta vacio")

    document.getElementById('amigo').value.trim() === "" // trim( ) devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos.
        ? alert("Favor de ingresar un nombre valido") 
        : arrayFriend.push(document.getElementById('amigo').value)
    console.log(arrayFriend.length)
    console.log(arrayFriend)
    clearInput()
}

function clearInput() {
    document.getElementById('amigo').value = ''
}