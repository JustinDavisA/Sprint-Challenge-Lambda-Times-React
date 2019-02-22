import React from 'react';
import PropTypes from 'prop-types';
import sc from 'styled-components';

const CardClass = sc.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
}`;

const Headline = sc.div`
  font-size: 25px;
  font-family: Didot, serif;
}`;

const Author = sc.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
}`;

const ImgContainer = sc.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
}`;

const Img = sc.img`
  width: 40px;
}`;

const AuthorSpan = sc.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
}`;

const Card = props => {
  return (
    <CardClass>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <Img src={props.card.img} />
        </ImgContainer>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </Author>
    </CardClass>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired
    })
  )
};

export default Card;
