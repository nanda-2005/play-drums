var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var n=this.innerHTML;
        makeso(n);
        st(n);
    } );


}

document.addEventListener("keypress", function(event){
makeso(event.key);
st(event.key);
});

function makeso(key){

    switch (key) {
        case "w":
            var to1=new Audio("sounds/tom-1.mp3");
            to1.play();
            break;
        case "a":
            var to2=new Audio("sounds/tom-2.mp3");
            to2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var cr=new Audio("sounds/crash.mp3");
            cr.play();
            break;
        case "l":
            var kickb=new Audio("sounds/kick-bass.mp3");
            kickb.play();
            break;
        default:

    }
}

function st(k){
    var ab=document.querySelector("."+k);
    ab.classList.add("pressed");
setTimeout(function(){
    ab.classList.remove("pressed");
},100);

}
