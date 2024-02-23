const previewPassword = document.getElementById("preview");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");

const inputPasswordLength = document.getElementById("p-Length");
const inputUpperCase = document.getElementById("upper-case");
const inputLowerCase = document.getElementById("lower-case");
const inputNumbers = document.getElementById("numbers");
const inputSymbols = document.getElementById("symbols");

function generatePassword(){
    
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '01234567890';
    const symbols = '`~!@#$%^&*-_:\|.?/<>';

    let allowedCharacters = '';
    let password = '';

    allowedCharacters += inputUpperCase.checked ? upperCaseChars : '';
    allowedCharacters += inputLowerCase.checked ? lowerCaseChars : '';
    allowedCharacters += inputNumbers.checked ? digits : '';
    allowedCharacters += inputSymbols.checked ? symbols : '';

    if(inputPasswordLength.value <= 0){
        return `Password length should be greater than 0`;
    }
    if(allowedCharacters.length === 0){
        return `At least one set of character needs to be selected`;
    }
    for(i=0; i<inputPasswordLength.value; i++){
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIndex];

    }
    return password;
}
generateButton.addEventListener("click",()=>{
    previewPassword.innerText = generatePassword();
})
copyButton.addEventListener('click',()=>{
    navigator.clipboard.writeText(previewPassword.innerText);
})
