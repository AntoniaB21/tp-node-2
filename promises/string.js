function checkStringLength(text){
    return new Promise((successCallback, failureCallback) => {
        if (text.length < 20) {
            successCallback();
        } else {
            failureCallback();
        }
    });
}

function successCallback(){
    console.log('true')
    return "true";
}

function failureCallback(){
    console.log('false');
    return "le mot est supérieur à 20 caractères";
}

const promise = checkStringLength("leltmeaitetbaetpoueztb");
promise.then(successCallback,failureCallback);