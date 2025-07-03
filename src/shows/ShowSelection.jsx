import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  setSelectedShow,
  setSelectedEpisode,
}) {
  const showLinks = shows.map((show) =>
    mapToShowLink(show, setSelectedShow, setSelectedEpisode)
  );
  return <nav className="shows">{showLinks}</nav>;
}

function mapToShowLink(show, setSelectedShow, setSelectedEpisode) {
  return (
    <a
      href="#"
      className="show"
      key={show.name}
      onClick={() => {
        setSelectedShow(show);
        setSelectedEpisode(null);
      }}
    >
      {show.name}
    </a>
  );
}
