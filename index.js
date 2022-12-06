

var numberOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumBtn; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var btnInnerHTML = this.innerHTML;

    makeSound(btnInnerHTML);

  });
}


document.addEventListener("keypress", function(event){

makeSound(event.key);

});




function makeSound(key){

  switch (key){
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break


    case "f":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break

    case "g":
    var ride = new Audio("sounds/ride.mp3");
    ride.play();
    break

    case "h":
    var hihato = new Audio("sounds/hihat-open.mp3");
    hihato.play();
    break

    case "j":
    var hihatc = new Audio("sounds/hihat-closed.mp3");
    hihatc.play();
    break

    case "k":
    var snare1 = new Audio("sounds/snare.mp3");
    snare1.play();
    break

    case "l":
    var snare2 = new Audio("sounds/snare.mp3");
    snare2.play();
    break

    case "o":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break

  default:console.log(buttonInnerHTML);
  }






}
