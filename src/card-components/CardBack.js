import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

/* In this component, you will need to render the title, genres and IMDBRating.

For genres, join each genre together into string with commas separating each.

For IMDBRating, you will need to finish writing the method generateRatingElement(), which should do the following:

if the IMDBRating prop is null, return an <h4> with the contents 'No Rating Found'
otherwise, return <img src={imgMapper[prop]} alt="" /> (using the correct prop)
Just like the posters in MovieCard, we've provided image assets and an object, imgMapper, that includes the right images. The values of imgMapper can be passed directly in as the src attribute on an img element, but you must use the IMDBRating prop as the key to access these values.

 */
export default class CardBack extends Component {

  generateRatingElement = () => {
    if (this.props.IMDBRating !== null){
      return <img src={imgMapper[this.props.IMDBRating]} alt="" />
    } else {
      return <h4>No Rating Found</h4>
    }
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        {this.generateRatingElement()}
        <span />
        <h5 className="genres">{this.props.genres.join(', ')}</h5>
      </div>
    )
  }
}
