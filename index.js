for(let i=0;i<document.querySelectorAll(".drum").length;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    let res=this.innerHTML;
    makeSound(res);
    btnAnim(res)
    

    
})}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnAnim(event.key)

});

function makeSound(key){
switch (key) {
    case "w":
        var tom1= new Audio ("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
        var tom2=new Audio ("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
            var tom3=new Audio ("sounds/tom-2.mp3");
            tom3.play();
            break;  
            
            case "d":
                var tom4=new Audio ("sounds/tom-2.mp3");
                tom4.play();
                break;


                case "j":
                    var snare=new Audio ("sounds/snare.mp3");
                    snare.play();
                    break;

                    case "k":
                        var kick=new Audio ("sounds/kick-bass.mp3");
                        kick.play();
                        break;

                        case "l":
                            var crash=new Audio ("sounds/crash.mp3");
                            crash.play();
                            break;

                            default:console.log(res);
}};

function btnAnim(currKey)
{
    var btn=document.querySelector("."+currKey)
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}
