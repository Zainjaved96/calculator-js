let screen = document.getElementById("screen")
var buttons = document.getElementsByClassName("btn")


function float_round(value){
    let float_value = parseFloat(value)
    let roundedlog = float_value.toFixed(5)
    return roundedlog
}


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
    if (document.getElementById("sin").innerText == "sin"){
        screen.value = Math.sin(screen.value)
        screen.value = float_round(screen.value)
    }else {
        screen.value = Math.asin(screen.value)
        screen.value = float_round(screen.value)
    }
}

function cos(){
    if (document.getElementById("cos").innerText == "cos"){
        screen.value = Math.cos(screen.value)
        screen.value = float_round(screen.value)
    }
    
    else {
        screen.value = Math.acos(screen.value)
        screen.value = float_round(screen.value)
    }
    
}

function tan(){
    if (document.getElementById("tan").innerText == "tan"){
        screen.value = Math.tan(screen.value)
        screen.value = float_round(screen.value)
    }
    else {
        screen.value = Math.atan(screen.value)
        screen.value = float_round(screen.value)
    }

}


function result(){
    screen.value = eval(screen.value)

}


function pi() {
    screen.value = screen.value * 3.14
    screen.value = float_round(screen.value)
}


function log(){
    screen.value = Math.log10(screen.value)
    screen.value = float_round(screen.value)
}

function sqrt(){
    screen.value = Math.sqrt(screen.value, 2)
    screen.value = float_round(screen.value)
}

function e(){
    screen.value =  screen.value * 2.718 
    screen.value = float_round(screen.value)
}

function sqr(){
    screen.value = screen.value * screen.value
}


function natLog(){
    let nat_log = Math.log(screen.value)
    screen.value = float_round(nat_log)
}

function exp(){
    let exp = Math.exp(screen.value)
    screen.value = float_round(exp)
}


function inverse(){
    sin_value = document.getElementById("sin").innerText
    console.log(sin_value)
    if (sin_value == "sin"){
        document.getElementById("sin").innerText = "sin-1"
        document.getElementById("tan").innerText = "tan-1"
        document.getElementById("cos").innerText = "cos-1"
        document.getElementById("inverse").classList.add("enabled")
    }
    else {
        document.getElementById("sin").innerText = "sin"
        document.getElementById("tan").innerText = "tan"
        document.getElementById("cos").innerText = "cos"
        document.getElementById("inverse").classList.remove("enabled")
    }
}