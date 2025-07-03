export default function MockHeader() {
  const links = ["A", "B", "C", "D"].map((name) => (
    <a href="#" key={name}>
      {name}
    </a>
  ));
  return (
    <header>
      <div>REACT TV</div>
      <nav className="header-links">{links}</nav>
    </header>
  );
}
