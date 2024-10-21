import './App.css';
import Bookmarks from './bookmarks.json';
import BookMark from './BookMark';
import Grid from '@mui/joy/Grid';

/**
 * The main App component.
 */
function App() {
  const bookmarks = Bookmarks.map((bookmark) => (
    <BookMark key={bookmark.name} bookMark={bookmark} />
  ));

  return (
    <div id="root">
      <div className="heading">Steve's COOL Homelab Bookmarks</div>
      <Grid container gap={2}>
        {bookmarks}
      </Grid>
    </div>
  );
}

export default App;
