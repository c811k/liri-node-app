# LIRI Bot

## Overview
>LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


## How It Works

**Concerts**

`node liri.js concert-this <artist/band name here>`

This will show the following information about the artist's concert event to user's terminal/bash window.

* Name of the venue
* Venue location
* Date of the Event (MM/DD/YYYY)

![Image of concert-this](/images/concert-this.png)


**Movies**

`node liri.js movie-this <movie name here>`

This will show the following information about the movie to user's terminal/bash window.

* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Rotten Tomatoes Rating of the movie
* Country where the movie was produced
* Language fo the movie
* Plot of the movie
* Actors in the movie

![Image of movie-this](/images/movie-this.png)

If the user doesn't type a movie in, the program will output data for the movie "Mr. Nobody."

![Image of Mr. Nobody](/images/mr-nobody.png)


**Spotify**

`node liri.js spotify-this-song <song name here>`

This will show the following information about the song in user's terminal/bash window.

* Artist(s)
* The title of the song
* The title of the album
* A preview link of the song from Spotify

![Image of spotify-this-song](/images/spotify-this-song.png)

If the user doesn't type a song in, the program will output data for the song "The Sign" by Ace of Base.

![Image of The Sign](/images/the-sign.png)


**Do What It Says**

`node liri.js do-what-it-says`

Using the `fs` Node pacakage, LIRI will take the text insdie of random.txt and then use it to call one of LIRI's commands

It will run `spotify-this-song` for "I Want it That Way," right now.

![Image of do-what-it-says](/images/do-what-it-says.png)

Feel free to change the text in random.txt to test out the feature for `concert-this` and `movie-this`.

## Authors

Caleb Kang