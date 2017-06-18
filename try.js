/*
 * Read: https://www.w3schools.com/jsref/jsref_join.asp
 * Read: https://www.w3schools.com/jsref/jsref_split.asp
 */

var album = {
    name: "My Album",
    img: "http://blabla.com/ererg.jpg",
    year: "1999",
    description: "erhhfgeirfherher ghrog hwejgj hejjg hewjg",
    artist: "The Band",
    songs: [
        {
            name: "Song name",
            url: "http://blabla.com/4reg4gt.mp3",
            duration: "319"
        },
        {
            name: "Song name",
            url: "http://blabla.com/4reg4gt.mp3",
            duration: "319"
        },
        {
            name: "Song name",
            url: "http://blabla.com/4reg4gt.mp3",
            duration: "319"
        },
    ]
};

let songs = album.songs;
var query = 'INSERT INTO songs (song_name, song_time, song_mp3_url, album_id) VALUES ';
var queries = [];
for ( let i = 0; i < songs.length; i++ ) {
    let song = songs[ i ];
    queries.push(`('${song.name}', '${song.duration}', '${song.url}', 941)`);
}
query = query + queries.join(', ') + ';';
console.log(query);
