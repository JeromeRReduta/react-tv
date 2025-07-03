import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({
  show,
  selectedEpisode,
  setSelectedEpisode,
}) {
  const html = !show ? (
    <div>Select a show to get started!</div>
  ) : (
    <div className="show-details">
      <EpisodeList
        className="left episode-list"
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
  return <section>{html}</section>;
}
