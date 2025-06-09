import { createRoot } from "react-dom/client";
//import HomePage from "./pages/homePage";
import sample from './stories/sampleData'
import MovieDetailsPage from './pages/movieDetailsPage'
import {MovieImage} from './types/interfaces'

const movies = [sample, sample, sample, sample, sample, sample, sample];
const images: MovieImage[] = [
  { file_path: "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg"},
  { file_path: "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpgg"},
  { file_path: "/jaWM0xXSLeb1O2lpfQ9kI0WiGOu.jpg"},
  { file_path: "/b2JplRt6qfZKkupnoxl57n3r46y.jpg"},
];

const App = () => {
  return (
    <MovieDetailsPage movie={sample} images={images} />
  );
};
;

const rootElement = createRoot(document.getElementById("root")!); 
rootElement.render(<App />);
