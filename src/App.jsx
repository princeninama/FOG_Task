import { useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { ArtistHeader } from "./components/ArtistHeader.jsx";
import { TrackList } from "./components/TrackList.jsx";
import { PlayerControls } from "./components/PlayControls.jsx";
import { Howl } from "howler";
import imageurl from "./assets/image copy.png";
import bgimage from "./assets/image copy 5.png";
import "./style.css";
import { Search } from "./components/Search.jsx";
import michael from "./assets/image copy 3.png"
import alb4 from "./assets/image copy 7.png";
import alb1 from "./assets/image copy 6.png";
import alb3 from "./assets/album.png"
const artist = {
  name: "Michael Jackson",
  verified: true,
  monthlyListeners: "27,852,501",
  imageurl,
};

const initialSongs = [
  {
    id: "1",
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:53",
    playCount: "1,040,811,084",
    coverUrl: michael,
  },
  {
    id: "2",
    title: "Beat It",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:18",
    playCount: "643,786,045",
    coverUrl: michael,
  },
  {
    id: "3",
    title: "Smooth Criminal - 2012 Rema...",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:17",
    playCount: "443,786,045",
    coverUrl: alb3,
  },
  {
    id: "4",
    title: "Don't Stop 'Til You Get Enough",
    artist: "Michael Jackson",
    album: "Bad 25th Anni...",
    duration: "6:05",
    playCount: "343,786,045",
    coverUrl: alb4,
  },
   { id: "5",
    title: "Rock with You - Single Version",
    artist: "Michael Jackson",
    album: "Off the Wall",
    duration: "3:40",
    playCount: "243,786,045",
    coverUrl: alb4,
  }
  // Add more songs as needed
];

export default function App() {
  const [songs, setSongs] = useState(initialSongs);
  const [currentSong, setCurrentSong] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(songs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSongs(items);
  };

  const handleSongSelect = (song) => {
    if (currentSong?.id === song.id) {
      handlePlayPause();
      return;
    }
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    // if (!sound) return;

    // if (isPlaying) {
    //   sound.pause();
    // } else {
    //   sound.play();
    // }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextSong = songs[(currentIndex + 1) % songs.length];
    handleSongSelect(nextSong);
  };

  const handlePrevious = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const previousSong = songs[(currentIndex - 1 + songs.length) % songs.length];
    handleSongSelect(previousSong);
  };


  return (
    <Layout>
      <div className="relative min-h-screen">
        <img
          src={bgimage}
          alt="Background representing music vibes"
          className="absolute inset-0 w-full h-full object-cover"
          />
          <Search/>
        <div className="relative z-10">
          <ArtistHeader artist={artist} />
          <TrackList
            songs={songs}
            onDragEnd={handleDragEnd}
            currentSong={currentSong}
            onSongSelect={handleSongSelect}
          />
          <PlayerControls
            song={currentSong}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>
    </Layout>
  );
}
