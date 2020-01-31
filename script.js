$('Document').ready(onReady);

//songs app
let songs =[];

function onReady (){
console.log('in onReady');
    $('#updateSongsButton').on('click', displaySongs);
}//end onReady

function displaySongs(){
console.log('in dsiplaySongs');
    //target an output element by ID
    let el = $('#songsOut');
    //empty out element
    el.empty();
    //loop through songs array
    for (song of songs) {
        //append each song to the dom
        el.append(`<li> ${song.title} : ${song.artist}, ${song.album} (${song.year}) </li>`);
    }
    //append each song to DOM 
}// end displaySongs

/// - test song
songs.push({
    artist: 'Red Hot Chili Peppers',
    title: 'Under the Bridge',
    album: 'Blood Sugar Sex Magik',
    year: 1991

});

