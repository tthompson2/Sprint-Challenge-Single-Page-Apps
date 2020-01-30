import React from "react";

import styled from 'styled-components';

const Alert = styled.div`

    ${props => (props.color === 'primary' ? `background: #ff0000;` : null)}
    ${props => (props.color === 'secondary' ? `background: #00FF00;` : null)}
    ${props => (props.color === 'success' ? `background: #0000FF;` : null)}
    ${props => (props.color === 'danger' ? `background: #ffFF00;` : null)}
    ${props => (props.color === 'warning' ? `background: #ff00FF;` : null)}
    ${props => (props.color === 'info' ? `background: #00FFFF;` : null)}
    ${props => (props.color === 'light' ? `background: #f00000;` : null)}
`;

export default function CharacterCard(props) {

  const { image, id, name, status, species, type } = props.character;

  return (
    <div>
      <Alert color="primary">
        {image}
        <br />
      </Alert>
      <Alert color="secondary">
        {id}
      </Alert>
      <Alert color="success">
        {name}
      </Alert>
      <Alert color ="warning">
        {status}
      </Alert>
      <Alert color="info">
        {species}
      </Alert>
      <Alert color="light">
        {type}
      </Alert>
      <br />
      <br />
    </div>

  );
}
