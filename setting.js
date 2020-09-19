const backgroundBtn = document.querySelector(".background-btn")
    textBtn = document.querySelector(".text-btn")
    backgroundDiv = document.querySelector(".background-set")
    textDiv = document.querySelector(".text-set")

const images = document.querySelectorAll("img");

const backgroundClass = backgroundDiv.classList,
    textClass = textDiv.classList;

const family1 = document.getElementById("1"),
    family2 = document.getElementById("2"),
    family3 = document.getElementById("3"),
    family4 = document.getElementById("4"),
    family5 = document.getElementById("5")
    body = document.querySelector("body");

const colorInput = document.getElementById('color');
colorInput.addEventListener('input', colorChange);

function colorChange() {
    body.style.color = colorInput.value;
}

const shadowInput = document.getElementById("shadow");
shadowInput.addEventListener('click', setShadow);

function setShadow() {
    if(shadowInput.checked == true) {
        body.style.textShadow = '0 0 5px black';
    } else {
        body.style.textShadow = '';
    }
}



function displayBgSet() {
    backgroundClass.remove("hidden");
    textClass.add("hidden");
}

function displayTextSet() {
    backgroundClass.add("hidden");
    textClass.remove("hidden");
}

backgroundBtn.addEventListener('click', displayBgSet);
textBtn.addEventListener('click', displayTextSet);

family1.addEventListener('click', function() {body.style.fontFamily = "Arial"});
family2.addEventListener('click', function() {body.style.fontFamily = "Comic Sans MS"});
family3.addEventListener('click', function() {body.style.fontFamily = "Fantasy"});
family4.addEventListener('click', function() {body.style.fontFamily = "Helvetica"});
family5.addEventListener('click', function() {body.style.fontFamily = "Segoe Script"});

images[0].addEventListener('click', function() {body.style.backgroundImage = `url(${images[0].className}.jpg)`});
images[1].addEventListener('click', function() {body.style.backgroundImage = `url(${images[1].className}.jpg)`});
images[2].addEventListener('click', function() {body.style.backgroundImage = `url(${images[2].className}.jpg)`});
images[3].addEventListener('click', function() {body.style.backgroundImage = `url(${images[3].className}.jpg)`});
