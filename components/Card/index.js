import React, { useEffect, useState } from 'react'
import Definition from '../Definition';
import { Container, Title } from './styles';
import PropTypes from 'prop-types';

const Card = ({data}) => {
  if(!data.meanings){
    return null;
  }

  const { definitions } = data.meanings[0];

  return (
    <>
      <Container className="px-3 py-4">
        <Title>
          <h6>{data.word}</h6>
        </Title>
        <div className="row justify-content-around">
          {definitions.map((def, i) => (
            <Definition key={def+i} definition={def} />
          ))}
        </div>
      </Container>
    </>
  )
}

Card.prototype = {
  data: PropTypes.object
}

Card.defaultProps = {
  data: {}
}

export default Card;
