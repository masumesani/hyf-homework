let songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase(song) {
    song.songId = songDatabase.length +1;
    //console.log(song);
    songDatabase.push(song);
}

addSongToDatabase({
    title: 'Toranj',
    artist: 'Mohsen Namjoo'
});

addSongToDatabase({
    title: 'Night Silence Desert',
    artist: 'Mohammad Reza Shajarian'
});

addSongToDatabase({
    title: 'Remember that night in may, would you?',
    artist: 'Shahrzad Beheshtian'
});

addSongToDatabase({
    title: "On The String of the Tear's Bow",
        artist: 'Mohsen Namjoo'
});
//console.log(songDatabase);

console.log(JSON.stringify(songDatabase,null,4));
