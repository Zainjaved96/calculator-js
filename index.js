let screen = document.getElementById("screen")
var buttons = document.getElementsByClassName("btn")
let output_var = "radian"

function modeswitch(){
    if (document.getElementById("body").classList.contains("light")){
        document.getElementById("body").classList.remove("light")
        document.getElementById("mode").innerText = "Light"
        document.getElementById("cal-head").classList.remove("black-text")
       
    }
    else {
        document.getElementById("body").classList.add("light")
        document.getElementById("mode").innerText = "Dark"
        document.getElementById("cal-head").classList.add("black-text")
    }
}




function deg_rad (){
    let value = document.getElementById("radian")
    if (value.innerText == "Rad"){
        value.innerText = "Deg"
        output_var = "degree"
        console.log("degree enabled")
    }
    else {
        value.innerText = "Rad"
        output_var = "radian"
        console.log("radian enabled")
    }
}

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

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
        if(output_var == "degree"){
            screen.value = radians_to_degrees(screen.value)
        }
    }else {
        screen.value = Math.asin(screen.value)
        if(output_var == "degree"){
            screen.value = radians_to_degrees(screen.value)
        }
        screen.value = float_round(screen.value)
    }
}

function cos(){
    if (document.getElementById("cos").innerText == "cos"){
        screen.value = Math.cos(screen.value)
        if(output_var == "degree"){
            screen.value = radians_to_degrees(screen.value)
        }
        screen.value = float_round(screen.value)
    }
    
    else {
        screen.value = Math.acos(screen.value)
        if(output_var == "degree"){
            screen.value = radians_to_degrees(screen.value)
        }
        screen.value = float_round(screen.value)
    }
    
}

function tan(){
    if (document.getElementById("tan").innerText == "tan"){
        screen.value = Math.tan(screen.value)
        if(output_var == "degree"){
            screen.value = radians_to_degrees(screen.value)
        }
        screen.value = float_round(screen.value)
    }
    else {
        screen.value = Math.atan(screen.value)
        if(output_var == "degree"){
            screen.value = radians_to_degrees(screen.value)
        }
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


function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function ce(){
    screen.value = screen.value.substr(0, screen.value.length - 1);
}