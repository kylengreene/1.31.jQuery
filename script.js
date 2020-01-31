$('Document').ready(onReady);

//songs app
let songs =[];

function onReady (){
console.log('in onReady');
     $('#addSongButton').on('click', addSong);
}//end onReady

function addSong(){
    console.log('in addSong');
    // select inputs by their id use their data in a song object using .val() as a getter
    let newSong = {
        artist: $('#artistIn').val(),
        title: $('#titleIn').val(),
        album: $('#albumIn').val(),
        year: $('#yearIn').val()
    }//end newSong
    //empty inputs using .val( '' ) as a setter
    $('#artistIn').val( '' );
    $('#titleIn').val( '' );
    $('#albumIn').val( '' );
    $('#yearIn').val( '' );
    //push new song object into songs array
    songs.push (newSong);
    // display the songs
    displaySongs();
}
function displaySongs(){
console.log('in displaySongs');
    //target an output element by ID
    let el = $('#songsOut');
    //empty out element
    el.empty();
    //loop through songs array
    for (song of songs) {
        //append each song to the dom
        el.append(`<li> ${song.title} : ${song.artist}, <nbsp> ${song.album} (${song.year}) </li>`);
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

