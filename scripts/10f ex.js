function changeClasses (lass) {
    const buttonElement = document.querySelector(`.${lass}`);
    if (!buttonElement.classList.contains('after')) {
        turnOffPrevious();
        buttonElement.classList.add('after') 
        
    }  else {
        buttonElement.classList.remove('after')
    }
}
function turnOffPrevious (){
    const previous = document.querySelector('.after')
    if (previous) {
        previous.classList.remove('after');
    }
}