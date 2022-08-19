function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById("generate-pin" ).addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById("display-pin");
    displayPinField.value = pin;
})

document.getElementById("calculator").addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById("type-num");

    if(isNaN(number)){
     if(number === 'C'){
        typeNumberField.value = '';
     }

     else if(number == '<'){
        const digits = priviousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typeNumberField.value = remainingDigits;
     }

    }
    else{
        // const priviousTypedNumber = typeNumberField.value;
        const newTypeNumber = priviousTypedNumber + number;
        typeNumberField.value = newTypeNumber;

    }

})

document.getElementById("verify-pin").addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPIn = displayPinField.value;
    const typeNumberField = document.getElementById("type-num");
    const typeNumber = typeNumberField.value;
    if(typeNumber == currentPIn){
        const pinSuccessMessege = document.getElementById("pin-success");
        pinSuccessMessege.style.display = "block";
        pinFailureMessege.style.display = "none";

    }
    else{
         const pinFailureMessege = document.getElementById("pin-failure");
         pinFailureMessege.style.display = "block";
        pinSuccessMessege.style.display = "none";

    }
})