function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // Add number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album("Ed Sheeran", "Divide");
var album2 = make_album("Taylor Swift", "1989", 16);
var album3 = make_album("Imagine Dragons", "Night Visions", 12);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
