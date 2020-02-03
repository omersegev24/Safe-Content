'use strict';

function onInit(){
    saveUserToLocal();
}

function onSignIn(){
    var elUserInput = document.querySelector('.user');
    var userName = elUserInput.value;
    if (!userName) return;
    var elPass = document.querySelector('.password');
    var password = +elPass.value;
    if (!password) return;

    elUserInput.value = '';
    elPass.value = '';
    signIn(userName, password);
}

function onLogOut(){
    logOut()
}