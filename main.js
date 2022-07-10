// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘




/*1 parameter; object 
{
    firstName: string,
    lastName: string, 
    userRole; string,
}
retruns a boolean
if statemnt to check if admin or not
*/

// IsAdmin

function isAdmin(user){
    if(user.userRole === 'Admin'){
        return true;
    } else {
        return false
    }
} 

// getEmail

function getEmail(user){
    return user.firstName.toLowerCase() + "," + user.lastName.toLowerCase() + "@codeimmersives";
}

// getPlayListLength

function getPlayListLength (playlist){
    return playlist.songs.length;;
}

// getHardestHoemwork

function getHardestHoemwork (arr){
    let lowScore = 100;
    let Homework = "";

    for (let i = 0; i < arr.length; i++){
        const score = arr[i].averageScore
        if (score < lowScore){
            lowestScore = score; 
            Homework = arr[i].name
        }
    }
    return Homework

// createPhonebook

function createPhonebook (numbs, names){
    let phonebook = {}
    for (let i = 0; i < names.length; i++){
        phonebook[names[i]] = numbs[i]
    }
}
    return phonebook;
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};