'use strict';
gUsers = loadFromStorage('Users');
var gSortBy = 'Name';
var gMode = 'table';

function getUsersForDisplay(){
    switch (gSortBy) {
        case 'Name':
            sortByName();
            break;
        case 'Last login':
            sortByLastLogin();
            break;
    }
    return gUsers;
}

function setUsersSort(sortBy) {
    gSortBy = sortBy;
}

function sortByName() {
    gUsers.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    console.log(gUsers)
}

function sortByLastLogin() {
    gUsers.sort((a, b) => a.lastLoginTime - b.lastLoginTime);
}

function msToTime(s) {
    if(!s) return 0;
    var date = new Date(s);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}
