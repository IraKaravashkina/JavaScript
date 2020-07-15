
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}


var test = document.querySelectorAll('.test');
for (var i = 0; i < test.length; i++) {
    test[i].addEventListener('click', changeColor);
}

function changeColor() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    this.style.backgroundColor = rndCol;
}