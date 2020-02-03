'use strict';

function onLoad() {
    var userLogIn = loadFromStorage(KEY);
    if (!userLogIn || !userLogIn.isAdmin) return window.location.assign('index.html');
    renderTableUsers();
}

function onSortChanged(sortBy) {
    setUsersSort(sortBy);
    saveUserToLocal();
    renderTableUsers();
}
function onChagneMode(value) {
    var elTable = document.querySelector('.user-table-container');
    var elCards = document.querySelector('.user-card-container');

    if(value === 'table'){
        elTable.style = 'display: flex;';
        elCards.style = 'display: none;';
    }
    if(value === 'cards'){
        elTable.style = 'display: none;';
        elCards.style = 'display: flex;';
    }
}

function renderTableUsers() {
    var users = getUsersForDisplay();
    var strHTMLs = users.map((user) => {
        var isA = (user.isAdmin) ? 'Yes' : 'No';
        var time = (user.lastLoginTime) ? user.lastLoginTime : 0;
        return `<tr>
            <td>${user.name}</td>
            <td>${msToTime(time)}</td>
            <td>${isA}</td>
            </tr>`
    })

    var elTable = document.querySelector('.users-table');
    elTable.innerHTML = strHTMLs.join('');
    strHTMLs = users.map((user) => {
        return `<div class="card">${user.name}</div>`
    })
    var elCards = document.querySelector('.user-card-container');
    elCards.innerHTML = strHTMLs.join('');

}

