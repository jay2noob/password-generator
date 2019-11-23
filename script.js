var passwordEl = document.querySelector("#password")
var charactersEl = document.querySelector("#characters")
var upperCaseEl = document.querySelector("#uppercase")
var lowerCaseEl = document.querySelector("#lowercase")
var numbersl = document.querySelector("#numbers")
var symbolsEl = document.querySelector("#symbols")
var generateEl = document.querySelector("#generate")
var copyEl = document.querySelector("#copy")

document.querySelector("#copy").addEventListener("click", function() {
    document.querySelector("#password").select()
    document.execCommand("copy")
})

upCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
loCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
symArray = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "?"]

generate.addEventListener("click", function() {
    var length = charactersEl.value;
    var addUpCase = upperCaseEl.checked;

    passwordEl.innerText = 

})