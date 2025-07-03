import MockHeader from "./mocks/MockHeader";
import MockMain from "./mocks/MockMain";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  return (
    <>
      <ShowDetails show={tvShows[0]} />
    </>
  );
}
