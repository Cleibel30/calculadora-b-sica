
document.querySelector(".resultado").addEventListener("keydown", (e)=>{
    if(!(e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-" || e.key == ".")){
        e.preventDefault()
    }
    else if(document.querySelector(".resultado").value.length == 0 && e.key == 0) e.preventDefault()

    if(e.key == "Backspace") {
        document.querySelector(".resultado").value = document.querySelector(".resultado").value.substring(0, document.querySelector(".resultado").value.length -1)

        if(isNaN(eval(document.querySelector(".resultado").value))){
            document.querySelector(".resultado").value = "";
        }
    }
})

document.querySelector(".botones").addEventListener("click", (e)=>{
    if(e.srcElement.value != "=" && (e.srcElement.className == "boton numero" || e.srcElement.className == "boton simbolo")){
        if(!(document.querySelector(".resultado").value.length == 0 && e.srcElement.value == 0)){
            document.querySelector(".resultado").value += e.srcElement.value;
        }
    }
})

document.querySelector("#igual").addEventListener("click", ()=>{
    try{
        document.querySelector(".resultado").value = eval(document.querySelector(".resultado").value);
    }catch(e){
        document.querySelector(".resultado").value = "Error";
    }
})

document.querySelector("#quitar").addEventListener("click", ()=>{
    document.querySelector(".resultado").value = document.querySelector(".resultado").value.substring(0, document.querySelector(".resultado").value.length -1)
    
    if(isNaN(eval(document.querySelector(".resultado").value))){
        document.querySelector(".resultado").value = "";
    }
})

document.querySelector("#ce").addEventListener("click", ()=>{
    document.querySelector(".resultado").value = "";
})

