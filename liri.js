require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

var spotify = new Spotify(keys.spotify);

switch(command) {
    case "concert-this":
        concertInfo(input);
        break;
    
    case "spotify-this-song":
        songInfo(input);
        break;

    case "movie-this":
        movieInfo(input);
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

function concertInfo(input) {
    axios.get ("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function(response) {
        var concert = response.data;
        
        for(var i = 0; i < concert.length; i++) {
            console.log("\nVenue: " + concert[i].venue.name);
            console.log("Location: " + concert[i].venue.city);
            console.log("Date of the Event: " + moment(concert[i].datetime).format("MM/DD/YYYY"));
        }
    }).catch(err => {
        if (err) throw err;
    });
}

function movieInfo(input) {
    if(!input) {
        input = "Mr. Nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=trilogy")
        .then(function(response) {
            var movie = response.data;
            
            console.log("\nTitle: " + movie.Title);
            console.log("Year: " + movie.Year);
            console.log("IMDB Rating: " + movie.imdbRating);
            console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
            console.log("Language: " + movie.Language);
            console.log("Plot: " + movie.Plot);
            console.log("Actors: " + movie.Actors);
    }).catch(err => {
        if (err) throw err;
    });
}

function songInfo(input) {
    if(!input) {
        input = "The Sign Ace Base";
    }
    spotify.search({type: "track", query: input}, function(err, data) {
        if(err) throw err;

        var song = data.tracks.items;
        
        console.log("\nArtist(s): " + song[0].artists[0].name);
        console.log("Song Title: " + song[0].name);
        console.log("Album Title: " + song[0].album.name);
        console.log("Preview URL: " + song[0].preview_url);
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if(err) throw err;

        var dataArr = data.split(",");
        var doInput = dataArr[1].slice(1, -1);

        switch(dataArr[0]) {
            case "spotify-this-song":
                songInfo(doInput);
                break;
            
            case "movie-this":
                movieInfo(doInput);
                break;
            
            case "concert-this":
                concertInfo(doInput);
                break;
        }
    });
}
