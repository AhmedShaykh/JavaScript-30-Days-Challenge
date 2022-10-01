function makeAlbum(artist, album, tracks) {

    console.log(`The Artist is ${artist}, The Album Name Is ${album} & ${tracks} is His Tracks`);
    return {
        artist,
        album,
        tracks
    }

}

console.log(makeAlbum("Hardwell", "Rebels Never Die", 14));
console.log(makeAlbum("Martin Garrix", "Sentio", 11));
console.log(makeAlbum("Steve Aoki", "6OKI", 6));