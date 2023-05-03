import Song from "../models/song.js";

// Song list (in memory)
const songs = [];

export const getSongList = (req, res) => {
  res.render("songList", { songs });
};

export const addSong = (req, res) => {
  const { title, artist, bpm } = req.body;
  const song = new Song(title, artist, bpm);
  songs.push(song);
  res.redirect("/songs");
};
