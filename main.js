var X=0
var Y=0
drawCircle=''
var drawRect=''

var speechRecognition=window.webkitSpeechRecognition;

var recogntition=new speechRecognition()

function start(){
    document.getElementById("status").innerHTML="o sistema esta ouvindo ,pode falar"
    recogntition.start()
}
recogntition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="a fala foi reconhecida como:"+content;
    if(content=="círculo"){
        X=Math.floor(Math.random()*900)  
        Y=Math.floor(Math.random()*700)
        document.getElementById("status").innerHTML="desenhando um circulo"
        drawCircle="set"
     }
     if(content=="retângulo"){
        X=Math.floor(Math.random()*900)  
        Y=Math.floor(Math.random()*700)
        document.getElementById("status").innerHTML="desenhando um retangulo"
        drawRect="set"
     }
}
function setup(){
    canvas=createCanvas(900,700)
}
function draw(){
    if(drawCircle=="set"){
      radius=Math.floor(Math.random()*100)  
      circle(X,Y,radius)
      drawCircle=""
    }
    if(drawRect=="set"){ 
        rect(X,Y,200,150)
        drawRect=""
      }
}