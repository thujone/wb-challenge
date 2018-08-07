import { Component } from 'react';
import { Carousel } from './Carousel';
import './App.css';


const carouselOptions = {
  initialIndex: 0,
  wrapAround: true,
  percentPostion: false,
  imagesLoaded: true,
  freeScroll: true,
  autoPlay: 5000,
  resize: true,
  pageDots: false,
  prevNextButtons: false
}

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header role="banner">
          <h1></h1>
        </header>
        <main role="main">
          <Carousel
            title="Are You Ready Player One?"
            options={carouselOptions}
          />
        </main>
        <footer role="contentinfo">
          <p>Warner Brothers coding challenge by <a href="mailto:rich@comfypants.org">Rich Goldman</a>.</p>
        </footer>
      </div>
    );
  }
}
