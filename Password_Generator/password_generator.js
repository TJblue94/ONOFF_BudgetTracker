// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    var passwordConditions = getPasswordConditionsUser();
    var password = generatePassword(passwordConditions);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}//promt and special conditions either "ok" or "cancel"
function getPasswordConditionsUser() {
    var passwordLength = prompt("Please enter password length");
    var shouldContainNumber = confirm("Should Contain Numbers?");
    var shouldContainSpecialCharacter = confirm("Should Contain Special characters?");
    var shouldContainCapitalLetters = confirm("Should Contain Capital Letters?");
    return [passwordLength, shouldContainNumber, shouldContainSpecialCharacter, shouldContainCapitalLetters]
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//range indicates char code corisponding values
function getLowercaseLetter() {
    return String.fromCharCode(getRandomInt(97, 122))
}
function getUppercaseLetter() {
    return String.fromCharCode(getRandomInt(65, 90))
}
function getNumber() {
    return String.fromCharCode(getRandomInt(48, 57))
}
function getSpecialCharacter() {
    return String.fromCharCode(getRandomInt(58, 64))
}
//running password conditions through generate password to return password
function generatePassword(passwordConditions) {
    var passwordLength = passwordConditions[0]
    var shouldContainNumber = passwordConditions[1]
    var shouldContainSpecialCharacter = passwordConditions[2]
    var shouldContainCapitalLetters = passwordConditions[3]
    var password = ""

    if (shouldContainNumber) {
        password += getNumber()
        passwordLength--
    }
    if (shouldContainSpecialCharacter) {
        password += getSpecialCharacter()
        passwordLength--
    }
    if (shouldContainCapitalLetters) {
        password += getUppercaseLetter()
        passwordLength--
    }
    for (var i = 0; i < passwordLength; i++) {
        password += getLowercaseLetter()
    }
    return password
}
// input for 13-16
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Math.floor(Math.random() * (max - min + 1)) + min;
//range 33-126