import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import './Carousel.css';

export const Carousel = function (props) {
  return (
    <div class="carousel-container">
      <h1>{props.title}</h1>
      <Flickity
        className={'carousel'}
        elementType={'div'}
        options={props.options}
        disableImagesLoaded={false}
      >
        <div class="carousel-cell">
          <img src="images/rpo-poster-1.jpg" alt="U.S. Theater Release" />
          <p class="category">Poster</p>
          <h2>U.S. Theater Release</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-character-1.jpg" alt="Parzival" />
          <p class="category">Character</p>
          <h2>Parzival</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-still-1.jpg" alt="Reaching Out" />
          <p class="category">Autographed</p>
          <h2>Reaching Out</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-character-2.jpg" alt="Art3mis" />
          <p class="category">Character</p>
          <h2>Art3mis</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-still-2.jpg" alt="At the Studio" />
          <p class="category">Still</p>
          <h2>At the Studio</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-character-3.jpg" alt="Aech" />
          <p class="category">Character</p>
          <h2>Aech</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-still-3.jpg" alt="Dirty Vans Rule!" />
          <p class="category">Still</p>
          <h2>Dirty Vans Rule!</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-character-4.jpg" alt="Sorrento 101" />
          <p class="category">Character</p>
          <h2>Sorrento 101</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-screenshot-1.png" alt="Hi Scores" />
          <p class="category">Website</p>
          <h2>Hi Scores</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-character-5.jpg" alt="Anorak" />
          <p class="category">Character</p>
          <h2>Anorak</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-still-4.jpg" alt="Virtual Media Frenzy!" />
          <p class="category">Still</p>
          <h2>Virtual Media Frenzy!</h2>
        </div>
        <div class="carousel-cell">
          <img src="images/rpo-character-6.jpg" alt="A Better Reality Awaits" />
          <p class="category">Poster</p>
          <h2>A Better Reality Awaits</h2>
        </div>
      </Flickity>
    </div>
  )
}
