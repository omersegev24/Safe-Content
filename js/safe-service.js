'use strict';

const KEY = 'loggedinUser';

var gPassword = 111;
var gUsers = _createUsers();


function signIn(userName, password){
    for (var user of gUsers) {
        if (user.name === userName) {
            if (user.pass === password) {
                showSecretContent(user);
                user.lastLoginTime = new Date().getTime();
                saveToStorage(KEY, user);
                saveUserToLocal();
                return;
            }
        }
    }
    return alert(`User name or password isn't correct.`);
}


function showSecretContent(user) {
    document.querySelector('.sign-in-container').style = 'display: none';
    document.querySelector('.secret-container').style = 'display: flex';
    document.querySelector('.user-login').innerText = user.name;
    var elLink = document.querySelector('.admin-page-link');
    if (user.isAdmin) elLink.style.visibility = 'visible';
}

function logOut() {
    clearStorage(KEY);
    document.querySelector('.sign-in-container').style = 'display: flex';
    document.querySelector('.secret-container').style = 'display: none';
    document.querySelector('.admin-page-link').style.visibility = 'hidden';
}

function saveUserToLocal() {
    saveToStorage('Users', gUsers);
}

function _createUsers() {
    var users = ['omer', 'shosh', 'adi', 'gal', 'alon'];
    var usersMap = [];
    for (var user of users) {
        usersMap.push((user === 'omer') ?
            _createUser(user, true) : _createUser(user, false));
    }

    return usersMap;
}
function _createUser(name, isAdmin) {
    return {
        name: name,
        pass: gPassword++,
        lastLoginTime: null,
        isAdmin: isAdmin
    }
}


