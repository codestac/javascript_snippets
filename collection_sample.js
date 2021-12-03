var guestList = ["Pabi", "Jim", "Paula", "Mamta"]
console.log(guestList[0]);

var guestName = prompt("Whats your name? ");
if (guestList.includes(guestName)) {
  alert("Welcome"); 
} else {
  alert("Sorry, may be next time!");
}
