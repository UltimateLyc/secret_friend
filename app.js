let arrayFriend = []

function addFriend() {
    console.log(document.getElementById('amigo').value)
    arrayFriend.push(document.getElementById('amigo').value)
    console.log(arrayFriend.length)
    console.log(arrayFriend)
    clearInput()
}

function clearInput() {
    document.getElementById('amigo').value = ''
}