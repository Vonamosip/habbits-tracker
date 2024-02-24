'use strict';

function submitForm(){
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    const text ={text : input};
    localStorage.setItem('text', JSON.stringify(text));
}

function inputChanged(e){
    if(e.code === 'Enter'){
        submitForm();
    }
}


