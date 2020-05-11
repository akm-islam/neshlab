import React from "react";
import { render } from "react-dom";
import Header from "./header";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import image01 from './images/01.jpg';
import image02 from './images/02.png';
import image03 from './images/03.png';
import next from './images/next.svg';


const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image:image01,
    //image: "http://neuroscience.pitt.edu/sites/default/files/feature-image/blue.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image:image02,
    //image: "https://news.yale.edu/sites/default/files/styles/featured_media/public/data-neuroscience.jpeg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image:image03,
    //image: "https://med.uc.edu/images/default-source/default-album/neuroscience.jpeg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

const App = () => (
  <div>
    <Header />
    <Slider className="slider-wrapper" infinite={true} autoplay={10} duration={5000} nextButton={next}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>

        </div>
      ))}
    </Slider>
  </div>
);

render(<App />, document.getElementById("root"));

//https://github.com/erichbehrens/react-animated-slider