window.confirm("Welcome to my Etch a Sketch . Click and Drag your mouse over the blue tiles to make a sketch");


function generate(){
     tilesSize = document.getElementById("penSize").value
     sketchpadSize = document.getElementById("sketchpadSize").value
    tilegenerator()
}


//let tilesSize =  window.prompt("Select from 10-50px the pen size")
//let sketchpadSize = window.prompt("Select from 100-1000px the size of your sketchpad")

function tilegenerator(){

document.getElementsByClassName("container")[0].style.width = sketchpadSize + "px";
let numofsquares = Math.pow((sketchpadSize/tilesSize), 2);
const individualsquare = document.querySelector(".squares");
const container = document.querySelector(".container");
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
        child.style.backgroundColor = "#b8cbff";
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
            child.style.backgroundColor = "#3d3d3d"}
           }
        const hoverbutton = document.querySelector("#Hover");
        hoverbutton.addEventListener("click", function(){
            child.removeEventListener("mouseover", mousedownEvent) 
        });
        
   


    hoverbutton.addEventListener("click", function(){
        child.addEventListener("mouseover", mouseoverEvent) 
            function mouseoverEvent(){
                if (ismousedown == false && ismousemove == true){
                child.style.backgroundColor = "#3d3d3d"
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
            child.style.backgroundColor = "#3d3d3d"}
            }
            const hoverbutton = document.querySelector("#Hover");
            hoverbutton.addEventListener("click", function(){
                child.removeEventListener("mouseover", mousedownEvent) 
            });
    });

    


};

//tilegenerator();
    




