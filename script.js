window.confirm("Welcome to my Etch a Sketch . Hover your mouse over the blue tiles to make a sketch");
let tilesSize =  window.prompt("Select from 10-50px the pen size")
let sketchpadSize = window.prompt("Select from 100-1000px the size of your sketchpad")

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
    let ismousemove = false

    document.addEventListener("mousedown", function(){
        ismousedown = true;
    });

    document.addEventListener("mousemove", function(){
        ismousemove = true;
    });

    document.addEventListener("mouseup", function(){
        ismousedown = false;
    });
    const div = document.querySelector('div')
    div.addEventListener("dragstart", function(event){
        event.preventDefault()
    });

    child.addEventListener("mouseover", function() {
        if (ismousedown == true && ismousemove == true){
        child.style.backgroundColor = "#3d3d3d"
        }

});



     
const mousedownbutton = document.querySelector("#Mousedown");
mousedownbutton.addEventListener("click", event => {
    child.removeEventListener("mouseover", sketch(), true)
    child.addEventListener("mousedown", sketch())
        
});


};

tilegenerator();
    
    //const brushSizeDecreaser = document.querySelector("#smallerBrushSize");
    //brushSizeDecreaser.addEventListener('click', function(event){
     //   child.style.backgroundColor = "#b8cbff";
    //child.style.width = "100px";
    //child.style.height = "100px";
    //});
     
    



    
    //   const resetbutton = document.querySelector("#resetbutton");
 //   resetbutton.addEventListener('click', event =>{ 
//        cloned.setAttribute("style","background-color: #b8cbff");
//    }); 
    
    


//    const brushSizeDecreaser = document.querySelector("#smallerBrushSize");
//    const cloned = document.querySelector(".squares")
//    brushSizeDecreaser.addEventListener('click',event =>{
//        cloned.setAttribute("style","width: 100px; height: 100px");
//    });




