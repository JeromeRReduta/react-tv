import ShowSelection from "../shows/ShowSelection";
export default function Header({ tvShows, setSelectedShow }) {
  return (
    <header>
      <div>REACT TV</div>
      <ShowSelection
        className="header-links"
        shows={tvShows}
        setSelectedShow={setSelectedShow}
      />
    </header>
  );
}
