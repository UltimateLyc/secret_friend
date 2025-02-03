let arrayFriend = []

function addFriend() {
    //console.log(document.getElementById('amigo').value.trim() === "" ? "esta vacio" : "no esta vacio")
    
    document.getElementById('amigo').value.trim() === "" // trim( ) devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos.
    ? alert("Favor de ingresar un nombre valido") 
    : arrayFriend.push(document.getElementById('amigo').value)
    //console.log("🚀 ~ arrayFriend:", arrayFriend.length)
    //console.log(arrayFriend)
    createListFriends()
    clearInput()
}

function clearInput() {
    document.getElementById('amigo').value = ''
}

function createListFriends () {
    document.getElementById("listaAmigos").innerHTML = arrayFriend.map(friend => `<li>${friend}</li>`).join('')
    /**
     * map() transforma cada elemento en una cadena <li>Elemento</li>.
     * join("") une los elementos sin comas.
     * innerHTML inserta todo el HTML en el <ul>.
     */
}

function getSecretFriend () {
    let size = arrayFriend.length
    return Math.floor(Math.random()*size)  
}