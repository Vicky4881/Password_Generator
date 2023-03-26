const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btnCopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');

btnCopy.addEventListener('click',async() => {
    const pass = outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert('Password Copied');
    }
    else{
        alert('There is no password to copy');
    }
});

function generateRandom(min,max){
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit)+min);
}

function capitalValue(){
    return generateRandom(65,90);
}
function smallValue(){
    return generateRandom(97,122);
}
function numberValue(){
    return generateRandom(48,57);
}

function symbolsValue(){
    const symbols = "!@#$%^&*()_+?~<>"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const functionArray = [
    {
        element : numberElement,
        fun: numberValue
    },
    {
        element : capitalElement,
        fun: capitalValue
    },
    {
        element : smallElement,
        fun: smallValue
    },
    {
        element : symbolElement,
        fun : symbolsValue
    }
];

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const limit  = passwordLengthElement.value;
    let generatedPassword ="";
    const funArray = functionArray.filter(({element})=>element.checked);
    for(i=0; i<limit; i++){
        const index = Math.floor(Math.random()*funArray.length);
        const letter = funArray[index].fun();
        generatedPassword += letter;
    }
    outputElement.value = generatedPassword;
});

