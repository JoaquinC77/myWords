import React from 'react'
import { BoxDefinition, Subtitle } from './styles'
import PropTypes from 'prop-types';

const Definition = ({definition}) => {
  return (
    <BoxDefinition className="col-xs-12 col-sm-12 col-md-3 mb-3">
      <div>
        <Subtitle>
          Definición:
        </Subtitle>
        <p>{definition.definition}</p>
      </div>

      {definition.example && (
        <div>
          <Subtitle>
            Ejemplo:
          </Subtitle>
          <p>{definition.example}</p>
        </div>
      )}

      {definition.synonyms.lengh > 0 && (
        <div>
          <Subtitle>
            Sinonimos:
          </Subtitle>
          <p>{definition.synonyms[0]}</p>
        </div>
      )}

      {definition.antonyms.lengh > 0 && (
        <div>
          <Subtitle>
            Antonimos:
          </Subtitle>
          <p>{definition.antonyms[0]}</p>
        </div>
      )}
    </BoxDefinition>
  )
}

Definition.prototype = {
  definition: PropTypes.object
}

Definition.defaultProps = {
  definition: {}
}

export default Definition
