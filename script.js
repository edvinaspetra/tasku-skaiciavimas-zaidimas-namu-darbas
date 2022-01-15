"use strict";

var heading = document.getElementById("heading");
var playingTo = document.getElementById("playingTo");
var input = document.getElementById("input");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var reset = document.getElementById("reset");

var number1 = 0;
var number2 = 0;
var maxNumber = 0;
heading.textContent = `${number1} to ${number2}`;
playingTo.textContent = `Playing to: ${maxNumber}`

player1.addEventListener("click", function(){
    if(number1 < maxNumber){
    number1++;
    heading.textContent = `${number1} to ${number2}`;
    playingTo.textContent = `Playing to: ${maxNumber}`
    console.log(number1);
    maxNumber = input.value;
    } else {
      heading.style.color = "green";
    }
});

player2.addEventListener("click", function(){
    if(number2 < maxNumber){
        number2++;
        heading.textContent = `${number1} to ${number2}`;
        playingTo.textContent = `Playing to: ${maxNumber}`
        console.log(number2);
        maxNumber = input.value;
    }else {
      heading.style.color = "green";
    }
});

reset.addEventListener("click", function(){
    number1 = 0;
    number2 = 0;
    maxNumber = 0;
    input.value = 0;
    console.clear();
    heading.textContent = `${number1} to ${number2}`;
    playingTo.textContent = `Playing to: 0`
    heading.style.color = "black";
});

input.addEventListener("change", function(){
    if(number1 != maxNumber || number2 != maxNumber){
        maxNumber = input.value;
        console.log(maxNumber);
    } else {
        maxNumber = 1;
    }
    if(input.value < 0){
        input.value = 0;
    }
});