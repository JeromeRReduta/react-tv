import MockHeader from "./mocks/MockHeader";
import MockMain from "./mocks/MockMain";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { useState } from "react";
import Header from "./structure/Header";
import Main from "./structure/Main";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <Header
        tvShows={shows}
        setSelectedShow={setSelectedShow}
        setSelectedEpisode={setSelectedEpisode}
      />
      <Main
        show={selectedShow}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
    </>
  );
}
