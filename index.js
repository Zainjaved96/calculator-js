let screen = document.getElementById("screen")
var buttons = document.getElementsByClassName("btn")


for (item of buttons){
    
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }

        if (btntext == "π"){
           btntext = ""
        }

        screen.value += btntext;
    });
}


function ac(){
    screen.value = ""
}

function sin(){
    screen.value = Math.sin(screen.value)
}

function cos(){
    screen.value = Math.cos(screen.value)
}

function tan(){
    screen.value = Math.tan(screen.value)
}


function result(){
    screen.value = eval(screen.value)
}


function pi() {
    screen.value = screen.value * 3.14
}


function log(){
    screen.value = Math.log(screen.value)
}

function sqrt(){
    screen.value = Math.sqrt(screen.value, 2)
}

function e(){
    screen.value += "(2.718)"
}