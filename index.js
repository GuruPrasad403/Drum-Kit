var A=document.getElementsByClassName("drum").length;
for(var i=0;i<A;i++)
document.querySelectorAll("button")[i].addEventListener("click", function(){

var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);
addAnimation(buttonInnerHtml);
document.addEventListener("keypress", function (event){
    makeSound(event.key)
    addAnimation(event.key)
})

});

function makeSound(sound){
    switch (sound) {
        case 'w':
            var w=new Audio("sounds/crash.mp3");
            w.play();
            break;
         case 'a':
                var a=new Audio("sounds/kick-bass.mp3");
                a.play();
                break;
        case 's':
            var s=new Audio("sounds/snare.mp3");
            s.play();
            break;
        case 'd':
            var d=new Audio("sounds/tom-1.mp3");
            d.play();
            break;
        case 'j':
            var j=new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case 'k':
            var k=new Audio("sounds/tom-3.mp3");
            k.play();
        case 'l':
            var l=new Audio("sounds/tom-4.mp3");
            l.play();
            break;
                console.log(buttonInnerHtml);
            break;
            
        default:
            break;
    }       
}
function addAnimation(currentKey){
   var anime= document.querySelector("."+currentKey)
   anime.classList.add("pressed");
   setTimeout(function (){
    anime.classList.remove("pressed")
   },100);

}
