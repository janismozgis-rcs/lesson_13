function changeButton() {
    var button = document.getElementById('btn-2')
    if (button.style.display == 'none') {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
}

var clickCounter = 0;
function changeButton2() {
    var button = document.getElementById('btn-2')

    if (clickCounter == 0) {
        button.style.color = 'tomato'
    }
    if (clickCounter == 1) {
        button.style.fontSize = '50px'
    }
    if (clickCounter == 2) {
        button.style.color = 'black'
    }
    if (clickCounter == 3) {
        button.style.fontSize = '12px'
        clickCounter = -1    
    }

    clickCounter++;
}

function addCount() {
    var p = document.getElementById('count')
    var currentNumber = parseInt(p.innerText)
    currentNumber += 1
    p.innerText = currentNumber
}


var loop = setInterval(addCount, 1)

setTimeout(function(){
    clearInterval(loop)
}, 5000)

function changeElement() {
    var p = document.getElementById('p-2')
    p.innerHTML = '<strong>Bar</strong>'
}