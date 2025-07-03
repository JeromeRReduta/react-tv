import ShowDetails from "../shows/ShowDetails";

export default function Main({ show, selectedEpisode, setSelectedEpisode }) {
  return (
    <main>
      <ShowDetails
        show={show}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
    </main>
  );
}
