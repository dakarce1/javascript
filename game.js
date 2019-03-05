//Need to add window.innerWidth/Height for the collision around the screen
//Is there a way to remove the red for the selection
//Half collision in the tree

var timer = 0;
var leftPressed = false;
var upPressed = false;
var rightPressed = false;
var downPressed = false;

function myKeyDown(event) {
    clearInterval(timer);
        if (event.keyCode == 37) {
            leftPressed = true;
            timer = setInterval(moveInterval, 4);
        }
        if (event.keyCode == 38) {
            upPressed = true;
            timer = setInterval(moveInterval, 4);
        }
        if (event.keyCode == 39) {
            rightPressed = true;
            timer = setInterval(moveInterval, 4);
        }
        if (event.keyCode == 40) {
            downPressed = true;
            timer = setInterval(moveInterval, 4);
    }
}

   

function myKeyUp(event) {
    clearInterval(timer);
        if (event.keyCode == 37) {
            leftPressed = false
            var element = document.getElementById('player');
            element.className = "character stand left"
        }
        if (event.keyCode == 38) {
            upPressed = false
            var element = document.getElementById('player');
            element.className = "character stand up"
        }
        if (event.keyCode == 39) {
            rightPressed = false
            var element = document.getElementById('player');
            element.className = "character stand right"
        }
        if (event.keyCode == 40) {
            downPressed = false
            var element = document.getElementById('player');
            element.className = "character stand down"
        }
    }

function moveInterval() {
    clearInterval(timer);
    if (leftPressed == true) {
        var element = document.getElementById('player');
        var positionLeft = player.offsetLeft;
        var newLeft = positionLeft - 3;
        var element = document.elementFromPoint(newLeft+32, player.offsetTop);
        if (element.classList.contains('tree') == false) {
            player.style.left = newLeft + 'px';
        }
        player.className = 'character walk left'
        //player.style.left = positionLeft - 3 + 'px';

        
    }
    if (upPressed == true) {
        var element = document.getElementById('player');
        var positionTop = player.offsetTop;
        var newUp = positionTop - 3;
        var element = document.elementFromPoint(player.offsetLeft, newUp+32);
        if (element.classList.contains('tree') == false) {
            player.style.top = newUp + 'px';
        }
        player.className = 'character walk up'
        //player.style.top = positionTop - 3 + 'px';
    }
    if (rightPressed == true) {
        var element = document.getElementById('player');
        var positionLeft = player.offsetLeft;
        var newRight = positionLeft + 3;
        var element = document.elementFromPoint(newRight+32, player.offsetTop);
        if (element.classList.contains('tree') == false) {
            player.style.left = newRight + 'px';
        }
        player.className = 'character walk right'
        //player.style.left = positionLeft + 3 + 'px';

    }
    if (downPressed == true) {
        var element = document.getElementById('player');
        var positionDown = player.offsetTop;
        var newDown = positionDown + 3;
        var element = document.elementFromPoint(player.offsetLeft, newDown+32);
        if (element.classList.contains('tree') == false) {
            player.style.top = newDown + 'px';
        }
        player.className = 'character walk down'
        //player.style.top = positionTop + 3 + 'px';

    }
}

function setHead0() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head0.png';
}
function setHead1() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head0.png';
}
function setHead2() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head0.png';
}
function setHead3() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head0.png';
}
function setHead4() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head0.png';
}

function setBody0() {
    var element = document.getElementsByClassName('body')[0];
    element.style.backgroundImage = 'url(images/body0.png';
}
function setBody1() {
    var element = document.getElementsByClassName('body')[0];
    element.style.backgroundImage = 'url(images/body1.png';
}
function setBody2() {
    var element = document.getElementsByClassName('body')[0];
    element.style.backgroundImage = 'url(images/body2.png';
}
function setBody3() {
    var element = document.getElementsByClassName('body')[0];
    element.style.backgroundImage = 'url(images/body3.png';
}
function setBody4() {
    var element = document.getElementsByClassName('body')[0];
    element.style.backgroundImage = 'url(images/body4.png';
}


function clickHead() {
    var elements = document.getElementsByClassName('head');
    elements[0].style.backgroundImage = 'url(images/' + this.id + '.png';
    this.style.backgroundColor = 'red';
}

function clickBody() {
    var elements = document.getElementsByClassName('body');
    elements[0].style.backgroundImage = 'url(images/' + this.id + '.png';
    this.style.backgroundColor = 'red';
}

function myLoadFunction() {

    var elements = document.getElementsByTagName('li');
    for (var i = 0; i < 5; i++) {
        elements[i].addEventListener('click', clickHead)
    }

    var elements = document.getElementsByTagName('li');
    for (var i = 5; i < 11; i++) {
        elements[i].addEventListener('click', clickBody)
    }

    document.addEventListener('keydown', myKeyDown);
    document.addEventListener('keyup', myKeyUp);
    setInterval(moveInterval, 10);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
