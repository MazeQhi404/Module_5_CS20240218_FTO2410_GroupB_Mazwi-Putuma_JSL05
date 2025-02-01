// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "StarLord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock"
    // Add preferences for Drax, Rocket, and Groot
};


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

    // Gamoras Playlist
    let playlistsDiv = document.getElementById('playlists');
    let gamorasPlaylistDiv = document.createElement('div'); //created a div element that will contain gamoras playlist
    gamorasPlaylistDiv.className = 'playlist'; // added a class name to the variable that will apply the styles in the stylesheet to the element
    const gamorasPlaylist= document.createElement('h2');
    gamorasPlaylist.textContent= "Gamora's Playlist";
    playlistsDiv.appendChild(gamorasPlaylistDiv); // appended gamoras playlist to the main div element
    gamorasPlaylistDiv.appendChild(gamorasPlaylist);


    const gamorasSongs = songs.filter ( preferredGenre => preferredGenre.genre == guardians.Gamora); // filtered songs object to include only the songs matching gamoras preferred genre, accessed through the condition where the genres in the songs object match the genre in the guardians object
    console.log(gamorasSongs)
    
    const gamorasSongList = document.createElement('ul'); // create a ul element that will contain the list of songs
    for ( i=0; i < gamorasSongs.length; i++) { // iterating through the new filtered array conating only the preferred genre

        const songTitleStyling = document.createElement('p');
        songTitleStyling.textContent = gamorasSongs[i].title  
        songTitleStyling.className = 'song-title';
        gamorasSongList.appendChild(songTitleStyling) // added styling to the song titles by assigning the class 'song-title' to the titles in the gamoras filtered song list, then appended them to th ul element

        const li = document.createElement('li');
        li.textContent = ` by ${gamorasSongs[i].artist}`;
        gamorasSongList.appendChild(li); // appended the list of names of the artists to the ul element
    }  

    gamorasPlaylistDiv.appendChild(gamorasSongList); // appended the ul element  with the varibale gamorasSongList to to gamoras playlist div


    // StarLords Playlist
    let starLordsPlaylistDiv = document.createElement('div');
    starLordsPlaylistDiv.className = 'playlist';
    const starLordsPlaylist= document.createElement('h2');
    starLordsPlaylist.textContent= "Star Lord's Playlist";
    playlistsDiv.appendChild(starLordsPlaylistDiv);
    starLordsPlaylistDiv.appendChild(starLordsPlaylist);


    const starLordsSongs = songs.filter ( preferredGenre => preferredGenre.genre == guardians.StarLord);
    console.log(starLordsSongs)

    
    const starLordsSongList = document.createElement('ul');
    for ( i=0; i < starLordsSongs.length; i++) {

        const songTitleStyling = document.createElement('p');
        songTitleStyling.textContent = starLordsSongs[i].title;
        songTitleStyling.className = 'song-title';
        starLordsSongList.appendChild(songTitleStyling)

        const li = document.createElement('li');
        li.textContent = ` by ${starLordsSongs[i].artist}`;
        starLordsSongList.appendChild(li);

    }

    starLordsPlaylistDiv.appendChild(starLordsSongList);

    //Drax's Playlist

    let draxPlaylistDiv = document.createElement('div');
    draxPlaylistDiv.className = 'playlist';
    const draxPlaylist= document.createElement('h2');
    draxPlaylist.textContent = " Drax's Playlist";
    playlistsDiv.appendChild(draxPlaylistDiv);
    draxPlaylistDiv.appendChild(draxPlaylist);


    const draxSongs = songs.filter ( preferredGenre => preferredGenre.genre == guardians.Drax);
    console.log(draxSongs)

    
    const draxSongList = document.createElement('ul');
    for ( i=0; i < draxSongs.length; i++) {

        const songTitleStyling = document.createElement('p');
        songTitleStyling.textContent = draxSongs[i].title;
        songTitleStyling.className = 'song-title';
        draxSongList.appendChild(songTitleStyling)

        const li = document.createElement('li');
        li.textContent = ` by ${draxSongs[i].artist}`;
        draxSongList.appendChild(li);

    }

    draxPlaylistDiv.appendChild(draxSongList); 

    //Rockets Playlist

    let rocketPlaylistDiv = document.createElement('div');
    rocketPlaylistDiv.className = 'playlist';
    const rocketPlaylist= document.createElement('h2');
    rocketPlaylist.textContent= "Rocket's Playlist";
    playlistsDiv.appendChild(rocketPlaylistDiv);
    rocketPlaylistDiv.appendChild(rocketPlaylist);


    const rocketSongs = songs.filter ( preferredGenre => preferredGenre.genre == guardians.Rocket);
    console.log(rocketSongs)

    
    const rocketSongList = document.createElement('ul');
    for ( i=0; i < rocketSongs.length; i++) {

        const songTitleStyling = document.createElement('p');
        songTitleStyling.textContent = rocketSongs[i].title;
        songTitleStyling.className = 'song-title';
        rocketSongList.appendChild(songTitleStyling)

        const li = document.createElement('li');
        li.textContent = ` by ${rocketSongs[i].artist}`;
        rocketSongList.appendChild(li);

    }

    rocketPlaylistDiv.appendChild(rocketSongList); 

    // Baby Groot's Playlist

    let grootPlaylistDiv = document.createElement('div');
    grootPlaylistDiv.className = 'playlist';
    const grootPlaylist= document.createElement('h2');
    grootPlaylist.textContent= " Baby Groot's Playlist";
    playlistsDiv.appendChild(grootPlaylistDiv);
    grootPlaylistDiv.appendChild(grootPlaylist);


    const grootSongs = songs.filter ( preferredGenre => preferredGenre.genre == guardians.Groot);
    console.log(grootSongs)

    
    const grootSongList = document.createElement('ul');
    for ( i=0; i < grootSongs.length; i++) {

        const songTitleStyling = document.createElement('p');
        songTitleStyling.textContent = grootSongs[i].title;
        songTitleStyling.className = 'song-title';
        grootSongList.appendChild(songTitleStyling)

        const li = document.createElement('li');
        li.textContent = ` by ${grootSongs[i].artist}`;
        grootSongList.appendChild(li);

    }

    grootPlaylistDiv.appendChild(grootSongList); 


}
    



// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


