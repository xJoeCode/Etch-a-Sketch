function generate(){
    tilesSize = document.getElementById("penSize").value
    sketchpadSize = document.getElementById("sketchpadSize").value
    sketchpadColor = document.getElementById("sketchpadColor").value
    penColor = document.getElementById("penColor").value
    let inttileSize = parseInt(tilesSize)
    let intSkethpadSize = parseInt(sketchpadSize)

     if (inttileSize >= 10 && inttileSize <= 50 && intSkethpadSize >= 100 && intSkethpadSize <= 1000) {
         console.log(typeof intSkethpadSize)
        tilegenerator()
        } else alert("Kindly check you input values and try again")
    
}


function tilegenerator(){
let divisibleSketchpadSize = Math.round(sketchpadSize/tilesSize) * tilesSize
let numofsquares = Math.pow((divisibleSketchpadSize /tilesSize), 2);
document.getElementsByClassName("container")[0].style.width = divisibleSketchpadSize + "px";
const container = document.querySelector(".container");
const individualsquare = document.createElement("div");
individualsquare.classList.add("squares");
individualsquare.style.backgroundColor = sketchpadColor;
individualsquare.style.display = "flex";
container.appendChild(individualsquare);
for (let a = 0; a < numofsquares; a++){    
    let cloned = individualsquare.cloneNode(true);
    container.appendChild(cloned);
    addHandertoItem(cloned);
    };
individualsquare.remove()
}


    
let addHandertoItem = function(child){

    child.style.width = tilesSize + "px";
    child.style.height = tilesSize + "px";

    const resetbutton = document.querySelector("#resetbutton");
    resetbutton.addEventListener('click', event =>{ 
        child.style.backgroundColor = sketchpadColor;
            });

    const div = document.querySelector('div')
    div.addEventListener("dragstart", function(event){
        event.preventDefault()
    });

    let ismousedown = false;
    let ismousemove = false;

    document.addEventListener("mousedown", function(){
        ismousedown = true;
    });
    document.addEventListener("mousemove", function(){
        ismousemove = true;
    });
    document.addEventListener("mouseup", function(){
        ismousedown = false;
    });

    
    child.addEventListener("mouseover", mousedownEvent)
        function mousedownEvent(){
           if (ismousedown == true && ismousemove == true){
            child.style.backgroundColor = penColor}
           }
        const hoverbutton = document.querySelector("#Hover");
        hoverbutton.addEventListener("click", function(){
            child.removeEventListener("mouseover", mousedownEvent) 
        });
        
   


    hoverbutton.addEventListener("click", function(){
        child.addEventListener("mouseover", mouseoverEvent) 
            function mouseoverEvent(){
                if (ismousedown == false && ismousemove == true){
                child.style.backgroundColor = penColor
                };
            };
    const mousedownbutton = document.querySelector("#Mousedown");
    mousedownbutton.addEventListener("click", function(){
        child.removeEventListener("mouseover", mouseoverEvent)
        });
    
    });

    const mousedownbutton = document.querySelector("#Mousedown");
    mousedownbutton.addEventListener("click", function() {
        child.addEventListener("mouseover", mousedownEvent) 
        function mousedownEvent(){
            if (ismousedown == true && ismousemove == true){
            child.style.backgroundColor = penColor}
            }
            const hoverbutton = document.querySelector("#Hover");
            hoverbutton.addEventListener("click", function(){
                child.removeEventListener("mouseover", mousedownEvent) 
            });
    });

    const generateSketchpadButton = document.querySelector("#generateSketchpad")
    generateSketchpadButton.addEventListener("click", function() {
        if (typeof child !== "null"){
        child.remove()
        }
    });

    


};


    




