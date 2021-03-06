// Assignment Code
var generateBtn = document.querySelector("#generate");
var container = document.getElementById("interface");
var getBtn = document.querySelector("#getpassword");

//Listen for click event on button
generateBtn.addEventListener("click", function() {
  {
    container.style.display = 'block';
    generateBtn.style.display = 'none';
    getBtn.style.display = 'block';
  }
}
);



//user input variables:
var passLength = document.querySelector('input[name="length"]');
var lowerCase = document.querySelector('input[name="lowercase"]');
var upperCase = document.querySelector('input[name="uppercase"]');
var number = document.querySelector('input[name="number"]');
var symbol = document.querySelector('input[name="symbol"]');

const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '*;<>()[]{}#$?!^|'
};

// Add event listener to get button
//getBtn.addEventListener("click", function () {
 // ps = generateRandomPassword();
  //document.getElementById("password").placeholder = ps;
//});

getBtn.addEventListener("click", () => {
  var length = +passLength.value;
  var activeLower = lowerCase.checked;
  var activeUpper = upperCase.checked;
  var activeNumber = number.checked;
  var activeSymbol = symbol.checked;

  generateRandomPassword(activeLower, activeUpper, activeNumber, activeSymbol, length);

});
  

// function to generate password
function generateRandomPassword(lower, upper, num, sym, length) {
  let MAIN_STRING = "";
  let PASSWORD = "";

  const options = {
    lowerCase: lower,
    upperCase: upper,
    number: num,
    symbol: sym
  }

  var i
  for(i=0;i<Object.keys(options).length;i++){
		MAIN_STRING += (Object.values(options)[i]) ? key_strings[Object.keys(options)[i]] : "";
	}
	
	if(MAIN_STRING != "" && length > 0){
		for(i=0;i<length;i++){
			PASSWORD += MAIN_STRING[Math.floor(Math.random() * MAIN_STRING.length)];
		}
		
		document.getElementById("password").value = PASSWORD;
		
	}else{
		document.getElementById("password").value = "Define the length!";
	}
	
  var password = [];

  var ps = password.join("");
  UserInput(ps);
  return ps;
}

  function UserInput(ps) {
    document.getElementById("password").textContent = ps;
  }