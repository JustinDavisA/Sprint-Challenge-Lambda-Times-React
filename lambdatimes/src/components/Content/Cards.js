import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sc from 'styled-components';

import Card from './Card';

const CardsContainer = sc.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

@media (min-width: 1200px) {
  .cards-container {
    width: 1200px;
  }
}`;

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(thisCard => {
        return (
          <Card 
            card={thisCard}
          />
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired
    })
  )
};

export default Cards;