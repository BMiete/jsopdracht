console.log("OPDRACHT 1")
let firstName = "Bronco"
let lastName = "Miete"
let fullName = `${firstName} ${lastName}`

console.log(`mijn voor naam is`, firstName)
console.log(`mijn achter naam is`, lastName)
console.log(`mijn naam is`, fullName)


let capitalName = fullName.toUpperCase();
console.log(capitalName)

let lowerName = fullName.toLowerCase();
console.log(lowerName)

console.log("OPDRACHT 2")
// alert("Welkom!");
function myFunction() {
  var x = document.getElementById("myDIV");
  x.querySelector(".example").innerHTML = fullName;
}
// EINDE BASIC
function getInputValue() {
    // Selecting the input element and get its value 
    let inputFName = document.getElementsByClassName("firstName")[0].value;
    let inputLName = document.getElementsByClassName("lastName")[0].value;
    let inputName = `${inputFName} ${inputLName}`
    // Displaying the value
    console.log(inputName);
    var x = document.getElementById("advanced");
    x.querySelector(".display").innerHTML = inputName;
  }
//   opdracht 3
let persoon1 = ["Max Ladvermogen", "23 jaar", "Zoetermeer"];  
let persoon2 = ["Timo Bijl", "18 jaar", "Den haag"];  
let persoon3 = ["Bennie Lekker", "34 jaar", "Rotterdam"];   
console.log(persoon1);  
console.log(persoon2);  
console.log(persoon3);  
for (let str of stringArray) {  
    console.log(str);  
}  