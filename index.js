
let HomeResult = document.getElementById("HomeResult");
let HomeScore = 0;
let GuestResult = document.getElementById("GuestResult");
let GuestScore = 0;
let Stop = document.getElementsByClassName("stop");

function StopGame() { //highlights a leader
  if (HomeScore > GuestScore) {
    HomeResult.style.color = "#25710e";
    GuestResult.style.color = "#041014";
  } else if (HomeScore < GuestScore) {
    HomeResult.style.color = "#041014";
    GuestResult.style.color = "#25710e";
  }else{
GuestResult.style.color = "#25710e";
HomeResult.style.color = "#25710e";
  }
}

function homePlusOne() {
    HomeScore = HomeScore + 1;
    HomeResult.innerText = HomeScore;  
}

function homePlusTwo() {
 HomeScore = HomeScore + 2;
 HomeResult.innerText = HomeScore;
}

function homePlusThree() {
 HomeScore = HomeScore + 3;
 HomeResult.innerText = HomeScore;
}

function guestPlusOne() {
  GuestScore = GuestScore + 1;
  GuestResult.innerText = GuestScore;
}

function guestPlusTwo() {
  GuestScore = GuestScore + 2;
  GuestResult.innerText = GuestScore;
}

function guestPlusThree() {
  GuestScore = GuestScore + 3;
  GuestResult.innerText = GuestScore;
}

function resetHomeScore(){
  HomeResult.innerText = 0;  
  HomeScore = 0; 
}

function resetGuestScore(){
   GuestResult.innerText = 0;
   GuestScore = 0;  
}







