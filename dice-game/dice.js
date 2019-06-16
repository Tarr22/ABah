
// random number for die 1
randomNumber1= Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = randomNumber1 +1;
randomNumber1 = Math.floor(randomNumber1);

var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src","images\\dice"+ randomNumber1+ ".png");

// random number for die 2
randomNumber2= Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = randomNumber2 +1;
randomNumber2 = Math.floor(randomNumber2);

var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src","images\\dice"+ randomNumber2+ ".png");


if(randomNumber1 > randomNumber2){

document.getElementsByTagName("h1")[0].innerHTML= "🚩 Player 1 Wins!(Refresh to roll again.)";
}


if(randomNumber1 < randomNumber2){

document.getElementsByTagName("h1")[0].innerHTML= "Player 2 Wins! 🚩(Refresh to roll again.)";
}



if(randomNumber1 == randomNumber2){

document.getElementsByTagName("h1")[0].innerHTML= "We Have a Tie!(Refresh to roll again.)";
}
