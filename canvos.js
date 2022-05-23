var Alumnos = [];
function submit(){
    for (var j=1 ;j <=4 ;j++){
        Alumnos.push(document.getElementById("nombre").value);
        console.log(Alumnos);
    }  
}
var canvas = document.getElementById("UwU");
 var ctx= canvas.getcontext("2d");
 canvas.addEventListener("mousedown", my_mousedown) ;
 function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
        
    
 }
