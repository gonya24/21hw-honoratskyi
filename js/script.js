'use strict'
const inputField = document.getElementById('main');
const newElem = document.createElement('div');
newElem.innerHTML = 'I\`m ghost div-block';
newElem.classList.add('added') ;
inputField.onfocus = function () {
    inputField.insertAdjacentElement('afterend',newElem);
};
inputField.onblur = function () {
    newElem.remove();
}
        
