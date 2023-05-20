const display = document.getElementById("inputvalue");

function output(inputnumber){
        display.value = display.value + inputnumber;
}

function finish(){
    let fir = document.getElementById("inputvalue");
    let b = fir.value;
    let d = eval(b);
    fir.value = d;
}

function clearInput(){
    display.value = 0;
}

function test() {
    console.log("test")
}













