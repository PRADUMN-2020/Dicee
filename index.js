document.querySelector(".btn").addEventListener("click",rollTheDice)

function rollTheDice()
{
var randomNumber1=Math.floor(Math.random()*6)+1;  // generate a random number between 1-6.
var randomNumber2=Math.floor(Math.random()*6)+1;  // generate a random number between 1-6.

var randomImageSource="images/dice"+randomNumber1+".png";  // source for a random dice image.

var image1=document.querySelector(".img1");  // select the image 1.

image1.setAttribute("src",randomImageSource);   // change the src attribute of image1 to random image's source.

var randomImageSource2="images/dice"+randomNumber2+".png";   // source for a random dice image.

var image2=document.querySelector(".img2"); // select the image 2.

image2.setAttribute("src",randomImageSource2);  // change the src attribute of image2 to random image's source.

// logic for changing the heading to show game result according to the outcome of the dice.

if(randomNumber1<randomNumber2)                              // If player 2 wins.
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else if(randomNumber1>randomNumber2)                        // If player 1 wins.
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else                                                        // If there is a draw.
{
    document.querySelector("h1").innerHTML="Draw!";
}
}
