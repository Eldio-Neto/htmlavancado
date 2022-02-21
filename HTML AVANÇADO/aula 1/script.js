let image = document.getElementById("a")
var src = "./images/meat.png";

image.addEventListener("click", function() {

    

    if (src == "./images/meat.png"){
        image.setAttribute("src", "./images/beer.png")
        src = "./images/beer.png"
    }
    

    else {

        image.setAttribute("src", "./images/meat.png")
        src = "./images/meat.png"
    }
   

    
})



