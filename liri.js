var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <bf1072756f9c43b2af67bbcc5330bb70>,
  secret: <aeaafbf4d96f44778b831c9548b2a413>
});
 
var spotifySearch = function (song) {
    spotify.search(
        { type: 'track', query: userInput, limit: 20 }, function (error, data) {
            if (!error) {
                for (var i = 0; i < data.tracks.items.length; i++) {
                    // Searching for artist
                    console.log("Artist: " + songData.artists[0].name);

                    // Searching for song
                    console.log("Song: " + songData.name);

                    //Searching for album 
                    console.log("Album: " + songData.album.name);

                    // Searching for preview link
                    console.log("Preview URL: " + songData.preview_url);
                    console.log("---------------------------------");

                    //  Appending to log.txt
                    fs.appendFile('log.txt', songData.artists[0].name);
                    fs.appendFile('log.txt', songData.name);
                    fs.appendFile('log.txt', songData.preview_url);
                    fs.appendFile('log.txt', songData.album.name);
                    fs.appendFile('log.txt', "---------------------------------");
                }
            } else {
                console.log('Error occurred. Please do it again!');
            }
        });
}



switch (userInput2) {
    case "spotify-this-song":
        sportify();
        break;
    default:
        console.log("{Please enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
        break;
}

