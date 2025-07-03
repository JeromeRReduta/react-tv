import ShowSelection from "../shows/ShowSelection";
export default function Header({
  tvShows,
  setSelectedShow,
  setSelectedEpisode,
}) {
  return (
    <header>
      <div>REACT TV</div>
      <ShowSelection
        className="header-links"
        shows={tvShows}
        setSelectedShow={setSelectedShow}
        setSelectedEpisode={setSelectedEpisode}
      />
    </header>
  );
}
