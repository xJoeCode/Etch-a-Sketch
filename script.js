


for (let a = 0; a < 300; a++){    
    const individualsquare = document.querySelector(".squares")
    const container = document.querySelector(".container")
    const cloned = individualsquare.cloneNode(true);
    container.appendChild(cloned);
}

