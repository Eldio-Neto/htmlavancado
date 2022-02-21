let tela = document.getElementById('tela');

let ctx = tela.getContext ('2d'); 


//--------------------------------------------------

//carregamento


// let circle = {

//      x : 250,
//      y : 250,
//      raio : 50,
//      inicio : 4.7,
//      fim : 0 
// }

// function drawCircle(c){

//     ctx.beginPath();
//     ctx.rect (0,0,500,500);
//     ctx.fillStyle = "beige";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.lineWidth = 3
//     ctx.strokeStyle = "blue";
//     ctx.arc(c.x,c.y,c.raio,c.inicio,c.fim);
//     ctx.stroke();
// }

// drawCircle(circle);

// setInterval(function(){

//     if(circle.fim < 2 * Math.PI){
        
//         circle.fim += 0.1;
//     } else{
        
//         circle.fim = 0;
        

//     }

//     drawCircle(circle);

// }, 50)



//--------------------------------------------------
// circulo
// let x = 250;
// let y = 250;
// let raio = 100;
// let inicio = 0;
// let fim = 2 * Math.PI
// ctx.beginPath ()
// ctx.strokeStyle = 'red'
// ctx.arc (x, y, raio, inicio, fim);
// ctx.stroke()


// --------------------------------------------
// carinha
// ctx.moveTo (150,100)
// ctx.lineTo (150, 200)
// ctx.moveTo (300,100)
// ctx.lineTo (300, 200)
// ctx.moveTo (150,300)
// ctx.lineTo (300,300)
// ctx.lineWidth = 50
// ctx.stroke();

// -----------------------------------------------
// gmail
// ctx.moveTo (500,500)
// ctx.lineTo (500,0)
// ctx.lineTo (250,250)
// ctx.lineTo (0,0)
// ctx.lineTo (0,500)

// ctx.strokeStyle = 'red'
// ctx.lineWidth = 100
// ctx.stroke();
