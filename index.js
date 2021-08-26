
//  document.getElementById("DRUMKIT-BTN-W")
 function myFunctionW()
 {
    var audio= new Audio('crash.mp3');
    audio.play();

    document.getElementById("DRUMKIT-BTN-W").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-W").classList.remove("pressed");
    },100);
 }
 function myFunctionS()
 {
    var audio= new Audio('kick-bass.mp3');
    audio.play();

    document.getElementById("DRUMKIT-BTN-S").classList.add("pressed");  
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-S").classList.remove("pressed");
    },100);
 }
 function myFunctionA()
 {
    var audio= new Audio('snare.mp3');
    audio.play();

    document.getElementById("DRUMKIT-BTN-A").classList.add("pressed");  
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-A").classList.remove("pressed");
    },100); 
 }
 function myFunctionD()
 {
    var audio= new Audio('Tom-1.mp3');
    audio.play();

    document.getElementById("DRUMKIT-BTN-D").classList.add("pressed");  
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-D").classList.remove("pressed");
    },100);
 }
 function myFunctionJ()
 {
    var audio= new Audio('Tom-2.mp3');
    audio.play();

    document.getElementById("DRUMKIT-BTN-J").classList.add("pressed");  
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-J").classList.remove("pressed");
    },100);
 }
 function myFunctionK()
 {
    var audio= new Audio('Tom-3.mp3');
    audio.play();

    document.getElementById("DRUMKIT-BTN-K").classList.add("pressed");  
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-K").classList.remove("pressed");
    },100);
 }
 function myFunctionL ()
 {
    var audio= new Audio('Tom-4.mp3');
    audio.play();

    document.getElementById("DRUMKIT-BTN-L").classList.add("pressed");  
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-L").classList.remove("pressed");
    },100);
 }


document.addEventListener("keypress",function(event){
   makeSound(event.key);

}) ;

function makeSound(key)
{
    switch (key)
    {
    case "w":
    var audio= new Audio('crash.mp3');
    audio.play();
    
    //animation when keys were pressed
    document.getElementById("DRUMKIT-BTN-W").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-W").classList.remove("pressed");
    },100);
    break;

    case "s":
    var audio= new Audio('kick-bass.mp3');
    audio.play();
    
    //animation when keys were pressed
    document.getElementById("DRUMKIT-BTN-S").classList.add("pressed");  
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-S").classList.remove("pressed");
    },100);
    break;

    case "a":
    var audio= new Audio('snare.mp3');
    audio.play();

    //animation when keys were pressed
    document.getElementById("DRUMKIT-BTN-A").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-A").classList.remove("pressed");
    },100);
    break;

    case "d":
    var audio= new Audio('Tom-1.mp3');
    audio.play();

    //animation when keys were pressed
    document.getElementById("DRUMKIT-BTN-D").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-D").classList.remove("pressed");
    },100);
    break;

    case "j":
    var audio= new Audio('Tom-2.mp3');
    audio.play();

    //animation when keys were pressed
    document.getElementById("DRUMKIT-BTN-J").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-J").classList.remove("pressed");
    },100);
    break;

    case "k":
    var audio= new Audio('Tom-3.mp3');
    audio.play();

    //animation when keys were pressed
    document.getElementById("DRUMKIT-BTN-K").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-K").classList.remove("pressed");
    },100);
    break;

    case "l":
    var audio= new Audio('Tom-4.mp3');
    audio.play();

    //animation when keys were pressed
    document.getElementById("DRUMKIT-BTN-L").classList.add("pressed");
    setTimeout(function(){
      document.getElementById("DRUMKIT-BTN-L").classList.remove("pressed");
    },100);
    break;
    }
}







