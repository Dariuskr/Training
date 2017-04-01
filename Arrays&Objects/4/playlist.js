var playList = [
    'Shape of you',
    'idfc',
    'Dirty Laundry',
    'Cars,Clothes,Calories',
    'Give a little more',
    'One more night'
];

function print(message) {
    document.write(message);
}

function printlist (list) {
    var listHTML = '<ol>';
    for(var i = 0; i<list.length; i += 1){
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>'
    print(listHTML);
}
printlist(playList);