import { BrowserRouter } from 'react-router-dom';

//HOC 
import DefaultHOC from "./HOC/Default.HOC";
import TVHOC from "./HOC/TV.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Axios
import axios from "axios";

//Pages
import HomePage from "./pages/Home.page";
import Movies from "./pages/Movies.page";
import Plays from "./pages/Plays.page";
import Selection from "./pages/Selection.page";
import Categories from "./pages/Categories.page";
import TVShows from "./pages/TVShows.page";
import TVShowsid from "./pages/TVShowsid.page";
import SearchPage from "./pages/SearchPage.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Axios Default Settingsz
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
    <BrowserRouter>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" component={Movies} />
      <DefaultHOC path="/plays" component={Plays} />
      <MovieHOC path="/movie/:id/selection" component={Selection} />
      <DefaultHOC path="/categories" component={Categories} />
      <TVHOC path="/tvshow" component={TVShows} />
      <MovieHOC path="/tv/:id" component={TVShowsid} />
      <DefaultHOC path="/search" component={SearchPage} />
    </BrowserRouter>
    </>
  );
}

export default App;