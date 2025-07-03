import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  console.log(setSelectedShow);
  const showLinks = shows.map((show) => mapToShowLink(show, setSelectedShow));
  return <nav className="shows">{showLinks}</nav>;
}

function mapToShowLink(show, setSelectedShow) {
  return (
    <a
      href="#"
      className="show"
      key={show.name}
      onClick={() => setSelectedShow(show)}
    >
      {show.name}
    </a>
  );
}
