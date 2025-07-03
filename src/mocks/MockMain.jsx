export default function MockMain() {
  const episodes = ["A", "B", "C", "D"].map((name) => (
    <a href="#" key={name}>
      {name}
    </a>
  ));
  const details = (
    <>
      <div className="episode-num">Episode (Number)</div>
      <div className="title">TITLE CARD</div>
      <div className="description">DESCRIBE IT HERE</div>
      <button className="watch-now">Watch now</button>
    </>
  );
  return (
    <main>
      <div className="left episode-list">
        <h1>EPISODE TITLE</h1>
        {episodes}
      </div>
      <div className="right episode-details">
        <h1>EPISODE DETAILS</h1>
        {details}
      </div>
    </main>
  );
}
