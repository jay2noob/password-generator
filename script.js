var passwordEl = document.querySelector("#password");
var charactersEl = document.querySelector("#characters");
var upperCaseEl = document.querySelector("#uppercase");
var lowerCaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var generateEl = document.querySelector("#generate");
var copyEl = document.querySelector("#copy");



const randomFunc = {
    number: addRandomNums,
    upper: addRandomUpCase,
    lower: addRandomLoCase,
    symbol: addRandomSymbols
};

document.querySelector("#copy").addEventListener("click", function() {
    document.querySelector("#password").select()
    document.execCommand("copy")
})

function addRandomNums() {
    const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
    return numArray[Math.floor(Math.random() * numArray.length)];
}

function addRandomUpCase() {
    const upCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    return upCaseArray[Math.floor(Math.random() * upCaseArray.length)];
}

function addRandomLoCase() {
    const loCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return loCaseArray[Math.floor(Math.random() * loCaseArray.length)];
}

function addRandomSymbols() {
    const symArray = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "?"]
    return symArray[Math.floor(Math.random() * symArray.length)];
}

generateEl.addEventListener("click", function() {
    const length = charactersEl.value;
    const isUpper = upperCaseEl.checked;
    const isLower = lowerCaseEl.checked;
    const isNumbered = numbersEl.checked;
    const isSymbol = symbolsEl.checked;

passwordEl.innerHTML = generatePassword(isUpper, isLower, isNumbered, isSymbol, length);      
});

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = upper + lower + number + symbol;
    const typesArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
      
if (typesCount === 0) {
    return "";
}
       
for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => { 
        const funcName = Object.keys(type)[0];          
        generatedPassword += randomFunc[funcName]();
    });
 }
      
const finalPassword = generatedPassword.slice(0, length);

return finalPassword;
}  


