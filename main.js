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
    if(user.userRole === 'ADMIN'){
        return true;
    } else {
        return false
    }
} 

// getEmail

function getEmail(user){
    return user.firstName.toLowerCase() + "." + user.lastName.toLowerCase() + "@codeimmersives.com";
}

// getPlayListLength

function getPlaylistLength (playlist){
    return playlist.songs.length;
}

// getHardestHoemwork

function getHardestHomework (arr) {
    let lowScore = 100;
    let Homework = "";

    for (let i = 0; i < arr.length; i++){
        const score = arr[i].averageScore
        if (score < lowScore) {
            lowScore = score; 
            Homework = arr[i].name
        }
    }
    return Homework
}

// createPhonebook

function createPhonebook (namesArr, phoneNum, phonebook = {}){
  
    for (let i = 0; i < namesArr.length; i++){
        
        let names = namesArr[i]
        let phoneNums = phoneNum[i]
        phonebook[names] = phoneNums
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