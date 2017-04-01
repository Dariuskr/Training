var playList = [
    ['Shape of you','Ed Sheeran'],
    ['idfc' , 'Black Bear'],
    ['Dirty Laundry' , 'Black Bear'],
    ['Cars,Clothes,Calories','Black Bear'],
    ['Give a little more' , 'Maroon5'],
    ['One more night' , 'Maroon5']
];

function print(message) {
    document.write(message);
}

function printSongs(songs) {
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i += 1) {
        listHTML += '<li>' + songs[i][0] +' by ' + songs[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

printSongs(playList);




















