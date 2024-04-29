import "./App.css";
import BookSlider from "./components/book-slider/BookSlider";
import Header from "./components/header/Header";
import HeadingTitle from "./components/heading-title/HeadingTintle";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";
import{books} from "./data/books"

function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <Services/>
      <HeadingTitle title="Most Gifted"/>
      <BookSlider data ={books}/>
      <HeadingTitle title="Best Seller"/>
      <BookSlider data ={books}/>
      <HeadingTitle title="Most Wished for"/>
      <BookSlider data ={books}/>
    </div>
  );
}

export default App;
